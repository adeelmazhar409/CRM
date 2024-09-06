import { ImageUploadSchema } from '$lib/schemas/add-staff-member'
import { supabase } from '$lib/supabaseClient'
import { redirect } from '@sveltejs/kit'
import { fail, superValidate, withFiles } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import { v4 as uuidv4 } from 'uuid'

export const load = async ({ cookies }) => {
    const step2Data = cookies.get('step2Data')
    const form = step2Data
        ? await superValidate(JSON.parse(step2Data), zod(ImageUploadSchema))
        : await superValidate(zod(ImageUploadSchema))
        

    return { form }
}

export const actions = {
    default: async ({ cookies, request, url }) => {
        const formData = await request.formData()
        const form = await superValidate(formData, zod(ImageUploadSchema))

        if (!form.valid) {
            console.log('Form validation failed')
            return fail(400, withFiles({ form }))
        }
        const staffId = url.searchParams.get('staffId')

        const image = formData.get('image')
        if (image instanceof File) {
            const imageName = `${staffId}/${uuidv4()}-${image.name}`

            // console.log(`Starting upload for image: ${imageName}`)

            const { data: uploadData, error: uploadError } =
                await supabase.storage
                    .from('staff-images')
                    .upload(imageName, image)

            if (uploadError) {
                console.error('Image upload failed:', uploadError.message)
                return fail(500, { error: 'Image upload failed' })
            }

            // console.log('Image uploaded successfully:', imageName)

            const { data } = supabase.storage
                .from('staff-images')
                .getPublicUrl(imageName)

            const publicURL = data.publicUrl

            const { data: updateData, error: updateError } = await supabase
                .from('staff')
                .update({ image_url: publicURL })
                .eq('id', staffId)

            if (updateError) {
                return fail(500, {
                    error: 'Failed to update staff record with image URL',
                })
            }

            cookies.set('step2Data', JSON.stringify({ imageUrl: publicURL }), {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 60 * 60 * 24,
            })
            cookies.set(
                'formCompletion',
                JSON.stringify({ step1: true, step2: true, step3: false }),
                {
                    path: '/',
                    httpOnly: true,
                    sameSite: 'strict',
                    maxAge: 60 * 60 * 24,
                }
            )

            throw redirect(303, `/staff-member/assign-role?staffId=${staffId}`)
        }

        // console.log('No image file provided')
        // throw redirect(303, `/staff-member/assign-role?staffId=${staffId}`)
    },
}
