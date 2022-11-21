<template>
    <div>
        <Drawer v-model:drawer-open="isFilterDrawerOpen" drawerTitle="Filters">
            <div
                class="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0"
            >
                <div
                    v-if="filter?.location.name"
                    class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
                >
                    <div>
                        <label
                            for="project-name"
                            class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >Current location</label
                        >
                    </div>
                    <div class="sm:col-span-2">
                        <p class="mt-2 text-sm">{{ filter?.location.name }}</p>
                    </div>
                </div>
                <div
                    class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
                >
                    <div>
                        <label
                            for="project-name"
                            class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >Radius</label
                        >
                    </div>
                    <div class="sm:col-span-2">
                        <Select
                            v-model="filterDrawer.radius"
                            placeholder="Radius"
                            :items="radiusItems"
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
                            >Animal type</label
                        >
                    </div>
                    <div class="sm:col-span-2">
                        <Select
                            v-model="filterDrawer.animalTypeId"
                            placeholder="Select a animal type"
                            :items="selectAnimalTypes"
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
                            >Breed</label
                        >
                    </div>
                    <div class="sm:col-span-2">
                        <Select
                            v-model="filterDrawer.breed"
                            placeholder="Select a breed"
                            :items="filteredBreeds"
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
                        <Select
                            v-model="filterDrawer.gender"
                            placeholder="Gender"
                            :items="genderItems"
                        />
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
                        @click="isFilterDrawerOpen = false"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        @click="onSaveFilter"
                    >
                        Filter
                    </button>
                </div>
            </div>
        </Drawer>
        <Drawer
            v-model:drawer-open="isPetDetailsDrawerOpen"
            drawerTitle="Pet Details"
        >
            <div>
                <div class="pb-1 sm:pb-6">
                    <carousel :items-to-show="1">
                        <slide
                            v-for="(image, index) in selectedPet.pet_images"
                            :key="index"
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
                                <div class="grid grid-cols-2">
                                    <div>
                                        <div class="flex items-center">
                                            <h3
                                                class="text-xl font-bold text-gray-900 sm:text-2xl"
                                            >
                                                {{ selectedPet?.name }}
                                            </h3>
                                        </div>
                                        <p class="text-sm text-gray-500">
                                            {{ breedAndTypeName(selectedPet) }}
                                        </p>
                                    </div>
                                    <div class="pt-2">
                                        <dt
                                            class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
                                        >
                                            Last seen date
                                        </dt>
                                        <dd
                                            class="mt-1 text-sm text-gray-900 sm:col-span-2"
                                        >
                                            {{
                                                dayjs(
                                                    selectedPet.created_at
                                                ).format('MMM DD, YYYY hh:mm A')
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
                                        Have you seen me?
                                    </button>

                                    <div class="ml-3 inline-flex sm:ml-0">
                                        <Menu
                                            as="div"
                                            class="relative inline-block text-left"
                                        >
                                            <MenuButton
                                                class="inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                <span class="sr-only"
                                                    >isPetDetailsDrawerOpen
                                                    options menu</span
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
                                                                    'block px-4 py-2 text-sm'
                                                                ]"
                                                                >View profile</a
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
                                                                >Copy profile
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
                <div class="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
                    <dl class="space-y-8 px-4 sm:space-y-6 sm:px-6">
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
                                    {{ selectedPet.description }}
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
                                    :accessToken="mapboxApi"
                                    :center="selectedPetLatLong"
                                    :flyToOptions="{
                                        maxDuration: 2000,
                                        speed: 1.2
                                    }"
                                    auto-resize
                                    :zoom="11"
                                >
                                    <MapboxGeogeometryCircle
                                        :center="selectedPetLatLong"
                                        :radius="1"
                                    />

                                    <MapboxMarker :lngLat="selectedPetLatLong">
                                        <v-icon slot="marker"
                                            >mdi-map-marker</v-icon
                                        >
                                    </MapboxMarker>
                                </MapboxMap>
                            </div>
                        </div>
                        <div class="grid grid-cols-2">
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
                                    <time datetime="1988-06-23"
                                        >June 23, 1988</time
                                    >
                                </dd>
                            </div>
                        </div>
                    </dl>
                </div>
            </div>
        </Drawer>
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
        <div class="mx-10">
            <div class="flex space-x-4">
                <Autocomplete
                    v-model="filter.location.name"
                    placeholder="Search last seen location of your pet"
                    :throttle-time="1000"
                    :items="geocodingLocations"
                    item-key="id"
                    item-value="place_name"
                    @returned-object="updateLocationFilter"
                />
                <button
                    type="button"
                    class="inline-flex flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-34 !ml-auto"
                    @click="isFilterDrawerOpen = true"
                >
                    <span class="mr-2"> Filters </span>

                    <CogIcon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div class="w-3/12 flex mx-auto" v-if="isLoading">
                <Vue3Lottie
                    animationLink="https://fhasuqzjmruhvugclutt.supabase.co/storage/v1/object/public/pets/website/lost-dog-loading.json"
                />
            </div>
            <div
                v-else
                class="my-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
            >
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

