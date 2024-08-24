<script>
// @ts-nocheck

    import { selectedUser } from '$lib/store/store'

    let person = ''

    const unsubscribe = selectedUser.subscribe((value) => {
        person = value.name
    })

    export let isDeletemassage = false

    const toggledeletemassage = () => {
        isDeletemassage = !isDeletemassage
    }
</script>

<div class="bg-green-600 text-white flex justify-between items-center">
    <div class="font-sans font-semibold text-base leading-6 py-3 px-8">
        {person} Was Deleted As Staff Member.
    </div>
    <button on:click={toggledeletemassage}
        ><img
            src="/icons/closes.svg"
            class="w-6 h-6 mx-8 my-3"
            alt=""
        /></button
    >
</div>
