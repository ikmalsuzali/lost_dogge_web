import { defineStore } from 'pinia'
import { RemovableRef, useStorage } from '@vueuse/core'
import { LocalStorage } from './auth'
import usePetRepository from '~/repositories/pets'
import { useAuthStore } from './auth'

export interface Pet extends Record<string, any> {}

export type PetState = {
    pets: RemovableRef<Pet[]> | null
    recentlyViewedPetIds: RemovableRef<string[]> | null
    recentlyViewedPetDetails: RemovableRef<Pet[]> | null
}

const pets = ref(useStorage(LocalStorage.PETS, []))
const recentlyViewedPetIds = ref(useStorage(LocalStorage.RECENTLY_CLICKED, []))
const recentlyViewedPetDetails = ref([])

export const usePetStore = defineStore('pet', () => {
    const { getMyPets, getPetsById } = usePetRepository()
    const auth = useAuthStore()

    const fetchMyPets = async () => {
        try {
            pets.value = await getMyPets(auth.user?.id)
            localStorage.setItem(LocalStorage.PETS, JSON.stringify(pets.value))
        } catch (error) {}
    }

    const onRecentlyViewedPetsClick = async (petId: string) => {
        recentlyViewedPetIds.value.unshift(petId)

        recentlyViewedPetIds.value = [...new Set(unref(recentlyViewedPetIds))]

        recentlyViewedPetIds.value = unref(recentlyViewedPetIds).filter(
            petId => {
                return petId !== undefined || petId !== null
            }
        )

        await fetchPetsById()
        localStorage.setItem(
            LocalStorage.RECENTLY_CLICKED,
            JSON.stringify(unref(recentlyViewedPetIds))
        )
    }

    const myPetIds = computed(() => pets.value?.map(pet => pet.id) || [])

    const fetchPetsById = async () => {
        try {
            if (!unref(recentlyViewedPetIds).length) return
            console.log(recentlyViewedPetIds.value)

            recentlyViewedPetDetails.value = await getPetsById(
                unref(recentlyViewedPetIds)
            )
        } catch (error) {}
    }

    fetchPetsById()

    return {
        pets,
        fetchMyPets,
        myPetIds,
        onRecentlyViewedPetsClick,
        recentlyViewedPetIds,
        recentlyViewedPetDetails
    }
})
