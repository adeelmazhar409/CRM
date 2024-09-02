<script>
    import { superForm, fileProxy } from 'sveltekit-superforms/client'
    import { goto } from '$app/navigation'
    import { zod } from 'sveltekit-superforms/adapters'
    import ProgressBar from '$lib/UI/bar.svelte'
    import ImageUpload from '$lib/component/main/image.svelte'

    // export let data
    let width = 90
    // let loading = false
    // const { form, errors } = superForm(data.form, {
    //     validators: zod(ImageUploadSchema),
    //     onResult: () => {
    //         width += 20
    //         console.log('Form submission result:', form)
    //     },
    //     onError: ({ result }) => {
    //         console.log('Form submission error:', result)
    //     },
    // })

</script>

<form method="POST" enctype="multipart/form-data">
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
                class=" mx-auto font-semibold md:text-2xl text-lg leading-8 col-span-2 md:col-span-1"
            >
                Add Staff Member
            </h2>
            <div class="hidden md:flex justify-end">
                <button
                    type="submit"
                    class="bg-purple-600 text-white w-16 p-2 rounded-lg mx-5 my-4"
                >
                    Next
                </button>
            </div>
        </div>
        <!-- top for mobile -->
        <div class="flex flex-col sm:hidden w-full py-1 border-b-2">
            <div class="font-sans grid grid-cols-4 md:grid-cols-3 items-center">
                <button type="button" on:click={() => goto('/staff-member')}>
                    <img
                        src="/icons/cross.svg"
                        alt="Close"
                        class="m-1 w-10 h-10"
                    />
                </button>

                <h2
                    class=" mx-auto font-semibold md:text-2xl text-lg leading-8 col-span-2 md:col-span-1"
                >
                    Add Staff Member
                </h2>
                <div class="hidden md:flex justify-end">
                    <button
                        type="submit"
                        class="bg-purple-600 text-white w-16 p-2 rounded-lg mx-5"
                    >
                        Next
                    </button>
                </div>
            </div>
            <div class="mx-4">
                <ProgressBar bind:width />
            </div>
        </div>

        <div class="px-4 my-2 w-full sm:w-1/2 lg:w-2/5">
            <div class="hidden sm:block md:mt-3 xl:mt-6 py-4">
                <ProgressBar bind:width />
            </div>

            <h1 class="text-xl leading-8 font-semibold">Generate Code</h1>
            <p class=" font-normal text-base leading-7 text-gray-600 my-2">
                This code will be used by Alfonso to sign in to POS.
            </p>

            <div class=" my-9">
                <label
                    for=""
                    class=" font-semibold text-base leading-8 text-gray-800"
                    >Gustons' Sign in Code</label
                >
                <div class="flex items-center">
                    <input
                        type="text"
                        class="w-16 h-14 border bg-slate-50 border-gray-300 text-center rounded-s-lg"
                        maxlength="1"
                        placeholder="__"
                    />

                    <input
                        type="text"
                        class="w-16 h-14 border bg-slate-50 border-gray-300 text-center"
                        maxlength="1"
                        placeholder="__"
                    />
                    <input
                        type="text"
                        class="w-16 h-14 border bg-slate-50 border-gray-300 text-center"
                        maxlength="1"
                        placeholder="__"
                    />
                    <input
                        type="text"
                        class="w-16 h-14 border bg-slate-50 border-gray-300 text-center"
                        maxlength="1"
                        placeholder="__"
                    />

                    <button
                        class=" h-14 px-11 rounded-e-lg bg-white text-gray-700 border border-gray-300 text-base font-semibold hover:bg-gray-200"
                        >Generate</button
                    >
                </div>
            </div>

            <div class="mt-6">
                <label class="inline-flex items-center justify-center">
                    <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-blue-600 rounded-md"
                    />

                    <span class="mx-2 text-gray-700 font-semibold text-lg"
                        >Send passcode via email to Alfonso.</span
                    >
                </label>
                <p class="text-gray-500 my-1 mx-7 font-normal text-lg">
                    (Alfonso.Cassano@gmail.com)
                </p>
            </div>
        </div>
        <div class=" fixed bottom-0 flex w-full md:hidden border-t">
            <button
                type="submit"
                class="bg-purple-600 text-white w-full p-2 rounded-lg mx-5 my-4"
            >
                Next
            </button>
        </div>
    </div>
</form>
