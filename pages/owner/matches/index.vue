<template>
    <div>
        <ul
            role="list"
            class="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
            <li
                v-for="(petMatch, index) in petMatches"
                :key="index"
                class="col-span-1"
            >
                <div
                    class="w-12 h-12 max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
                >
                    <div v-if="petMatch?.found_pet_id.pet_images?.length">
                        <carousel :items-to-show="1">
                            <slide
                                v-for="(image, imageIndex) in petMatch
                                    ?.found_pet_id.pet_images"
                                :key="imageIndex"
                            >
                                <img
                                    class="aspect-video w-full object-fill object-center"
                                    :src="image.url"
                                />
                            </slide>
                        </carousel>
                    </div>
                    <div class="p-5">
                        <div class="flex items-center justify-between">
                            <div class="text-md text-gray-900 dark:text-white">
                                Located near
                                {{ petMatch?.found_pet_id?.address }}
                            </div>
                            <a
                                @click="
                                    onPetMatchViewClick(petMatch.found_pet_id)
                                "
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-auto"
                                >View</a
                            >
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <PetViewDrawer
            v-model:drawer-open="isPetViewDrawerOpen"
            :type="PetType.FOUND_BY_MATCH"
            :selectedPet="selectedPet"
            @pet-match-type-click="
                val => onPetMatchClick(val.selectedPetId, val.type)
            "
            @message-click=""
        />
    </div>
</template>

<script lang="ts" setup>
import { Carousel, Slide } from 'vue3-carousel'
import { usePetStore } from '~~/stores/pet'
import usePetRepository from '~/repositories/pets'
import PetViewDrawer from '~~/components/organism/PetViewDrawer.vue'
import { PetMatchPossibleType, PetType } from '~~/types'

import 'vue3-carousel/dist/carousel.css'

definePageMeta({
    layout: 'dashboard',
    middleware: 'auth'
})

const petStore = usePetStore()
const { getMyPetMatches, updatePetMatchType } = usePetRepository()

const petMatches = ref([])
const selectedPet = ref({})
const isPetViewDrawerOpen = ref(false)

const fetchMyPetMatches = async () => {
    try {
        petMatches.value = await getMyPetMatches(petStore.myPetIds)
    } catch (error) {
        console.log(error)
    }
}

const onPetMatchViewClick = pet => {
    console.log(
        '🚀 ~ file: index.vue ~ line 78 ~ onPetMatchViewClick ~ selectedPet',
        selectedPet
    )
    selectedPet.value = pet
    isPetViewDrawerOpen.value = true
}

const onPetMatchClick = async (
    selectedPetId: string,
    type: PetMatchPossibleType.MATCH
) => {
    try {
        const petMatch = petMatches.value?.find(
            petMatch => petMatch.found_pet_id?.id === selectedPetId
        )
        console.log(petMatch)
        if (!petMatch.id) return
        await updatePetMatchType(petMatch.id, type)
    } catch (error) {
        console.log(error)
    } finally {
        isPetViewDrawerOpen.value = false
    }
}

fetchMyPetMatches()
</script>
