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

<div class="mx-8">
    <div class="flex flex-row justify-between items-center my-6">
        <p class="font-semibold text-text-hard text-xl leading-8">
            Staff Member
        </p>

        <button
            class="flex flex-row items-center gap-2 px-[18px] py-2 bg-purple-text font-medium text-base text-white rounded-lg"
        >
            <img src="/icons/plus.svg" alt="" />Staff Member
        </button>
    </div>

    <div class="my-6 overflow-x-auto border-2 border-border-color rounded-2xl">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-zinc-50">
                <tr>
                    <th
                        scope="col"
                        class="p-3 w-1/2 text-left text-base font-bold text-text-light tracking-wider"
                    >
                        Name / Nickname
                    </th>
                    <th
                        scope="col"
                        class="p-3 w-1/2 text-left text-base font-bold text-text-light tracking-wider"
                    >
                        Role
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                {#each data as person}
                    <tr
                        class="hover:bg-zinc-50"
                        on:click={() => handleRowClick(person)}
                    >
                        <td
                            class="p-3 w-1/2 whitespace-nowrap text-sm font-medium text-gray-900"
                        >
                            <div class="flex flex-row gap-3">
                                <div
                                    class="rounded-full w-12 h-12 grid place-content-center bg-slate-50"
                                >
                                    <p
                                        class="font-medium text-text-light text-lg leading-28"
                                    >
                                        {person.tagename}
                                    </p>
                                </div>
                                <div>
                                    <p class="font-semibold text-lg leading-28">
                                        {person.name}
                                    </p>
                                    <p class="text-base font-normal leading-24">
                                        {person.id}
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td
                            class="p-3 w-1/2 whitespace-nowrap font-normal text-lg leading-28 text-purple-hover"
                        >
                            {person.role}
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
