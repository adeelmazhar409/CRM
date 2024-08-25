<script>
// @ts-nocheck

    import { goto } from '$app/navigation'
    import { selectedUser } from '$lib/store/store'

    export let staffMember;
    export let isStaffviewOpen = false

    $: staffMemberInTable = staffMember.map((v, i) => {
        return {
            tagName:
                v.firstname.charAt(0).toUpperCase() +
                v.lastname.charAt(0).toUpperCase(),
            Name:
                v.firstname.charAt(0).toUpperCase() +
                v.firstname.slice(1) +
                ' ' +
                v.lastname.charAt(0).toUpperCase() +
                v.lastname.slice(1),
            tag: `@${v.firstname}`,
            role: v.role,
            id: v.id
        }
    })

    const handleRowClick = (profile) => {
        // console.log(profile);
        selectedUser.set(profile)
        isStaffviewOpen = true
        
    }

    const handleEditStaff = (profile) => {
        goto('/staff-member/profile.id')
    }
</script>

<div class="mx-8">
    <div class="flex flex-row justify-between items-center my-6">
        <p class="font-semibold text-text-hard text-xl leading-8">
            Staff Member
        </p>

        <button
            on:click={handleEditStaff}
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
                {#each staffMemberInTable as person}
                    <tr
                        class="hover:bg-zinc-50 cursor-pointer"
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
                                        {person.tagName}
                                    </p>
                                </div>
                                <div>
                                    <p class="font-semibold text-lg leading-28">
                                        {person.Name}
                                    </p>
                                    <p class="text-base font-normal leading-24">
                                        {person.tag}
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
