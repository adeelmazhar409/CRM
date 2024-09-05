import { supabase } from '$lib/supabaseClient'
import { redirect } from '@sveltejs/kit'
import { fail, message, superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import { AddStaffCodeSchema } from '$lib/schemas/add-staff-member'

export const load = async ({ url }) => {
    const staffId = url.searchParams.get('staffId')

    let { data: staff, error } = await supabase
        .from('staff')
        .select('*')
        .eq('id', staffId)
        .single()
    // console.log(staff, staffId)

    const form = await superValidate(zod(AddStaffCodeSchema))

    return { staff, form }
}

export const actions = {
    default: async ({ request, url }) => {
        const form = await superValidate(request, zod(AddStaffCodeSchema))
        const staffId = url.searchParams.get('staffId')

        // console.log('Form:', form)

        if (!form.valid) {
            console.log('Form is not valid', form.errors)
            return fail(400, {
                form,
            })
        }

        const { data, error } = await supabase
            .from('staff')
            .update({ code: form.data.code }) // assuming form.data.role contains the role value
            .eq('id', staffId)

        if (error) {
            console.log('Supabase Error:', error)
            return fail(400, { error: error.message })
        }


        throw redirect(303, `/staff-member`)
    },
}
