import { definitions } from "~~/types/supabase"

interface Pet {
  name: string
  description: string
  userId: string
  weight: string
  height: string
  gender: string
  breedId: string
  isVaccinated: string
  status: string
  lostDate: string
  foundDate: string
  contactNumber: string
  email: string
  instagram: string
  facebook: string
  twitter: string
  isDeleted: boolean
}

const usePetRepository = async () => {
  const { $supabase } = useNuxtApp()


const getMyPets = async (
  userId: string,
  offset: number = 0,
  limit: number = 20
) => {
  await $supabase
    .from('pets')
    .select('*')
    .eq('user_id', userId)
    .range(offset, limit)
}

const getPets = async () => {
  const data = await useFetch(`http://0.0.0.0:8080/api/v1/pets`)
  const petsData = data?.data?.value?.pets
  if (!petsData) return []
  const pets: definitions['pets'] = petsData.map(pet =>  pet.json_build_object)
  return pets
}

const getPetDetails = async (petId: string) => {
  await $supabase.from('pets').select('*').eq('pet_id', petId).limit(1).single()
}

const createPet = async (userId: string, payload: Pet) => {
  await $supabase.from('pets').insert([
    {
      name: payload.name,
      description: payload.description,
      user_id: userId,
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
      twitter: payload.twitter,
    },
  ])
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
      twitter: payload.twitter,
    })
    .eq('id', petId)
}

const deletePet = async (petId: string) => {
  await $supabase
    .from('pets')
    .update({
      is_deleted: true,
    })
    .eq('id', petId)
}


return  { getPets,getMyPets, createPet, updatePet, deletePet, getPetDetails }
}

export default usePetRepository
