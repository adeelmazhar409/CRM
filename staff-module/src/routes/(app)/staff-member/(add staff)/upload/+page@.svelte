<script>
    // @ts-nocheck
    import { superForm, fileProxy } from 'sveltekit-superforms/client'
    import { ImageUploadSchema } from '$lib/schemas/upload-image'
    import { goto } from '$app/navigation'
    import { zod } from 'sveltekit-superforms/adapters'
    import ProgressBar from '$lib/UI/bar.svelte'
    import ImageUpload from '$lib/component/main/image.svelte'

    export let data
    let width = 20
    let loading = false
    const { form, errors } = superForm(data.form, {
        validators: zod(ImageUploadSchema),
        onResult: () => {
            width += 20
            console.log('Form submission result:', form)
        },
        onError: ({ result }) => {
            console.log('Form submission error:', result)
        },
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
</script>

<form method="POST" enctype="multipart/form-data">
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
                    on:click={()=>goto('/staff-member/assign-role')}
                    class="bg-purple-600 text-white w-16 p-2 rounded-lg mx-5 my-4"
                >
                    Next
                </button>
            </div>
        </div>

        <div class=" flex w-1/3 my-10 flex-col">
            <ProgressBar bind:width />

            <div class=" py-10">
                <div class="text-gray-700 text-xl font-bold leading-28">
                    Add profile Photo
                </div>

                <div
                    class="font-normal text-lg leading-7 text-gray-700 justify-between py-2"
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
                                            class="w-4 h-4"
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

                        {#if $errors.image}
                            <div class="invalid">{$errors.image}</div>
                        {/if}
                    </div>

                    <!-- Image Preview -->

                    {#if $errors.image}
                        <div class="invalid">{$errors.image}</div>
                    {/if}
                </label>
            </div>
        </div>
    </div>
</form>
