// @ts-nocheck
// src/routes/staff/[id]/+page.server.js
// import { supabase } from '$lib/supabaseClient'
// import { fail } from '@sveltejs/kit'
// import { editStaffFormSchema } from '$lib/schemas/editStaffFormSchema'

// export async function load({ params }) {
//     const { id } = params

//     const { data: staffMember, error } = await supabase
//         .from('staff')
//         .select('*')
//         .eq('id', id)
//         .single()

//     if (error) {
//         throw error(404, 'Staff member not found')
//     }

//     return { staffMember }
// }

// export const actions = {
//     update: async ({ request, params }) => {
//         const { id } = params
//         const formData = await request.formData()
//         const updatedData = Object.fromEntries(formData)

//         // Validate the data against the schema
//         const result = editStaffFormSchema.safeParse(updatedData)

//         if (!result.success) {
//             return fail(400, {
//                 error: 'Validation error',
//                 errors: result.error.flatten(),
//                 values: updatedData,
//             })
//         }

//         const { error } = await supabase
//             .from('staff')
//             .update(result.data)
//             .eq('id', id)

//         if (error) {
//             return fail(400, { error: error.message })
//         }

//         return { success: true }
//     },
// }
