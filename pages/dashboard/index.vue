<template>
    <main class="min-w-0 flex-1 border-t border-gray-200 xl:flex">
        <section
            aria-labelledby="message-heading"
            class="flex h-full min-w-0 flex-1 flex-col overflow-hidden xl:order-last"
        >
            <!-- Top section -->
            <div class="flex-shrink-0 border-b border-gray-200 bg-white">
                <!-- Toolbar-->
                <div class="flex h-16 flex-col justify-center">
                    <div class="px-4 sm:px-6 lg:px-8">
                        <div class="flex justify-between py-3">
                            <!-- Left buttons -->
                            <div>
                                <div
                                    class="isolate inline-flex rounded-md shadow-sm sm:space-x-3 sm:shadow-none"
                                >
                                    <span class="inline-flex sm:shadow-sm">
                                        <button
                                            type="button"
                                            class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        >
                                            <BookOpenIcon
                                                class="mr-2.5 h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                            <span>Details</span>
                                        </button>
                                        <button
                                            type="button"
                                            class="relative -ml-px hidden items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:inline-flex"
                                        >
                                            <MagnifyingGlassIcon
                                                class="mr-2.5 h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                            <span>Matches</span>
                                        </button>
                                    </span>

                                    <span class="hidden space-x-3 lg:flex">
                                        <button
                                            type="button"
                                            class="relative -ml-px hidden items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:inline-flex animation-pulse"
                                        >
                                            <AcademicCapIcon
                                                class="mr-2.5 h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                            <span>Create An Ad</span>
                                        </button>
                                    </span>

                                    <Menu
                                        as="div"
                                        class="relative -ml-px block sm:shadow-sm lg:hidden"
                                    >
                                        <div>
                                            <MenuButton
                                                class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:rounded-md sm:px-3"
                                            >
                                                <span class="sr-only sm:hidden"
                                                    >More</span
                                                >
                                                <span class="hidden sm:inline"
                                                    >More</span
                                                >
                                                <ChevronDownIcon
                                                    class="h-5 w-5 text-gray-400 sm:ml-2 sm:-mr-1"
                                                    aria-hidden="true"
                                                />
                                            </MenuButton>
                                        </div>

                                        <transition
                                            enter-active-class="transition ease-out duration-100"
                                            enter-from-class="transform opacity-0 scale-95"
                                            enter-to-class="transform opacity-100 scale-100"
                                            leave-active-class="transition ease-in duration-75"
                                            leave-from-class="transform opacity-100 scale-100"
                                            leave-to-class="transform opacity-0 scale-95"
                                        >
                                            <MenuItems
                                                class="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                            >
                                                <div class="py-1">
                                                    <MenuItem
                                                        v-slot="{ active }"
                                                    >
                                                        <a
                                                            href="#"
                                                            :class="[
                                                                active
                                                                    ? 'bg-gray-100 text-gray-900'
                                                                    : 'text-gray-700',
                                                                'block px-4 py-2 text-sm sm:hidden'
                                                            ]"
                                                            >Note</a
                                                        >
                                                    </MenuItem>
                                                    <MenuItem
                                                        v-slot="{ active }"
                                                    >
                                                        <a
                                                            href="#"
                                                            :class="[
                                                                active
                                                                    ? 'bg-gray-100 text-gray-900'
                                                                    : 'text-gray-700',
                                                                'block px-4 py-2 text-sm sm:hidden'
                                                            ]"
                                                            >Assign</a
                                                        >
                                                    </MenuItem>
                                                    <MenuItem
                                                        v-slot="{ active }"
                                                    >
                                                        <a
                                                            href="#"
                                                            :class="[
                                                                active
                                                                    ? 'bg-gray-100 text-gray-900'
                                                                    : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            ]"
                                                            >Archive</a
                                                        >
                                                    </MenuItem>
                                                    <MenuItem
                                                        v-slot="{ active }"
                                                    >
                                                        <a
                                                            href="#"
                                                            :class="[
                                                                active
                                                                    ? 'bg-gray-100 text-gray-900'
                                                                    : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            ]"
                                                            >Move</a
                                                        >
                                                    </MenuItem>
                                                </div>
                                            </MenuItems>
                                        </transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Message header -->
            </div>

            <div class="min-h-0 flex-1 overflow-y-auto">
                <ul
                    role="list"
                    class="space-y-2 py-4 sm:space-y-4 sm:px-6 lg:px-8"
                >
                    <li
                        v-for="pet in myPets"
                        :key="pet.id"
                        class="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6"
                    >
                        <div
                            class="sm:flex sm:items-baseline sm:justify-between"
                        >
                            <h3 class="text-base font-medium">
                                <span class="text-gray-900">{{
                                    pet.name
                                }}</span>
                                {{ ' ' }}
                                <span class="text-gray-600">wrote</span>
                            </h3>
                            <!-- <p
                                class="mt-1 whitespace-nowrap text-sm text-gray-600 sm:mt-0 sm:ml-3"
                            >
                                <time :datetime="item.datetime">{{
                                    item.date
                                }}</time>
                            </p> -->
                        </div>
                        <!-- <div
                            class="mt-4 space-y-6 text-sm text-gray-800"
                            v-html="item.body"
                        /> -->
                    </li>
                </ul>
            </div>
        </section>

        <!-- Message list-->
        <aside class="hidden xl:order-first xl:block xl:flex-shrink-0">
            <div
                class="relative flex h-full w-96 flex-col border-r border-gray-200 bg-gray-100"
            >
                <div class="flex-shrink-0">
                    <div
                        class="flex h-16 flex-col justify-center bg-white px-6"
                    >
                        <div class="flex items-baseline space-x-3">
                            <h2 class="text-lg font-medium text-gray-900">
                                My Pets
                            </h2>
                            <p class="text-sm font-medium text-gray-500">
                                {{ myPets.length }} pets
                            </p>
                        </div>
                    </div>
                    <div
                        class="border-t border-b border-gray-200 bg-gray-50 px-6 py-2 text-sm font-medium text-gray-500"
                    ></div>
                </div>
                <nav
                    aria-label="Message list"
                    class="min-h-0 flex-1 overflow-y-auto"
                >
                    <ul
                        role="list"
                        class="divide-y divide-gray-200 border-b border-gray-200"
                    >
                        <li
                            v-for="pet in myPets"
                            :key="pet.id"
                            class="relative bg-white py-5 px-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 hover:bg-gray-50"
                        >
                            <div class="flex justify-between space-x-3">
                                <div class="min-w-0 flex-1">
                                    <a class="block focus:outline-none">
                                        <span
                                            class="absolute inset-0"
                                            aria-hidden="true"
                                        />
                                        <p
                                            class="truncate text-sm font-medium text-gray-900"
                                        >
                                            {{ pet.name }}
                                        </p>
                                        <p
                                            class="truncate text-sm text-gray-500"
                                        >
                                            {{ pet.breed }}
                                        </p>
                                    </a>
                                </div>
                                <!-- <time
                                    :datetime="message.datetime"
                                    class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                                    >{{ message.date }}</time
                                > -->
                            </div>
                            <div class="mt-1">
                                <!-- <p class="text-sm text-gray-600 line-clamp-2">
                                    {{ message.preview }}
                                </p> -->
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    </main>
</template>

