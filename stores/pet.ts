import { defineStore } from 'pinia'
import { RemovableRef, useStorage } from '@vueuse/core'
import { LocalStorage } from './auth'
import usePetRepository from '~/repositories/pets'
import { useAuthStore } from './auth'

export interface Pet extends Record<string, any> {}

export type PetState = {
    pets: RemovableRef<Pet[]> | null
    recentlyViewedPets: RemovableRef<string[]> | null
}

const pets = ref(useStorage(LocalStorage.PETS, []))
const recentlyViewedPets = ref(useStorage(LocalStorage.RECENTLY_CLICKED, []))

export const usePetStore = defineStore('pet', () => {
    const { getMyPets } = usePetRepository()
    const auth = useAuthStore()

    const fetchMyPets = async () => {
        try {
            pets.value = await getMyPets(auth.user?.id)
            localStorage.setItem(LocalStorage.PETS, JSON.stringify(pets.value))
        } catch (error) {
            console.log(error)
        }
    }

    const onRecentlyViewedPetsClick = (petId: string) => {
        try {
            console.log('pet id', petId)
            recentlyViewedPets.value.unshift(petId)
            recentlyViewedPets.value = [...new Set(unref(recentlyViewedPets))]
            unref(recentlyViewedPets).length = 20
            console.log(recentlyViewedPets.value)
            localStorage.setItem(
                LocalStorage.RECENTLY_CLICKED,
                JSON.stringify(unref(recentlyViewedPets))
            )
        } catch (error) {}
    }

    const myPetIds = computed(() => pets.value?.map(pet => pet.id) || [])

    return {
        pets,
        fetchMyPets,
        myPetIds,
        onRecentlyViewedPetsClick,
        recentlyViewedPets
    }
})
