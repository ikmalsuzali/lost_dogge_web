<template>
    <div class="min-h-0 flex-1 overflow-y-auto p-6">
        <div
            class="space-y-2 py-4 sm:space-y-4 sm:px-6 lg:px-8 bg-white px-4 shadow sm:rounded-lg"
        >
            <div class="mx-auto max-w-lg">
                <h2 class="text-lg font-medium text-gray-900">
                    Register your first pet and post a found pet
                </h2>
                <p class="mt-1 text-sm text-gray-500">
                    Get started by posting a lost pet. If you found a lost pet,
                    you can also post here
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
                                <div class="text-sm font-medium text-gray-900">
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
</template>

<script lang="ts" setup>
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
import {
    MegaphoneIcon,
i    BanknotesIcon,
    DocumentTextIcon
} from '@heroicons/vue/24/outline'

const items = [
    {
        name: 'Register your first pet',
        description: 'You can register a pet first or post a lost/found pet',
        href: 'pet/create',
        iconColor: 'bg-blue-500',
        icon: DocumentTextIcon
    },
    {
        name: 'Purchase a subscription',
        description:
            'Choose a subscription of either 15 or 30 days to run ads for',
        href: '#',
        iconColor: 'bg-blue-500',
        icon: BanknotesIcon
    },
    {
        name: 'Create an ad',
        description:
            'Review the ad and immediately get started posting a Facebook & Instagram Ad',
        href: '#',
        iconColor: 'bg-blue-500',
        icon: MegaphoneIcon
    }
]
</script>
