<script>
    import { goto } from '$app/navigation'

    const clearMassage = () => {
        goto('/staff-member')
    }
</script>

<div class="bg-green-600 text-white flex justify-between items-center">
    <div class="font-sans font-semibold text-base leading-6 py-3 px-8">
        New Staff Member Created
    </div>
    <button on:click={clearMassage}
        ><img
            src="/icons/closes.svg"
            class="w-6 h-6 mx-8 my-3"
            alt=""
        /></button
    >
</div>