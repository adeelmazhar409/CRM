<script>
    import { superForm } from 'sveltekit-superforms/client'
    import { goto } from '$app/navigation'
    import { zod } from 'sveltekit-superforms/adapters'
    import ProgressBar from '$lib/UI/bar.svelte'
    import { progress } from '$lib/store/progress'
    import { AddStaffCodeSchema } from '$lib/schemas/code'
    import { writable } from 'svelte/store'

    export let data
    let width = 90

    const code = writable(['', '', '', ''])

    const { form, errors } = superForm(data.form, {
        validators: zod(AddStaffCodeSchema),
        onSubmit: () => {
            if ($form.code) progress.update((n) => Math.min(n + 20, 100))
            console.log('Form submission result:', form)
        },
    })
    const generateCode = () => {
        const newCode = Array(4)
            .fill(0)
            .map(() => Math.floor(Math.random() * 10).toString())
        code.set(newCode)
        console.log(newCode.join(''))
        $form.code = newCode.join('')
    }
    let email = data.staff.email

    const sendEmail = async () => {
        const generatedCode = $code.join('')
        if (!generatedCode) {
            console.error('Code is not generated yet.')
            return
        }

        try {
            const response = await fetch('/api/send-code-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    code: generatedCode,
                    staffName: data.staff.firstname,
                }),
            })

            if (response.ok) {
                console.log('Email sent successfully.')
            } else {
                console.error('Failed to send email.')
            }
        } catch (error) {
            console.error('Error sending email:', error)
        }
    }

    $: {
        if ($form.code) progress.update((n) => Math.min(n + 5, 40))
    }
</script>

<form method="POST">
    <div class="flex flex-col items-center w-full">
        <!-- top for desktop -->
        <div
            class="font-sans hidden sm:grid grid-cols-4 md:grid-cols-3 items-center w-full border-b"
        >
            <button type="button" on:click={() => goto('/staff-member')}>
                <img
                    src="/icons/cross.svg"
                    alt="Close"
                    class="mx-3 my-5 md:w-8 md:h-8"
                />
            </button>

            <h2
                class=" mx-auto font-semibold md:text-2xl text-lg col-span-2 md:col-span-1"
            >
                Add Staff Member
            </h2>
            <div class="hidden md:flex justify-end">
                <button
                    type="submit"
                    class="bg-purple-600 text-white w-16 p-2 rounded-lg mx-5 my-4"
                >
                    Save
                </button>
            </div>
        </div>
        <!-- top for mobile -->
        <div class="flex flex-col sm:hidden w-full py-1 border-b-2 mb-6">
            <div class="font-sans grid grid-cols-4 md:grid-cols-3 items-center">
                <button type="button" on:click={() => goto('/staff-member')}>
                    <img
                        src="/icons/cross.svg"
                        alt="Close"
                        class="m-1 w-10 h-10"
                    />
                </button>

                <h2
                    class=" mx-auto font-semibold md:text-2xl text-lg col-span-2 md:col-span-1"
                >
                    Add Staff Member
                </h2>
                <div class="hidden md:flex justify-end">
                    <button
                        type="submit"
                        class="bg-purple-600 text-white w-16 p-2 rounded-lg mx-5"
                    >
                        Save
                    </button>
                </div>
            </div>
            <div class="mx-4">
                <ProgressBar />
            </div>
        </div>

        <div class="px-4 my-2 w-full sm:w-1/2 lg:w-2/5">
            <div class="hidden sm:block md:mt-3 xl:mt-6 py-4">
                <ProgressBar />
            </div>

            <h1 class="text-lg md:text-xl my-2 font-semibold">Generate Code</h1>
            <p class=" font-normal text-base leading-7 text-gray-600 my-2">
                This code will be used by {data.staff.firstname} to sign in to POS.
            </p>
            <input type="hidden" name="code" bind:value={$form.code} />
            <div class=" gap-2 grid md:my-9 my-6">
                <label
                    for=""
                    class=" font-semibold md:text-base text-sm text-gray-800"
                    >{data.staff.firstname}'s Sign in Code</label
                >
                <div class="flex items-center w-full">
                    <input
                        type="text"
                        class="w-12 sm:w-14 h-12 border bg-slate-50 border-gray-300 font-semibold text-xl sm:text-[30px] text-center text-text-light rounded-s-lg"
                        maxlength="1"
                        placeholder="_"
                        bind:value={$code[0]}
                        readonly
                    />
                    <input
                        type="text"
                        class="w-12 sm:w-14 h-12 border bg-slate-50 border-gray-300 font-semibold text-xl sm:text-[30px] text-text-light text-center"
                        maxlength="1"
                        placeholder="_"
                        bind:value={$code[1]}
                        readonly
                    />
                    <input
                        type="text"
                        class="w-12 sm:w-14 h-12 border bg-slate-50 border-gray-300 font-semibold text-xl sm:text-[30px] text-text-light text-center"
                        maxlength="1"
                        placeholder="_"
                        bind:value={$code[2]}
                        readonly
                    />
                    <input
                        type="text"
                        class="w-12 sm:w-14 h-12 border bg-slate-50 border-gray-300 font-semibold text-xl sm:text-[30px] text-text-light text-center"
                        maxlength="1"
                        placeholder="_"
                        bind:value={$code[3]}
                        readonly
                    />
                    <button
                        type="button"
                        class="h-12 sm:px-11 sm:w-auto w-full bg-white text-gray-700 border rounded-e-lg border-gray-300 text-base font-semibold hover:bg-gray-200"
                        on:click={generateCode}>Generate</button
                    >
                </div>
            </div>

            <div class="mt-6">
                <label class="inline-flex items-center justify-center">
                    <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-blue-600 rounded-md"
                        on:change={sendEmail}
                    />

                    <span
                        class="mx-2 text-gray-700 font-semibold text-base sm:text-lg"
                        >Send passcode via email to {data.staff
                            .firstname}.</span
                    >
                </label>
                <p
                    class="text-gray-500 sm:my-1 mx-7 font-normal text-base sm:text-lg"
                >
                    ({data.staff.email})
                </p>
            </div>
        </div>
        <div class=" fixed bottom-0 flex w-full md:hidden border-t">
            <button
                type="submit"
                class="bg-purple-600 text-white w-full p-2 rounded-lg mx-5 my-4"
            >
                Save
            </button>
        </div>
    </div>
</form>
