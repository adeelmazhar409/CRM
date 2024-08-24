<script>
    // @ts-nocheck
    import { goto } from '$app/navigation'
    import { selectedUser } from '$lib/store/store'

    export let isStaffviewOpen = false
    export let isStaffdelete = false
    export let id = ''
    // export let editPage = false

    let user = {
        id:'sdfghj',
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
                mobile: 'Not provided',
                nickname: 'abc',
            }
        }
    })

    const toggleStaffview = () => {
        isStaffviewOpen = !isStaffviewOpen
    }
    const toggleStaffdelete = () => {
        isStaffdelete = !isStaffdelete
    }
    const toggleEditpage = () => {
        goto(id)
    }
</script>

<div class="bg-white flex flex-col w-full h-full overflow-y-auto">
    <div
        class="font-sans grid grid-cols-5 text-center py-[25px] px-6 items-center bg-component-bg"
    >
        <button
            type="button"
            class="cursor-pointer"
            on:click={toggleStaffview}
            aria-label="Close"
        >
            <img src="/icons/cross.svg" alt="Close icon" class="w-9 h-9" />
        </button>

        <div
            class="font-semibold text-[20px] text-text-hard col-span-3 leading-8"
        >
            Alfonso Cassano
        </div>
        <div></div>
    </div>

    <hr class="h-[1px] bg-slate-400 w-full" />

    <div
        class="flex flex-col w-fit border-1 m-4 p-5 text-center items-center border-2 shadow rounded-lg"
    >
        <img src="/icons/Avatar.png" class="w-16 h-16" alt="" />
        <div
            class=" font-sans font-semibold text-base leading-6 text-purple-600"
        >
            Update photo
        </div>

        <hr class="h-[1px] bg-slate-400 w-full my-4" />

        <div
            class="flex flex-row justify-between items-center w-full text-text-hard"
        >
            <div class="text-lg leading-7 font-bold">Personal Details</div>
            <button
                on:click={toggleEditpage}
                class="font-semibold text-base leading-6 text-purple-600"
            >
                Edit
            </button>
        </div>

        <div class=" grid grid-cols-3 justify-between my-7 w-full text-left">
            <div class="grid grid-rows-2">
                <div class=" font-semibold text-base leading-6 text-text-hard">
                    First Name
                </div>
                <div class=" font-normal text-lg leading-7 text-text-hard">
                    {user.firstName}
                </div>
            </div>
            <div></div>
            <div class="grid grid-rows-2">
                <div class=" font-semibold text-base leading-6 text-text-hard">
                    Last Name
                </div>
                <div class=" font-normal text-lg leading-7 text-text-hard">
                    {user.lastName}
                </div>
            </div>
        </div>

        <div class=" grid grid-cols-3 justify-between w-full text-left">
            <div class="grid grid-rows-2">
                <div class=" font-semibold text-base leading-6 text-text-hard">
                    Nick Nmae
                </div>
                <div class=" font-normal text-lg leading-7 text-text-hard">
                    {user.nickname}
                </div>
            </div>
            <div></div>
            <div class="grid grid-rows-2">
                <div class=" font-semibold text-base leading-6 text-text-hard">
                    Mobile
                </div>
                <div class=" font-normal text-lg leading-7 text-text-light">
                    {user.mobile}
                </div>
            </div>
        </div>

        <div class=" grid grid-cols-3 justify-between my-5 w-full text-left">
            <div class="grid grid-rows-2">
                <div class=" font-semibold text-base leading-6 text-text-hard">
                    Email Address
                </div>
                <div class=" font-normal text-lg leading-7 text-text-hard">
                    {user.email}
                </div>
            </div>
        </div>

        <hr class="h-[1px] bg-slate-500 w-full my-4" />

        <div
            class="flex flex-row justify-between items-center w-full text-text-hard"
        >
            <div class="text-lg leading-7 font-bold">Assigned Role</div>
            <div class="font-semibold text-base leading-6 text-purple-600">
                Edit
            </div>
        </div>
        <div class="flex w-full gap-1">
            <div class=" font-normal text-lg leading-7 text-text-hard">
                {user.role}
            </div>
            <img src="/icons/circle.svg" alt="" />
        </div>

        <hr class="h-[1px] bg-slate-500 w-full my-4" />

        <div
            class="flex flex-row justify-between items-center w-full text-text-hard"
        >
            <div class="text-lg leading-7 font-bold">POS Sign In Code</div>
            <div class="font-semibold text-base leading-6 text-purple-600">
                Reset
            </div>
        </div>

        <div class="flex w-full items-end mx-6">
            <div class=" font-medium text-3xl text-text-hard">****</div>
            <div class=" font-semibold text-sm leading-3 text-purple-600">
                Show Code
            </div>
        </div>
    </div>

    <button
        on:click={toggleStaffdelete}
        class="bg-red-50 w-fit text-base font-semibold text-red-600 py-4 px-4 mx-auto mb-4 rounded-lg shadow-sm hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200"
    >
        Delete Staff Member
    </button>
</div>
