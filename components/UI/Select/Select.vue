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
    modelValue: string
    items: SelectItem[]
    placeholder?: string
    hideCheckIcon?: boolean
    outlined?: boolean
    large?: boolean
    small?: boolean
    disabled?: boolean
    errorMessage?: string
}

const props = withDefaults(defineProps<Props>(), {
    items: () => [],
    placeholder: 'Choose',
    hideCheckIcon: false,
    outlined: false,
    large: false,
    small: false,
    disabled: false,
    errorMessage: ''
})

const emit = defineEmits(['update:modelValue'])

const { modelValue } = toRefs(props)

const selected = ref<SelectItem | undefined>(
    props.items.find(item => item.value === unref(modelValue))
)

watch(modelValue, val => {
    selected.value = props.items.find(item => item.value === val)
})

watch(selected, val => {
    emit('update:modelValue', val.value)
})
</script>

<template>
    <div class="relative w-full">
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
                                        selected
                                            ? 'font-semibold'
                                            : 'font-normal',
                                        'block truncate'
                                    ]"
                                    >{{ item.text }}</span
                                >

                                <span
                                    v-if="selected"
                                    :class="[
                                        active
                                            ? 'text-white'
                                            : 'text-indigo-600',
                                        'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                    ]"
                                >
                                    <CheckIcon
                                        class="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </span>
                            </li>
                        </ListboxOption>
                    </ListboxOptions>
                </transition>
            </div>
        </Listbox>
        <p
            v-if="errorMessage"
            class="mt-2 text-sm text-red-600 dark:text-red-500"
        >
            {{ errorMessage }}
        </p>
    </div>
</template>
