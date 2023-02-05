<template>
    <div class="flex h-screen flex-col">
        <header class="relative flex h-16 flex-shrink-0 items-center bg-white">
            <!-- Logo area -->
            <div class="absolute inset-y-0 left-0 lg:static lg:flex-shrink-0">
                <a
                    href="#"
                    class="flex h-16 w-16 items-center justify-center bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 lg:w-20"
                >
                    <img
                        class="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=white"
                        alt="Your Company"
                    />
                </a>
            </div>

            <!-- Picker area -->
            <div class="mx-auto lg:hidden">
                <div class="relative">
                    <label for="inbox-select" class="sr-only"
                        >Choose inbox</label
                    >
                    <select
                        id="inbox-select"
                        class="rounded-md border-0 bg-none pl-3 pr-8 text-base font-medium text-gray-900 focus:ring-2 focus:ring-blue-600"
                    >
                        <option value="/open">Open</option>
                        <option value="/archived">Archived</option>
                        <option value="/assigned">Assigned</option>
                        <option value="/flagged">Flagged</option>
                        <option value="/spam">Spam</option>
                        <option value="/drafts">Drafts</option>
                    </select>
                    <div
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2"
                    >
                        <ChevronDownIcon
                            class="h-5 w-5 text-gray-500"
                            aria-hidden="true"
                        />
                    </div>
                </div>
            </div>

            <!-- Menu button area -->
            <div
                class="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 lg:hidden"
            >
                <!-- Mobile menu button -->
                <button
                    type="button"
                    class="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
                    @click="open = true"
                >
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="block h-6 w-6" aria-hidden="true" />
                </button>
            </div>

            <!-- Desktop nav area -->
            <div
                class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:items-center lg:justify-between"
            >
                <div class="min-w-0 flex-1"></div>
                <div
                    class="ml-10 flex flex-shrink-0 items-center space-x-10 pr-4"
                >
                    <!-- <nav aria-label="Global" class="flex space-x-10">
                        <template v-for="item in navigation" :key="item.name">
                            <Menu
                                as="div"
                                v-if="item?.children?.length"
                                class="relative text-left"
                            >
                                <MenuButton
                                    class="flex items-center rounded-md text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                                >
                                    <span>{{ item.name }}</span>
                                    <ChevronDownIcon
                                        class="ml-1 h-5 w-5 text-gray-500"
                                        aria-hidden="true"
                                    />
                                </MenuButton>

                                <transition
                                    enter-active-class="transition ease-out duration-100"
                                    enter-from-class="transform opacity-0 scale-95"
                                    enter-to-class="transform opacity-100 scale-100"
                                    leave-active-class="transition ease-in duration-75"
                                    leave-from-class="transform opacity-100 scale-100"
                                    leave-to-class="transform opacity-0 scale-95"
                                >
                                    <MenuItems
                                        class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    >
                                        <div class="py-1">
                                            <MenuItem
                                                v-for="child in item.children"
                                                :key="child.name"
                                                v-slot="{ active }"
                                            >
                                                <a
                                                    :href="child.href"
                                                    :class="[
                                                        active
                                                            ? 'bg-gray-100'
                                                            : '',
                                                        'block px-4 py-2 text-sm text-gray-700'
                                                    ]"
                                                    >{{ child.name }}</a
                                                >
                                            </MenuItem>
                                        </div>
                                    </MenuItems>
                                </transition>
                            </Menu>
                            <a
                                v-else
                                :href="item.href"
                                class="text-sm font-medium text-gray-900"
                                >{{ item.name }}</a
                            >
                        </template>
                    </nav> -->
                    <div class="flex items-center space-x-8">
                        <!-- <span class="inline-flex">
                            <a
                                href="#"
                                class="-mx-1 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500"
                            >
                                <span class="sr-only">View notifications</span>
                                <BellIcon class="h-6 w-6" aria-hidden="true" />
                            </a>
                        </span> -->

                        <Menu as="div" class="relative inline-block text-left">
                            <MenuButton
                                class="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                            >
                                <span class="sr-only">Open user menu</span>
                                <img
                                    class="h-8 w-8 rounded-full"
                                    :src="user.imageUrl"
                                    alt=""
                                />
                            </MenuButton>

                            <transition
                                enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95"
                            >
                                <MenuItems
                                    class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                >
                                    <div class="py-1">
                                        <MenuItem v-slot="{ active }">
                                            <a
                                                href="#"
                                                :class="[
                                                    active ? 'bg-gray-100' : '',
                                                    'block px-4 py-2 text-sm text-gray-700'
                                                ]"
                                                >Your Profile</a
                                            >
                                        </MenuItem>
                                        <MenuItem v-slot="{ active }">
                                            <a
                                                href="#"
                                                :class="[
                                                    active ? 'bg-gray-100' : '',
                                                    'block px-4 py-2 text-sm text-gray-700'
                                                ]"
                                                >Sign Out</a
                                            >
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                </div>
            </div>

            <!-- Mobile menu, show/hide this `div` based on menu open/closed state -->
            <TransitionRoot as="template" :show="open">
                <Dialog
                    as="div"
                    class="relative z-40 lg:hidden"
                    @close="open = false"
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
                        <div
                            class="hidden sm:fixed sm:inset-0 sm:block sm:bg-gray-600 sm:bg-opacity-75"
                        />
                    </TransitionChild>

                    <div class="fixed inset-0 z-40">
                        <TransitionChild
                            as="template"
                            enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300"
                            enter-from="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
                            enter-to="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
                            leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300"
                            leave-from="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
                            leave-to="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
                        >
                            <DialogPanel
                                class="fixed inset-0 z-40 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:w-full sm:max-w-sm sm:shadow-lg"
                                aria-label="Global"
                            >
                                <div
                                    class="flex h-16 items-center justify-between px-4 sm:px-6"
                                >
                                    <a href="#">
                                        <img
                                            class="block h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=400"
                                            alt="Your Company"
                                        />
                                    </a>
                                    <button
                                        type="button"
                                        class="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
                                        @click="open = false"
                                    >
                                        <span class="sr-only"
                                            >Close main menu</span
                                        >
                                        <XMarkIcon
                                            class="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                                <div
                                    class="max-w-8xl mx-auto mt-2 px-4 sm:px-6"
                                >
                                    <div
                                        class="relative text-gray-400 focus-within:text-gray-500"
                                    >
                                        <label
                                            for="mobile-search"
                                            class="sr-only"
                                            >Search all inboxes</label
                                        >
                                        <input
                                            id="mobile-search"
                                            type="search"
                                            placeholder="Search all inboxes"
                                            class="block w-full rounded-md border-gray-300 pl-10 placeholder-gray-500 focus:border-blue-600 focus:ring-blue-600"
                                        />
                                        <div
                                            class="absolute inset-y-0 left-0 flex items-center justify-center pl-3"
                                        >
                                            <MagnifyingGlassIcon
                                                class="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="max-w-8xl mx-auto py-3 px-2 sm:px-4"
                                >
                                    <template
                                        v-for="item in navigation"
                                        :key="item.name"
                                    >
                                        <a
                                            :href="item.href"
                                            class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                            >{{ item.name }}</a
                                        >
                                        <a
                                            v-for="child in item.children"
                                            :key="child.name"
                                            :href="child.href"
                                            class="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100"
                                            >{{ child.name }}</a
                                        >
                                    </template>
                                </div>
                                <div class="border-t border-gray-200 pt-4 pb-3">
                                    <div
                                        class="max-w-8xl mx-auto flex items-center px-4 sm:px-6"
                                    >
                                        <div class="flex-shrink-0">
                                            <img
                                                class="h-10 w-10 rounded-full"
                                                :src="user.imageUrl"
                                                alt=""
                                            />
                                        </div>
                                        <div class="ml-3 min-w-0 flex-1">
                                            <div
                                                class="truncate text-base font-medium text-gray-800"
                                            >
                                                {{ user.name }}
                                            </div>
                                            <div
                                                class="truncate text-sm font-medium text-gray-500"
                                            >
                                                {{ user.email }}
                                            </div>
                                        </div>
                                        <a
                                            href="#"
                                            class="ml-auto flex-shrink-0 bg-white p-2 text-gray-400 hover:text-gray-500"
                                        >
                                            <span class="sr-only"
                                                >View notifications</span
                                            >
                                            <BellIcon
                                                class="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </a>
                                    </div>
                                    <div
                                        class="max-w-8xl mx-auto mt-3 space-y-1 px-2 sm:px-4"
                                    >
                                        <a
                                            v-for="item in userNavigation"
                                            :key="item.name"
                                            :href="item.href"
                                            class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                                            >{{ item.name }}</a
                                        >
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </Dialog>
            </TransitionRoot>
        </header>

        <!-- Bottom section -->
        <div class="flex min-h-0 flex-1 overflow-hidden">
            <!-- Narrow sidebar-->
            <nav
                aria-label="Sidebar"
                class="hidden lg:block lg:flex-shrink-0 lg:overflow-y-auto lg:bg-gray-800"
            >
                <div class="relative flex w-20 flex-col space-y-3 p-3">
                    <a
                        v-for="item in sidebarNavigation"
                        :key="item.name"
                        :href="item.href"
                        :class="[
                            item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-400 hover:bg-gray-700',
                            'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
                        ]"
                    >
                        <span class="sr-only">{{ item.name }}</span>
                        <component
                            :is="item.icon"
                            class="h-6 w-6"
                            aria-hidden="true"
                        />
                    </a>
                </div>
            </nav>

            <NuxtPage />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import {
    Dialog,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot
} from '@headlessui/vue'
import {
    ArchiveBoxIcon as ArchiveBoxIconMini,
    ArrowUturnLeftIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    EllipsisVerticalIcon,
    FolderArrowDownIcon,
    MagnifyingGlassIcon,
    PencilIcon,
    UserPlusIcon,
    MagnifyingGlassCircleIcon,
    BookOpenIcon,
    AcademicCapIcon
} from '@heroicons/vue/20/solid'
import {
    ArchiveBoxIcon as ArchiveBoxIconOutline,
    Bars3Icon,
    BellIcon,
    FlagIcon,
    InboxIcon,
    NoSymbolIcon,
    PencilSquareIcon,
    UserCircleIcon,
    XMarkIcon
} from '@heroicons/vue/24/outline'

