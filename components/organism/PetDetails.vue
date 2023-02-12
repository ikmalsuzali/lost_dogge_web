<template>
    <div id="petForm" class="min-h-0 flex-1 overflow-y-auto p-6">
        <div
            class="space-y-2 py-4 sm:space-y-4 bg-white px-4 shadow sm:rounded-lg"
        >
            <form>
                <div class="flex-1">
                    <div class="bg-gray-50 px-4 py-6 sm:px-6">
                        <div class="flex items-start justify-between space-x-3">
                            <div class="space-y-1">
                                <div class="text-lg font-medium text-gray-900">
                                    {{ routeStateMeta()?.header }}
                                </div>
                                <p class="text-sm text-gray-500">
                                    {{ routeStateMeta()?.subtitle }}
                                </p>
                            </div>
                            <div class="flex h-7 items-center space-x-2">
                                <button
                                    v-if="
                                        routeStateMeta()?.ctaButton.find(
                                            button => button.type === 'cancel'
                                        )
                                    "
                                    type="button"
                                    class="relative -ml-px hidden items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:inline-flex"
                                    @click="
                                        routeStateMeta()?.ctaButton.find(
                                            button => button.type === 'cancel'
                                        )?.route
                                    "
                                >
                                    <span>Cancel</span>
                                </button>
                                <button
                                    v-if="
                                        routeStateMeta()?.ctaButton.find(
                                            button => button.type === 'update'
                                        )
                                    "
                                    type="button"
                                    class="relative -ml-px hidden items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:inline-flex"
                                    @click="
                                        routeStateMeta()?.ctaButton.find(
                                            button => button.type === 'update'
                                        )?.route
                                    "
                                >
                                    <span>Update</span>
                                </button>
                                <Button
                                    v-if="
                                        routeStateMeta()?.ctaButton.find(
                                            button => button.type === 'save'
                                        )
                                    "
                                    :loading="isLoading"
                                    @click="
                                        routeStateMeta()?.ctaButton.find(
                                            button => button.type === 'save'
                                        )?.route
                                    "
                                >
                                    Save
                                </Button>
                                <button
                                    v-if="
                                        routeStateMeta()?.ctaButton.find(
                                            button => button.type === 'delete'
                                        )
                                    "
                                    type="button"
                                    class="relative justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    :class="{ 'bg-red-300': isDeleteToggled }"
                                    @click="
                                        routeStateMeta()?.ctaButton.find(
                                            button => button.type === 'delete'
                                        )?.route
                                    "
                                >
                                    <span>Delete</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        v-if="isDeleteToggled === true"
                        class="bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md"
                        role="alert"
                    >
                        <div class="flex justify-between">
                            <div class="flex">
                                <div class="py-1">
                                    <svg
                                        class="fill-current h-6 w-6 text-red-500 mr-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p class="font-bold">
                                        Are you sure you want to delete this pet
                                    </p>
                                    <p class="text-sm">
                                        Make sure you know how these changes
                                        affect you and still stop any ads
                                        running
                                    </p>
                                </div>
                            </div>
                            <div class="space-x-2">
                                <button
                                    type="button"
                                    class="relative justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <span>Confirm Deletion</span>
                                </button>
                                <button
                                    type="button"
                                    class="relative -ml-px hidden items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:inline-flex"
                                    @click="isDeleteToggled = false"
                                >
                                    <span>Cancel</span>
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
                                    v-if="routeState() !== states.VIEW"
                                    v-model="myPet.status"
                                    placeholder="Status"
                                    :items="selectPetStatus"
                                    :error-message="errorMessages.status"
                                    :disabled="routeState() === states.VIEW"
                                />
                                <div
                                    v-else
                                    class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-2"
                                >
                                    {{
                                        selectPetStatus.find(
                                            status =>
                                                status.value === myPet.status
                                        )?.text
                                    }}
                                </div>
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
                            <div class="sm:col-span-2">
                                <Carousel :items-to-show="4" snapAlign="start">
                                    <Slide
                                        v-for="(
                                            image, index
                                        ) in myPet.pet_images"
                                        :key="image.url"
                                        class="p-4"
                                    >
                                        <div class="relative">
                                            <img
                                                class="aspect-square object-cover object-center w-40 rounded-md border border-blue-800"
                                                :src="image.url"
                                            />
                                            <button
                                                v-if="
                                                    routeState() !== states.VIEW
                                                "
                                                class="absolute top-0 right-0 bg-red-500 text-white p-2 rounded hover:bg-blue-800 m-2"
                                                @click="
                                                    onDeleteImageClick(index)
                                                "
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
                                <div
                                    v-if="routeState() !== states.VIEW"
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
                                            v-if="errorMessages.pet_images"
                                            class="mt-2 text-sm text-red-600 dark:text-red-500"
                                        >
                                            {{ errorMessages.pet_images }}
                                        </p>
                                    </label>
                                </div>
                            </div>
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
                                    v-if="routeState() !== states.VIEW"
                                    v-model="myPet.name"
                                    required
                                    :error-message="errorMessages.name"
                                    :disabled="routeState() === states.VIEW"
                                />
                                <div
                                    v-else
                                    class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-2"
                                >
                                    {{ myPet.name }}
                                </div>
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
                                    v-if="routeState() !== states.VIEW"
                                    v-model="myPet.animal_type_id"
                                    placeholder="Select a type"
                                    :items="selectAnimalTypes"
                                    :error-message="errorMessages.animal_type"
                                    :disabled="routeState() === states.VIEW"
                                />
                                <div
                                    v-else
                                    class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-2"
                                >
                                    {{
                                        animalTypes?.find(
                                            breed =>
                                                breed.id ===
                                                myPet.animal_type_id
                                        )?.name
                                    }}
                                </div>
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
                                    v-if="routeState() !== states.VIEW"
                                    v-model="myPet.gender"
                                    :label="
                                        myPet.gender
                                            ? Gender[Gender.Female]
                                            : Gender[Gender.Male]
                                    "
                                />
                                <div
                                    v-else
                                    class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-2"
                                >
                                    {{ myPet.gender === 1 ? 'Female' : 'Male' }}
                                </div>
                            </div>
                        </div>

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
                                    v-if="routeState() !== states.VIEW"
                                    v-model="myPet.email"
                                    :error-message="errorMessages.email"
                                    :disabled="routeState() === states.VIEW"
                                />
                                <div
                                    v-else
                                    class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-2"
                                >
                                    {{ myPet.email }}
                                </div>
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
                                    v-if="routeState() !== states.VIEW"
                                    v-model="myPet.contact_number"
                                    :error-message="
                                        errorMessages.contact_number
                                    "
                                    placeholder="123-456-7890"
                                    :disabled="routeState() === states.VIEW"
                                />
                                <div
                                    v-else
                                    class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-2"
                                >
                                    {{ myPet.contact_number }}
                                </div>
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
                                    v-if="routeState() !== states.VIEW"
                                    v-model="myPet.description"
                                    id="project-description"
                                    name="project-description"
                                    rows="3"
                                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    :class="{
                                        'bg-slate-50 text-slate-500 border-slate-200 shadow-none':
                                            routeState() === states.VIEW
                                    }"
                                    :disabled="routeState() === states.VIEW"
                                />
                                <div
                                    v-else
                                    class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-2"
                                >
                                    {{ myPet.description }}
                                </div>
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
                                    v-if="routeState() !== states.VIEW"
                                    v-model="myPet.height"
                                    class="w-full"
                                    type="number"
                                    prefix="inches"
                                    :disabled="routeState() === states.VIEW"
                                />
                                <Input
                                    v-if="routeState() !== states.VIEW"
                                    v-model="myPet.weight"
                                    class="w-full"
                                    type="number"
                                    prefix="pounds"
                                    :disabled="routeState() === states.VIEW"
                                />
                                <div
                                    v-else-if="routeState() === states.VIEW"
                                    class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-2"
                                >
                                    {{
                                        `${myPet.height} inches / ${myPet.weight} pounds`
                                    }}
                                </div>
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
                                    v-if="routeState() !== states.VIEW"
                                    v-model="myPet.is_vaccinated"
                                />
                                <div
                                    v-else
                                    class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-2"
                                >
                                    {{ myPet.is_vaccinated ? 'Yes' : 'No' }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6"
                >
                    <div class="flex justify-end space-x-3">
                        <Button
                            v-if="
                                routeStateMeta()?.ctaButton.find(
                                    button => button.type === 'cancel'
                                )
                            "
                            type="secondary"
                            @click="
                                routeStateMeta()?.ctaButton.find(
                                    button => button.type === 'cancel'
                                )?.route
                            "
                        >
                            Cancel
                        </Button>

                        <button
                            v-if="
                                routeStateMeta()?.ctaButton.find(
                                    button => button.type === 'update'
                                )
                            "
                            type="button"
                            class="relative -ml-px hidden items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:inline-flex"
                            @click="
                                routeStateMeta()?.ctaButton.find(
                                    button => button.type === 'update'
                                )?.route
                            "
                        >
                            <span>Update</span>
                        </button>
                        <Button
                            v-if="
                                routeStateMeta()?.ctaButton.find(
                                    button => button.type === 'save'
                                )
                            "
                            :loading="isLoading"
                            @click="
                                routeStateMeta()?.ctaButton.find(
                                    button => button.type === 'save'
                                )?.route
                            "
                        >
                            Save
                        </Button>
                        <button
                            v-if="
                                routeStateMeta()?.ctaButton.find(
                                    button => button.type === 'delete'
                                )
                            "
                            type="button"
                            class="relative justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            @click="
                                routeStateMeta()?.ctaButton.find(
                                    button => button.type === 'delete'
                                )?.route
                            "
                        >
                            <span>Delete</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import Input from '~/components/atom/Input.vue'
import Button from '~/components/atom/Button.vue'
import usePetRepository from '~/repositories/pets'
import { useAuthStore } from '~~/stores/auth'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import Select from '~/components/UI/Select/Select.vue'
import Switch from '~/components/atom/Switch.vue'
import type { SelectItem } from '~/components/UI/Select/types'
import { definitions } from '~~/types/supabase'
import useValidations from '~/composables/validations'
import 'vue3-carousel/dist/carousel.css'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

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
    validateImageLength,
    validateEmail,
    validatePhoneNumber
} = useValidations()

