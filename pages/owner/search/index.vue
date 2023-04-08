<template>
    <div>
        <div>
            <h1
                class="text-xl text-gray-900 font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
                Search pets
            </h1>
            <p class="mt-6 text-gray-600 text-xl">
                Don't lose hope, we are here to help. There are not many like
                your beloved pet. Please select the pet you lost to get started.
            </p>
        </div>
        <Carousel
            :items-to-show="5"
            class="my-5"
            :autoplay="3000"
            wrap-around
            autoplayHoverPause
            snapAlign="start"
        >
            <Slide v-for="(pet, index) in myPets" :key="index" class="p-2">
                <div
                    class="mx-auto flex w-full flex-col justify-center bg-white rounded-2xl shadow-none shadow-slate-300/60 cursor-pointer hover:shadow-xl"
                    @click="onPetClick(pet)"
                >
                    <img
                        class="aspect-square w-full rounded-2xl object-cover object-center"
                        :src="
                            pet?.pet_images?.length
                                ? pet.pet_images[0].url
                                : 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        "
                    />
                </div>
            </Slide>
        </Carousel>
        <OrganismPetSearch />
    </div>
</template>

<script lang="ts" setup>
import { Carousel, Slide } from 'vue3-carousel'
import usePetRepository from '~/repositories/pets'
import { useAuthStore } from '~~/stores/auth'
import 'vue3-carousel/dist/carousel.css'

definePageMeta({
    layout: 'dashboard',
    middleware: 'auth',
    mode: 'in-out'
})

const { getMyPets } = usePetRepository()
const auth = useAuthStore()
const myPets = ref([{}])
const selectedPet = ref({})

const onPetClick = pet => {
    selectedPet.value = pet
}

const fetchMyPets = async (userId: string) => {
    try {
        myPets.value = await getMyPets(userId)
    } catch (error) {}
}
fetchMyPets(auth?.user?.id)
</script>
