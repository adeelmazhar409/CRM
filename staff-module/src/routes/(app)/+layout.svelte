<script>
    // @ts-nocheck

    import '../../app.css'
    import Footer from '$lib/component/footer.svelte'
    import Header from '$lib/component/header.svelte'
    import SideNav from '$lib/component/main/side-nav.svelte'
    import { page } from '$app/stores'
    import { slide } from 'svelte/transition'
    import GreenTicket from '$lib/component/main/green-ticket.svelte'

    $: message = $page.state.message
    let showComponent = false

    $: if (message) {
        showComponent = true
        setTimeout(() => {
            showComponent = false
            // window.location.reload()
        }, 3000) // 30 seconds
    }
</script>

<div class="bg-white w-full h-dvh">
    <div class="flex flex-col min-h-screen">
        <Header />

        <div class="flex flex-grow">
            <div class="bg-component-bg border-t-2 border-border-color w-1/5">
                <SideNav />
            </div>
            <div
                class="flex-grow border-t-2 border-l-2 border-l-border-color bg-zinc-50"
            >
                {#if showComponent}
                    <div transition:slide={{ y: -200 }}>
                        <GreenTicket />
                    </div>
                {/if}

                <slot />
            </div>
        </div>
        <Footer />
    </div>
</div>