const {
    uploadPetImage,
    getAnimalTypes,
    getBreeds,
    createPet,
    getMyPets,
    updatePet,
    getPetDetails
} = usePetRepository()

const myPets = ref([{}])
const animalTypes = ref<definitions['animal_types'][]>([])
const selectAnimalTypes = ref<SelectItem[]>([])
const breeds = ref<definitions['animal_breeds'][]>()
const selectBreeds = ref<SelectItem[]>([])

const isRegisterPetDrawerOpen = ref(false)
const isLoading = ref(false)
const isDeleteToggled = ref(false)

const states = {
    VIEW: 'view',
    CREATE: 'create',
    UPDATE: 'update'
}

const routeState = () => {
    if (route.name === 'dashboard-pet-id-details___en') return states.VIEW
    if (route.name === 'dashboard-pet-create___en') return states.CREATE
    if (route.name === 'dashboard-pet-id-update___en') return states.UPDATE
    return null
}

const routeStateMeta = () => {
    if (routeState() === states.VIEW) {
        return {
            header: 'My pet details',
            subtitle: '',
            ctaButton: [
                {
                    type: 'update',
                    route: () =>
                        router.push(`/dashboard/pet/${route.params.id}/update`)
                },
                {
                    type: 'delete',
                    route: () => (isDeleteToggled.value = true)
                }
            ]
        }
    }
    if (routeState() === states.CREATE) {
        return {
            header: 'Register a pet',
            subtitle:
                'Get started by filling in the information below to register your pet in case of when it get lost',
            ctaButton: [
                {
                    type: 'cancel',
                    route: () => router.push('/dashboard/pet')
                },
                {
                    type: 'save',
                    route: () => onSaveMyPet(states.CREATE)
                }
            ]
        }
    }
    if (routeState() === states.UPDATE) {
        return {
            header: 'Update my pet details',
            subtitle: '',
            ctaButton: [
                {
                    type: 'cancel',
                    route: () =>
                        router.push(`/dashboard/pet/${route.params.id}/details`)
                },
                {
                    type: 'save',
                    route: () => onSaveMyPet(states.UPDATE)
                }
            ]
        }
    }
}

