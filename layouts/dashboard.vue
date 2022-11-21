<template>
    <div class="flex h-screen">
        <!-- Narrow sidebar -->
        <div class="hidden w-28 overflow-y-auto bg-indigo-700 md:block">
            <div class="flex w-full flex-col items-center py-6">
                <div class="flex flex-shrink-0 items-center">
                    <img
                        class="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=white"
                        alt="Your Company"
                    />
                </div>
                <div class="mt-6 w-full flex-1 space-y-1 px-2">
                    <a
                        v-for="item in sidebarNavigation"
                        :key="item.name"
                        :href="item.href"
                        :class="[
                            item.current
                                ? 'bg-indigo-800 text-white'
                                : 'text-indigo-100 hover:bg-indigo-800 hover:text-white',
                            'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium'
                        ]"
                        :aria-current="item.current ? 'page' : undefined"
                    >
                        <component
                            :is="item.icon"
                            :class="[
                                item.current
                                    ? 'text-white'
                                    : 'text-indigo-300 group-hover:text-white',
                                'h-6 w-6'
                            ]"
                            aria-hidden="true"
                        />
                        <span class="mt-2">{{ item.name }}</span>
                    </a>
                </div>
            </div>
        </div>

        <!-- Mobile menu -->
        <TransitionRoot as="template" :show="mobileMenuOpen">
            <Dialog
                as="div"
                class="relative z-20 md:hidden"
                @close="mobileMenuOpen = false"
            >
                <TransitionChild
                    as="template"
                    enter="transition-opacity ease-linear duration-300"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
                </TransitionChild>

                <div class="fixed inset-0 z-40 flex">
                    <TransitionChild
                        as="template"
                        enter="transition ease-in-out duration-300 transform"
                        enter-from="-translate-x-full"
                        enter-to="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leave-from="translate-x-0"
                        leave-to="-translate-x-full"
                    >
                        <DialogPanel
                            class="relative flex w-full max-w-xs flex-1 flex-col bg-indigo-700 pt-5 pb-4"
                        >
                            <TransitionChild
                                as="template"
                                enter="ease-in-out duration-300"
                                enter-from="opacity-0"
                                enter-to="opacity-100"
                                leave="ease-in-out duration-300"
                                leave-from="opacity-100"
                                leave-to="opacity-0"
                            >
                                <div class="absolute top-1 right-0 -mr-14 p-1">
                                    <button
                                        type="button"
                                        class="flex h-12 w-12 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                                        @click="mobileMenuOpen = false"
                                    >
                                        <XMarkIcon
                                            class="h-6 w-6 text-white"
                                            aria-hidden="true"
                                        />
                                        <span class="sr-only"
                                            >Close sidebar</span
                                        >
                                    </button>
                                </div>
                            </TransitionChild>
                            <div class="flex flex-shrink-0 items-center px-4">
                                <img
                                    class="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=white"
                                    alt="Your Company"
                                />
                            </div>
                            <div class="mt-5 h-0 flex-1 overflow-y-auto px-2">
                                <nav class="flex h-screen flex-col">
                                    <div class="space-y-1">
                                        <a
                                            v-for="item in sidebarNavigation"
                                            :key="item.name"
                                            :href="item.href"
                                            :class="[
                                                item.current
                                                    ? 'bg-indigo-800 text-white'
                                                    : 'text-indigo-100 hover:bg-indigo-800 hover:text-white',
                                                'group py-2 px-3 rounded-md flex items-center text-sm font-medium'
                                            ]"
                                            :aria-current="
                                                item.current
                                                    ? 'page'
                                                    : undefined
                                            "
                                        >
                                            <component
                                                :is="item.icon"
                                                :class="[
                                                    item.current
                                                        ? 'text-white'
                                                        : 'text-indigo-300 group-hover:text-white',
                                                    'mr-3 h-6 w-6'
                                                ]"
                                                aria-hidden="true"
                                            />
                                            <span>{{ item.name }}</span>
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                    <div class="w-14 flex-shrink-0" aria-hidden="true">
                        <!-- Dummy element to force sidebar to shrink to fit close icon -->
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>

        <!-- Content area -->
        <div class="flex flex-1 flex-col overflow-hidden">
            <header class="w-full">
                <div
                    class="relative z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white shadow-sm md:hidden"
                >
                    <button
                        type="button"
                        class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                        @click="mobileMenuOpen = true"
                    >
                        <span class="sr-only">Open sidebar</span>
                        <Bars3BottomLeftIcon
                            class="h-6 w-6"
                            aria-hidden="true"
                        />
                    </button>
                </div>
            </header>

            <!-- Main content -->
            <div class="flex flex-1 items-stretch overflow-hidden">
                <main class="flex-1 overflow-y-auto">
                    <!-- Primary column -->
                    <section
                        aria-labelledby="primary-heading"
                        class="flex h-full min-w-0 flex-1 flex-col lg:order-last p-6"
                    >
                        <slot />
                    </section>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import {
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot
} from '@headlessui/vue'
import {
    Bars3BottomLeftIcon,
    CogIcon,
    HomeIcon,
    PhotoIcon,
    RectangleStackIcon,
    UserGroupIcon,
    XMarkIcon,
    GlobeAltIcon,
    MagnifyingGlassIcon
} from '@heroicons/vue/24/outline'

const route = useRoute()

const sidebarNavigation = ref([
    { name: 'My Pets', href: '/owner/pets', icon: HomeIcon, current: false },
    {
        name: 'Search',
        href: '/owner/search',
        icon: MagnifyingGlassIcon,
        current: false
    },
    {
        name: 'Matches',
        href: '/owner/matches',
        icon: PhotoIcon,
        current: false
    },
    {
        name: 'Messages',
        href: '/owner/messages',
        icon: UserGroupIcon,
        current: false
    },
    {
        name: 'Posters',
        href: '/owner/posters',
        icon: RectangleStackIcon,
        current: false
    },
    {
        name: 'Settings',
        href: '/owner/settings',
        icon: CogIcon,
        current: false
    },
    { name: 'Owner', href: '#', icon: GlobeAltIcon, current: false }
])

const setCurrentNavigationItem = () => {
    sidebarNavigation.value = unref(sidebarNavigation).map(navItem => {
        return {
            ...navItem,
            current: false
        }
    })
    const navItemIndex = sidebarNavigation.value.findIndex(navItem => {
        return navItem.href === route.path
    })

    if (navItemIndex === -1) return (unref(sidebarNavigation)[0].current = true)
    unref(sidebarNavigation)[navItemIndex].current = true
}

setCurrentNavigationItem()

const mobileMenuOpen = ref(false)
</script>
