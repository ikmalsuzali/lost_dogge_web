<template>
    <main class="min-w-0 flex-1 border-t border-gray-200 sm:flex">
        <!-- Message list-->
        <aside class="overflow-hidden xl:order-first xl:block xl:flex-shrink-0">
            <div
                class="relative flex h-full w-96 flex-col border-r border-gray-200 bg-gray-100"
            >
                <div class="flex-shrink-0">
                    <div
                        class="flex h-16 flex-col justify-center bg-white px-6"
                    >
                        <div class="flex space-x-3">
                            <div class="w-full">
                                <h2 class="text-lg font-medium text-gray-900">
                                    My Pets
                                </h2>
                                <p class="text-sm font-medium text-gray-500">
                                    {{ petStore?.pets.length }} pets
                                </p>
                            </div>

                            <div class="mt-3">
                                <button
                                    type="button"
                                    class="relative -ml-px hidden items-center rounded-md border border-gray-300 bg-white px-1 py-1 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:inline-flex animation-pulse"
                                    @click="
                                        router.push('/dashboard/pet/create')
                                    "
                                >
                                    <PlusIcon
                                        class="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
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
                        v-if="petStore?.pets.length"
                        role="list"
                        class="divide-y divide-gray-200 border-b border-gray-200"
                    >
                        <li
                            v-for="pet in petStore?.pets"
                            :key="pet?.id"
                            class="flex flex-row bg-white py-5 px-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 hover:bg-gray-300"
                            :class="{
                                'bg-gray-200': petIdByRoute === pet?.id
                            }"
                            @click="
                                router.push(`/dashboard/pet/${pet.id}/details`)
                            "
                        >
                            <div
                                class="flex flex-col w-10 h-10 justify-center items-center mr-4"
                            >
                                <a href="#" class="block relative">
                                    <img
                                        alt="profil"
                                        :src="pet?.pet_images?.[0]?.url"
                                        class="mx-auto object-cover rounded-full h-10 w-10"
                                    />
                                </a>
                            </div>
                            <div class="flex-1 pl-1">
                                <div
                                    class="font-medium dark:text-white text-ellipsis"
                                >
                                    {{ pet.name }}
                                </div>
                                <div
                                    v-if="pet.status === 0"
                                    class="text-gray-600 dark:text-gray-200 text-sm text-ellipsis line-clamp-2"
                                >
                                    <a>Registered</a>
                                </div>
                                <div
                                    v-if="pet.status === 1"
                                    class="text-gray-600 dark:text-gray-200 text-sm text-ellipsis line-clamp-2"
                                >
                                    <a>Lost at </a>{{ pet.address }}
                                </div>
                                <div
                                    v-if="pet.status === 2"
                                    class="text-gray-600 dark:text-gray-200 text-sm text-ellipsis line-clamp-2"
                                >
                                    <a>Found at </a>{{ pet.address }}
                                </div>
                                <div
                                    v-if="pet.status === 3"
                                    class="text-gray-600 dark:text-gray-200 text-sm text-ellipsis line-clamp-2"
                                >
                                    <a>Reunited</a>
                                </div>
                                <div
                                    v-else-if="pet.is_deleted == true"
                                    class="text-gray-600 dark:text-gray-200 text-sm"
                                >
                                    <a>Archived</a>
                                </div>
                            </div>
                            <div
                                class="flex flex-row justify-center items-center"
                            >
                                <button
                                    class="w-10 text-right flex justify-end"
                                >
                                    <ArrowSmallRightIcon class="h-3 w-3" />
                                </button>
                            </div>
                        </li>
                    </ul>
                    <div
                        v-if="!petStore?.pets.length"
                        class="bg-white py-5 px-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 hover:bg-gray-300 space-y-3"
                    >
                        <Vue3Lottie
                            class="w-20 m-auto"
                            animationLink="https://fhasuqzjmruhvugclutt.supabase.co/storage/v1/object/public/pets/website/lost-dog-loading.json"
                        />
                        <div class="text-center">No Pets Found</div>
                        <div class="text-center">
                            <Button
                                class="m-auto"
                                @click="router.push('/dashboard/pet/create')"
                            >
                                Lost/Found a pet?
                            </Button>
                        </div>
                    </div>
                </nav>
            </div>
        </aside>

        <section
            aria-labelledby="message-heading"
            class="flex h-full min-w-0 flex-1 flex-col xl:order-last"
        >
            <!-- Top section -->
            <div class="flex-shrink-0 border-b border-gray-200 bg-white">
                <!-- Toolbar-->
                <div class="flex h-16 flex-col justify-center">
                    <div class="px-4 sm:px-6 lg:px-8">
                        <div
                            class="container flex flex-wrap items-center justify-between mx-auto"
                        >
                            <!-- <span
                                v-if="
                                    route.name ===
                                        'dashboard-pet-id-details___en' ||
                                    route.name ===
                                        'dashboard-pet-id-ad-id-details___en'
                                "
                                class="inline-flex sm:shadow-sm"
                            >
                                <button
                                    type="button"
                                    class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-orange-400 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    :class="{
                                        'bg-orange-300':
                                            route.name ===
                                            'dashboard-pet-id-details___en'
                                    }"
                                    @click="
                                        router.push(
                                            `/dashboard/pet/${route.params.id}/details`
                                        )
                                    "
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
                            </span> -->
                            <div></div>

                            <!-- Left buttons -->
                            <div class="flex space-x-2">
                                <!-- Pet Create-->
                                <div
                                    v-if="
                                        route.name ===
                                        'dashboard-pet-create___en'
                                    "
                                >
                                    <span class="hidden space-x-3 lg:flex">
                                        <button
                                            type="button"
                                            class="relative -ml-px hidden items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:inline-flex"
                                            @click="
                                                router.push('/dashboard/pet')
                                            "
                                        >
                                            <XMarkIcon
                                                class="mr-2.5 h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                            <span>Cancel</span>
                                        </button>
                                    </span>
                                </div>
                                <!-- dashboard-pet-id-update___en -->
                                <div
                                    v-if="
                                        route.name ===
                                        'dashboard-pet-id-details___en'
                                    "
                                >
                                    <span class="hidden space-x-3 lg:flex">
                                        <button
                                            type="button"
                                            class="relative -ml-px hidden items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:inline-flex animation-pulse"
                                            @click="
                                                router.push(
                                                    payment?.id
                                                        ? `/dashboard/pet/${route.params.id}/ad/${payment.id}/details`
                                                        : `/dashboard/pet/${route.params.id}/ad/create`
                                                )
                                            "
                                        >
                                            <PlusIcon
                                                class="mr-2.5 h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                            <span>{{
                                                payment?.id
                                                    ? 'View Ad'
                                                    : 'Create Ad'
                                            }}</span>
                                        </button>
                                    </span>
                                </div>

                                <!-- Pet create -->
                                <!-- <div
                                    v-if="
                                        route.name === 'dashboard-pet___en' ||
                                        route.name ===
                                            'dashboard-pet-id-details___en' ||
                                        route.name ===
                                            'dashboard-pet-id-ad-id-details___en'
                                    "
                                >
                                    <span class="hidden space-x-3 lg:flex">
                                        <button
                                            type="button"
                                            class="relative -ml-px hidden items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:inline-flex animation-pulse"
                                            @click="
                                                router.push(
                                                    '/dashboard/pet/create'
                                                )
                                            "
                                        >
                                            <PlusIcon
                                                class="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </span>
                                </div> -->

                                <div
                                    v-if="
                                        route.name ===
                                        'dashboard-pet-id-update___en'
                                    "
                                >
                                    <span class="hidden space-x-3 lg:flex">
                                        <button
                                            type="button"
                                            class="relative -ml-px hidden items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:inline-flex"
                                            @click="
                                                router.push('/dashboard/pet')
                                            "
                                        >
                                            <XMarkIcon
                                                class="mr-2.5 h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                            <span>Cancel</span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Message header -->
            </div>

            <div class="min-h-0 flex-1 overflow-y-auto">
                <NuxtPage :myPet="myPet" />
            </div>
        </section>
    </main>
