import { supabase } from '$lib/supabaseClient'
import { redirect } from '@sveltejs/kit'
import { fail, message, superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import { AddStaffCodeSchema } from '$lib/schemas/add-staff-member'

export const load = async ({ url, locals, cookies }) => {
    if (!locals.formCompletion.step1) {
        throw redirect(302, '/staff-member/create')
    } else if (!locals.formCompletion.step2) {
        throw redirect(302, '/staff-member/upload')
    } else if (!locals.formCompletion.step3) {
        throw redirect(302, '/staff-member/assign-role')
    }

    const step4Data = cookies.get('step1Data')
    const form = step4Data
        ? await superValidate(JSON.parse(step4Data), zod(AddStaffCodeSchema))
        : await superValidate(zod(AddStaffCodeSchema))
    const staffId = url.searchParams.get('staffId')

    let { data: staff, error } = await supabase
        .from('staff')
        .select('*')
        .eq('id', staffId)
        .single()
    // console.log(staff, staffId)

    return { staff, staffId, form }
}

export const actions = {
    default: async ({ request, url, cookies }) => {
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

        cookies.set('step1Data', '', {
            path: '/',
            expires: new Date(0),
        })
        cookies.set('step2Data', '', {
            path: '/',
            expires: new Date(0),
        })
        cookies.set('step3Data', '', {
            path: '/',
            expires: new Date(0),
        })
        cookies.set('step4Data', '', {
            path: '/',
            expires: new Date(0),
        })

        cookies.set(
            'formCompletion',
            JSON.stringify({ step1: false, step2: false, step3: false }),
            {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 60 * 60 * 24, // Set cookie expiration (1 day in this case)
            }
        )

        throw redirect(303, `/staff-member`)
    },
}
