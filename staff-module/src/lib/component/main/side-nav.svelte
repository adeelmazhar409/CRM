<script>
    export let isMenuOpen = false
    const toggle = () => (isMenuOpen = !isMenuOpen)
</script>

<button on:click={toggle} class="grid sm:hidden">
    <img src="/icons/burger.svg" alt="Menu" />
</button>

<div class="bg-white flex flex-col gap-5 mx-4 lg:mx-8 my-6 justify-center">
    <!-- Reports Section -->
    <div class="grid grid-col-1 gap-2">
        <div class="text-sm font-bold text-text-light font-urbanist">
            Reports
        </div>

        <!-- Repeated Items -->
        <div
            class="flex gap-3 py-2 items-center group hover:bg-purple-50 rounded-md"
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current text-gray-600 group-hover:text-purple-600"
            >
                <path
                    d="M8 16.9988H16M11.0177 2.76278L4.23539 8.0379C3.78202 8.39052 3.55534 8.56683 3.39203 8.78764C3.24737 8.98322 3.1396 9.20356 3.07403 9.43783C3 9.7023 3 9.98948 3 10.5638V17.7988C3 18.9189 3 19.4789 3.21799 19.9067C3.40973 20.2831 3.71569 20.589 4.09202 20.7808C4.51984 20.9988 5.07989 20.9988 6.2 20.9988H17.8C18.9201 20.9988 19.4802 20.9988 19.908 20.7808C20.2843 20.589 20.5903 20.2831 20.782 19.9067C21 19.4789 21 18.9189 21 17.7988V10.5638C21 9.98948 21 9.7023 20.926 9.43783C20.8604 9.20356 20.7526 8.98322 20.608 8.78764C20.4447 8.56683 20.218 8.39052 19.7646 8.03791L12.9823 2.76278C12.631 2.48953 12.4553 2.3529 12.2613 2.30038C12.0902 2.25404 11.9098 2.25404 11.7387 2.30038C11.5447 2.3529 11.369 2.48953 11.0177 2.76278Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>

            <div
                class="font-semibold text-base font-urbanist text-text-nav group-hover:text-purple-600"
            >
                Overview
            </div>
        </div>
        <div
            class="flex gap-3 py-2 items-center group hover:bg-purple-50 rounded-md"
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current text-gray-600 group-hover:text-purple-600"
            >
                <path
                    d="M19 19H2.6C2.03995 19 1.75992 19 1.54601 18.891C1.35785 18.7951 1.20487 18.6422 1.10899 18.454C1 18.2401 1 17.9601 1 17.4V1M18 6L14.0811 10.1827C13.9326 10.3412 13.8584 10.4204 13.7688 10.4614C13.6897 10.4976 13.6026 10.5125 13.516 10.5047C13.4179 10.4958 13.3215 10.4458 13.1287 10.3457L9.87132 8.65433C9.67854 8.55423 9.58215 8.50418 9.48404 8.49534C9.39744 8.48753 9.31031 8.50245 9.23124 8.5386C9.14165 8.57957 9.06739 8.65883 8.91887 8.81734L5 13"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>

            <div
                class="font-semibold text-base font-urbanist text-text-nav group-hover:text-purple-600"
            >
                Sales Summary
            </div>
        </div>
        <div
            class="flex gap-3 py-2 items-center group hover:bg-purple-50 rounded-md"
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current text-gray-600 group-hover:text-purple-600"
            >
                <path
                    d="M6 5V15M10 9V15M14 13V15M5.8 19H14.2C15.8802 19 16.7202 19 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C19 16.7202 19 15.8802 19 14.2V5.8C19 4.11984 19 3.27976 18.673 2.63803C18.3854 2.07354 17.9265 1.6146 17.362 1.32698C16.7202 1 15.8802 1 14.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>

            <div
                class="font-semibold text-base font-urbanist text-text-nav group-hover:text-purple-600"
            >
                Category Sale
            </div>
        </div>
        <div
            class="flex gap-3 py-2 items-center group hover:bg-purple-50 rounded-md"
        >
            <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current text-gray-600 group-hover:text-purple-600"
            >
                <path
                    d="M7 12V16M15 10V16M11 6V16M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>

            <div
                class="font-semibold text-base font-urbanist text-text-nav group-hover:text-purple-600"
            >
                Item Sales
            </div>
        </div>
    </div>

    <!-- Menu Management Section -->
    <div class="grid grid-col-1 gap-2">
        <div class="text-sm font-bold text-text-light font-urbanist">
            Menu Management
        </div>

        <div
            class="flex gap-3 py-2 items-center group hover:bg-purple-50 rounded-md"
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current text-gray-600 group-hover:text-purple-600"
            >
                <path
                    d="M6.4 1H2.6C2.03995 1 1.75992 1 1.54601 1.10899C1.35785 1.20487 1.20487 1.35785 1.10899 1.54601C1 1.75992 1 2.03995 1 2.6V6.4C1 6.96005 1 7.24008 1.10899 7.45399C1.20487 7.64215 1.35785 7.79513 1.54601 7.89101C1.75992 8 2.03995 8 2.6 8H6.4C6.96005 8 7.24008 8 7.45399 7.89101C7.64215 7.79513 7.79513 7.64215 7.89101 7.45399C8 7.24008 8 6.96005 8 6.4V2.6C8 2.03995 8 1.75992 7.89101 1.54601C7.79513 1.35785 7.64215 1.20487 7.45399 1.10899C7.24008 1 6.96005 1 6.4 1Z"
                    stroke="#344054"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M17.4 1H13.6C13.0399 1 12.7599 1 12.546 1.10899C12.3578 1.20487 12.2049 1.35785 12.109 1.54601C12 1.75992 12 2.03995 12 2.6V6.4C12 6.96005 12 7.24008 12.109 7.45399C12.2049 7.64215 12.3578 7.79513 12.546 7.89101C12.7599 8 13.0399 8 13.6 8H17.4C17.9601 8 18.2401 8 18.454 7.89101C18.6422 7.79513 18.7951 7.64215 18.891 7.45399C19 7.24008 19 6.96005 19 6.4V2.6C19 2.03995 19 1.75992 18.891 1.54601C18.7951 1.35785 18.6422 1.20487 18.454 1.10899C18.2401 1 17.9601 1 17.4 1Z"
                    stroke="#344054"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M17.4 12H13.6C13.0399 12 12.7599 12 12.546 12.109C12.3578 12.2049 12.2049 12.3578 12.109 12.546C12 12.7599 12 13.0399 12 13.6V17.4C12 17.9601 12 18.2401 12.109 18.454C12.2049 18.6422 12.3578 18.7951 12.546 18.891C12.7599 19 13.0399 19 13.6 19H17.4C17.9601 19 18.2401 19 18.454 18.891C18.6422 18.7951 18.7951 18.6422 18.891 18.454C19 18.2401 19 17.9601 19 17.4V13.6C19 13.0399 19 12.7599 18.891 12.546C18.7951 12.3578 18.6422 12.2049 18.454 12.109C18.2401 12 17.9601 12 17.4 12Z"
                    stroke="#344054"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M6.4 12H2.6C2.03995 12 1.75992 12 1.54601 12.109C1.35785 12.2049 1.20487 12.3578 1.10899 12.546C1 12.7599 1 13.0399 1 13.6V17.4C1 17.9601 1 18.2401 1.10899 18.454C1.20487 18.6422 1.35785 18.7951 1.54601 18.891C1.75992 19 2.03995 19 2.6 19H6.4C6.96005 19 7.24008 19 7.45399 18.891C7.64215 18.7951 7.79513 18.6422 7.89101 18.454C8 18.2401 8 17.9601 8 17.4V13.6C8 13.0399 8 12.7599 7.89101 12.546C7.79513 12.3578 7.64215 12.2049 7.45399 12.109C7.24008 12 6.96005 12 6.4 12Z"
                    stroke="#344054"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>

            <div
                class="font-semibold text-base font-urbanist text-text-nav group-hover:text-purple-600"
            >
                Categories
            </div>
        </div>
        <div
            class="flex gap-3 py-2 items-center group hover:bg-purple-50 rounded-md"
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current text-gray-600 group-hover:text-purple-600"
            >
                <path
                    d="M14.5 18.5002C13.2465 18.814 11.6884 19 10 19C8.31159 19 6.75349 18.814 5.5 18.5002M16 14.4305C14.5341 14.9842 12.3894 15.3333 10 15.3333C7.61061 15.3333 5.46589 14.9842 4 14.4305M2.5 9.66785C3.93143 10.5598 6.75311 11.1667 10 11.1667C13.2469 11.1667 16.0686 10.5598 17.5 9.66785M19 4C19 5.65685 14.9706 7 10 7C5.02944 7 1 5.65685 1 4C1 2.34315 5.02944 1 10 1C14.9706 1 19 2.34315 19 4Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>

            <div
                class="font-semibold text-base font-urbanist text-text-nav group-hover:text-purple-600"
            >
                Dishes
            </div>
        </div>
    </div>

    <!-- Online Storefront Section -->
    <div class="grid grid-col-1 gap-2">
        <div class="text-sm font-bold text-text-light font-urbanist">
            Online Storefront
        </div>

        <div
            class="flex gap-3 py-2 items-center group hover:bg-purple-50 rounded-md"
        >
            <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current text-gray-600 group-hover:text-purple-600"
            >
                <path
                    d="M11 5V11L15 13M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>

            <div
                class="font-semibold text-base font-urbanist text-text-nav group-hover:text-purple-600"
            >
                Manage Hours
            </div>
        </div>
        <div
            class="flex gap-3 py-2 items-center group hover:bg-purple-50 rounded-md"
        >
            <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current text-gray-600 group-hover:text-purple-600"
            >
                <path
                    d="M15 11.3744C18.5318 12.0688 21 13.6547 21 15.5C21 17.9853 16.5228 20 11 20C5.47715 20 1 17.9853 1 15.5C1 13.6547 3.46819 12.0688 7 11.3744M11 15V1L16.3177 4.27244C16.7056 4.51114 16.8995 4.63049 16.9614 4.78085C17.0154 4.912 17.0111 5.0599 16.9497 5.18771C16.8792 5.33426 16.6787 5.44222 16.2777 5.65815L11 8.5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>

            <div
                class="font-semibold text-base font-urbanist text-text-nav group-hover:text-purple-600"
            >
                Address
            </div>
        </div>
    </div>

    <!-- POS Access Management Section -->
    <div class="grid grid-col-1 gap-2">
        <div class="text-sm` font-bold text-text-light font-urbanist">
            POS Access Management
        </div>

        <a
            href="/staff-member"
            class="flex gap-3 py-2 items-center group bg-purple-50 rounded-md"
        >
            <svg
                width="24"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current text-purple-600"
            >
                <path
                    d="M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            <div
                class="font-semibold text-base font-urbanist text-purple-600"
            >
                Staff Members
            </div>
        </a>

        <div
            class="flex gap-3 py-2 items-center group hover:bg-purple-50 rounded-md"
        >
            <svg
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current text-gray-600 group-hover:text-purple-600"
            >
                <path
                    d="M21 7V4.2C21 3.0799 21 2.51984 20.782 2.09202C20.5903 1.71569 20.2843 1.40973 19.908 1.21799C19.4802 1 18.9201 1 17.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.0799 1 4.2V7.8C1 8.9201 1 9.48016 1.21799 9.90798C1.40973 10.2843 1.71569 10.5903 2.09202 10.782C2.51984 11 3.0799 11 4.2 11H10M11 6H11.005M16 6H16.005M6 6H6.005M18.25 13V11.25C18.25 10.2835 17.4665 9.5 16.5 9.5C15.5335 9.5 14.75 10.2835 14.75 11.25V13M11.25 6C11.25 6.13807 11.1381 6.25 11 6.25C10.8619 6.25 10.75 6.13807 10.75 6C10.75 5.86193 10.8619 5.75 11 5.75C11.1381 5.75 11.25 5.86193 11.25 6ZM16.25 6C16.25 6.13807 16.1381 6.25 16 6.25C15.8619 6.25 15.75 6.13807 15.75 6C15.75 5.86193 15.8619 5.75 16 5.75C16.1381 5.75 16.25 5.86193 16.25 6ZM6.25 6C6.25 6.13807 6.13807 6.25 6 6.25C5.86193 6.25 5.75 6.13807 5.75 6C5.75 5.86193 5.86193 5.75 6 5.75C6.13807 5.75 6.25 5.86193 6.25 6ZM14.6 17H18.4C18.9601 17 19.2401 17 19.454 16.891C19.6422 16.7951 19.7951 16.6422 19.891 16.454C20 16.2401 20 15.9601 20 15.4V14.6C20 14.0399 20 13.7599 19.891 13.546C19.7951 13.3578 19.6422 13.2049 19.454 13.109C19.2401 13 18.9601 13 18.4 13H14.6C14.0399 13 13.7599 13 13.546 13.109C13.3578 13.2049 13.2049 13.3578 13.109 13.546C13 13.7599 13 14.0399 13 14.6V15.4C13 15.9601 13 16.2401 13.109 16.454C13.2049 16.6422 13.3578 16.7951 13.546 16.891C13.7599 17 14.0399 17 14.6 17Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>

            <div
                class="font-semibold text-base font-urbanist text-text-nav group-hover:text-purple-600"
            >
                Permissions
            </div>
        </div>
    </div>

    <!-- Accounting and Billing Section -->
    <div class="grid grid-col-1 gap-2">
        <div class="text-sm font-bold text-text-light font-urbanist">
            Accounting and Billing
        </div>

        <div
            class="flex gap-3 py-2 items-center group hover:bg-purple-50 rounded-md"
        >
            <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current text-gray-600 group-hover:text-purple-600"
            >
                <path
                    d="M1 4L13 4M13 4C13 5.65686 14.3431 7 16 7C17.6569 7 19 5.65685 19 4C19 2.34315 17.6569 1 16 1C14.3431 1 13 2.34315 13 4ZM7 12L19 12M7 12C7 13.6569 5.65685 15 4 15C2.34315 15 1 13.6569 1 12C1 10.3431 2.34315 9 4 9C5.65685 9 7 10.3431 7 12Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>

            <div
                class="font-semibold text-base font-urbanist text-text-nav group-hover:text-purple-600"
            >
                Business Details
            </div>
        </div>
        <div
            class="flex gap-3 py-2 items-center group hover:bg-purple-50 rounded-md"
        >
            <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current text-gray-600 group-hover:text-purple-600"
            >
                <path
                    d="M21 6H1M10 10H5M1 4.2L1 11.8C1 12.9201 1 13.4802 1.21799 13.908C1.40973 14.2843 1.71569 14.5903 2.09202 14.782C2.51984 15 3.07989 15 4.2 15L17.8 15C18.9201 15 19.4802 15 19.908 14.782C20.2843 14.5903 20.5903 14.2843 20.782 13.908C21 13.4802 21 12.9201 21 11.8V4.2C21 3.0799 21 2.51984 20.782 2.09202C20.5903 1.7157 20.2843 1.40974 19.908 1.21799C19.4802 1 18.9201 1 17.8 1L4.2 1C3.0799 1 2.51984 1 2.09202 1.21799C1.7157 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.07989 1 4.2Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>

            <div
                class="font-semibold text-base font-urbanist text-text-nav group-hover:text-purple-600"
            >
                Subscription
            </div>
        </div>
    </div>
</div>

<button
    class="text-sm sm:hidden font-semibold mt-1 m-4 text-purple-text leading-5"
    >Log out</button
>
<div class="flex flex-col sm:hidden my-3 gap-3">
    <hr class="w-full bg-slate-500" />

    <div class="flex flex-row justify-start px-4 py-4 gap-2">
        <button class="text-right border border-slate-300 rounded-md p-1.5">
            <img src="/icons/side-nav-bottom.svg" class="py-1" alt="profile" />
        </button>
        <div class="flex flex-row gap-2">
            <div>
                <p class="text-sm font-semibold leading-5">Banh Mi Brother</p>
                <p class="text-xs font-medium leading-18">
                    ghassan zakaria@gmail.com
                </p>
            </div>
        </div>
    </div>
</div>