<script lang="ts" setup>
import {
    Dialog,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot
} from '@headlessui/vue'

definePageMeta({
    layout: 'dashboardv2',
    middleware: 'auth'
})

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

enum PetStatus {
    Registered = '0',
    Lost = '1',
    Found = '2'
}

enum Gender {
    Male = 0,
    Female = 1
}

const selectPetStatus = [
    {
        text: PetStatus[PetStatus.Registered],
        value: PetStatus.Registered
    },
    {
        text: PetStatus[PetStatus.Lost],
        value: PetStatus.Lost
    },
    {
        text: PetStatus[PetStatus.Found],
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
    isErrorMessageEmpty
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

const myPetInit = () => {
    return {
        id: undefined,
        user_id: auth?.user?.id,
        images: [],
        status: PetStatus.Registered,
        description: '',
        animal_type_id: '',
        breed_id: '',
        breed: {},
        name: '',
        weight: '',
        height: '',
        instagram: '',
        twitter: '',
        facebook: '',
        gender: Gender.Male,
        is_vaccinated: false
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
        facebook: ''
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
    errorMessages.value.breed = validateRequired(unref(myPet).breed, 'Breed')
    errorMessages.value.name = validateRequired(unref(myPet).name, 'Name')
    errorMessages.value.twitter = validateTwitterHandle(unref(myPet).twitter)
    errorMessages.value.instagram = validateInstagramUsername(
        unref(myPet).instaxgram
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
        isLoading.value = true
        allMyPetErrorMessage()
        if (isErrorMessageEmpty(unref(errorMessages))) return
        const data = await createPet(unref(myPet))
        console.log(data)
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
