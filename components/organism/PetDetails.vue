<template>
    <div class="min-h-0 flex-1 overflow-y-auto p-6">
        <div
            class="space-y-2 py-4 sm:space-y-4 bg-white px-4 shadow sm:rounded-lg"
        >
            <form>
                <div class="flex-1">
                    <div class="bg-gray-50 px-4 py-6 sm:px-6">
                        <div class="flex items-start justify-between space-x-3">
                            <div class="space-y-1">
                                <div class="text-lg font-medium text-gray-900">
                                    {{ routestateMeta()?.header }}
                                </div>
                                <p class="text-sm text-gray-500">
                                    {{ routestateMeta()?.subtitle }}
                                </p>
                            </div>
                            <div class="flex h-7 items-center">
                                <button
                                    type="button"
                                    class="text-gray-400 hover:text-gray-500"
                                    @click="isRegisterPetDrawerOpen = false"
                                >
                                    <span class="sr-only">Close panel</span>
                                    <XMarkIcon
                                        class="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        class="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0"
                    >
                        <div
                            class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
                        >
                            <div>
                                <label
                                    for="project-name"
                                    class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                                    >Status</label
                                >
                            </div>
                            <div class="sm:col-span-2">
                                <Select
                                    v-model="myPet.status"
                                    placeholder="Status"
                                    :items="selectPetStatus"
                                />
                            </div>
                        </div>
                        <div
                            class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
                        >
                            <div>
                                <label
                                    for="project-name"
                                    class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                                    >Pet Image(s)</label
                                >
                            </div>
                        </div>
                        <div>
                            <Carousel :items-to-show="3">
                                <Slide
                                    v-for="(image, index) in myPet.images"
                                    :key="image"
                                    class="p-2"
                                >
                                    <div class="relative">
                                        <img
                                            class="aspect-square w-full object-cover object-center"
                                            :src="image"
                                        />
                                        <button
                                            class="absolute top-0 right-0 bg-red-500 text-white p-2 rounded hover:bg-blue-800 m-2"
                                            @click="onDeleteImageClick(index)"
                                        >
                                            <XMarkIcon
                                                class="h-3 w-3"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </Slide>

                                <template #addons>
                                    <pagination />
                                </template>
                            </Carousel>
                        </div>
                        <div class="flex justify-center items-center w-full">
                            <label
                                for="dropzone-file"
                                class="flex flex-col justify-center items-center w-full h-36 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                                <div
                                    class="flex flex-col justify-center items-center p-2"
                                >
                                    <svg
                                        aria-hidden="true"
                                        class="mb-3 w-10 h-10 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                        ></path>
                                    </svg>
                                    <p
                                        class="mb-2 text-sm text-gray-500 dark:text-gray-400"
                                    >
                                        <span class="font-semibold"
                                            >Click to upload</span
                                        >
                                        or drag and drop
                                    </p>
                                    <p
                                        class="text-xs text-gray-500 dark:text-gray-400"
                                    >
                                        SVG, PNG, JPG (MAX. 800x400px)
                                    </p>
                                </div>
                                <input
                                    ref="dropzoneFile"
                                    id="dropzone-file"
                                    type="file"
                                    multiple
                                    class="hidden"
                                    accept=".jpg, .jpeg, .png"
                                    @change="uploadImage($event)"
                                    @click="$event.target.value = ''"
                                />
                                <p
                                    v-if="errorMessages.images"
                                    class="mt-2 text-sm text-red-600 dark:text-red-500"
                                >
                                    {{ errorMessages.images }}
                                </p>
                            </label>
                        </div>
                        <div
                            class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
                        >
                            <div>
                                <label
                                    for="project-name"
                                    class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                                    >Pet's name</label
                                >
                            </div>
                            <div class="sm:col-span-2">
                                <Input
                                    v-model="myPet.name"
                                    required
                                    :error-message="errorMessages.name"
                                />
                            </div>
                        </div>

                        <div
                            class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
                        >
                            <div>
                                <label
                                    for="project-name"
                                    class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                                    >Type</label
                                >
                            </div>
                            <div class="sm:col-span-2 space-x-2 flex">
                                <Select
                                    v-model="myPet.animal_type_id"
                                    placeholder="Select a type"
                                    :items="selectAnimalTypes"
                                    :error-message="errorMessages.animal_type"
                                />
                                <!-- <Select
                                                        v-model="
                                                            myPetAnimalBreed
                                                        "
                                                        placeholder="Select a breed"
                                                        :items="filteredBreeds"
                                                        :error-message="
                                                            errorMessages.breed
                                                        "
                                                    /> -->
                            </div>
                        </div>

                        <div
                            class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
                        >
                            <div>
                                <label
                                    for="project-name"
                                    class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                                    >Gender</label
                                >
                            </div>
                            <div class="sm:col-span-2">
                                <Switch
                                    v-model="myPet.gender"
                                    :label="
                                        myPet.gender
                                            ? Gender[Gender.Female]
                                            : Gender[Gender.Male]
                                    "
                                />
                            </div>
                        </div>

                        <div
                            class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
                        >
                            <div>
                                <label
                                    for="project-description"
                                    class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                                    >Description</label
                                >
                            </div>
                            <div class="sm:col-span-2">
                                <textarea
                                    v-model="myPet.description"
                                    id="project-description"
                                    name="project-description"
                                    rows="3"
                                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div
                            class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
                        >
                            <div>
                                <label
                                    for="project-name"
                                    class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                                    >Height/Weight</label
                                >
                            </div>
                            <div class="sm:col-span-2 space-x-2 flex">
                                <Input
                                    class="w-full"
                                    v-model="myPet.height"
                                    type="number"
                                    prefix="inches"
                                />
                                <Input
                                    class="w-full"
                                    v-model="myPet.weight"
                                    type="number"
                                    prefix="pounds"
                                />
                            </div>
                        </div>
                        <!--  -->
                        <div
                            class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
                        >
                            <div>
                                <label
                                    for="project-name"
                                    class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                                    >Email</label
                                >
                            </div>
                            <div class="sm:col-span-2">
                                <Input
                                    v-model="myPet.email"
                                    :error-message="errorMessages.email"
                                />
                            </div>
                        </div>
                        <div
                            class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
                        >
                            <div>
                                <label
                                    for="project-name"
                                    class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                                    >Contact Number</label
                                >
                            </div>
                            <div class="sm:col-span-2">
                                <Input
                                    v-model="myPet.contact_number"
                                    :error-message="
                                        errorMessages.contact_number
                                    "
                                />
                            </div>
                        </div>
                        <!-- <div
                            class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
                        >
                            <div>
                                <label
                                    for="project-name"
                                    class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                                    >Facebook</label
                                >
                            </div>
                            <div class="sm:col-span-2">
                                <Input
                                    v-model="myPet.facebook"
                                    :error-message="errorMessages.facebook"
                                />
                            </div>
                        </div> -->
                        <div
                            class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
                        >
                            <div>
                                <label
                                    for="project-name"
                                    class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                                    >Vaccinated?</label
                                >
                            </div>
                            <div class="sm:col-span-2">
                                <Switch v-model="myPet.is_vaccinated" />
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6"
                >
                    <div class="flex justify-end space-x-3">
                        <button
                            type="button"
                            class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            @click="isRegisterPetDrawerOpen = false"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            @click="onSaveMyPet"
                        >
                            {{ myPet.id ? 'Save' : 'Create' }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import Input from '~/components/atom/Input.vue'
import usePetRepository from '~/repositories/pets'
import { useAuthStore } from '~~/stores/auth'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import Select from '~/components/UI/Select/Select.vue'
import Switch from '~/components/atom/Switch.vue'
import type { SelectItem } from '~/components/UI/Select/types'
import { definitions } from '~~/types/supabase'
import useValidations from '~/composables/validations'
import 'vue3-carousel/dist/carousel.css'
import { useRoute } from 'vue-router'

const route = useRoute()

enum PetStatus {
    Registered = 0,
    Lost = 1,
    Found = 2
}

enum Gender {
    Male = 0,
    Female = 1
}

const selectPetStatus = [
    {
        text: 'Registered',
        value: PetStatus.Registered
    },
    {
        text: 'Lost',
        value: PetStatus.Lost
    },
    {
        text: 'Found',
        value: PetStatus.Found
    }
]

definePageMeta({
    layout: 'dashboardv2',
    middleware: 'auth'
})

const auth = useAuthStore()
const {
    validateRequired,
    validateInstagramUsername,
    validateTwitterHandle,
    isErrorMessageEmpty,
    validateImageLength
} = useValidations()

const { uploadPetImage, getAnimalTypes, getBreeds, createPet, getMyPets } =
    usePetRepository()

const myPets = ref([{}])
const animalTypes = ref<definitions['animal_types'][]>([])
const selectAnimalTypes = ref<SelectItem[]>([])
const breeds = ref<definitions['animal_breeds'][]>()
const selectBreeds = ref<SelectItem[]>([])

const isRegisterPetDrawerOpen = ref(false)
const isLoading = ref(false)

const routeState = () => {
    if (route.name === 'dashboard-pet-id-details___en') return 'view'
    if (route.name === 'dashboard-pet-create___en') return 'create'
    if (route.name === 'dashboard-pet-id-update___en') return 'update'
    return null
}

const routestateMeta = () => {
    if (routeState() === 'view') {
        return {
            header: 'My pet details',
            subtitle: ''
        }
    }
    if (routeState() === 'create') {
        return {
            header: 'Register a pet',
            subtitle:
                'Get started by filling in the information below to register your pet in case of when it get lost'
        }
    }
    if (routeState() === 'update') {
        return {
            header: 'Update my pet details',
            subtitle: ''
        }
    }
}

const myPetInit = () => {
    return {
        ...(route?.params?.id && { id: route.params.id }),
        user_id: auth?.user?.id,
        images: [],
        status: PetStatus.Registered,
        description: '',
        animal_type_id: '',
        breed: {},
        name: '',
        weight: 0,
        height: 0,
        instagram: '',
        address: '',
        longitude: '',
        latitude: '',
        twitter: '',
        facebook: '',
        email: '',
        contact_number: '',
        gender: Gender.Male,
        is_vaccinated: true
    }
}

const myPet = ref(myPetInit())

const myPetAnimalBreed = computed({
    get: () => unref(myPet)?.breed_id,
    set: value => {
        if (value) {
            myPet.value.breed_id = value
            myPet.value.breed = unref(breeds)?.find(
                _breed => _breed.id === value
            )
            myPet.value.animal_type_id = unref(animalTypes)?.find(
                _animalType =>
                    unref(myPet).breed?.animal_type_id === _animalType.id
            )?.id
        }
    }
})

const onRegisterClick = () => {
    myPet.value = myPetInit()
    isRegisterPetDrawerOpen.value = true
}

const uploadImage = async (e: InputEvent) => {
    const images = e.target?.files

    for (const image of images) {
        try {
            const data = await uploadPetImage(auth?.user?.id, image)
            unref(myPet).images.push(data?.publicURL)
        } catch (error) {
            console.log(error)
        }
    }
}

const onUploadClick = () => {
    let fileInputElement = ref('dropzoneFile')
    fileInputElement.click()
}

const breedAndTypeName = pet => {
    if (!pet?.breed) return ''
    return `${pet?.breed?.type ? pet?.breed.type + ' - ' : ''}${
        pet?.breed.name || ''
    }`
}

const myPetImages = petImages => {
    return petImages.map(image => image.url)
}

const onDeleteImageClick = (index: number) => {
    unref(myPet).images.splice(index, 1)
}

const onEditPetClick = pet => {
    myPet.value = pet
    myPet.value.animal_type_id = unref(animalTypes)?.find(
        _animalType => unref(myPet).breed?.animal_type_id === _animalType.id
    )?.id
    isRegisterPetDrawerOpen.value = true
}

const fetchAnimalTypes = async () => {
    try {
        animalTypes.value = await getAnimalTypes()
        selectAnimalTypes.value = unref(animalTypes)?.map(animalType => {
            return {
                ...animalType,
                text: animalType.name,
                value: animalType.id
            }
        })
    } catch (error) {}
}

const fetchBreeds = async () => {
    try {
        breeds.value = await getBreeds()
        selectBreeds.value = unref(breeds)?.map(breed => {
            return {
                ...breed,
                text: breed.name,
                value: breed.id
            }
        })
    } catch (error) {}
}

const myPetErrorMessageInit = () => {
    return {
        status: '',
        animal_type: '',
        breed: '',
        name: '',
        twitter: '',
        instagram: '',
        facebook: '',
        images: ''
    }
}

const errorMessages = ref(myPetErrorMessageInit())

const allMyPetErrorMessage = () => {
    errorMessages.value.status = validateRequired(
        unref(myPet)?.status,
        'Status'
    )
    errorMessages.value.animal_type = validateRequired(
        unref(myPet)?.animal_type,
        'Animal type'
    )
    errorMessages.value.images = validateImageLength(unref(myPet).images)
    errorMessages.value.breed = validateRequired(unref(myPet).breed, 'Breed')
    errorMessages.value.name = validateRequired(unref(myPet).name, 'Name')
    errorMessages.value.twitter = validateTwitterHandle(unref(myPet).twitter)
    errorMessages.value.instagram = validateInstagramUsername(
        unref(myPet).instagram
    )
}

const fetchMyPets = async (userId: string) => {
    try {
        myPets.value = await getMyPets(userId)
    } catch (error) {
        console.log(error)
    }
}
fetchMyPets(auth?.user?.id)

const onSaveMyPet = async () => {
    try {
        console.log(unref(myPet))

        isLoading.value = true
        allMyPetErrorMessage()
        if (isErrorMessageEmpty(unref(errorMessages))) return
        // const data = await createPet(unref(myPet))
        // console.log(data)
    } catch (error) {
        console.log(error)
    } finally {
        isLoading.value = false
    }
}

const filteredBreeds = computed(() => {
    if (!unref(myPet).animal_type?.value) return unref(selectBreeds)
    return unref(selectBreeds).filter(
        breed => breed.animal_type_id === unref(myPet).value.animal_type
    )
})

fetchAnimalTypes()
fetchBreeds()
</script>