const user = {
    name: 'Whitney Francis',
    email: 'whitney.francis@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}
const navigation = [
    {
        name: 'Pets',
        href: '#'
    }
]
const sidebarNavigation = [
    { name: 'Open', href: '#', icon: InboxIcon, current: true }
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Sign out', href: '#' }
]
const messages = [
    {
        id: 1,
        subject: 'Velit placeat sit ducimus non sed',
        sender: 'Gloria Roberston',
        href: '#',
        date: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.'
    },
    {
        id: 2,
        subject:
            'Nemo mollitia repudiandae adipisci explicabo optio consequatur tempora ut nihil',
        sender: 'Virginia Abshire',
        href: '#',
        date: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.'
    },
    {
        id: 3,
        subject:
            'Doloremque reprehenderit et harum quas explicabo nulla architecto dicta voluptatibus',
        sender: 'Kyle Gulgowski',
        href: '#',
        date: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.'
    },
    {
        id: 4,
        subject: 'Eos sequi et aut ex impedit',
        sender: 'Hattie Haag',
        href: '#',
        date: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.'
    },
    {
        id: 5,
        subject: 'Quisquam veniam explicabo',
        sender: 'Wilma Glover',
        href: '#',
        date: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.'
    },
    {
        id: 6,
        subject:
            'Est ratione molestiae modi maiores consequatur eligendi et excepturi magni',
        sender: 'Dolores Morissette',
        href: '#',
        date: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.'
    },
    {
        id: 7,
        subject: 'Commodi deserunt aut veniam rem ipsam',
        sender: 'Guadalupe Walsh',
        href: '#',
        date: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.'
    },
    {
        id: 8,
        subject: 'Illo illum aut debitis earum',
        sender: 'Jasmine Hansen',
        href: '#',
        date: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.'
    },
    {
        id: 9,
        subject: 'Qui dolore iste ut est cumque sed',
        sender: 'Ian Volkman',
        href: '#',
        date: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.'
    },
    {
        id: 10,
        subject: 'Aut sed aut illum delectus maiores laboriosam ex',
        sender: 'Rafael Klocko',
        href: '#',
        date: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.'
    }
]
const message = {
    subject: 'Re: New pricing for existing customers',
    sender: 'joearmstrong@example.com',
    status: 'Open',
    items: [
        {
            id: 1,
            author: 'Joe Armstrong',
            date: 'Yesterday at 7:24am',
            datetime: '2021-01-28T19:24',
            body: "<p>Thanks so much! Can't wait to try it out.</p>"
        },
        {
            id: 2,
            author: 'Monica White',
            date: 'Wednesday at 4:35pm',
            datetime: '2021-01-27T16:35',
            body: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
          <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
          <p><strong style="font-weight: 600;">Monica White</strong><br/>Customer Service</p>
        `
        },
        {
            id: 3,
            author: 'Joe Armstrong',
            date: 'Wednesday at 4:09pm',
            datetime: '2021-01-27T16:09',
            body: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
          <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
          <p>– Joe</p>
        `
        }
    ]
}

const open = ref(false)
</script>

<style>
.animation-pulse {
    /*box-shadow: 0 0 0 20px rgba(229,62,62, 0.5);
    transform: scale(0.8);*/
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 #fdba74;
    }

    70% {
        transform: scale(1);
        box-shadow: 0 0 0 5px rgba(229, 62, 62, 0);
    }

    100% {
        transform: scale(1);
    }
}

.animation-pulse {
    /*box-shadow: 0 0 0 20px rgba(229,62,62, 0.5);
    transform: scale(0.8);*/
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 #fdba74;
    }

    70% {
        transform: scale(1);
        box-shadow: 0 0 0 5px rgba(229, 62, 62, 0);
    }

    100% {
        transform: scale(1);
    }
}
</style>
