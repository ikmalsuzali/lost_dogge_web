<template>
    <div>
        <Combobox as="div" v-model="searchedItem">
            <div class="relative mt-1">
                <ComboboxInput
                    class="rounded-md border border-gray-300 bg-white pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-md"
                    :class="{ 'w-full': block }"
                    :placeholder="placeholder"
                    :display-value="item => item?.name"
                    @input="searchedItem = $event.target.value"
                />
                <!-- <ComboboxButton
                class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
            >
                <MapPinIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </ComboboxButton> -->

                <ComboboxOptions
                    v-if="mappedItems.length > 0"
                    class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                >
                    <ComboboxOption
                        v-for="item in mappedItems"
                        :key="item.id"
                        :value="item"
                        as="template"
                        v-slot="{ active, selected }"
                    >
                        <li
                            :class="[
                                'relative cursor-default select-none py-2 pl-3 pr-9',
                                active
                                    ? 'bg-indigo-600 text-white'
                                    : 'text-gray-900'
                            ]"
                        >
                            <span
                                :class="[
                                    'block truncate',
                                    selected && 'font-semibold'
                                ]"
                            >
                                {{ item.name }}
                            </span>

                            <span
                                v-if="selected"
                                :class="[
                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                    active ? 'text-white' : 'text-indigo-600'
                                ]"
                            >
                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                        </li>
                    </ComboboxOption>
                </ComboboxOptions>
            </div>
        </Combobox>
        <div v-if="errorMessage" class="text-error-500 text-sm mt-1">
            {{ errorMessage }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    ComboboxButton
} from '@headlessui/vue'
import { MapPinIcon, CheckIcon } from '@heroicons/vue/24/outline'
import { refThrottled } from '@vueuse/core'

const props = withDefaults(
    defineProps<{
        modelValue?: string | number | undefined
        throttleTime?: number
        items: Array<any>
        itemKey?: string | number | undefined
        itemValue?: string | number | undefined
        placeholder?: string
        block: boolean
        errorMessage?: string | undefined
    }>(),
    {
        modelValue: undefined,
        throttleTime: 0,
        items: () => [],
        itemKey: 'id',
        itemValue: 'name',
        placeholder: '',
        block: false,
        errorMessage: ''
    }
)

const emit = defineEmits(['update:modelValue', 'returned-object'])

const searchedItem = ref()
searchedItem.value = {
    name: props.modelValue
}
const throttledSearchItem = refThrottled(searchedItem, props.throttleTime)

const mappedItems = computed(() =>
    props.items?.length === 0
        ? []
        : props.items.map(_item => {
              return {
                  id: _item[props.itemKey],
                  name: _item[props.itemValue],
                  itemMeta: _item
              }
          })
)

watch(throttledSearchItem, val => {
    if (typeof val === 'string') {
        emit('update:modelValue', val)
        return
    } else {
        emit('update:modelValue', val.name)
        emit('returned-object', val)
    }
})
</script>
