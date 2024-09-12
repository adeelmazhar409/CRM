// @ts-nocheck
import { AddStaffCodeSchema } from '$lib/schemas/update-staff-member'
import { supabase } from '$lib/supabaseClient'
import { redirect } from '@sveltejs/kit'
import { fail, superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'

export const load = async ({ params }) => {
let Id = params.id;
    const { data: staff, error } = await supabase
        .from('staff')
        .select()
        .eq('id', Id)
        .single()

    const form = await superValidate(staff, zod(AddStaffCodeSchema))

    return { form, staff }
}

export const actions = {
    default: async ({ request, params }) => {
        const form = await superValidate(request, zod(AddStaffCodeSchema))

        console.log('Form:', form)

        if (!form.valid) {
            console.log('Form is not valid', form.errors)
            return fail(400, {
                form,
            })
        }

        // @ts-ignore
        let {...updatedetail } = form.data
        const { data, error } = await supabase
            .from('staff')
            .update({ ...updatedetail })
            .eq('id', params.id)
            .select()

        if (error) {
            console.log('Supabase Error:', error)
            return fail(400, { error: error.message })
        }

        console.log('Inserted Data:', data) // Log the data returned from Supabase

        throw redirect(303, '/staff-member')
    },
}
