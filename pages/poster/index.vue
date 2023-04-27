<template>
    <div class="mx-auto max-w-7xl py-24 lg:items-center lg:gap-x-10 lg:px-8">
        <div class="">
            <h2 class="text-4xl font-bold tracking-tight text-gray-900">
                Generate Poster
            </h2>
            <p class="mt-2 text-lg leading-8 text-gray-600">
                We help companies and individuals build out their brand
                guidelines.
            </p>
            <div class="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
                <div class="lg:flex-auto bg-white p-8 rounded-xl">
                    <div
                        class="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2"
                    >
                        <div class="col-span-2">
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
                            </label>
                        </div>

                        <div>
                            <label
                                for="first-name"
                                class="block text-sm font-semibold leading-6 text-gray-900"
                                >Pet name</label
                            >
                            <div class="mt-2.5">
                                <input
                                    v-model="myPet.name"
                                    type="text"
                                    autocomplete="given-name"
                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                for="last-name"
                                class="block text-sm font-semibold leading-6 text-gray-900"
                                >Pet Status</label
                            >
                            <div class="mt-2.5">
                                <Select
                                    v-model="myPet.status"
                                    placeholder="Status"
                                    :items="selectPetStatus"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                for="budget"
                                class="block text-sm font-semibold leading-6 text-gray-900"
                                >Animal Type</label
                            >
                            <div class="mt-2.5">
                                <Select
                                    v-model="myPet.animal_type_id"
                                    placeholder="Select a type"
                                    :items="selectAnimalTypes"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                for="website"
                                class="block text-sm font-semibold leading-6 text-gray-900"
                                >Gender</label
                            >
                            <div class="mt-2.5">
                                <Select
                                    v-model="myPet.gender"
                                    placeholder="Gender"
                                    :items="selectGender"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                class="block text-sm font-semibold leading-6 text-gray-900"
                                >Phone number</label
                            >
                            <div class="mt-2.5">
                                <input
                                    v-model="myPet.contact_number"
                                    type="text"
                                    autocomplete="given-name"
                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                class="block text-sm font-semibold leading-6 text-gray-900"
                                >Email</label
                            >
                            <div class="mt-2.5">
                                <input
                                    v-model="myPet.email"
                                    type="text"
                                    autocomplete="given-name"
                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div class="col-span-2">
                            <label
                                for="website"
                                class="block text-sm font-semibold leading-6 text-gray-900"
                                >Location</label
                            >
                            <div class="mt-2.5">
                                <input
                                    v-model="myPet.address"
                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label
                                for="message"
                                class="block text-sm font-semibold leading-6 text-gray-900"
                                >Description</label
                            >
                            <div class="mt-2.5">
                                <textarea
                                    v-model="myPet.description"
                                    id="message"
                                    name="message"
                                    rows="4"
                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="mt-10">
                        <button
                            type="submit"
                            class="block w-full rounded-md bg-[#5C1511] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#5C1511]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:ring-[#5C1511]"
                            @click="generatePoster"
                        >
                            Generate Poster
                        </button>
                    </div>
                </div>
                <div class="lg:mt-6 md:w-4/12 lg:flex-none">
                    <div class="relative z-[-1]">
                        <BasePoster
                            ref="mainBasePoster"
                            class="shadow-md hover:shadow-2xl"
                            :posterName="posters[1].name"
                            :pet="myPet"
                            :settings="posters[1].settings"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-10">
            <h2 class="text-4xl font-bold tracking-tight text-gray-900">
                Login to view, download, and share posters
            </h2>
            <p class="my-2 text-lg leading-8 text-gray-600">
                We help companies and individuals build out their brand
                guidelines.
            </p>
            <div class="flex space-x-8">
                <div
                    class="my-2"
                    v-for="(poster, index) in posters"
                    :key="index"
                >
                    <BasePoster
                        :posterName="poster.name"
                        :pet="myPet"
                        :settings="poster.settings"
                    />
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="flex flex-wrap space-x-4 justify-around pt-10">
        <div class="my-2" v-for="(poster, index) in posters" :key="index">
            <BasePoster
                class="shadow-md hover:shadow-2xl"
                :poster="poster"
                :myPet="myPet"
            />
            <div></div>
        </div>
    </div> -->
</template>

<script lang="ts" setup>
import Poster1 from '~/components/poster/1.vue'
import Poster2 from '~/components/poster/2.vue'
import Poster3 from '~/components/poster/3.vue'
import BasePoster from '~/components/poster/base.vue'
import Select from '@/components/UI/Select/Select.vue'
import usePetRepository from '~~/repositories/pets'
import { definitions } from '~~/types/supabase'
import { SelectItem } from '~~/components/UI/Select/types'

definePageMeta({
    layout: 'page',
    middleware: 'index'
})

enum PetStatus {
    Lost = 1,
    Found = 2
}
const { getAnimalTypes, uploadTmpImage } = usePetRepository()
const mainBasePoster = ref(null)
const animalTypes = ref<definitions['animal_types'][]>([])
const selectAnimalTypes = ref<SelectItem[]>([])

const selectPetStatus = ref([
    {
        text: 'Lost',
        value: PetStatus.Lost
    },
    {
        text: 'Found',
        value: PetStatus.Found
    }
])

const selectGender = ref([
    {
        text: 'Male',
        value: 0
    },
    {
        text: 'Female',
        value: 1
    }
])

const myPet = ref({
    name: '',
    status: null,
    animal_types: {
        id: null,
        name: null
    },
    pet_images: [
        {
            url: 'https://fhasuqzjmruhvugclutt.supabase.co/storage/v1/object/public/pets/website/lost_doggo.jpg'
        }
    ],
    gender: null,
    address: '',
    description: ''
})

const uploadImage = async (e: InputEvent) => {
    console.log(e.target.files)
    const image = e.target?.files?.[0]

    try {
        const data = await uploadTmpImage(image)
        unref(myPet).pet_images.unshift({ url: data?.publicURL })
    } catch (error) {}
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

const posters = ref([
    {
        name: 'poster1',
        component: Poster1,
        settings: {
            isActionBarHidden: true,
            hasEmail: true,
            hasPhoneNumber: true
        }
    },
    {
        name: 'poster2',
        component: Poster2,
        settings: {
            isActionBarHidden: true,
            hasEmail: true,
            hasPhoneNumber: true
        }
    },
    {
        name: 'poster3',
        component: Poster3,
        settings: {
            isActionBarHidden: true,
            hasEmail: true,
            hasPhoneNumber: true
        }
    }
    // {
    //     name: 'Poster 2',
    //     component: Poster1,
    //     settings: {
    //         hasEmail: true,
    //         hasPhoneNumber: true
    //     }
    // }
])

const generatePoster = () => {
    unref(mainBasePoster)?.onImageClick()
}

watch(
    () => unref(myPet)?.animal_type_id,
    () => {
        myPet.value.animal_types = unref(animalTypes).find(animalType => {
            if (animalType.id === unref(myPet)?.animal_type_id) {
                return animalType
            }
        })
        console.log('myPet', myPet.value)
    }
)

fetchAnimalTypes()
</script>
