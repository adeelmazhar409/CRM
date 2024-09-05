<script>
    import Footer from '$lib/component/footer.svelte'
    import Header from '$lib/component/header.svelte'
    import SideNav from '$lib/component/main/side-nav.svelte'
</script>

<div class="bg-white w-full h-dvh">
    <div class="flex flex-col min-h-screen">
        <Header />

        <div class="flex flex-grow">
            <div class="bg-component-bg border-t-2 hidden sm:block border-border-color min-w-fit">
                <SideNav />
            </div>
            <div
                class="border-t-2 w-full border-l-2 border-l-border-color bg-zinc-50"
            >
                <slot />
            </div>
        </div>
        <Footer />
    </div>
</div>
