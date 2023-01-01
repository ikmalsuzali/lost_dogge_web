import { definitions } from '~~/types/supabase'
import axios from 'axios'
import { PetMatchPossibleType } from '~~/types'

const usePetRepository = () => {
    const { $supabase } = useNuxtApp()

    const getMyPets = async (
        userId: string,
        offset: number = 0,
        limit: number = 20
    ) => {
        const { data, error } = await $supabase
            .from('pets')
            .select('*, pet_images(*), breed:breed_id(*)')
            .eq('user_id', userId)
            .range(offset, limit)

        if (error) throw error
        return data
    }

    const getRandomPets = async (petStatus: number) => {
        const { data, error } = await $supabase
            .from('pets')
            .select('id, name, pet_images(*)')
            .eq('status', petStatus)
            .range(0, 30)
            .order('created_at', { ascending: false })

        if (error) throw error
        return data
    }

    const getPets = async payload => {
        const data = await axios(`http://0.0.0.0:8080/api/v1/pets`, {
            params: payload
        })
        const petsData = data?.data?.pets
        if (!petsData) return []
        const pets: definitions['pets'] = petsData
        return pets
    }

    const getPetDetails = async (petId: string) => {
        await $supabase
            .from('pets')
            .select('*')
            .eq('pet_id', petId)
            .limit(1)
            .single()
    }

    const getAnimalTypes = async () => {
        const { data, error } = await $supabase.from('animal_types').select('*')
        if (error) throw error
        return data
    }

    const getBreeds = async () => {
        const { data, error } = await $supabase
            .from('animal_breeds')
            .select('*')
        if (error) throw error
        return data
    }

    const createPet = async payload => {
        const { data, error } = await $supabase.from('pets').insert([
            {
                name: payload.name,
                description: payload.description,
                user_id: payload.user_id,
                weight: payload.weight,
                height: payload.height,
                gender: payload.gender,
                breed_id: payload.breed_id,
                is_vaccinated: payload.is_vaccinated || false,
                status: payload.status,
                lost_date: payload.lostDate,
                found_date: payload.foundDate,
                contact_number: payload.contactNumber,
                email: payload.email,
                instagram: payload.instagram,
                facebook: payload.facebook,
                twitter: payload.twitter
            }
        ])
        if (error) throw error
        return data
    }

    const uploadPetImage = async (userId: string, file: File) => {
        const petPath = `public/${userId}_${new Date().getTime()}`
        const { data: uploadData, error: uploadError } = await $supabase.storage
            .from('pets')
            .upload(petPath, file, {
                cacheControl: '3600'
            })

        if (uploadError) throw uploadError

        console.log(uploadData)
        const { data: publicUrlData, error: publicUrlError } =
            await $supabase.storage.from('pets').getPublicUrl(petPath)

        console.log(publicUrlData)
        if (publicUrlError) throw publicUrlError

        return publicUrlData
    }

    const updatePet = async (petId: string, payload: Pet) => {
        await $supabase
            .from('pets')
            .update({
                name: payload.name,
                description: payload.description,
                weight: payload.weight,
                height: payload.height,
                gender: payload.gender,
                breed_id: payload.breedId,
                is_vaccinated: payload.isVaccinated || false,
                status: payload.status,
                lost_date: payload.lostDate,
                found_date: payload.foundDate,
                contact_number: payload.contactNumber,
                email: payload.email,
                instagram: payload.instagram,
                facebook: payload.facebook,
                twitter: payload.twitter
            })
            .eq('id', petId)
    }

    const deletePet = async (petId: string) => {
        await $supabase
            .from('pets')
            .update({
                is_deleted: true
            })
            .eq('id', petId)
    }

    const getPetChatLists = async (petMatchId: string) => {
        const { data } = await $supabase
            .from('messages')
            .select('*')
            .eq('pet_match_id', petMatchId)
            .order('created_at', { ascending: false })

        return data
    }

    const createNewMessage = async (
        petMatchId: string,
        petId: string,
        content: string,
        isOwner: boolean = true
    ) => {
        const { data } = await $supabase.from('messages').insert({
            pet_match_id: petMatchId,
            content,
            ...(petId && isOwner
                ? { lost_pet_id: petId }
                : { found_pet_id: petId })
        })

        return data
    }

    const getPetMatch = async (lostPetId: string, foundPetId: string) => {
        const { data, error } = await $supabase
            .from('pet_matches')
            .select('*')
            .eq('lost_pet_id', lostPetId)
            .eq('found_pet_id', foundPetId)
            .single()

        if (error) throw error
        return data
    }

    const onNewMessage = (handler, petMatchId: string) => {
        $supabase
            .from(`messages:pet_match_id=eq.${petMatchId}`)
            .on('INSERT', payload => {
                handler(payload.new)
            })
            .subscribe()
    }

    // const petChats = async (id: string) => {
    //     if (id) {
    //         await $supabase
    //             .from(`messages:pet_ma=eq.${id}`)
    //             .on('*', payload => {
    //                 console.log(payload)
    //             })
    //             .subscribe()
    //     }
    // }

    const getMyPetMatches = async (
        petIds: string[],
        types: number[] = [
            PetMatchPossibleType.MATCH,
            PetMatchPossibleType.NO_MATCH,
            PetMatchPossibleType.PENDING,
            PetMatchPossibleType.POSSIBLE
        ]
    ) => {
        let { data, error } = await $supabase
            .from('pet_matches')
            .select('*, lost_pet_id(*), found_pet_id(*, pet_images(*))')
            .in('lost_pet_id', petIds)
            .in('type', types)

        if (error) throw error
        return data
    }

    const updatePetMatchType = async (
        id: string,
        type: PetMatchPossibleType
    ) => {
        let { data, error } = await $supabase
            .from('pet_matches')
            .update({ type })
            .eq('id', id)
        if (error) throw error
        return data
    }

    // const getPetMatchMessage = async (petMatchId: string) => {
    //     const data = await $supabase
    //         .from(`messages:pet_match_id=eq.${petMatchId}`)
    //         .on('*', payload => {

    //         })
    //         .subscribe()
    // }

    return {
        getPets,
        getMyPets,
        createPet,
        updatePet,
        deletePet,
        getPetDetails,
        uploadPetImage,
        getAnimalTypes,
        getBreeds,
        getMyPetMatches,
        updatePetMatchType,
        getPetMatch,
        getPetChatLists,
        createNewMessage,
        onNewMessage,
        getRandomPets
    }
}

export default usePetRepository
