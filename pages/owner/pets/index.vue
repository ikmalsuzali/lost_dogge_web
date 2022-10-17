<template>
    <TransitionRoot as="template" :show="isRegisterPetDrawerOpen">
        <Dialog
            as="div"
            class="relative z-10"
            @close="isRegisterPetDrawerOpen = true"
        >
            <div class="fixed inset-0" />

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div
                        class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16"
                    >
                        <TransitionChild
                            as="template"
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enter-from="translate-x-full"
                            enter-to="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leave-from="translate-x-0"
                            leave-to="translate-x-full"
                        >
                            <DialogPanel
                                class="pointer-events-auto w-screen max-w-2xl"
                            >
                                <form
                                    class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                                >
                                    <div class="flex-1">
                                        <!-- Header -->
                                        <div
                                            class="bg-gray-50 px-4 py-6 sm:px-6"
                                        >
                                            <div
                                                class="flex items-start justify-between space-x-3"
                                            >
                                                <div class="space-y-1">
                                                    <DialogTitle
                                                        class="text-lg font-medium text-gray-900"
                                                        >Register new
                                                        pet</DialogTitle
                                                    >
                                                    <p
                                                        class="text-sm text-gray-500"
                                                    >
                                                        Get started by filling
                                                        in the information below
                                                        to register your pet in
                                                        case of when it get lost
                                                    </p>
                                                </div>
                                                <div
                                                    class="flex h-7 items-center"
                                                >
                                                    <button
                                                        type="button"
                                                        class="text-gray-400 hover:text-gray-500"
                                                        @click="
                                                            isRegisterPetDrawerOpen = true
                                                        "
                                                    >
                                                        <span class="sr-only"
                                                            >Close panel</span
                                                        >
                                                        <XMarkIcon
                                                            class="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Divider container -->
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
                                                <carousel :items-to-show="3">
                                                    <slide
                                                        v-for="(
                                                            image, index
                                                        ) in myPet.images"
                                                        :key="image"
                                                        class="p-2"
                                                    >
                                                        <div class="relative">
                                                            <img
                                                                class="aspect-video w-full object-cover object-center"
                                                                :src="image"
                                                            />
                                                            <button
                                                                class="absolute top-0 right-0 bg-red-500 text-white p-2 rounded hover:bg-blue-800 m-2"
                                                                @click="
                                                                    onDeleteImageClick(
                                                                        index
                                                                    )
                                                                "
                                                            >
                                                                <XMarkIcon
                                                                    class="h-3 w-3"
                                                                    aria-hidden="true"
                                                                />
                                                            </button>
                                                        </div>
                                                    </slide>

                                                    <template #addons>
                                                        <pagination />
                                                    </template>
                                                </carousel>
                                            </div>
                                            <div
                                                class="flex justify-center items-center w-full"
                                            >
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
                                                            <span
                                                                class="font-semibold"
                                                                >Click to
                                                                upload</span
                                                            >
                                                            or drag and drop
                                                        </p>
                                                        <p
                                                            class="text-xs text-gray-500 dark:text-gray-400"
                                                        >
                                                            SVG, PNG, JPG (MAX.
                                                            800x400px)
                                                        </p>
                                                    </div>
                                                    <input
                                                        id="dropzone-file"
                                                        type="file"
                                                        multiple
                                                        accept=".jpg, .jpeg, .png"
                                                        class="hidden"
                                                        @change="uploadImage"
                                                        @click="
                                                            $event.target.value =
                                                                ''
                                                        "
                                                    />
                                                </label>
                                            </div>
                                            <!-- Project name -->
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
                                                    />
                                                </div>
                                            </div>
                                            <!-- Breed -->
                                            <div
                                                class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
                                            >
                                                <div>
                                                    <label
                                                        for="project-name"
                                                        class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                                                        >Breed</label
                                                    >
                                                </div>
                                                <div
                                                    class="sm:col-span-2 space-x-2 flex"
                                                >
                                                    <Select
                                                        v-model="
                                                            myPet.animalType
                                                        "
                                                        placeholder="Select a type"
                                                        :items="
                                                            selectAnimalTypes
                                                        "
                                                    />
                                                    <Select
                                                        v-model="myPet.breed"
                                                        placeholder="Select a breed"
                                                        :items="filteredBreeds"
                                                    />
                                                </div>
                                            </div>

                                            <!-- Project description -->
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
                                                        id="project-description"
                                                        name="project-description"
                                                        rows="3"
                                                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>

                                            <!-- Height -->
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
                                                <div
                                                    class="sm:col-span-2 space-x-2 flex"
                                                >
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
                                            <!-- Instagram -->
                                            <div
                                                class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
                                            >
                                                <div>
                                                    <label
                                                        for="project-name"
                                                        class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                                                        >Instagram</label
                                                    >
                                                </div>
                                                <div class="sm:col-span-2">
                                                    <Input
                                                        v-model="
                                                            myPet.instagram
                                                        "
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
                                                        >Twitter</label
                                                    >
                                                </div>
                                                <div class="sm:col-span-2">
                                                    <Input
                                                        v-model="myPet.twitter"
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
                                                        >Facebook</label
                                                    >
                                                </div>
                                                <div class="sm:col-span-2">
                                                    <Input
                                                        v-model="myPet.facebook"
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
                                                        >Vaccinated?</label
                                                    >
                                                </div>
                                                <div class="sm:col-span-2">
                                                    <Switch
                                                        v-model="
                                                            myPet.is_vaccinated
                                                        "
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Action buttons -->
                                    <div
                                        class="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6"
                                    >
                                        <div class="flex justify-end space-x-3">
                                            <button
                                                type="button"
                                                class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                @click="
                                                    isRegisterPetDrawerOpen = false
                                                "
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                Create
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
    <div class="space-y-5">
        <div class="bg-white">
            <div
                class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8"
            >
                <h2
                    class="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"
                >
                    <span class="block">Ready to dive in?</span>
                    <span class="block text-indigo-600"
                        >Start your free trial today.</span
                    >
                </h2>
                <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div class="inline-flex rounded-md shadow">
                        <a
                            href="#"
                            class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                            >Register</a
                        >
                    </div>
                </div>
            </div>
        </div>

        <!-- stats -->
        <ul
            role="list"
            class="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
            <li
                v-for="(pet, index) in myPets"
                :key="index"
                class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
            >
                <div
                    class="flex w-full items-center justify-between space-x-6 p-6"
                >
                    <img
                        class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                        :src="'test'"
                        alt=""
                    />
                    <div class="flex-1 truncate">
                        <div class="flex items-center space-x-3">
                            <h3
                                class="truncate text-sm font-medium text-gray-900"
                            >
                                test
                            </h3>
                            <span
                                class="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800"
                                >{{ 'helo' }}</span
                            >
                        </div>
                        <p class="mt-1 truncate text-sm text-gray-500">
                            {{ 'title' }}
                        </p>
                    </div>
                </div>
                <div>
                    <div class="-mt-px flex divide-x divide-gray-200">
                        <div class="flex w-0 flex-1">
                            <a
                                :href="`mailto:${'hest'}`"
                                class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                            >
                                <EnvelopeIcon
                                    class="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                                <span class="ml-3">Email</span>
                            </a>
                        </div>
                        <div class="-ml-px flex w-0 flex-1">
                            <a
                                :href="`tel:${'helo'}`"
                                class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                            >
                                <PhoneIcon
                                    class="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                                <span class="ml-3">Call</span>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
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
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import Select from '~/components/UI/Select/Select.vue'
import Switch from '~/components/atom/Switch.vue'
import type { SelectItem } from '~/components/UI/Select/types'
import { definitions } from '~~/types/supabase'

