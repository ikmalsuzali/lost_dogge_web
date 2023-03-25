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

    const onRecentlyViewedPetsClick = (petId: string) => {
        try {
            recentlyViewedPetIds.value.unshift(petId)
            unref(recentlyViewedPetIds).length = 20

            recentlyViewedPetIds.value = [
                ...new Set(unref(recentlyViewedPetIds))
            ]

            recentlyViewedPetIds.value = recentlyViewedPetIds.filter(function (
                petId
            ) {
                return petId !== undefined || petId !== null
            })

            fetchPetsById()
            localStorage.setItem(
                LocalStorage.RECENTLY_CLICKED,
                JSON.stringify(unref(recentlyViewedPetIds))
            )
        } catch (error) {}
    }

    const myPetIds = computed(() => pets.value?.map(pet => pet.id) || [])

    const fetchPetsById = () => {
        try {
            if (!unref(recentlyViewedPetIds).length) return

            recentlyViewedPetDetails.value = getPetsById(
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
        recentlyViewedPetIds
    }
})
