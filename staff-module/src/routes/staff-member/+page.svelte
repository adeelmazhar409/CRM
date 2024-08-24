<script>
// @ts-nocheck


    import Header from '$lib/component/header.svelte'
    import Footer from '$lib/component/footer.svelte'
    import SideNav from '$lib/component/main/side-nav.svelte'
    import Table from '$lib/component/main/user-table.svelte'
    import StaffView from '$lib/component/main/staff-view.svelte'
    import DeleteStaff from '$lib/component/main/delete-staff.svelte'
    import GreenTicket from '$lib/component/main/green-ticket.svelte'

    export let data

    let { staffMember } = data
    let isStaffviewOpen = false
    let isStaffdelete = false
    let isDeletemassage = false
</script>

{#if !isStaffdelete}
    <div class="flex flex-col min-h-screen">
        <Header />

        <div class="flex flex-grow">
            <div class="bg-component-bg border-t-2 border-border-color w-1/6">
                <SideNav />
            </div>

            <div
                class="flex-grow border-t-2 border-l-2 border-l-border-color bg-zinc-50"
            >
                {#if isDeletemassage}
                    <GreenTicket bind:isDeletemassage />
                {/if}
                <Table bind:staffMember bind:isStaffviewOpen />
            </div>
        </div>
        <Footer />
    </div>

    <div
        class={`fixed top-0 right-0 h-full w-[28%] bg-component-bg border-2 border-border-color text-white transform 
      ${isStaffviewOpen ? 'translate-x-0' : 'translate-x-full'}
      transition-transform duration-300 ease-in-out`}
    >
        <StaffView bind:isStaffviewOpen bind:isStaffdelete />
    </div>
{:else}
    <DeleteStaff bind:isStaffdelete bind:isDeletemassage bind:isStaffviewOpen />
{/if}
