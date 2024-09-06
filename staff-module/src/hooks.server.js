import { parse } from 'cookie'
export async function handle({ event, resolve }) {
    const { locals, request } = event

    // Parse cookies to get the formCompletion state
    const cookies = parse(request.headers.get('cookie') || '')
    
    locals.formCompletion = cookies.formCompletion
        ? JSON.parse(cookies.formCompletion)
        : { step1: false, step2: false, step3: false }

    const { route } = event
    console.log(route)

    // console.log(locals.formCompletion)
    if (
        route.id === '/(app)/staff-member/(add staff)/upload' &&
        !locals.formCompletion.step1
    ) {
        return new Response(null, {
            status: 302,
            headers: { location: '/staff-member/create' },
        })
    }

    if (
        route.id === '/(app)/staff-member/(add staff)/assign-role' &&
        !locals.formCompletion.step2
    ) {
        return new Response(null, {
            status: 302,
            headers: { location: '/staff-member/upload' },
        })
    }

    if (
        route.id === '//(app)/staff-member/(add staff)/code' &&
        !locals.formCompletion.step3
    ) {
        return new Response(null, {
            status: 302,
            headers: { location: '/staff-member/assign-role' },
        })
    }

    return await resolve(event)
}
