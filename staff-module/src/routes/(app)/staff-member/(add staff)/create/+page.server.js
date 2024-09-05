// @ts-nocheck
import { addStaffFormSchema } from '$lib/schemas/add-staff-member'
import { supabase } from '$lib/supabaseClient'
import { redirect } from '@sveltejs/kit'
import { fail, superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'

export const load = async () => {
    const form = await superValidate(zod(addStaffFormSchema))

    return { form }
}

export const actions = {
    default: async ({ request }) => {

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
        // console.log('Inserted Data:', data)

        throw redirect(303, `/staff-member/upload?staffId=${insertedId}`)
    },
}
