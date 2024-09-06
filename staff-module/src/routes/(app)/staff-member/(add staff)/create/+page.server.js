import { addStaffFormSchema } from '$lib/schemas/add-staff-member'
import { supabase } from '$lib/supabaseClient'
import { redirect } from '@sveltejs/kit'
import { fail, superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'

export const load = async ({ cookies }) => {
    cookies.set(
        'formCompletion',
        JSON.stringify({ step1: false, step2: false, step3: false }),
        {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24, // Set cookie expiration (1 day in this case)
        }
    )
    
    const step1Data = cookies.get('step1Data')
    const form = step1Data
        ? await superValidate(JSON.parse(step1Data), zod(addStaffFormSchema))
        : await superValidate(zod(addStaffFormSchema))
    // const form = await superValidate(zod(addStaffFormSchema))

    return { form }
}

export const actions = {
    default: async ({ cookies, request }) => {
        const form = await superValidate(request, zod(addStaffFormSchema))

        // console.log('Form:', form)

        if (!form.valid) {
            console.log('Form is not valid', form.errors)
            return fail(400, {
                form,
            })
        }

        const { data, error } = await supabase
            .from('staff')
            .insert([form.data])
            .select()

        if (error) {
            console.log('Supabase Error:', error)
            return fail(400, { error: error.message })
        }
        const insertedId = data[0].id

        cookies.set('step1Data', JSON.stringify(form.data), {
            path: '/',
            httpOnly: true,
        })
        cookies.set(
            'formCompletion',
            JSON.stringify({ step1: true, step2: false, step3: false }),
            {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 60 * 60 * 24, // Set cookie expiration (1 day in this case)
            }
        )

        throw redirect(303, `/staff-member/upload?staffId=${insertedId}`)
    },
}
