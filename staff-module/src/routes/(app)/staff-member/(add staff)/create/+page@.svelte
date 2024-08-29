<script>
    // @ts-nocheck
    import { superForm, fileProxy } from 'sveltekit-superforms/client'
    import { addStaffFormSchema } from '$lib/schemas/add-staff-member'
    import { goto } from '$app/navigation'
    import { zod } from 'sveltekit-superforms/adapters'
    import ProgressBar from '$lib/UI/bar.svelte'
    import ImageUpload from '$lib/component/main/image.svelte'

    export let data
    let width = 20
    let loading = false
    const { form, errors } = superForm(data.form, {
        validators: zod(addStaffFormSchema),
        onSubmit: () => {
            width += 20
            loading = true
        },
        // onResult: () => {
        // 	loading = false;
        // },
        onError: ({ result }) => {
            console.log(result)
            loading = false
        },
    })

    let isEditable = true
    $: if (isEditable) {
        $form.nickname = $form.firstname.toLowerCase()
    }

    function handleEdit() {
        isEditable = false
    }
</script>

<form method="POST">
    <div class="flex flex-col items-center w-full">
        <!-- top for desktop -->
        <div
            class="font-sans hidden sm:grid grid-cols-4 md:grid-cols-3 items-center w-full border-b"
        >
            <button 
            type="button" 
            on:click={() => goto('/staff-member')}
            >
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
            <div class="grid py-4 gap-2">
                <div
                    class="font-bold text-text-light md:text-2xl text-lg leading-8"
                >
                    Profile
                </div>
                <div
                    class="text-text-light font-normal md:text-lg text-base leading-7"
                >
                    You can only update the owner's nickname, email address, and
                    mobile number.
                </div>
            </div>

            <div class="flex flex-col md:grid md:grid-cols-2 gap-2 sm:gap-4">
                <div class="w-full relative">
                    <label
                        for="firstname"
                        class="font-semibold md:text-base text-sm leading-6 text-text-light"
                    >
                        First Name
                    </label>
                    <div class="relative md:mx-0">
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            aria-invalid={$errors.firstname ? 'true' : 'false'}
                            aria-describedby="name-error"
                            class="w-full p-2 border-2 rounded-lg my-2 bg-slate-50 text-slate-600 focus:ring-1 focus:ring-black {$errors.firstname
                                ? 'border-red-500 focus:outline-none'
                                : 'border focus:ring-1 focus:ring-black'}"
                            bind:value={$form.firstname}
                        />
                        {#if $errors.firstname}
                            <span
                                id="name-error"
                                class="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-15h2v6h-2V7zm0 8h2v2h-2v-2z"
                                    ></path>
                                </svg>
                            </span>
                        {/if}
                    </div>
                    {#if $errors.firstname}
                        <div
                            class="text-red-600 font-sans font-normal text-base leading-6"
                        >
                            {$errors.firstname}
                        </div>
                    {/if}
                </div>

                <div class="w-full relative">
                    <label
                        for="lastname"
                        class="font-semibold md:text-base text-sm leading-6 text-text-light"
                    >
                        Last Name
                    </label>
                    <div class="relative md:mx-0">
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            class="w-full p-2 border-2 rounded-lg my-2 bg-slate-50 text-slate-600 focus:ring-1 focus:ring-black {$errors.lastname
                                ? 'border-red-500 focus:outline-none'
                                : 'border focus:ring-1 focus:ring-black'}"
                            bind:value={$form.lastname}
                        />
                        {#if $errors.lastname}
                            <span
                                id="name-error"
                                class="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-15h2v6h-2V7zm0 8h2v2h-2v-2z"
                                    ></path>
                                </svg>
                            </span>
                        {/if}
                    </div>
                    {#if $errors.lastname}
                        <div
                            class="text-red-600 font-sans font-normal text-base leading-6"
                        >
                            {$errors.lastname}
                        </div>
                    {/if}
                </div>
            </div>
            <div class="my-5">
                <label
                    for="nickname"
                    class="font-semibold md:text-base text-sm leading-6 text-text-light"
                >
                    Nick Name (Display Name)
                </label>
                <div class="flex items-center md:mx-0">
                    <input
                        class="w-full p-2 border-2 rounded-s-lg my-2 bg-slate-50 text-slate-600"
                        type="text"
                        id="nickname"
                        name="nickname"
                        bind:value={$form.nickname}
                        readonly={isEditable}
                    />
                    <button
                        class="bg-gray-50 text-gray-700 border-2 p-2 my-2 rounded-e-lg focus:ring-1 focus:ring-black"
                        on:click={handleEdit}
                        type="button"
                    >
                        Edit
                    </button>
                </div>
                <p class="text-gray-500 mt-1 font-normal">
                    If not set, the default is the first name in lowercase.
                </p>
            </div>

            <div class="relative">
                <label
                    for="email"
                    class="font-semibold md:text-base text-sm leading-6 text-text-light"
                >
                    Email Address
                </label>
                <div class="relative md:mx-0">
                    <input
                        class="w-full p-2 border-2 rounded-lg my-2 bg-slate-50 text-slate-600 focus:ring-1 focus:ring-black {$errors.email
                            ? 'border-red-500 focus:outline-none'
                            : 'border focus:ring-1 focus:ring-black'}"
                        type="email"
                        id="email"
                        name="email"
                        bind:value={$form.email}
                    />
                    {#if $errors.email}
                        <span
                            id="name-error"
                            class="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path
                                    d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-15h2v6h-2V7zm0 8h2v2h-2v-2z"
                                ></path>
                            </svg>
                        </span>
                    {/if}
                </div>
                {#if $errors.email}
                    <div
                        class="text-red-600 font-sans font-normal text-base leading-6"
                    >
                        {$errors.email}
                    </div>
                {/if}
            </div>

            <div class="my-7 relative">
                <label
                    for="mobile"
                    class="font-semibold md:text-base text-sm leading-6 text-text-light"
                >
                    Mobile Number (Optional)
                </label>
                <div class="relative md:mx-0">
                    <input
                        class="w-full p-2 border-2 rounded-lg my-2 bg-slate-50 text-slate-600 focus:ring-1 focus:ring-black {$errors.mobile
                            ? 'border-red-500 focus:outline-none'
                            : 'border focus:ring-1 focus:ring-black'}"
                        type="text"
                        id="mobile"
                        name="mobile"
                        bind:value={$form.mobile}
                    />
                    {#if $errors.mobile}
                        <span
                            id="name-error"
                            class="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path
                                    d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-15h2v6h-2V7zm0 8h2v2h-2v-2z"
                                ></path>
                            </svg>
                        </span>
                    {/if}
                </div>
                {#if $errors.mobile}
                    <div
                        class="text-red-600 font-sans font-normal text-base leading-6"
                    >
                        {$errors.mobile}
                    </div>
                {/if}
            </div>
        </div>
        <!-- button for mobile -->
        <div class=" flex w-full md:hidden border-t">
            <button
                type="submit"
                class="bg-purple-600 text-white w-full p-2 rounded-lg mx-5 my-4"
            >
                Next
            </button>
        </div>
    </div>
</form>

<style>
    /* General styles for all inputs to reset browser defaults */
    input {
        background-color: #f8fafc; /* Set the initial background color (bg-slate-50) */
        color: #374151; /* Set text color (text-slate-600) */
    }

    /* Autofill styles for WebKit-based browsers */
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px #f8fafc inset !important; /* Ensures background color remains bg-slate-50 */
        -webkit-text-fill-color: #374151 !important; /* Ensures text color remains text-slate-600 */
    }

    /* Autofill and focus styles for WebKit-based browsers */
    input:-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0 30px #f8fafc inset !important; /* Ensures background color remains bg-slate-50 */
        -webkit-text-fill-color: #374151 !important; /* Ensures text color remains text-slate-600 */
    }

    /* Focus styles for all inputs */
    input:focus {
        background-color: #f8fafc; /* Keeps the background color consistent when focused */
    }
</style>
