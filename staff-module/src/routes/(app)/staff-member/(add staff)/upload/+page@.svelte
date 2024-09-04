<script>
    // @ts-nocheck
    import { superForm, fileProxy } from 'sveltekit-superforms/client'
    import { ImageUploadSchema } from '$lib/schemas/add-staff-member'
    import { goto } from '$app/navigation'
    import { zod } from 'sveltekit-superforms/adapters'
    import ProgressBar from '$lib/UI/bar.svelte'
    import { progress } from '$lib/store/progress'
    import ImageUpload from '$lib/component/main/image.svelte'
    import { onMount } from 'svelte'

    export let data

    const { form, errors } = superForm(data.form, {
        validators: zod(ImageUploadSchema),
    })

    const file = fileProxy(form, 'image')

    // Clear file and preview
    const removeFile = (event) => {
        event.preventDefault()
        file.set(null)
    }

    const openFileExplorer = (event) => {
        event.preventDefault()
        document.querySelector('input[type="file"]').click()
    }

    $: {
        if ($file?.length){ progress.update((n) => Math.min(n + 20, 60))}
        if ($file?.length) localStorage.setItem('progresslevel', '60')
    }

onMount(()=>{
    let value = localStorage.getItem('progresslevel');
    console.log(value);
    progress.set(Number(value))
})
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
                <ProgressBar />
            </div>
        </div>

        <div class="px-4 my-2 w-full sm:w-1/2 lg:w-2/5">
            <div class="hidden sm:block md:mt-3 xl:mt-6 py-4">
                <ProgressBar />
            </div>

            <div class=" py-6 md:py-10">
                <div class="text-gray-700 text-xl font-bold leading-28">
                    Add profile Photo
                </div>

                <div
                    class="font-normal text-lg leading-7 text-gray-700 justify-between py-4"
                >
                    You can add a photo for Alfonso which will appear in the POS
                    and in your admin portal.
                </div>
            </div>

            <div class="flex justify-center">
                <label class="grid grid-cols-1 w-full gap-3">
                    {#if $file?.length}
                        <img
                            src={URL.createObjectURL($file[0])}
                            alt="Preview"
                            class="border justify-self-center rounded-full w-24 h-24"
                        />
                    {/if}
                    <input
                        bind:files={$file}
                        accept="image/png, image/jpeg"
                        name="image"
                        type="file"
                        class="hidden"
                        on:change={() => {
                            if (file?.[0]?.size > 102400) {
                                $errors.image = 'File size exceeds 100 Kb.'
                                openFileExplorer()
                            }
                        }}
                    />
                    <div class="flex flex-col items-center w-full">
                        <div class="w-full flex flex-col items-center gap-2">
                            <!-- Upload Button (Left-Aligned) -->
                            <div class="self-start">
                                {#if !$file?.length}
                                    <button
                                        class="border-2 p-2 flex flex-row items-center gap-2 w-fit justify-start px-4 text-base font-semibold text-text-hard rounded-lg"
                                        type="button"
                                        on:click={openFileExplorer}
                                    >
                                        <img
                                            src="/icons/upload.svg"
                                            alt="upload"
                                            class="w-4 h-4 my-2"
                                        />
                                        Upload (Optional)
                                    </button>
                                {/if}
                            </div>

                            <!-- Change and Remove Buttons (Centered) -->
                            {#if $file?.length}
                                <div class="flex flex-col items-center gap-2">
                                    <button
                                        class="border-2 p-2 w-fit gap-2 px-4 text-base font-semibold text-text-hard rounded-lg"
                                        type="button"
                                        on:click={openFileExplorer}
                                    >
                                        Change
                                    </button>
                                    <button
                                        type="button"
                                        class="text-red-600 font-semibold text-sm"
                                        on:click={removeFile}
                                    >
                                        Remove
                                    </button>
                                </div>
                            {/if}
                        </div>
                    </div>

                    <!-- Image Preview -->

                    {#if $errors.image}
                        <div class="invalid">{$errors.image}</div>
                    {/if}
                </label>
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
