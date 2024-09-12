<script>
    // @ts-nocheck

    import { goto } from '$app/navigation'
    import { selectedUser } from '$lib/store/staffmember'

    let person = ''

    const unsubscribe = selectedUser.subscribe((value) => {
        if (value) {
            // console.log(value);
            person = value.Name
        } else {
            person = 'Staff Member'
        }
    })

    const clearMassage = () => {
        goto('/staff-member')
    }
</script>

<div class="bg-green-600 text-white flex justify-between items-center">
    <div class="font-sans font-semibold text-base leading-6 py-3 px-8">
        {person} Was Deleted As Staff Member.
    </div>
    <button on:click={clearMassage}
        ><img
            src="/icons/closes.svg"
            class="w-6 h-6 mx-8 my-3"
            alt=""
        /></button
    >
</div>
