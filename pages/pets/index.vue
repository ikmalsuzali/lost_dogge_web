<template>
    <div>
        <div class="relative bg-gray-800 m-10 rounded-xl">
            <div
                class="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2 rounded-xl"
            >
                <img
                    class="h-full w-full object-cover rounded-l-xl"
                    src="https://fhasuqzjmruhvugclutt.supabase.co/storage/v1/object/public/pets/website/andrew-s-ouo1hbizWwo-unsplash%20(2).jpg"
                    alt=""
                />
            </div>
            <div
                class="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
            >
                <div class="md:ml-auto md:w-1/2 md:pl-10">
                    <p
                        class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                    >
                        Start searching for lost pets around your area
                    </p>
                    <p class="mt-3 text-lg text-gray-300">
                        We strive to help you find your lost pet. Our mission to
                        help reunite you with your beloved pet. With the help of
                        our AI (artificial intelligence algorithm) and the help
                        of the community we scan through matching possibilities
                        of your pet
                    </p>
                </div>
            </div>
        </div>
        <TransitionRoot as="template" :show="isPetDetailsDrawerOpen">
            <Dialog
                as="div"
                class="relative z-10"
                @close="isPetDetailsDrawerOpen = false"
            >
                <TransitionChild
                    as="template"
                    enter="ease-in-out duration-500"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="ease-in-out duration-500"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <div
                        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    />
                </TransitionChild>
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
                                    class="pointer-events-auto w-screen max-w-md"
                                >
                                    <div
                                        class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                                    >
                                        <div class="px-4 py-6 sm:px-6">
                                            <div
                                                class="flex items-start justify-between"
                                            >
                                                <h2
                                                    id="slide-over-heading"
                                                    class="text-lg font-medium text-gray-900"
                                                >
                                                    Profile
                                                </h2>
                                                <div
                                                    class="ml-3 flex h-7 items-center"
                                                >
                                                    <button
                                                        type="button"
                                                        class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                                                    >
                                                        <span class="sr-only"
                                                            >Close panel</span
                                                        >
                                                        <XMarkIcon
                                                            class="h-6 w-6"
                                                            aria-hidden="true"
                                                            @click="
                                                                isPetDetailsDrawerOpen = false
                                                            "
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="pb-1 sm:pb-6">
                                                <carousel :items-to-show="1">
                                                    <slide
                                                        v-for="image in selectedPet.pet_images"
                                                        :key="slide"
                                                    >
                                                        <img
                                                            class="aspect-video w-full object-cover object-center"
                                                            :src="
                                                                image.url ||
                                                                'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                                            "
                                                        />
                                                    </slide>

                                                    <template #addons>
                                                        <pagination />
                                                    </template>
                                                </carousel>
                                                <div>
                                                    <div
                                                        class="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6"
                                                    >
                                                        <div class="sm:flex-1">
                                                            <div
                                                                class="grid grid-cols-2"
                                                            >
                                                                <div>
                                                                    <div
                                                                        class="flex items-center"
                                                                    >
                                                                        <h3
                                                                            class="text-xl font-bold text-gray-900 sm:text-2xl"
                                                                        >
                                                                            {{
                                                                                selectedPet?.name
                                                                            }}
                                                                        </h3>
                                                                    </div>
                                                                    <p
                                                                        class="text-sm text-gray-500"
                                                                    >
                                                                        {{
                                                                            breedAndTypeName(
                                                                                selectedPet
                                                                            )
                                                                        }}
                                                                    </p>
                                                                </div>
                                                                <div
                                                                    class="pt-2"
                                                                >
                                                                    <dt
                                                                        class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
                                                                    >
                                                                        Last
                                                                        seen
                                                                        date
                                                                    </dt>
                                                                    <dd
                                                                        class="mt-1 text-sm text-gray-900 sm:col-span-2"
                                                                    >
                                                                        {{
                                                                            dayjs(
                                                                                selectedPet.created_at
                                                                            ).format(
                                                                                'MMM DD, YYYY hh:mm A'
                                                                            )
                                                                        }}
                                                                    </dd>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3"
                                                            >
                                                                <button
                                                                    type="button"
                                                                    class="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1"
                                                                >
                                                                    Have you
                                                                    seen me?
                                                                </button>

                                                                <div
                                                                    class="ml-3 inline-flex sm:ml-0"
                                                                >
                                                                    <Menu
                                                                        as="div"
                                                                        class="relative inline-block text-left"
                                                                    >
                                                                        <MenuButton
                                                                            class="inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                                        >
                                                                            <span
                                                                                class="sr-only"
                                                                                >isPetDetailsDrawerOpen
                                                                                options
                                                                                menu</span
                                                                            >
                                                                            <EllipsisVerticalIcon
                                                                                class="h-5 w-5"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </MenuButton>
                                                                        <transition
                                                                            enter-active-class="transition ease-out duration-100"
                                                                            enter-from-class="transform opacity-0 scale-95"
                                                                            enter-to-class="transform opacity-100 scale-100"
                                                                            leave-active-class="transition ease-in duration-75"
                                                                            leave-from-class="transform opacity-100 scale-100"
                                                                            leave-to-class="transform opacity-0 scale-95"
                                                                        >
                                                                            <MenuItems
                                                                                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                                            >
                                                                                <div
                                                                                    class="py-1"
                                                                                >
                                                                                    <MenuItem
                                                                                        v-slot="{
                                                                                            active
                                                                                        }"
                                                                                    >
                                                                                        <a
                                                                                            href="#"
                                                                                            :class="[
                                                                                                active
                                                                                                    ? 'bg-gray-100 text-gray-900'
                                                                                                    : 'text-gray-700',
                                                                                                'block px-4 py-2 text-sm'
                                                                                            ]"
                                                                                            >View
                                                                                            profile</a
                                                                                        >
                                                                                    </MenuItem>
                                                                                    <MenuItem
                                                                                        v-slot="{
                                                                                            active
                                                                                        }"
                                                                                    >
                                                                                        <a
                                                                                            href="#"
                                                                                            :class="[
                                                                                                active
                                                                                                    ? 'bg-gray-100 text-gray-900'
                                                                                                    : 'text-gray-700',
                                                                                                'block px-4 py-2 text-sm'
                                                                                            ]"
                                                                                            >Copy
                                                                                            profile
                                                                                            link</a
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
                                            </div>
                                            <div
                                                class="px-4 pt-5 pb-5 sm:px-0 sm:pt-0"
                                            >
                                                <dl
                                                    class="space-y-8 px-4 sm:space-y-6 sm:px-6"
                                                >
                                                    <div>
                                                        <dt
                                                            class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
                                                        >
                                                            Bio
                                                        </dt>
                                                        <dd
                                                            class="mt-1 text-sm text-gray-900 sm:col-span-2"
                                                        >
                                                            <p>
                                                                {{
                                                                    selectedPet.description
                                                                }}
                                                            </p>
                                                        </dd>
                                                    </div>
                                                    <div>
                                                        <dt
                                                            class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
                                                        >
                                                            Last Seen Location
                                                        </dt>
                                                        <dd
                                                            class="mt-1 text-sm text-gray-900 sm:col-span-2"
                                                        >
                                                            New York, NY, USA
                                                        </dd>
                                                        <div class="h-96 my-2">
                                                            <MapboxMap
                                                                :accessToken="
                                                                    mapboxApi
                                                                "
                                                                :center="
                                                                    selectedPetLatLong
                                                                "
                                                                :flyToOptions="{
                                                                    maxDuration: 2000,
                                                                    speed: 1.2
                                                                }"
                                                                auto-resize
                                                                :zoom="11"
                                                            >
                                                                <MapboxGeogeometryCircle
                                                                    :center="
                                                                        selectedPetLatLong
                                                                    "
                                                                    :radius="1"
                                                                />

                                                                <MapboxMarker
                                                                    :lngLat="
                                                                        selectedPetLatLong
                                                                    "
                                                                >
                                                                    <v-icon
                                                                        slot="marker"
                                                                        >mdi-map-marker</v-icon
                                                                    >
                                                                </MapboxMarker>
                                                            </MapboxMap>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="grid grid-cols-2"
                                                    >
                                                        <div>
                                                            <dt
                                                                class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
                                                            >
                                                                Social
                                                            </dt>
                                                            <dd
                                                                class="mt-1 text-sm text-gray-900 sm:col-span-2"
                                                            >
                                                                ashleyporter.com
                                                            </dd>
                                                        </div>
                                                        <div>
                                                            <dt
                                                                class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
                                                            >
                                                                Birthday
                                                            </dt>
                                                            <dd
                                                                class="mt-1 text-sm text-gray-900 sm:col-span-2"
                                                            >
                                                                <time
                                                                    datetime="1988-06-23"
                                                                    >June 23,
                                                                    1988</time
                                                                >
                                                            </dd>
                                                        </div>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
        <div class="mx-10">
            <div class="flex space-x-4">
                <Combobox as="div" v-model="searchedLocation">
                    <div class="relative mt-1">
                        <ComboboxInput
                            style="width: 50vw"
                            class="rounded-md border border-gray-300 bg-white pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-md"
                            placeholder="Search last seen location of a pet"
                            @change="searchedLocation = $event.target.value"
                            :display-value="person => person?.name"
                        />
                        <ComboboxButton
                            class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
                        >
                            <MapPinIcon
                                class="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </ComboboxButton>

                        <ComboboxOptions
                            v-if="mappedGeoLocations.length > 0"
                            class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        >
                            <ComboboxOption
                                v-for="person in mappedGeoLocations"
                                :key="person.id"
                                :value="person"
                                as="template"
                                v-slot="{ active, selected }"
                            >
                                <li
                                    :class="[
                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                        active
                                            ? 'bg-indigo-600 text-white'
                                            : 'text-gray-900'
                                    ]"
                                >
                                    <span
                                        :class="[
                                            'block truncate',
                                            selected && 'font-semibold'
                                        ]"
                                    >
                                        {{ person.name }}
                                    </span>

                                    <span
                                        v-if="selected"
                                        :class="[
                                            'absolute inset-y-0 right-0 flex items-center pr-4',
                                            active
                                                ? 'text-white'
                                                : 'text-indigo-600'
                                        ]"
                                    >
                                        <CheckIcon
                                            class="h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </li>
                            </ComboboxOption>
                        </ComboboxOptions>
                    </div>
                </Combobox>

                <button
                    type="button"
                    class="inline-flex flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-34 !ml-auto"
                >
                    <span class="mr-2"> Filters </span>

                    <CogIcon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>

            <div
                class="my-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
            >
                <!-- FILTERS -->

                <div v-for="pet in pets" :key="pet.id" class="group relative">
                    <div
                        class="mx-auto flex w-full flex-col justify-center bg-white rounded-2xl shadow-none shadow-slate-300/60 cursor-pointer hover:shadow-xl"
                        @click="onPetClick(pet)"
                    >
                        <img
                            class="aspect-video w-full rounded-t-2xl object-cover object-center"
                            :src="
                                pet.pet_images.length
                                    ? pet.pet_images[0].url
                                    : 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            "
                        />
                        <div class="p-4">
                            <small class="text-blue-400 text-xs">{{
                                breedAndTypeName(pet)
                            }}</small>
                            <h1
                                class="text-2xl font-medium text-slate-600 pb-2"
                            >
                                {{ pet.name }}
                            </h1>
                            <p
                                class="text-sm tracking-tight font-light text-slate-400 leading-6 line-clamp-3"
                            >
                                {{ pet.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { MapboxMap, MapboxMarker, MapboxGeogeometryCircle } from 'vue-mapbox-ts'
import { watchEffect, ref } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    Dialog,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot
} from '@headlessui/vue'
import { XMarkIcon, CogIcon, MapPinIcon } from '@heroicons/vue/24/outline'
import {
    EllipsisVerticalIcon,
    ArrowTopRightOnSquareIcon
} from '@heroicons/vue/20/solid'
import useAnimalRepository from '../../repositories/animals.ts'
import usePetRepository from '../../repositories/pets'
import useMapboxRepository from '../../repositories/mapbox'

import * as dayjs from 'dayjs'
import { refThrottled } from '@vueuse/core'
import 'vue3-carousel/dist/carousel.css'

definePageMeta({
    layout: 'page'
})

const config = useRuntimeConfig()
const mapboxApi = config.MAPBOX_KEY
const { getAnimalTypes, getBreedsByType } = await useAnimalRepository()
const { getPets } = await usePetRepository()
const { getGeocodingLocations } = useMapboxRepository()
const pets = ref([])
const searchedLocation = ref('')
const query = ref('')
const throttledQuery = refThrottled(searchedLocation, 1000)
const isPetDetailsDrawerOpen = ref(false)
const selectedPet = ref()
const animalTypes = ref([])
const geoCodingLocations = ref([])
const filter = ref({
    animalBreedIds: [],
    animalTypeId: ''
})

const breedsByType = computed(() => {
    return getBreedsByType(filter.value?.animalTypeId)
})

const selectedPetLatLong = computed(() => {
    return [selectedPet.value.latitude, selectedPet.value.longitude]
})

const fetchTypes = async () => {
    animalTypes.value = await getAnimalTypes()
}

const fetchPets = async () => {
    pets.value = await getPets()
}

const onPetClick = pet => {
    selectedPet.value = pet
    isPetDetailsDrawerOpen.value = true
}

const breedAndTypeName = pet => {
    if (!pet?.breed) return ''
    return `${pet?.breed?.type ? pet?.breed.type + ' - ' : ''}${
        pet?.breed.name || ''
    }`
}

const onSearchedLocation = async () => {
    console.log(throttledQuery.value)
    geoCodingLocations.value = []
    geoCodingLocations.value = await getGeocodingLocations(throttledQuery.value)
    console.log(geoCodingLocations.value)
}

watchEffect(() => onSearchedLocation())

const people = [
    { id: 1, name: 'Leslie Alexander' },
    { id: 2, name: 'Leslie Alexander' },
    { id: 3, name: 'Leslie Alexander' }

    // More users...
]

const mappedGeoLocations = computed(() =>
    !geoCodingLocations.value.length
        ? []
        : geoCodingLocations.value.map(_location => {
              return {
                  id: _location.id,
                  name: _location.place_name
              }
          })
)

fetchTypes()
fetchPets()
</script>
