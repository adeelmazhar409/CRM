import { supabase } from '$lib/supabaseClient'
import { error as svelteError } from '@sveltejs/kit'

export async function load() {

    let { data: staffMember, error } = await supabase.from('staff').select('*')
    
    if (error) {
        throw svelteError(404, 'Staff member not found')
    }

    return { staffMember }
}

