<template>
    <label
        v-if="label"
        for="input"
        class="block text-sm font-medium text-gray-700"
        >{{ label }}</label
    >
    <div class="relative mt-1 rounded-md shadow-sm w-full">
        <input
            :value="modelValue"
            id="input"
            name="input"
            :type="type"
            :required="required"
            :disabled="disabled"
            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            :class="{
                'bg-slate-50 text-slate-500 border-slate-200 shadow-none':
                    disabled,
                'border-pink-500 ': errorMessage
            }"
            aria-describedby="suffix"
            @input="$emit('update:modelValue', $event.target.value)"
        />

        <div
            v-if="prefix"
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
        >
            <span
                class="text-gray-500 sm:text-sm"
                :class="{ 'mr-6': type === 'number' }"
                id="suffix"
                >{{ prefix }}</span
            >
        </div>
        <p
            v-if="errorMessage"
            class="mt-2 text-sm text-red-600 dark:text-red-500"
        >
            {{ errorMessage }}
        </p>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    modelValue?: string | number | undefined
    required?: boolean
    label?: string | undefined
    errorMessage?: string | undefined
    type?: string | undefined
    prefix?: string | undefined
    disabled?: boolean
}>()

defineEmits(['update:modelValue'])
</script>
