<template>
    <TransitionRoot as="template" :show="isRegisterPetDrawerOpen">
        <Dialog
            as="div"
            class="relative z-10"
            @close="isRegisterPetDrawerOpen = false"
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
                                                        >{{
                                                            myPet.id
                                                                ? 'Edit my pet details'
                                                                : 'Register new pet'
                                                        }}</DialogTitle
                                                    >
                                                    <p
                                                        class="text-sm text-gray-500"
                                                    >
                                                        {{
                                                            !myPet.id
                                                                ? 'Get started by filling in the information below to register your pet in case of when it get lost'
                                                                : ''
                                                        }}
                                                    </p>
                                                </div>
                                                <div
                                                    class="flex h-7 items-center"
                                                >
                                                    <button
                                                        type="button"
                                                        class="text-gray-400 hover:text-gray-500"
                                                        @click="
                                                            isRegisterPetDrawerOpen = false
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
                                                        :error-message="
                                                            errorMessages.name
                                                        "
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
                                                            myPet.animal_type_id
                                                        "
                                                        placeholder="Select a type"
                                                        :items="
                                                            selectAnimalTypes
                                                        "
                                                        :error-message="
                                                            errorMessages.animal_type
                                                        "
                                                    />
                                                    <Select
                                                        v-model="
                                                            myPetAnimalBreed
                                                        "
                                                        placeholder="Select a breed"
                                                        :items="filteredBreeds"
                                                        :error-message="
                                                            errorMessages.breed
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
                                                        >Gender</label
                                                    >
                                                </div>
                                                <div class="sm:col-span-2">
                                                    <Switch
                                                        v-model="myPet.gender"
                                                        :label="
                                                            myPet.gender
                                                                ? Gender[
                                                                      Gender
                                                                          .Female
                                                                  ]
                                                                : Gender[
                                                                      Gender
                                                                          .Male
                                                                  ]
                                                        "
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
                                                        v-model="
                                                            myPet.description
                                                        "
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
                                                        :error-message="
                                                            errorMessages.instagram
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
                                                        :error-message="
                                                            errorMessages.twitter
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
                                                        >Facebook</label
                                                    >
                                                </div>
                                                <div class="sm:col-span-2">
                                                    <Input
                                                        v-model="myPet.facebook"
                                                        :error-message="
                                                            errorMessages.facebook
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
                                                type="button"
                                                class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                @click="onSaveMyPet"
                                            >
                                                {{
                                                    myPet.id ? 'Save' : 'Create'
                                                }}
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
                            @click="onRegisterClick()"
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
                <div class="w-full lg:max-w-full lg:flex">
                    <div class="relative mx-auto w-full">
                        <a
                            href="#"
                            class="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2"
                        >
                            <div class="rounded-lg bg-white p-4 shadow">
                                <div
                                    class="relative flex justify-center overflow-hidden rounded-lg"
                                >
                                    <div
                                        class="w-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                    >
                                        <div v-if="pet?.pet_images?.length">
                                            <carousel :items-to-show="1">
                                                <slide
                                                    v-for="(
                                                        image, imageIndex
                                                    ) in pet?.pet_images"
                                                    :key="slideTo"
                                                >
                                                    <img
                                                        class="aspect-video w-full object-cover object-center"
                                                        :src="image.url"
                                                    />
                                                </slide>
                                            </carousel>
                                        </div>
                                    </div>
                                    <div
                                        class="absolute bottom-0 left-5 mb-3 flex"
                                    >
                                        <p
                                            class="flex items-center font-medium text-white shadow-sm"
                                        >
                                            <i
                                                class="fa fa-camera mr-2 text-xl text-white"
                                            ></i>
                                            {{ pet?.pet_images?.length || 0 }}
                                        </p>
                                    </div>
                                    <div
                                        class="absolute bottom-0 right-5 mb-3 flex"
                                    >
                                        <p
                                            class="flex items-center font-medium text-gray-800"
                                        >
                                            <i
                                                class="fa fa-heart mr-2 text-2xl text-white"
                                            ></i>
                                        </p>
                                    </div>
                                    <div
                                        class="absolute top-0 inline-flex right-2"
                                    >
                                        <div>
                                            <span
                                                class="right-2 z-10 mt-3 ml-3 inline-flex select-none rounded-sm bg-[#1f93ff] px-2 py-1 text-xs font-semibold text-white"
                                            >
                                                {{ 'Cat breed' }}
                                            </span>
                                            <span
                                                class="right-2 z-10 mt-3 ml-3 inline-flex select-none rounded-sm bg-[#1f93ff] px-2 py-1 text-xs font-semibold text-white"
                                            >
                                                {{ PetStatus[pet.status] }}
                                            </span>
                                        </div>
                                    </div>

                                    <span
                                        class="absolute top-0 left-0 z-10 mt-3 ml-3 inline-flex select-none rounded-lg bg-transparent px-3 py-2 text-lg font-medium text-white"
                                    >
                                        <i class="fa fa-star"></i>
                                    </span>
                                </div>

                                <div class="mt-4">
                                    <h2
                                        class="line-clamp-1 text-2xl font-medium text-gray-800 md:text-lg"
                                        title="New York"
                                    >
                                        1000 yards (Brand New) Bungalow
                                        Available in...
                                    </h2>

                                    <p
                                        class="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight"
                                    >
                                        <span class="text-2xl">{{
                                            pet.name
                                        }}</span>
                                    </p>
                                </div>
                                <div class="mt-4">
                                    <p
                                        class="line-clamp-2 mt-2 text-lg text-gray-800"
                                    >
                                        {{ pet.description }}
                                    </p>
                                </div>
                                <div class="justify-center">
                                    <div
                                        class="mt-4 flex space-x-3 overflow-hidden rounded-lg px-1 py-1"
                                    >
                                        <p
                                            class="flex items-center font-medium text-gray-800"
                                        >
                                            <BarsArrowUpIcon
                                                class="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                            {{ pet.height }} inches
                                        </p>
                                        <p
                                            class="flex items-center font-medium text-gray-800"
                                        >
                                            <BarsArrowDownIcon
                                                class="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                            {{ pet.weight }} lbs
                                        </p>
                                    </div>
                                </div>
                                <div class="mt-8 grid grid-cols-2">
                                    <div class="flex items-center">hi</div>

                                    <div class="flex justify-end space-x-2">
                                        <button
                                            type="button"
                                            class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            @click="onEditPetClick(pet)"
                                        >
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </a>
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
import {
    XMarkIcon,
    BarsArrowUpIcon,
    BarsArrowDownIcon
} from '@heroicons/vue/24/outline'
import Input from '~/components/atom/Input.vue'
import usePetRepository from '~/repositories/pets'
import { useAuthStore } from '~~/stores/auth'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import Select from '~/components/UI/Select/Select.vue'
import Switch from '~/components/atom/Switch.vue'
import type { SelectItem } from '~/components/UI/Select/types'
import { definitions } from '~~/types/supabase'
import useValidations from '~/composables/validations'

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
        breed_id: -1,
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
    get: () => unref(myPet).breed_id,
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

// const onChangeBreed = () => {
//     myPet.value.breed = unref(breeds)?.find(
//         _breed => _breed.id === myPet.value.breed_id
//     )
//     myPet.value.animal_type = unref(animalTypes)?.find(
//         _animalType => _animalType.id === unref(myPet)?.breed?.animal_type_id
//     )
// }

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
