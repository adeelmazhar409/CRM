<script>
// @ts-nocheck
    import Table from '$lib/component/main/user-table.svelte';
    import StaffView from '$lib/component/main/staff-view.svelte';
    import { page } from '$app/stores';
    import { slide } from 'svelte/transition';
    import DeleteNotify from '$lib/component/main/delete-notify.svelte';
    import AddNotify from '$lib/component/main/add-notify.svelte';

    export let data;
    let { staffMember } = data;
    let message = false;
    let isStaffviewOpen = false;
    let showDeleteNotification = false;
    let showAddNotification = false;

    $: {
        message = $page.state.message;
        if (message === 'DeleteStaff') {
            showDeleteNotification = true;
            setTimeout(() => {
                showDeleteNotification = false;
            }, 1000);
        } else if (message === 'AddStaff') {
            showAddNotification = true;
            setTimeout(() => {
                showAddNotification = false;
            }, 1000);
        }
    }
</script>


{#if showDeleteNotification}
    <div transition:slide={{ y: -200 }}>
        <DeleteNotify />
    </div>
{/if}
{#if showAddNotification}
    <div transition:slide={{ y: -200 }}>
        <AddNotify />
    </div>
{/if}
<Table bind:staffMember bind:isStaffviewOpen />
{#if !showDeleteNotification}
    <div
        class={`fixed top-0 right-0 h-full w-[28%] bg-component-bg border-2 border-border-color text-white transform 
      ${isStaffviewOpen ? 'translate-x-0' : 'translate-x-full'}
      transition-transform duration-300 ease-in-out`}
    >
        <StaffView bind:staffMember bind:isStaffviewOpen />
    </div>
{/if}
