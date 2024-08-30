<script>
    // @ts-nocheck
    import { superForm, fileProxy } from 'sveltekit-superforms/client'
    import { RadioButtonSchema } from '$lib/schemas/role-field'
    import { goto } from '$app/navigation'
    import { zod } from 'sveltekit-superforms/adapters'
    import ProgressBar from '$lib/UI/bar.svelte'

    export let data
    let width = 80
    let loading = false
    const { form, errors } = superForm(data.form, {
        validators: zod(RadioButtonSchema),
        // onResult: () => {
        //     width += 20
        //     console.log('Form submission result:', form)
        // },
        // onError: ({ result }) => {
        //     console.log('Form submission error:', result)
        // },
    })

    let roles = ['Service Staff', 'Kitchen Staff', 'Manager', 'Owner']
</script>

<form method="POST">
    <div class="flex flex-col items-center w-full">
        <div class="font-sans grid grid-cols-3 items-center w-screen border-b">
            <button
                type="button"
                class="cursor-pointer"
                on:click={() => goto('/staff-member')}
            >
                <img
                    src="/icons/cross.svg"
                    alt="Close"
                    class="mx-3 my-5 w-8 h-8"
                />
            </button>
            <h2 class="text-center font-semibold text-2xl leading-8">
                Update Details
            </h2>
            <div class="flex justify-end">
                <button
                    type="submit"
                    class="bg-purple-600 text-white w-16 p-2 rounded-lg mx-5 my-4"
                >
                    Next
                </button>
            </div>
        </div>

        <div class="flex w-1/3 my-10 flex-col">
            <ProgressBar bind:width />

            <div class="py-10">
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
                {#if $errors.role}
                    <div class="text-red-500 text-sm mt-2">
                        {$errors.role[0]}
                    </div>
                {/if}
            </div>
        </div>
    </div>
</form>

<style>
    .role-label {
        position: relative;
    }

    /* Hide the default radio button */
    .role-label input[type='radio'] {
        display: none;
    }

    /* Custom radio button */
    .custom-radio {
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        border: 2px solid gray;
        border-radius: 50%;
        position: relative;
        cursor: pointer;
    }

    /* Tick mark when selected */
    .custom-radio::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/icons/tick.svg'); /* Use your tick icon here */
        background-size: cover;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
    }

    /* Change the border to purple and show tick when selected */

    .role-label input[type='radio']:checked + .custom-radio::after {
        opacity: 1;
    }

    /* Ensure the entire label gets the border color change */
    .role-label input[type='radio']:checked ~ .custom-radio {
        border-color: rgba(134, 0, 255, 1);
    }
</style>
