<script>
    // @ts-nocheck

    import { goto } from '$app/navigation'
    import { selectedUser } from '$lib/store/store'

    let user = {
        firstName: 'First name',
        lastName: 'last name',
        email: 'email@example.com',
        role: 'Role',
        mobile: 'Not provided',
        nickname: 'abc',
    }
    const unsubscribe = selectedUser.subscribe((value) => {
        if (value) {
            user = {
                firstName: value.name.split(' ')[0] || '',
                lastName: value.name.split(' ')[1] || '',
                email: value.email || 'email@example.com',
                role: value.role || 'Staff',
                mobile: '123456789',
                nickname: 'abc',
            }
        }
    })
    
</script>

<form on:submit|preventDefault={() => console.log(user)} action="">
    <div class="flex flex-col items-center h-screen w-full">
        <div class="font-sans grid grid-cols-3 items-center w-full border-b">
            <button
                on:click={() => {
                    goto('/')
                }}
                ><img
                    src="/icons/cross.svg"
                    alt="Close"
                    class="mx-3 my-5 w-8 h-8"
                /></button
            >

            <h2 class="text-center font-semibold text-2xl leading-8">
                Add Staff Member
            </h2>
            <div class="flex justify-end">
                <button
                    type="submit"
                    class="bg-purple-600 text-white w-16 p-2 rounded-lg mx-5 my-4"
                >
                    Save
                </button>
            </div>
        </div>
        <div class="w-1/3 my-10">
            <div class="relative">
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

            <div class="grid my-8">
                <div class="font-bold text-text-light text-2xl leading-8">
                    Profile
                </div>

                <div
                    class="text-text-light font-normal text-lg leading-7 mt-2"
                >
                    You can only update the owners nickname, email address and
                    mobile number.
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label
                        for="first-name"
                        class=" font-semibold text-base leading-6 text-text-light"
                    >
                        First Name
                    </label>
                    <input
                        class="w-full p-2 border rounded-lg my-2 bg-slate-50 text-slate-600"
                        type="text"
                        bind:value={user.firstName}
                    />
                </div>
                <div>
                    <label
                        for="last-name"
                        class=" font-semibold text-base leading-6 text-text-light"
                    >
                        Last Name
                    </label>
                    <input
                        class="w-full p-2 border rounded-lg my-2 bg-slate-50 font-normal text-lg leading-7 text-slate-600"
                        type="text"
                        bind:value={user.lastName}
                    />
                </div>
|            </div>

            <div class="my-7">
                <label
                    for="nickname"
                    class=" font-semibold text-base leading-6 text-text-light"
                >
                    Nick Name (Display Name)
                </label>
                <div class="flex items-center">
                    <input
                        class="w-full p-2 border rounded-s-lg my-2 bg-slate-50 text-slate-600"
                        type="text"
                        bind:value={user.nickname}
                    />
                    <button
                        class="bg-gray-50 text-gray-700 border p-2 my-2 rounded-e-lg"
                        >Edit</button
                    >
                </div>
                <p class="text-gray-500 mt-1 font-normal">
                    If not set default is first name and last name initial.
                </p>
            </div>

            <div>
                <label
                    for="email"
                    class=" font-semibold text-base leading-6 text-text-light"
                >
                    Email Address
                </label>
                <input
                    class="w-full p-2 border rounded-lg my-2 bg-slate-50 text-slate-600"
                    type="email"
                    bind:value={user.email}
                />
            </div>

            <div class="my-7">
                <label
                    for="mobile-number"
                    class=" font-semibold text-base leading-6 text-text-light"
                >
                    Mobile Number (Optional)
                </label>
                <input
                    class="w-full p-2 border rounded-lg my-2 bg-slate-50 text-slate-600"
                    type="number"
                    bind:value={user.mobile}
                />
            </div>
        </div>
    </div>
</form>
