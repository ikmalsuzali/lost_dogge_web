<template>
    <header class="bg-indigo-600">
        <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
            <div
                class="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none"
            >
                <div class="flex items-center">
                    <a href="#">
                        <span class="sr-only">Your Company</span>
                        <img
                            class="h-20 w-auto"
                            src="~/assets/images/lost-doggo-icon.jpg"
                            alt=""
                        />
                    </a>
                    <div class="ml-10 hidden space-x-8 lg:block">
                        <a
                            v-for="link in navigation"
                            :key="link.name"
                            :href="link.href"
                            class="text-base font-medium text-white hover:text-indigo-50"
                            >{{ link.name }}</a
                        >
                    </div>
                </div>
                <div v-if="auth.user?.id" class="ml-10 space-x-4">
                    <a
                        class="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50 cursor-pointer"
                        @click="routePush('/dashboard/pet')"
                        >Dashboard</a
                    >
                    <a
                        class="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75 cursor-pointer"
                        @click="auth.logout"
                        >Logout</a
                    >
                </div>
                <div v-else class="ml-10 space-x-4">
                    <a
                        class="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75 cursor-pointer"
                        @click="toggleSignupLoginDrawer(AuthType.SIGN_IN)"
                        >Sign in</a
                    >
                    <a
                        class="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50 cursor-pointer"
                        @click="toggleSignupLoginDrawer(AuthType.SIGN_UP)"
                        >Sign up</a
                    >
                </div>
            </div>
            <div class="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
                <a
                    v-for="link in navigation"
                    :key="link.name"
                    @click="routePush(link.href)"
                    class="text-base font-medium text-white hover:text-indigo-50"
                    >{{ link.name }}</a
                >
            </div>
        </nav>
    </header>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useDrawerStore } from '~~/stores/drawer'
import { AuthType } from '~~/stores/drawer'
import { useAuthStore } from '~~/stores/auth'

const drawer = useDrawerStore()
const auth = useAuthStore()

const router = useRouter()

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Lost', href: '/pets?type=found' },
    { name: 'Found', href: '/pets?type=lost' }
    // { name: 'Pricing', href: '/pricing' }
]

const routePush = (path: string) => {
    router.push(path)
}

const toggleSignupLoginDrawer = (type: AuthType) => {
    drawer.toggleSignupLoginDrawer()
    drawer.setDrawerType(type)
}
</script>
