<script>
    // @ts-nocheck

    import { goto } from '$app/navigation'
    import { selectedUser } from '$lib/store/staffmember'
    import { message } from 'sveltekit-superforms'

    let id = ''
    let name = ''
    const unsubscribe = selectedUser.subscribe((value) => {
        if (value) {
            // console.log(value)
            id = value.id
            name = value.Name
        } else {
            console.log('value not found in delete component')
        }
    })

    const toggledeletemassage = async () => {
        const response = await fetch(`/api/staff/${id}`, {
            method: 'DELETE',
        })

        if (response.ok) {
            goto('/staff-member', { state: { message: true } })
        } else {
            const error = await response.json()
            console.error('Error deleting client:', error)
        }
    }

    const toggleStaffdelete = () => {
        goto('/staff-member')
    }
</script>

<div class="bg-zinc-400 w-full h-screen flex justify-center items-center">
    <div class="w-[27%] font-sans">
        <div class="bg-white rounded-xl shadow-lg p-6">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <img
                        src="/icons/alert.svg"
                        alt="Alert Icon"
                        class=" w-12"
                    />
                </div>
                <button
                    on:click={() => {
                        goto('/staff-member')
                    }}
                    class="text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                    <img src="/icons/close.svg" alt="Close Icon" />
                </button>
            </div>
            <h2 class="my-4 text-lg text-text-hard font-semibold leading-28">
                Delete Staff Member?
            </h2>
            <div class="m-1 text-gray-600 font-normal text-sm leading-5">
                <p>Are you sure you want to delete {name} ?</p>
                <p class="mt-5">
                    This action cannot be undone, and all related data will be
                    permanently removed.
                </p>
            </div>
            <div class="mt-6 flex justify-between space-x-3">
                <button
                    on:click={toggleStaffdelete}
                    class="bg-white border w-44 font-semibold text-base border-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-50 focus:outline-none"
                    >Keep Staff</button
                >
                <button
                    on:click={toggledeletemassage}
                    class="bg-red-600 w-44 font-semibold text-base text-white px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-none"
                    >Delete Now</button
                >
            </div>
        </div>
    </div>
</div>
