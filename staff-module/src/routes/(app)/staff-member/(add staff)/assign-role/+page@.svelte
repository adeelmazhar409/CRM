<script>
    // @ts-nocheck
    import { superForm } from 'sveltekit-superforms/client'
    import { RadioButtonSchema } from '$lib/schemas/role-field'
    import { goto } from '$app/navigation'
    import { zod } from 'sveltekit-superforms/adapters'
    import ProgressBar from '$lib/UI/bar.svelte'

    export let data;
    let width = 80
    let loading = false

    const { form, errors, message } = superForm(data.form,
        {
            validators: zod(RadioButtonSchema),
        }
    )

    let roles = ['Kitchen Staff', 'Service Staff', 'Manager', 'Owner']

    $: console.log('message;', $message)
</script>

<!-- {#if $message}
    <div class="text-red-500 text-sm mt-2">
        {$message}
    </div>
{/if} -->
<form method="POST">
    <div class="flex flex-col items-center w-full">
        <!-- Top for desktop -->
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
                class="mx-auto font-semibold md:text-2xl text-lg leading-8 col-span-2 md:col-span-1"
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

        <!-- Top for mobile -->
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
                    class="mx-auto font-semibold md:text-2xl text-lg leading-8 col-span-2 md:col-span-1"
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
            <div class="py-6">
                <div class="text-gray-700 text-xl font-bold leading-28">
                    Assign Role
                </div>

                <div
                    class="font-normal text-lg leading-7 text-gray-700 justify-between py-2"
                >
                    Manage Alfonso permissions.
                </div>
            </div>

            <div class="w-full">
                {#each roles as role}
                    <label
                        class="role-label flex items-center justify-between w-full p-4 my-2 bg-white border border-gray-300 hover:border-purple-500 text-gray-700 font-semibold text-lg leading-7 rounded-xl cursor-pointer"
                    >
                        <div class="flex items-center space-x-2">
                            <div class="text-lg text-gray-700">{role}</div>
                            <img src="/icons/help.svg" alt="" />
                        </div>
                        <input
                            type="radio"
                            name="role"
                            class="hidden"
                            value={role}
                            bind:group={$form.role}
                        />
                        <span class="custom-radio"></span>
                        <!-- Custom radio button -->
                    </label>
                {/each}
                {#if $message}
                    <div class="text-red-500 text-base font-medium text-center my-4">
                        {$message}
                    </div>
                {/if}
            </div>
        </div>
        <div class="fixed bottom-0 flex w-full md:hidden border-t">
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
    .role-label {
        position: relative;
    }

    .role-label input[type='radio'] {
        display: none;
    }

    .custom-radio {
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        border: 2px solid gray;
        border-radius: 50%;
        position: relative;
        cursor: pointer;
    }

    .custom-radio::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/icons/tick.svg');
        background-size: cover;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
    }

    .role-label input[type='radio']:checked + .custom-radio::after {
        opacity: 1;
    }

    .role-label input[type='radio']:checked ~ .custom-radio {
        border-color: rgba(134, 0, 255, 1);
    }
</style>
