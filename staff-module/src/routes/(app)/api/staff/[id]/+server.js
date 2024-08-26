import { supabase } from '$lib/supabaseClient'
import { json } from '@sveltejs/kit'

export async function DELETE({ params }) {
    const { data, error } = await supabase
        .from('staff')
        .delete()
        .eq('id', params.id)

    console.log(
        'staff member delete '
    )

    if (error) {
        return json({ error: error.message }, { status: 500 })
    }

    return json({ success: true, data })
}
