<template>
    <section
        aria-labelledby="message-heading"
        class="flex h-full min-w-0 flex-1 flex-col overflow-hidden xl:order-last"
    >
        <!-- Top section -->
        <div class="flex-shrink-0 border-b border-gray-200 bg-white">
            <!-- Toolbar-->
            <div class="flex h-16 flex-col justify-center">
                <div class="px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between py-3">
                        <!-- Left buttons -->
                        <div>
                            <div
                                class="isolate inline-flex rounded-md shadow-sm sm:space-x-3 sm:shadow-none"
                            >
                                <span class="inline-flex sm:shadow-sm">
                                    <button
                                        type="button"
                                        class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    >
                                        <BookOpenIcon
                                            class="mr-2.5 h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                        <span>Details</span>
                                    </button>
                                    <button
                                        type="button"
                                        class="relative -ml-px hidden items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:inline-flex"
                                    >
                                        <MagnifyingGlassIcon
                                            class="mr-2.5 h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                        <span>Matches</span>
                                    </button>
                                </span>
                                <div class="min-w-0 flex-1"></div>
                                <span class="hidden space-x-3 lg:flex">
                                    <button
                                        type="button"
                                        class="relative -ml-px hidden items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:inline-flex animation-pulse"
                                    >
                                        <AcademicCapIcon
                                            class="mr-2.5 h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                        <span>Create Ad</span>
                                    </button>
                                </span>

                                <Menu
                                    as="div"
                                    class="relative -ml-px block sm:shadow-sm lg:hidden"
                                >
                                    <div>
                                        <MenuButton
                                            class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:rounded-md sm:px-3"
                                        >
                                            <span class="sr-only sm:hidden"
                                                >More</span
                                            >
                                            <span class="hidden sm:inline"
                                                >More</span
                                            >
                                            <ChevronDownIcon
                                                class="h-5 w-5 text-gray-400 sm:ml-2 sm:-mr-1"
                                                aria-hidden="true"
                                            />
                                        </MenuButton>
                                    </div>

                                    <transition
                                        enter-active-class="transition ease-out duration-100"
                                        enter-from-class="transform opacity-0 scale-95"
                                        enter-to-class="transform opacity-100 scale-100"
                                        leave-active-class="transition ease-in duration-75"
                                        leave-from-class="transform opacity-100 scale-100"
                                        leave-to-class="transform opacity-0 scale-95"
                                    >
                                        <MenuItems
                                            class="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        >
                                            <div class="py-1">
                                                <MenuItem v-slot="{ active }">
                                                    <a
                                                        href="#"
                                                        :class="[
                                                            active
                                                                ? 'bg-gray-100 text-gray-900'
                                                                : 'text-gray-700',
                                                            'block px-4 py-2 text-sm sm:hidden'
                                                        ]"
                                                        >Note</a
                                                    >
                                                </MenuItem>
                                                <MenuItem v-slot="{ active }">
                                                    <a
                                                        href="#"
                                                        :class="[
                                                            active
                                                                ? 'bg-gray-100 text-gray-900'
                                                                : 'text-gray-700',
                                                            'block px-4 py-2 text-sm sm:hidden'
                                                        ]"
                                                        >Assign</a
                                                    >
                                                </MenuItem>
                                                <MenuItem v-slot="{ active }">
                                                    <a
                                                        href="#"
                                                        :class="[
                                                            active
                                                                ? 'bg-gray-100 text-gray-900'
                                                                : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        ]"
                                                        >Archive</a
                                                    >
                                                </MenuItem>
                                                <MenuItem v-slot="{ active }">
                                                    <a
                                                        href="#"
                                                        :class="[
                                                            active
                                                                ? 'bg-gray-100 text-gray-900'
                                                                : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        ]"
                                                        >Move</a
                                                    >
                                                </MenuItem>
                                            </div>
                                        </MenuItems>
                                    </transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Message header -->
        </div>

        <div class="min-h-0 flex-1 overflow-y-auto p-6">
            <div
                class="space-y-2 py-4 sm:space-y-4 sm:px-6 lg:px-8 bg-white px-4 shadow sm:rounded-lg"
            >
                <div class="mx-auto max-w-lg">
                    <h2 class="text-lg font-medium text-gray-900">
                        Register your first pet and post a found pet
                    </h2>
                    <p class="mt-1 text-sm text-gray-500">
                        Get started by posting a lost pet. If you found a lost
                        pet, you can also post here
                    </p>
                    <ul
                        role="list"
                        class="mt-6 divide-y divide-gray-200 border-t border-b border-gray-200"
                    >
                        <li v-for="(item, itemIdx) in items" :key="itemIdx">
                            <div
                                class="group relative flex items-start space-x-3 py-4"
                            >
                                <div class="flex-shrink-0">
                                    <span
                                        :class="[
                                            item.iconColor,
                                            'inline-flex items-center justify-center h-10 w-10 rounded-lg'
                                        ]"
                                    >
                                        <component
                                            :is="item.icon"
                                            class="h-6 w-6 text-white"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </div>
                                <div class="min-w-0 flex-1">
                                    <div
                                        class="text-sm font-medium text-gray-900"
                                    >
                                        <a :href="item.href">
                                            <span
                                                class="absolute inset-0"
                                                aria-hidden="true"
                                            />
                                            {{ item.name }}
                                        </a>
                                    </div>
                                    <p class="text-sm text-gray-500">
                                        {{ item.description }}
                                    </p>
                                </div>
                                <div class="flex-shrink-0 self-center">
                                    <ChevronRightIcon
                                        class="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <div class="bg-gray-900">
        <div class="relative overflow-hidden pt-32 pb-96 lg:pt-40">
            <div>
                <img
                    class="absolute bottom-0 left-1/2 w-[1440px] max-w-none -translate-x-1/2"
                    src="https://tailwindui.com/img/component-images/grid-blur-purple-on-black.jpg"
                    alt=""
                />
            </div>
            <div class="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
                <div class="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 class="text-lg font-semibold leading-8 text-indigo-400">
                        Pricing
                    </h2>
                    <p
                        class="mt-2 text-4xl font-bold tracking-tight text-white"
                    >
                        The right price for you,
                        <br class="hidden sm:inline lg:hidden" />whoever you are
                    </p>
                    <p class="mt-6 text-lg leading-8 text-white/60">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Velit numquam eligendi quos odit doloribus
                        molestiae voluptatum.
                    </p>
                </div>
            </div>
        </div>
        <div class="flow-root bg-white pb-10 lg:pb-40">
            <div class="relative -mt-80">
                <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-8"
                    >
                        <div
                            v-for="tier in tiers"
                            :key="tier.name"
                            class="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10"
                        >
                            <div class="p-8 sm:p-10">
                                <h3
                                    class="text-lg font-semibold leading-8 tracking-tight text-indigo-600"
                                    :id="tier.id"
                                >
                                    {{ tier.name }}
                                </h3>
                                <div
                                    class="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900"
                                >
                                    ${{ tier.priceMonthly }}
                                    <span
                                        class="text-lg font-semibold leading-8 tracking-normal text-gray-500"
                                        >/mo</span
                                    >
                                </div>
                                <p
                                    class="mt-6 text-base leading-7 text-gray-600"
                                >
                                    {{ tier.description }}
                                </p>
                            </div>
                            <div class="flex flex-1 flex-col p-2">
                                <div
                                    class="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8"
                                >
                                    <ul role="list" class="space-y-6">
                                        <li
                                            v-for="feature in tier.features"
                                            :key="feature"
                                            class="flex items-start"
                                        >
                                            <div class="flex-shrink-0">
                                                <CheckIcon
                                                    class="h-6 w-6 text-indigo-600"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <p
                                                class="ml-3 text-sm leading-6 text-gray-600"
                                            >
                                                {{ feature }}
                                            </p>
                                        </li>
                                    </ul>
                                    <div class="mt-8">
                                        <a
                                            :href="tier.href"
                                            class="inline-block w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-indigo-700"
                                            :aria-describedby="tier.id"
                                            >Get started today</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative mx-auto mt-8 max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-md lg:max-w-4xl">
                    <div
                        class="flex flex-col gap-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 lg:flex-row lg:items-center lg:gap-8"
                    >
                        <div class="lg:min-w-0 lg:flex-1">
                            <h3
                                class="text-lg font-semibold leading-8 tracking-tight text-indigo-600"
                            >
                                Discounted
                            </h3>
                            <div class="mt-2 text-base leading-7 text-gray-600">
                                Get full access to all of standard license
                                features for solo projects that make less than
                                $20k gross revenue for
                                <span class="font-semibold text-gray-900"
                                    >$29</span
                                >.
                            </div>
                        </div>
                        <div>
                            <a
                                href="#"
                                class="inline-block rounded-lg bg-indigo-50 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-indigo-700 hover:bg-indigo-100"
                                >Buy discounted license
                                <span aria-hidden="true">&rarr;</span></a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/24/outline'
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

const tiers = [
    {
        id: 'tier-hobby',
        name: 'Hobby',
        href: '#',
        priceMonthly: 49,
        description:
            'Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis.',
        features: [
            'Pariatur quod similique',
            'Sapiente libero doloribus modi nostrum',
            'Vel ipsa esse repudiandae excepturi',
            'Itaque cupiditate adipisci quibusdam'
        ]
    },
    {
        id: 'tier-team',
        name: 'Team',
        href: '#',
        priceMonthly: 79,
        description:
            'Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis.',
        features: [
            'Pariatur quod similique',
            'Sapiente libero doloribus modi nostrum',
            'Vel ipsa esse repudiandae excepturi',
            'Itaque cupiditate adipisci quibusdam',
            'Sapiente libero doloribus modi nostrum'
        ]
    }
]
</script>
