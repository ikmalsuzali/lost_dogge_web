<template>
    <TransitionRoot as="template" :show="drawerOpenState">
        <Dialog as="div" class="relative z-10" @close="drawerOpenState = false">
            <TransitionChild
                as="template"
                enter="ease-in-out duration-500"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-500"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div
                    class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                />
            </TransitionChild>
            <div class="fixed inset-0" />
            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div
                        class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16"
                    >
                        <TransitionChild
                            as="template"
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enter-from="translate-x-full"
                            enter-to="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leave-from="translate-x-0"
                            leave-to="translate-x-full"
                        >
                            <DialogPanel
                                class="pointer-events-auto w-screen max-w-md"
                            >
                                <div
                                    class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                                >
                                    <div class="px-4 py-6 sm:px-6">
                                        <div
                                            class="flex items-start justify-between"
                                        >
                                            <h2
                                                id="slide-over-heading"
                                                class="text-lg font-medium text-gray-900"
                                            >
                                                {{ props.drawerTitle }}
                                            </h2>
                                            <div
                                                class="ml-3 flex h-7 items-center"
                                            >
                                                <button
                                                    type="button"
                                                    class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                                                >
                                                    <span class="sr-only"
                                                        >Close panel</span
                                                    >
                                                    <XMarkIcon
                                                        class="h-6 w-6"
                                                        aria-hidden="true"
                                                        @click="
                                                            drawerOpenState = false
                                                        "
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <slot />
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script lang="ts" setup>
import {
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const props = withDefaults(
    defineProps<{
        drawerOpen: boolean
        drawerTitle?: string
    }>(),
    {
        drawerOpen: false,
        drawerTitle: ''
    }
)

const emit = defineEmits(['update:drawerOpen'])

const drawerOpenState = computed({
    get: () => props.drawerOpen,
    set: value => {
        emit('update:drawerOpen', value)
    }
})
</script>