<script lang="ts" setup>
import Autocomplete from '@/components/atom/Autocomplete.vue'
import { MapboxMap, MapboxMarker, MapboxGeogeometryCircle } from 'vue-mapbox-ts'
import { watchEffect, ref } from 'vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { CogIcon } from '@heroicons/vue/24/outline'
import { PetMatchPossibleType } from '~/types/index'
import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'
import usePetRepository from '@/repositories/pets'
import useMapboxRepository from '@/repositories/mapbox'
import * as dayjs from 'dayjs'
import { useRoute } from 'vue-router'
import 'vue3-carousel/dist/carousel.css'
import Drawer from '@/components/atom/Drawer.vue'
import Select from '~/components/UI/Select/Select.vue'

definePageMeta({
    layout: 'page'
})

const PetStatus = {
    LOST: 0,
    FOUND: 1
}

const route = useRoute()
const config = useRuntimeConfig()
const { getGeocodingLocations } = useMapboxRepository()
const { getAnimalTypes, getBreeds, getPets, updatePetMatchType } =
    usePetRepository()

const mapboxApi = config.MAPBOX_KEY
const pets = ref([])
const isPetDetailsDrawerOpen = ref(false)
const selectedPet = ref()
const geocodingLocations = ref([])
const isLoading = ref(false)
const isFilterDrawerOpen = ref(false)
const animalTypes = ref([])
const selectAnimalTypes = ref([])
const breeds = ref([])
const selectBreeds = ref([])
const radiusItems = ref([
    { text: '3 miles', value: 3 },
    { text: '10 miles', value: 10 },
    { text: '20 miles', value: 20 },
    { text: '50 miles', value: 50 }
])
const genderItems = ref([
    { text: 'Male', value: 0 },
    { text: 'Female', value: 1 }
])

const filter = ref({
    location: {
        name: route?.query.name || '',
        longitude: route?.query.longitude || null,
        latitude: route?.query.latitude || ''
    },
    animalBreedIds: [],
    animalTypeId: null,
    radius: null,
    gender: null,
    breed: null,
    status: PetStatus[route.query.type?.toUpperCase || 0]
})

const filterDrawerInit = () => {
    return {
        animalBreedIds: [],
        animalTypeId: null,
        gender: null,
        radius: null,
        breed: null
    }
}

const filterDrawer = ref(filterDrawerInit())

const selectedPetLatLong = computed(() => {
    return [selectedPet.value.latitude, selectedPet.value.longitude]
})

const fetchTypes = async () => {
    animalTypes.value = await getAnimalTypes()
}

const fetchPets = async () => {
    try {
        isLoading.value = true
        pets.value = []
        pets.value = await getPets({
            status: PetStatus.LOST,
            ...(unref(filter)?.location.longitude &&
                unref(filter)?.location.latitude && {
                    longitude: unref(filter)?.location.longitude,
                    latitude: unref(filter)?.location.latitude
                }),
            ...(unref(filter).radius && { radius: unref(filter).radius }),
            ...(unref(filter).breed && { breed_ids: [unref(filter).breed] }),
            ...(unref(filter).gender !== null && {
                gender: unref(filter).gender
            }),
            ...(unref(filter).animalTypeId &&
                !unref(filter).breed && {
                    animal_type_id: unref(filter).animalTypeId
                })
        })
    } catch (error) {
        console.log(error)
    } finally {
        isLoading.value = false
    }
}

const onPetClick = pet => {
    selectedPet.value = pet
    isPetDetailsDrawerOpen.value = true
}

const breedAndTypeName = pet => {
    if (!pet?.breed) return ''
    return `${pet?.breed?.type ? pet?.breed?.type + ' - ' : ''}${
        pet?.breed.name || ''
    }`
}

const onSearchedLocation = async () => {
    geocodingLocations.value = []
    geocodingLocations.value = await getGeocodingLocations(
        filter.value?.location?.name
    )
}

const updateLocationFilter = val => {
    filter.value.location = {
        name: val.name,
        longitude: val.itemMeta?.center[0],
        latitude: val.itemMeta?.center[1]
    }

    fetchPets()
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
    if (!unref(filterDrawer).animalType?.value) return unref(selectBreeds)
    return unref(selectBreeds).filter(
        breed => breed.animal_type_id === unref(myPet).value.animal_type
    )
})

const onSaveFilter = async () => {
    filter.value = {
        ...unref(filter),
        ...unref(filterDrawer)
    }
    isFilterDrawerOpen.value = false
    await fetchPets()
}

// watch(isFilterDrawerOpen, val => {
//     if (!val) filterDrawer.value = filterDrawerInit()
// })

watchEffect(() => onSearchedLocation())

fetchAnimalTypes()
fetchBreeds()
fetchTypes()
fetchPets()
</script>
