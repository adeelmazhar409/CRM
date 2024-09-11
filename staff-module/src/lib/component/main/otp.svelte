<div class="flex flex-col items-center w-full">
    <div class="font-sans grid grid-cols-3 items-center w-screen border-b">
        <img src="/icons/cross.svg" alt="Close" class="mx-3 my-5 w-8 h-8" />
        <h2 class="text-center font-semibold text-2xl leading-8">
            Update Details
        </h2>
        <div class="flex justify-end">
            <button
                class="bg-purple-600 text-white w-16 p-2 rounded-lg mx-5 my-4"
            >
                Save
            </button>
        </div>
    </div>

    <div class=" flex w-1/3 my-10 flex-col">
        <div>
            <div class="w-full bg-gray-200 rounded h-1 flex">
                <div
                    class="bg-green-500 h-[5px] rounded-l transition-all duration-500"
                    style="width: 16%"
                ></div>
            </div>

            <div class="w-full flex justify-between absolute top-0 h-4">
                <div class="w-1/4 h-1 border-r-2 border-white"></div>
                <div class="w-1/4 h-1 border-r-2 border-white"></div>
                <div class="w-1/4 h-1 border-r-2 border-white"></div>
                <div class="w-1/4 h-1 border-r-2 border-white"></div>
            </div>
        </div>

        <div class=" w-full my-10">
            <h1 class="text-xl leading-8 font-semibold">Generate Code</h1>
            <p class=" font-normal text-base leading-7 text-gray-600 my-2">
                This code will be used by Alfonso to sign in to POS.
            </p>

            <div class=" my-9">
                <label 
                for=""
                class=" font-semibold text-base leading-8 text-gray-800"
                    >Gustons' Sign in Code</label
                >
                <div class="flex items-center">
                    <input
                        type="text"
                        class="w-16 h-14 border bg-slate-50 border-gray-300 text-center rounded-s-lg"
                        maxlength="1"
                        placeholder="__"
                    />

                    <input
                        type="text"
                        class="w-16 h-14 border bg-slate-50 border-gray-300 text-center"
                        maxlength="1"
                        placeholder="__"
                    />
                    <input
                        type="text"
                        class="w-16 h-14 border bg-slate-50 border-gray-300 text-center"
                        maxlength="1"
                        placeholder="__"
                    />
                    <input
                        type="text"
                        class="w-16 h-14 border bg-slate-50 border-gray-300 text-center"
                        maxlength="1"
                        placeholder="__"
                    />

                    <button
                        class=" h-14 px-11 rounded-e-lg bg-white text-gray-700 border border-gray-300 text-base font-semibold hover:bg-gray-200"
                        >Generate</button
                    >
                </div>
            </div>

            <div class="mt-6">
                <label class="inline-flex items-center justify-center">
                    <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-blue-600 rounded-md"
                    />

                    <span class="mx-2 text-gray-700 font-semibold text-lg"
                        >Send passcode via email to Alfonso.</span
                    >
                </label>
                <p class="text-gray-500 my-1 mx-7 font-normal text-lg">
                    (Alfonso.Cassano@gmail.com)
                </p>
            </div>
        </div>
    </div>
</div>
