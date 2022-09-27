import { definitions } from '~~/types/supabase'


const animalTypes = ref()

// const animalTypes = computed(() => {
//   animalTypes
// })

const useAnimalRepository = async() => {
  const {$supabase} = useNuxtApp()

  const getAnimalTypes = async () => {
    const { data } = await $supabase
      .from<definitions['animal_types']>('animal_types')
      .select('*, animal_breeds(*)')

      animalTypes.value = data

      return animalTypes.value
  }

  const getBreedsByType = (animalTypeId: string) => {
    let _animalBreeds = []

    animalTypes.value?.forEach(_type => {
      _animalBreeds = [..._animalBreeds, ..._type.animal_breeds]
    });

    if (!animalTypeId) return _animalBreeds

    return  _animalBreeds.filter(_breed => {
      _breed.animal_type_id === animalTypeId
    })
  }

  await getAnimalTypes()

  return {
    getAnimalTypes,
    getBreedsByType
  }

}

export default useAnimalRepository