enum PetStatus {
    Registered = 0,
    Lost = 1,
    Found = 2
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
    layout: 'dashboard',
    middleware: 'auth'
})

const auth = useAuthStore()

const { uploadPetImage, getAnimalTypes, getBreeds } = usePetRepository()

const myPets = ref([{}])
const animalTypes = ref<definitions['animal_types'][]>([])
const selectAnimalTypes = ref<SelectItem[]>([])
const breeds = ref<definitions['animal_breeds'][]>()
const selectBreeds = ref<SelectItem[]>([])

const isRegisterPetDrawerOpen = ref(true)
const myPet = ref({
    images: [],
    status: selectPetStatus[0],
    animalType: undefined,
    breed: undefined,
    name: '',
    weight: '',
    height: '',
    instagram: '',
    twitter: '',
    facebook: '',
    is_vaccinated: false
})

const uploadImage = async e => {
    const images = e.target.files

    for (const image of images) {
        try {
            const data = await uploadPetImage(auth?.user?.id, image)
            unref(myPet).images.push(data?.publicURL)
        } catch (error) {
            console.log(error)
        }
    }
}

const onDeleteImageClick = (index: number) => {
    unref(myPet).images.splice(index, 1)
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

const filteredBreeds = computed(() => {
    if (!unref(myPet).animalType?.value) return unref(selectBreeds)
    return unref(selectBreeds).filter(
        breed => breed.animal_type_id === unref(myPet).animalType.value
    )
})

fetchAnimalTypes()
fetchBreeds()
</script>