</template>

<script lang="ts" setup>
import {
    MagnifyingGlassIcon,
    BookOpenIcon,
    AcademicCapIcon,
    XMarkIcon,
    ArrowSmallRightIcon,
    PlusIcon
} from '@heroicons/vue/20/solid'
import { useRoute, useRouter } from 'vue-router'
import usePetRepository from '~/repositories/pets'
import useSubscriptionRepository from '~/repositories/subscription'
import { useAuthStore } from '~~/stores/auth'
import type { SelectItem } from '~/components/UI/Select/types'
import Button from '~/components/atom/Button.vue'
import { definitions } from '~~/types/supabase'
import useValidations from '~/composables/validations'
import 'vue3-carousel/dist/carousel.css'
import { usePetStore } from '~/stores/pet'

definePageMeta({
    layout: 'dashboardv2',
    middleware: 'auth'
})

const petStore = usePetStore()
const route = useRoute()
const router = useRouter()
const { fetchFirstSuccessfulPayment } = useSubscriptionRepository()

const petIdByRoute = ref()

enum PetStatus {
    Registered = '0',
    Lost = '1',
    Found = '2',
    Success = '3'
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

const animalTypes = ref<definitions['animal_types'][]>([])
const selectAnimalTypes = ref<SelectItem[]>([])
const breeds = ref<definitions['animal_breeds'][]>()
const selectBreeds = ref<SelectItem[]>([])

const isRegisterPetDrawerOpen = ref(false)
const isLoading = ref(false)
const payment = ref()

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
        is_vaccinated: false,
        is_deleted: false
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
        } catch (error) {}
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

const fetchMyPets = async () => {
    await petStore.fetchMyPets()
}
fetchMyPets()

const onSaveMyPet = async () => {
    try {
        isLoading.value = true
        allMyPetErrorMessage()
        if (isErrorMessageEmpty(unref(errorMessages))) return
        const data = await createPet(unref(myPet))
    } catch (error) {
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

const getUserPayment = async (petId: string) => {
    payment.value = await fetchFirstSuccessfulPayment(petId)
}

watch(
    () => unref(route).params,
    value => {
        if (value.id) {
            payment.value = null
            getUserPayment(value.id)
        }
    },
    { immediate: true }
)

watch(
    () => unref(route).fullPath,
    value => {
        petIdByRoute.value = unref(route).fullPath?.split('/')?.[3]
        myPet.value = unref(petStore?.pets)?.find(
            pet => pet.id === petIdByRoute.value
        )
    },
    { immediate: true }
)

fetchAnimalTypes()
fetchBreeds()
</script>
