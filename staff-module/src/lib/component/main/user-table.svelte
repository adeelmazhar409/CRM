<script>
    // @ts-nocheck

    import { goto } from '$app/navigation'
    import { selectedUser } from '$lib/store/staffmember'
    import SideNav from '$lib/component/main/side-nav.svelte'
    import { onMount, onDestroy } from 'svelte'
    export let staffMember
    export let isStaffviewOpen = false
    let isMenuOpen = false

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
            role: v.role || 'manager',
            id: v.id,
        }
    })

    const handleRowClick = (profile) => {
        selectedUser.set(profile)
        isStaffviewOpen = true
    }

    const handleEditStaff = (profile) => {
        goto('/staff-member/create')
    }

    const toggle = () => (isMenuOpen = !isMenuOpen);
</script>

<div class="relative mx-6 lg:mx-8" >
    <!-- Burger Button -->
    <div
        id="hamburger"
        class=" sm:flex sm:flex-row flex-col justify-between items-center my-6 w-full"
    >
        <div class="grid grid-cols-6 items-center my-8 sm:my-0">
            <button on:click={toggle} class="grid sm:hidden">
                <img src="/icons/burger.svg" alt="Menu" />
            </button>

            <p
                class="font-semibold text-text-hard sm:text-xl text-lg leading-8 col-span-4 text-center"
            >
                Staff Members
            </p>
        </div>

        <button
            on:click={handleEditStaff}
            class="flex justify-center text-center items-center gap-2 px-[18px] py-2 w-full sm:w-fit bg-purple-text font-medium text-base text-white rounded-lg"
        >
            <img src="/icons/plus.svg" alt="Add Staff Member" />
            Staff Member
        </button>
    </div>

    <!-- Full-screen Overlay with SideNav -->
    {#if isMenuOpen}
        <div            
            class={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
                isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            } z-50`}
        >
            <div
                class={`fixed overflow-auto w-4/5  h-full bg-white shadow-lg transition-transform transform ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }  w-full `}
            >
                <SideNav />
            </div>
        </div>
    {/if}

    <div class="my-6 overflow-y-auto border-2 border-border-color rounded-2xl">
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
