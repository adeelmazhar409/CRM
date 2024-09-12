<script>
    import { progress } from '$lib/store/progress'
</script>

<div class="relative">
    <div class="w-full bg-gray-200 rounded h-1 flex">
        <div
            class="bg-green-500 h-[5px] rounded-l transition-all duration-500"
            style="width: {$progress}%"
        ></div>
    </div>

    <div class="w-full flex justify-between absolute top-0 h-4">
        <div class="w-1/4 h-1 border-r-2 border-white"></div>
        <div class="w-1/4 h-1 border-r-2 border-white"></div>
        <div class="w-1/4 h-1 border-r-2 border-white"></div>
        <div class="w-1/4 h-1 border-r-2 border-white"></div>
    </div>
</div>
