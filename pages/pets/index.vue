<template>
    <div class="mx-auto max-w-7xl py-24 lg:items-center lg:gap-x-10 lg:px-8">
        <div class="relative mx-10 mb-10 rounded-xl">
            <div
                class="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2 rounded-xl z-10"
            >
                <img
                    class="h-full w-full object-cover rounded-l-xl"
                    src="https://fhasuqzjmruhvugclutt.supabase.co/storage/v1/object/public/pets/website/andrew-s-ouo1hbizWwo-unsplash%20(2).jpg"
                    alt=""
                />
            </div>
            <div
                class="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 bg-[#F96A64] rounded-xl"
            >
                <div class="md:ml-auto md:w-1/2 md:pl-10">
                    <p
                        class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                    >
                        Start searching for lost pets around your area
                    </p>
                    <p class="mt-3 text-lg text-white">
                        We strive to help you find your lost pet. Our mission to
                        help reunite you with your beloved pet. With the help of
                        our AI and the help of the community we scan through
                        matching possibilities of your pet
                    </p>
                </div>
            </div>
        </div>
        <PetSearch />
    </div>
</template>

<script lang="ts" setup>
import PetSearch from '~/components/organism/PetSearch.vue'

definePageMeta({
    layout: 'page'
})
</script>
