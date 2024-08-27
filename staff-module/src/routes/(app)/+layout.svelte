<script>
    // @ts-nocheck

    import '../../app.css'
    import Footer from '$lib/component/footer.svelte'
    import Header from '$lib/component/header.svelte'
    import SideNav from '$lib/component/main/side-nav.svelte'
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
                <slot />
            </div>
        </div>
        <Footer />
    </div>
</div>
