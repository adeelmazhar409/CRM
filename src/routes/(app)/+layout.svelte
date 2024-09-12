<script>
    import Footer from '$lib/component/footer.svelte'
    import Header from '$lib/component/header.svelte'
    import SideNav from '$lib/component/main/side-nav.svelte'
</script>

<div class="bg-white w-full h-dvh">
    <div class="flex flex-col min-h-screen">
        <!-- Fixed Header -->
        <Header />

        <div class="flex flex-grow">
            <!-- Scrollable SideNav with hidden scrollbar -->
            <div
                class="bg-component-bg border-t-2 hidden sm:block border-border-color min-w-fit overflow-y-auto h-[calc(100vh-100px)] hide-scrollbar"
            >
                <SideNav />
            </div>

            <div
                class="border-t-2 w-full border-l-2 border-l-border-color bg-zinc-50"
            >
                <slot />
            </div>
        </div>

        <!-- Fixed Footer -->
        <Footer />
    </div>
</div>

<style>
    /* Hide scrollbar for Chrome, Safari, and Edge */
    .hide-scrollbar::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge, and Firefox */
    .hide-scrollbar {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
</style>
