import { ImageUploadSchema } from '$lib/schemas/add-staff-member'
import { supabase } from '$lib/supabaseClient'
import { redirect } from '@sveltejs/kit'
import { fail, superValidate, withFiles } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import { v4 as uuidv4 } from 'uuid' // Import UUID for unique image names

export const load = async () => {
    const form = await superValidate(zod(ImageUploadSchema))

    return { form }
}

export const actions = {
    default: async ({ request, url }) => {
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

            const publicURL = data.publicUrl // Accessing the correct property

            const { data: updateData, error: updateError } = await supabase
                .from('staff')
                .update({ image_url: publicURL })
                .eq('id', staffId)

            if (updateError) {
                return fail(500, {
                    error: 'Failed to update staff record with image URL',
                })
            }

            // console.log('Staff record updated with image URL:', publicURL)

            throw redirect(303, `/staff-member/assign-role?staffId=${staffId}`)
        }

        console.log('No image file provided')
        throw redirect(303, `/staff-member/assign-role?staffId=${staffId}`)
    },
}