i
<template>
    <nav :class="{ 'z-100': drawer.isHomeDrawerOpen }">
        <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div class="flex h-20 justify-between">
                <div class="flex px-2 lg:px-0">
                    <div
                        class="visible md:hidden top-0 flex h-16 shrink-0 items-center gap-x-4 border-bpx-4 sm:gap-x-6 sm:px-6 lg:px-8 pt-2 lg:pt-0"
                    >
                        <button
                            type="button"
                            class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                            @click="drawer.toggleHomeDrawer"
                        >
                            <span class="sr-only">Open sidebar</span>
                            <svg
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>

                        <!-- Separator -->
                        <div
                            class="h-6 w-px bg-gray-900/10 lg:hidden"
                            aria-hidden="true"
                        ></div>
                    </div>
                    <div class="flex flex-shrink-0 items-center">
                        <img
                            class="block h-10 md:h-16 w-auto"
                            src="~/assets/images/logo-lost-doggo.svg"
                            alt="Lost Doggo | Lost pets & Found pets"
                        />
                    </div>
                    <div class="hidden lg:ml-6 lg:flex lg:space-x-8">
                        <a
                            v-for="link in navigation"
                            :key="link.name"
                            :href="link.href"
                            class="inline-flex items-center px-1 pt-1 text-base font-bold decoration-wavy underline-offset-8 transition"
                            :class="{
                                'text-[#5B1310] underline':
                                    currentRouteName === link.href,
                                'text-[#5B1310]/60  hover:text-[#5B1310] hover:underline':
                                    currentRouteName !== link.href
                            }"
                            >{{ link.name }}</a
                        >
                    </div>
                </div>
                <!-- <div
                    class="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end"
                >
                    <div class="w-full max-w-lg lg:max-w-xs">
                        <label for="search" class="sr-only">Search</label>
                        <div class="relative">
                            <div
                                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                            >
                                <svg
                                    class="h-5 w-5 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                            <input
                                id="search"
                                name="search"
                                class="block w-full rounded-md border border-gray-300 bg-white/70 py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-[#5C1511] focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#5C1511] sm:text-sm"
                                placeholder="Search"
                                type="search"
                            />
                        </div>
                    </div>
                </div> -->
                <div
                    class="grid grid-cols-2 gap-2 items-center justify-items-start"
                >
                    <template v-if="auth.user?.id">
                        <a
                            href="/dashboard/pet"
                            class="text-center inline-flex items-center rounded-md border border-transparent bg-[#5C1511] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#5C1511]/80 focus:outline-none focus:ring-2 focus:ring-[#5C1511] focus:ring-offset-2"
                            >Dashboard</a
                        >
                        <a
                            class="text-center inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-[#5C1511] shadow-sm hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#5C1511] focus:ring-offset-2"
                            @click="onLogoutClick"
                        >
                            Logout
                        </a>
                    </template>
                    <template v-else>
                        <a
                            class="text-center inline-flex items-center rounded-md border border-transparent bg-[#5C1511] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#5C1511]/80 focus:outline-none focus:ring-2 focus:ring-[#5C1511] focus:ring-offset-2"
                            @click="$emit('sign-in')"
                            >Sign in</a
                        >
                        <a
                            href="#"
                            class="text-center inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-[#5C1511] shadow-sm hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#5C1511] focus:ring-offset-2"
                            @click="$emit('sign-up')"
                            >Sign up</a
                        >
                    </template>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'
import { useDrawerStore } from '~/stores/drawer'

const auth = useAuthStore()
const router = useRouter()
const currentRouteName = computed(() => router.currentRoute.value.fullPath)
const drawer = useDrawerStore()

const emit = defineEmits(['sign-up', 'sign-in'])

const onLogoutClick = () => {
    auth.logout()
}

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Lost', href: '/pets?type=lost' },
    { name: 'Found', href: '/pets?type=found' },
    { name: 'Generate Poster', href: '/poster' }
    // { name: 'Pricing', href: '/pricing' }
]
</script>