const myPetInit = () => {
    return {
        ...(route?.params?.id && { id: route.params.id }),
        user_id: auth?.user?.id,
        pet_images: [],
        status: '',
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
        is_vaccinated: 1
    }
}

const myPet = ref(myPetInit())

const fetchPetDetails = async () => {
    if (unref(myPet).id) {
        try {
            isLoading.value = true
            const data = await getPetDetails(unref(myPet).id)
            console.log(data)
            myPet.value = {
                ...unref(myPet),
                pet_images: data.pet_images,
                status: data.status,
                description: data?.description,
                animal_type_id: data.animal_type_id,
                breed: {},
                name: data.name,
                weight: data.weight,
                height: data.height,
                instagram: '',
                address: '',
                longitude: '',
                latitude: '',
                twitter: data.twitter,
                facebook: data.facebook,
                email: data.email,
                contact_number: data.contact_number,
                gender: Gender.Male,
                is_vaccinated: true
            }
        } catch (error) {
        } finally {
            isLoading.value = false
        }
    }
}

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
            unref(myPet).pet_images.push({ url: data?.publicURL })
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
    myPet.value.pet_images.splice(index, 1)
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
        pet_images: '',
        email: '',
        contact_number: ''
    }
}

const errorMessages = ref(myPetErrorMessageInit())

const allMyPetErrorMessage = () => {
    errorMessages.value.status = validateRequired(
        unref(myPet)?.status,
        'Status'
    )
    errorMessages.value.animal_type = validateRequired(
        unref(myPet)?.animal_type_id,
        'Animal type'
    )
    errorMessages.value.pet_images = validateImageLength(
        unref(myPet).pet_images
    )
    errorMessages.value.breed = validateRequired(unref(myPet).breed, 'Breed')
    errorMessages.value.name = validateRequired(unref(myPet).name, 'Name')
    errorMessages.value.email = validateEmail(unref(myPet).email)
    errorMessages.value.contact_number = validatePhoneNumber(
        unref(myPet).contact_number
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

const onSaveMyPet = async state => {
    try {
        console.log(unref(myPet))
        let data = null
        isLoading.value = true
        allMyPetErrorMessage()
        console.log(isErrorMessageEmpty(unref(errorMessages)))

        if (!isErrorMessageEmpty(unref(errorMessages))) return

        console.log('test')

        if (unref(myPet).id) {
            data = await updatePet(unref(myPet).id, unref(myPet))
        } else {
            data = await createPet(unref(myPet))
            console.log(data)
        }

        return router.push(
            `/dashboard/pet/${data.id || route.params.id}/details`
        )
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
fetchPetDetails()
</script>
