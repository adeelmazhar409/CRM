<script>
    import Footer from '$lib/component/footer.svelte'
    import Header from '$lib/component/header.svelte'
    import SideNav from '$lib/component/main/side-nav.svelte'
    import '../app.css'
</script>

<div class="bg-white w-full h-dvh">
    <div class="flex flex-col min-h-screen">
        <Header />

        <div class="flex flex-grow">
            <div class="bg-component-bg border-t-2 border-border-color w-1/5">
                <SideNav />
            </div>

            <slot />
        </div>
        <Footer />
    </div>
</div>
