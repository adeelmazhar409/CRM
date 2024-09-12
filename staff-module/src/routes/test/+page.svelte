<!-- <script>
// @ts-nocheck

    import { superValidate } from 'sveltekit-superforms/client';
    import { editStaffFormSchema } from '$lib/schemas/update-staff-member';
    import { z } from 'zod';
    import { goto } from '$app/navigation';

    // Create the form object using superValidate
    const form = superValidate(editStaffFormSchema);

    const handleSubmit = async (event) => {
        const { result, errors } = await form.validate(event);

        if (!errors) {
            // Form is valid, handle submission logic here
            console.log('Form submitted successfully', result);
            // Redirect after successful submission, if needed
            goto('/');
        }
    };
</script>

<form use:form on:submit={handleSubmit}>
    <div class="flex flex-col items-center w-full">
        <div class="font-sans grid grid-cols-3 items-center w-full border-b">
            <button
                type="button"
                on:click={() => goto('/')}
            >
                <img src="/icons/cross.svg" alt="Close" class="mx-3 my-5 w-8 h-8" />
            </button>

            <h2 class="text-center font-semibold text-2xl leading-8">
                Add Staff Member
            </h2>
            <div class="flex justify-end">
                <button
                    type="submit"
                    class="bg-purple-600 text-white w-16 p-2 rounded-lg mx-5 my-4"
                >
                    Save
                </button>
            </div>
        </div>

        <div class="w-1/3 my-10">
            <div class="relative">
                <div class="w-full bg-gray-200 rounded h-1 flex">
                    <div class="bg-green-500 h-[5px] rounded-l transition-all duration-500" style="width: 16%"></div>
                </div>
                <div class="w-full flex justify-between absolute top-0 h-4">
                    <div class="w-1/4 h-1 border-r-2 border-white"></div>
                    <div class="w-1/4 h-1 border-r-2 border-white"></div>
                    <div class="w-1/4 h-1 border-r-2 border-white"></div>
                    <div class="w-1/4 h-1 border-r-2 border-white"></div>
                </div>
            </div>

            <div class="grid my-8">
                <div class="font-bold text-text-light text-2xl leading-8">Profile</div>
                <div class="text-text-light font-normal text-lg leading-7 mt-2">
                    You can only update the owner's nickname, email address, and mobile number.
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div class="w-full">
                    <label for="firstname" class="font-semibold text-base leading-6 text-text-light">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        class="w-full p-2 border rounded-lg my-2 bg-slate-50 text-slate-600"
                    />
                    {#if $form.errors.firstname}
                        <div class="text-red-600 font-sans font-normal text-base leading-6">
                            {$form.errors.firstname}
                        </div>
                    {/if}
                </div>

                <div class="w-full">
                    <label for="lastname" class="font-semibold text-base leading-6 text-text-light">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        class="w-full p-2 border rounded-lg my-2 bg-slate-50 text-slate-600"
                    />
                    {#if $form.errors.lastname}
                        <div class="text-red-600 font-sans font-normal text-base leading-6">
                            {$form.errors.lastname}
                        </div>
                    {/if}
                </div>
            </div>

            <div class="my-7">
                <label for="nickname" class="font-semibold text-base leading-6 text-text-light">
                    Nick Name (Display Name)
                </label>
                <div class="flex items-center">
                    <input
                        class="w-full p-2 border rounded-s-lg my-2 bg-slate-50 text-slate-600"
                        type="text"
                        id="nickname"
                        name="nickname"
                    />
                    <button class="bg-gray-50 text-gray-700 border p-2 my-2 rounded-e-lg">
                        Edit
                    </button>
                </div>
                <p class="text-gray-500 mt-1 font-normal">
                    If not set default is first name and last name initial.
                </p>
            </div>

            <div>
                <label for="email" class="font-semibold text-base leading-6 text-text-light">
                    Email Address
                </label>
                <input
                    class="w-full p-2 border rounded-lg my-2 bg-slate-50 text-slate-600"
                    type="email"
                    id="email"
                    name="email"
                />
                {#if $form.errors.email}
                    <div class="text-red-600 font-sans font-normal text-base leading-6">
                        {$form.errors.email}
                    </div>
                {/if}
            </div>

            <div class="my-7">
                <label for="mobile" class="font-semibold text-base leading-6 text-text-light">
                    Mobile Number (Optional)
                </label>
                <input
                    class="border-2 p-2 rounded w-full { $form.errors.mobile ? 'border-red-500' : 'border-gray-300' }"
                    type="text"
                    id="mobile"
                    name="mobile"
                />
                {#if $form.errors.mobile}
                    <div class="text-red-600 font-sans font-normal text-base leading-6">
                        {$form.errors.mobile}
                    </div>
                {/if}
            </div>
        </div>
    </div>
</form> -->
<!-- <script>
    
    import PuprleButton from '$lib/UI/puprle-button.svelte'
   let name ='save'

 

</script>


<PuprleButton bind:name /> -->
