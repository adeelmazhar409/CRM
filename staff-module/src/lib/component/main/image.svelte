<script>
    import ProgressBar from '$lib/UI/bar.svelte'

    export let width = 0
</script>

<div class="flex flex-col items-center w-full">
    <div class="font-sans grid grid-cols-3 items-center w-screen border-b">
        <img src="/icons/cross.svg" alt="Close" class="mx-3 my-5 w-8 h-8" />
        <h2 class="text-center font-semibold text-2xl leading-8">
            Update Details
        </h2>
        <div class="flex justify-end">
            <button
                class="bg-purple-600 text-white w-16 p-2 rounded-lg mx-5 my-4"
            >
                Save
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
                You can add a photo for Alfonso which will appear in the POS and
                in your admin portal.
            </div>
        </div>

        <div class="w-full grid justify-center">
            <img
                src="/icons/Avatar.svg"
                alt=""
                class="w-24 h-24 rounded-full"
            />
            <button
                class=" border border-gray-300 rounded-lg px-2 py-2 shadow font-semibold text-gray-700 text-sm leading-5 my-3"
                >Change</button
            >
            <button
                class=" mx-auto text-red-700 font-semibold text-sm leading-5"
                >Remove</button
            >
        </div>
    </div>
</div>
