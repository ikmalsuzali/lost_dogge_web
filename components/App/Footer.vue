<script setup lang="ts">
const route = useRoute()
const isHome = computed(() => route.path === '/')
</script>

<template>
    <footer
        class="px-4 sm:px-0"
        :class="isHome ? 'bg-blue-700 text-white' : 'mt-10 text-black'"
    >
        <div
            class="container py-4 mx-auto flex flex-col sm:flex-row justify-between gap-2 sm:items-center"
            :class="isHome ? '' : 'border-t'"
        >
            <NuxtLink
                to="/"
                class="font-semibold text-lg"
                :class="isHome ? 'text-white' : 'text-gray-800'"
            >
                <!-- <img
          loading="lazy"
          src="/logo.svg"
          alt="Logo"
          class="max-w-full h-10"
        /> -->
                {{ $t('app_name') }}
            </NuxtLink>
            <div class="text-sm">
                {{ $t('app_name') }} by
                <a
                    class="font-semibold"
                    :class="isHome ? 'text-white' : 'text-gray-800'"
                >
                    Ikmal Suzali
                </a>
                . All rights reserved
            </div>
        </div>
    </footer>
</template>
