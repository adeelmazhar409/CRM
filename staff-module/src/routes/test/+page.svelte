<script>
    // @ts-nocheck

    import { selectedUser } from '$lib/store/store'

    let data = [
        { id: '@Gus', name: 'Guston Daniels', role: 'Owner', tagename: 'GD' },
        {
            id: '@phoenix',
            name: 'Phoenix Baker',
            role: 'Manager',
            tagename: 'PB',
        },
        {
            id: '@lana',
            name: 'Lana Steiner',
            role: 'Service Staff',
            tagename: 'LS',
        },
        {
            id: '@demi',
            name: 'Demi Wilkinson',
            role: 'Kitchen Staff',
            tagename: 'DW',
        },
        {
            id: '@candice',
            name: 'Candice Wu',
            role: 'Kitchen Staff',
            tagename: 'CW',
        },
        {
            id: '@natali',
            name: 'Natali Craig',
            role: 'Service Staff',
            tagename: 'NC',
        },
    ]

    export let isStaffviewOpen = false

    // const toggleStaffview = () => {
    //     isStaffviewOpen = !isStaffviewOpen
    // }

    const handleRowClick = (profile) => {
        // toggleStaffview()
        isStaffviewOpen = true
        selectedUser.set(profile)
    }
</script>
<div class="mx-4 sm:mx-6 md:mx-8">
    <div class="flex flex-col sm:flex-row justify-between items-center my-6">
       <div class="grid grid-cols-3 items-center sm:w-fit w-full"> 
        <button class="sm:block md:hidden">
            <img src="/icons/ham.svg" alt="Menu Icon">
           
        </button>
        <div class="font-semibold text-center sm:text-right text-text-hard md:text-xl sm:text-lg leading-8">
            Staff Members
        </div>
        
    </div>
   
       
       <button
            class="flex items-center justify-center gap-2 px-4 sm:px-[18px] py-3 mt-4 sm:mt-0 bg-purple-text font-medium text-sm  text-white rounded-lg w-full sm:w-auto"
        >
            <img src="/icons/plus.svg" alt="" /> Staff Member
        </button>
    </div>

    <div class=" my-6 overflow-x-auto border-2 border-border-color rounded-2xl">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-zinc-50">
                <tr>
                    <th
                        scope="col"
                        class="p-3 text-left text-sm sm:text-base font-bold text-text-light tracking-wider"
                    >
                        Name / Nickname
                    </th>
                    <th
                        scope="col"
                        class="p-3 text-left text-sm sm:text-base font-bold text-text-light tracking-wider"
                    >
                        Role
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 ">
                {#each data as person}
                    <tr
                        class="hover:bg-zinc-50 cursor-pointer"
                        on:click={() => handleRowClick(person)}
                    >
                        <td
                            class="p-3 whitespace-nowrap text-sm sm:text-base font-medium text-gray-900"
                        >
                            <div class="flex flex-row  gap-3 items-center">
                                <div
                                    class="rounded-full w-10 h-10 sm:w-12 sm:h-12 grid place-content-center bg-slate-50"
                                >
                                    <p
                                        class="font-medium text-text-light text-base sm:text-lg text-left hover:text-gray-950"
                                    >
                                        {person.tagename}
                                    </p>
                                </div>
                                <div class="text-center sm:text-left">
                                    <p class="font-semibold text-base sm:text-lg leading-28 hover:text-gray-900">
                                        {person.name}
                                    </p>
                                    <p class="text-sm sm:text-base text-left font-normal leading-24 hover:text-gray-800">
                                        {person.id}
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td
                            class="p-3 whitespace-nowrap font-normal text-sm sm:text-lg leading-28 text-purple-hover hover:text-black "
                        >
                            {person.role}
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>

<div class="text-center text-sm my-14">
    © 2024 Swifti. All rights reserved.
</div>


