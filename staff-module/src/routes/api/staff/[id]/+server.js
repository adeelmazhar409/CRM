import { supabase } from '$lib/supabaseClient'
import { json } from '@sveltejs/kit'

export async function DELETE({ params }) {
    const staffId = params.id

    const { data: staffData, error: staffError } = await supabase
        .from('staff')
        .select('image_url')
        .eq('id', staffId)
        .single()

    if (staffError || !staffData) {
        return json(
            { error: 'Staff member not found or unable to retrieve image URL' },
            { status: 500 }
        )
    }

    const imageUrl = staffData.image_url
    if (imageUrl) {
        const filePath = imageUrl.split('/staff-images/')[1]

        if (!filePath) {
            return json(
                { error: 'Unable to extract file path from image URL' },
                { status: 500 }
            )
        }

        const { data: deleteImageData, error: deleteImageError } =
            await supabase.storage.from('staff-images').remove([filePath])

        if (deleteImageError) {
            return json(
                { error: 'Failed to delete image from storage' },
                { status: 500 }
            )
        }
    }

    const { data: deleteStaffData, error: deleteStaffError } = await supabase
        .from('staff')
        .delete()
        .eq('id', staffId)

    if (deleteStaffError) {
        return json({ error: 'Failed to delete staff record' }, { status: 500 })
    }

    console.log('Staff member and image deleted successfully')
    return json({ success: true, data: deleteStaffData })
}
