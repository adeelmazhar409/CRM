<script>
    // @ts-nocheck

    import Table from '$lib/component/main/user-table.svelte'
    import StaffView from '$lib/component/main/staff-view.svelte'
    import GreenTicket from '$lib/component/main/green-ticket.svelte'
    import { page } from '$app/stores'
    import { slide } from 'svelte/transition'

    $: message = $page.state.message
    let showComponent = false

    $: if (message) {
        showComponent = true
        setTimeout(() => {
            showComponent = false
            window.location.reload()
        }, 3000) // 30 seconds
    }

    export let data
    let { staffMember } = data
    let message = false

    let isStaffviewOpen = false
</script>

<div class="flex-grow border-t-2 border-l-2 border-l-border-color bg-zinc-50">
    {#if showComponent}
        <div transition:slide={{ y: -200 }}>
            <GreenTicket />
        </div>
    {/if}
    <Table bind:staffMember bind:isStaffviewOpen />
</div>

<div
    class={`fixed top-0 right-0 h-full w-[28%] bg-component-bg border-2 border-border-color text-white transform 
      ${isStaffviewOpen ? 'translate-x-0' : 'translate-x-full'}
      transition-transform duration-300 ease-in-out`}
>
    <StaffView bind:staffMember bind:isStaffviewOpen />
</div>
