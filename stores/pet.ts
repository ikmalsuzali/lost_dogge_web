import { defineStore } from 'pinia'
import { RemovableRef, useStorage } from '@vueuse/core'
import { LocalStorage } from './auth'
import usePetRepository from '~/repositories/pets'
import { useAuthStore } from './auth'

export interface Pet extends Record<string, any> {}

export type PetState = {
    pets: RemovableRef<Pet[]> | null
}

const pets = ref(useStorage(LocalStorage.PETS, []))
const recentlyClickedPets = ref(useStorage(LocalStorage.))

export const usePetStore = defineStore('pet', () => {
    const { getMyPets } = usePetRepository()
    const auth = useAuthStore()
    const recentlyClick

    const fetchMyPets = async () => {
        try {
            pets.value = await getMyPets(auth.user?.id)
            localStorage.setItem(LocalStorage.PETS, JSON.stringify(pets.value))
        } catch (error) {
            console.log(error)
        }
    }

    const myPetIds = computed(() => pets.value?.map(pet => pet.id) || [])

    return { pets, fetchMyPets, myPetIds }
})
