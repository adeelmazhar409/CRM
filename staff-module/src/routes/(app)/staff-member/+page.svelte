<script>
    // @ts-nocheck
    import Header from '$lib/component/header.svelte'
    import Footer from '$lib/component/footer.svelte'
    import SideNav from '$lib/component/main/side-nav.svelte'
    import Table from '$lib/component/main/user-table.svelte'
    import StaffView from '$lib/component/main/staff-view.svelte'
    import DeleteStaff from '$lib/component/main/delete-staff.svelte'

    export let data
    let { staffMember } = data
    let message = false

    let isStaffviewOpen = false
</script>

<Table bind:staffMember bind:isStaffviewOpen />

<div
    class={`fixed top-0 right-0 h-full w-[28%] bg-component-bg border-2 border-border-color text-white transform 
      ${isStaffviewOpen ? 'translate-x-0' : 'translate-x-full'}
      transition-transform duration-300 ease-in-out`}
>
    <StaffView bind:staffMember bind:isStaffviewOpen />
</div>
