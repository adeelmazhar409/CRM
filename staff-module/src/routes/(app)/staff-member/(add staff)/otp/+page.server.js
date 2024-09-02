import { supabase } from '$lib/supabaseClient'
import { redirect } from '@sveltejs/kit'
import { fail, message, superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'

export const load = async ({ url }) => {
    const staffId = url.searchParams.get('staffId')

    let { data: staff, error } = await supabase
        .from('staff')
        .select('*')
        .eq('id', staffId)
        .single()
    const { email } = staff
    console.log(staff.email, staffId)

    // const form = await superValidate(zod(RadioButtonSchema))

    return { email }
}
