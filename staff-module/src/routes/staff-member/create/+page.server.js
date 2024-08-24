
import { addStaffFormSchema } from '$lib/schemas/add-staff-member'
import { supabase } from '$lib/supabaseClient'
import { fail, superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'

export const load = async () => {
    const form = await superValidate(zod(addStaffFormSchema))

    // Always return { form } in load functions
    return { form }
}

export const actions = {
    default: async ({ request }) => {
        // Log the incoming request to see the full request object
        // console.log('Request:', request)

        const form = await superValidate(request, zod(addStaffFormSchema))

        // Log the form object to see what superValidate returns
        console.log('Form:', form)

        if (!form.valid) {
            console.log('Form is not valid', form.errors)
            return fail(400, {
                form,
            })
        }

        let { firstname, lastname, mobile, email } = form.data
        console.log('Staff Data:', {firstname, lastname, mobile, email}) // Log the parsed form data

        const { data, error } = await supabase
            .from('staff')
            .insert([{ firstname, lastname, mobile, email }])
            .select()

        if (error) {
            console.log('Supabase Error:', error)
            return fail(400, { error: error.message })
        }

        console.log('Inserted Data:', data) // Log the data returned from Supabase

        return { success: true }
    },
}

