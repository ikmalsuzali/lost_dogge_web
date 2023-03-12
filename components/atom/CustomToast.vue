<template>
    <div class="items-start flex">
        <div class="flex mr-2">
            <img
                class="h-12 w-12 rounded-full"
                :src="
                    toastProps.data.petImage ||
                    '~/assets/images/logo-lost-doggo.svg'
                "
            />
        </div>
        <div class="grow overflow-hidden">
            <div>{{ toastProps.data.petName }}</div>
            <div class="flex text-gray-500 text-sm">
                {{ toastProps.data.title }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import type { ToastOptions } from 'vue3-toastify'
import type { PropType } from 'vue'

export default {
    name: 'Msg',
    props: {
        closeToast: Function as PropType<(e?: MouseEvent) => void>,
        toastProps: Object as PropType<ToastOptions>
    }
}
</script>
