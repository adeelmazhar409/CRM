// @ts-nocheck
import { editStaffFormSchema } from '$lib/schemas/update-staff-member'
import { supabase } from '$lib/supabaseClient'
import { redirect } from '@sveltejs/kit'
import { fail, superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'

export const load = async ({ params }) => {
    // console.log(params.id)
    const { data: staffMember, error } = await supabase
        .from('staff')
        .select()
        .eq('id', params.id)
        .single()

    const form = await superValidate(staffMember, zod(editStaffFormSchema))

    // Always return { form } in load functions
    return { form }
}

export const actions = {
    default: async ({ request, params }) => {
        // Log the incoming request to see the full request object
        // console.log('Request:', request)
        // let id = params.id
        const form = await superValidate(request, zod(editStaffFormSchema))

        // Log the form object to see what superValidate returns
        console.log('Form:', form)

        if (!form.valid) {
            console.log('Form is not valid', form.errors)
            return fail(400, {
                form,
            })
        }

        // @ts-ignore
        let { id, ...updatedetail } = form.data
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
