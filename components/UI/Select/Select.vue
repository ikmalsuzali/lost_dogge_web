<script setup lang="ts">
import { ref, toRefs, watch } from 'vue'
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption
} from '@headlessui/vue'
import type { SelectItem } from './types'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

type Props = {
    modelValue: SelectItem
    items: SelectItem[]
    placeholder?: string
    hideCheckIcon?: boolean
    outlined?: boolean
    large?: boolean
    small?: boolean
    disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    items: () => [],
    placeholder: 'Choose',
    hideCheckIcon: false,
    outlined: false,
    large: false,
    small: false,
    disabled: false
})

const emit = defineEmits(['update:modelValue'])

const { modelValue } = toRefs(props)

const selected = ref<SelectItem | undefined>(modelValue.value)

watch(modelValue, val => {
    selected.value = val
})

watch(selected, val => {
    emit('update:modelValue', val)
})
</script>

<template>
    <Listbox v-model="selected" :disabled="disabled" class="w-full">
        <div class="relative mt-1">
            <ListboxButton
                class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            >
                <span class="block truncate">{{
                    selected?.text || placeholder
                }}</span>
                <span
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                >
                    <ChevronUpDownIcon
                        class="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                </span>
            </ListboxButton>
            <transition
                leave-active-class="transition ease-in duration-100"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <ListboxOptions
                    class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                >
                    <ListboxOption
                        as="template"
                        v-for="item in items"
                        :key="item.text"
                        :value="item"
                        v-slot="{ active, selected }"
                    >
                        <li
                            :class="[
                                active
                                    ? 'text-white bg-indigo-600'
                                    : 'text-gray-900',
                                'relative cursor-default select-none py-2 pl-8 pr-4'
                            ]"
                        >
                            <span
                                :class="[
                                    selected ? 'font-semibold' : 'font-normal',
                                    'block truncate'
                                ]"
                                >{{ item.text }}</span
                            >

                            <span
                                v-if="selected"
                                :class="[
                                    active ? 'text-white' : 'text-indigo-600',
                                    'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                ]"
                            >
                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </transition>

            <!-- <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <ListboxOptions
                    class="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                >
                    <ListboxOption
                        v-slot="{ active, selected }"
                        v-for="item in items"
                        :key="item.text"
                        :value="item"
                        as="template"
                    >
                        <div class="px-1">
                            <li
                                v-if="item.divider"
                                class="border-b -mx-1 my-1"
                            ></li>
                            <li
                                v-else
                                :class="[
                                    'cursor-default select-none relative py-2 pr-4 rounded',
                                    active ? 'bg-gray-100' : 'text-gray-900',
                                    !hideCheckIcon ? 'pl-10' : 'pl-4'
                                ]"
                            >
                                <span
                                    :class="[
                                        selected
                                            ? 'font-medium text-primary-500'
                                            : 'font-normal',
                                        'block truncate'
                                    ]"
                                >
                                    {{ item.text }}
                                </span>
                                <span
                                    v-if="selected && !hideCheckIcon"
                                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-500"
                                >
                                    <Icon
                                        name="heroicons:check"
                                        class="w-5 h-5"
                                        aria-hidden="true"
                                    />
                                </span>
                            </li>
                        </div>
                    </ListboxOption>
                </ListboxOptions>
            </transition> -->
        </div>
    </Listbox>
</template>
