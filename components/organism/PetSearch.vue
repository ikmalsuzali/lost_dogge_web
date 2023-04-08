<template>
    <div class="mx-10">
        <div class="flex space-x-4">
            <div class="w-full">
                <Autocomplete
                    v-model="filter.location.name"
                    placeholder="Search last seen location of your pet"
                    :throttle-time="1000"
                    :items="geocodingLocations"
                    item-key="id"
                    item-value="place_name"
                    :block="true"
                    @returned-object="updateLocationFilter"
                />
            </div>
            <div class="flex-none mt-1">
                <button
                    type="button"
                    class="inline-flex flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-[#5C1511] hover:bg-[#5C1511]/80 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-[#5C1511] focus:ring-offset-2 w-34 !ml-auto mr-2"
                    @click="isRecentlyViewedDrawer = true"
                >
                    <span class="mr-2">Recently Viewed</span>

                    <StarIcon class="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                    type="button"
                    class="inline-flex flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-[#5C1511] hover:bg-[#5C1511]/80 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-[#5C1511] focus:ring-offset-2 w-34 !ml-auto"
                    @click="isFilterDrawerOpen = true"
                >
                    <span class="mr-2">Filters</span>

                    <CogIcon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
        </div>
        <div v-if="isLoading" class="w-5/12 flex mx-auto justify-center mt-20">
            <Vue3Lottie
                class="w-80"
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
                    <VLazyImage
                        class="aspect-video w-full rounded-t-2xl object-cover object-center"
                        :src="
                            pet.pet_images.length
                                ? pet.pet_images[0].url
                                : 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        "
                    />
                    <div class="p-4">
                        <small class="text-blue-400 text-xs">
                            {{ pet?.animal_types?.name }}
                        </small>
                        <h1 class="text-2xl font-medium text-slate-600 pb-2">
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
    <Drawer
        v-model:drawer-open="isRecentlyViewedDrawer"
        drawerTitle="Recently Viewed"
    >
        <div
            class="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0"
        >
            <div class="p-10 grid grid-cols-2 space-x-4 space-y-4">
                <div v-for="pet in petStore.recentlyViewedPetDetails">
                    <div
                        class="col-span-1 mx-auto justify-center bg-white rounded-2xl shadow-none shadow-slate-300/60 cursor-pointer hover:shadow-xl"
                        @click="onPetClick(pet)"
                    >
                        <img
                            class="aspect-video w-full rounded-t-2xl object-cover object-center"
                            :src="pet.pet_images[0].url"
                        />
                        <div class="p-4">
                            <small class="text-blue-400 text-xs">
                                {{ pet?.animal_types?.name }}
                            </small>
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
    </Drawer>
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
        <div class="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
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
                <Carousel :items-to-show="1">
                    <Slide
                        v-for="(image, index) in selectedPet.pet_images"
                        :key="index"
                    >
                        <VLazyImage
                            class="aspect-video w-full object-cover object-center"
                            :src="image.url"
                            src-placeholder="~/assets/images/logo-lost-doggo.svg"
                        />
                    </Slide>

                    <template #addons>
                        <Pagination />
                    </template>
                </Carousel>
                <div>
                    <div class="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
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
                                        {{ selectedPet?.animal_types?.name }}
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
                                class="text-xl font-bold text-gray-900 sm:text-2xl pt-4"
                            >
                                Have you seen me?
                            </div>
                            <div
                                class="mt-2 grid grid-cols-1 sm:grid-cols-2 space-y-3 sm:space-y-0 sm:space-x-3 w-full"
                            >
                                <Button
                                    :block="true"
                                    @click="
                                        onCallNowClick(
                                            selectedPet.contact_number
                                        )
                                    "
                                    >Call Now</Button
                                >
                                <Button
                                    :block="true"
                                    @click="onEmailNowClick(selectedPet.email)"
                                    >Email Now</Button
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
                <dl class="space-y-8 px-4 sm:space-y-6 sm:px-6">
                    <div v-if="selectedPet.description">
                        <dt
                            class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
                        >
                            Description
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">
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
                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">
                            {{ selectedPet.address }}
                        </dd>
                        <div class="h-96 my-2">
                            <MapboxMap
                                v-if="selectedPetLatLong"
                                :accessToken="mapboxApi"
                                :center="selectedPetLatLong"
                                :fly-to-options="{
                                    maxDuration: 2000,
                                    speed: 1.2
                                }"
                                :show-zoom="true"
                                :scroll-zoom="false"
                                auto-resize
                                :zoom="9"
                            >
                                <MapboxGeogeometryCircle
                                    :center="selectedPetLatLong"
                                    :radius="10"
                                />
                                <MapboxNavigationControl
                                    position="bottom-right"
                                    :show-zoom="true"
                                />
                                <MapboxMarker :lng-lat="selectedPetLatLong">
                                    <template v-slot:icon>
                                        <div
                                            class="text-slate-200 text-center text-lg text-white"
                                        >
                                            I was <br />
                                            last seen
                                        </div>
                                        <img
                                            class="w-20"
                                            src="~/assets/images/logo-lost-doggo.svg"
                                        />
                                    </template>
                                </MapboxMarker>
                            </MapboxMap>
                        </div>
                    </div>
                    <div
                        class="text-md font-medium text-gray-900 sm:text-lg pt-4"
                    >
                        If you haven't seen me but still want to help, please
                        share through these platforms
                    </div>
                    <ShareNetwork :my-pet="selectedPet" />

                    <!-- <div class="grid grid-cols-2">
                        <div>
                            <dt
                                class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
                            >
                                Social
                            </dt>
                            <dd
                                class="mt-1 text-sm text-gray-900 sm:col-span-2"
                            >
                                {{ selectedPet.instagram }}
                                {{ selectedPet.facebook }}
                                {{ selectedPet.twitter }}
                            </dd>
                        </div>
                    </div> -->
                </dl>
            </div>
        </div>
    </Drawer>
</template>

<script lang="ts" setup>
import VLazyImage from 'v-lazy-image'
import Autocomplete from '@/components/atom/Autocomplete.vue'
import {
    MapboxMap,
    MapboxMarker,
    MapboxGeogeometryCircle,
    MapboxNavigationControl
} from 'vue-mapbox-ts'
import { watchEffect, ref, nextTick, onMounted } from 'vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { CogIcon, StarIcon } from '@heroicons/vue/24/outline'
import usePetRepository from '@/repositories/pets'
import useMapboxRepository from '@/repositories/mapbox'
import dayjs from 'dayjs'
import { useRoute } from 'vue-router'
import 'vue3-carousel/dist/carousel.css'
import Drawer from '@/components/atom/Drawer.vue'
import Button from '@/components/atom/Button.vue'
import Select from '@/components/UI/Select/Select.vue'
import { usePetStore } from '@/stores/pet'
import ShareNetwork from '@/components/atom/ShareNetwork.vue'

const PetStatus = {
    LOST: 0,
    FOUND: 1
}

const petStore = usePetStore()
const route = useRoute()
const config = useRuntimeConfig()
const { getGeocodingLocations } = useMapboxRepository()
const { getAnimalTypes, getBreeds, getPets, getPetDetails } = usePetRepository()

const mapboxApi = config.MAPBOX_KEY
const pets = ref([])
const isPetDetailsDrawerOpen = ref(false)
const isRecentlyViewedDrawer = ref(false)
const selectedPet = ref()
const geocodingLocations = ref([])
const isLoading = ref(false)
const isFilterDrawerOpen = ref(false)
const animalTypes = ref([])
const selectAnimalTypes = ref([])
const breeds = ref([])
const selectBreeds = ref([])
const recentlyViewedPets = ref(petStore.recentlyViewedPetDetails || [])
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
    status: PetStatus[route?.query?.type?.toUpperCase || 0]
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
    return [selectedPet.value.longitude, selectedPet.value.latitude]
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
            address: unref(filter).location.name || '',
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
    } finally {
        isLoading.value = false
    }
}

const onPetClick = pet => {
    selectedPet.value = pet
    isPetDetailsDrawerOpen.value = true
}

const animalType = pet => {
    return `${pet.animal_types.name}`
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

const openPetDrawer = async () => {
    const petId = route.query?.pet_id
    if (!petId) return
    try {
        selectedPet.value = await getPetDetails(petId)
        isPetDetailsDrawerOpen.value = true
    } catch (error) {
        useNuxtApp().$toast.error(
            'Failed to find pet, most likely the pet has already been found'
        )
    }
}

const onCallNowClick = contactNumber => {
    window.location = `tel:${contactNumber}`
}

const onEmailNowClick = email => {
    window.location = `mailto:${email}`
}

// watch(isFilterDrawerOpen, val => {
//     if (!val) filterDrawer.value = filterDrawerInit()
// })

watchEffect(() => onSearchedLocation())

fetchAnimalTypes()
fetchBreeds()
fetchTypes()
fetchPets()
onMounted(() => {
    openPetDrawer()
})

watch(
    () => unref(selectedPet),
    value => {
        if (unref(selectedPet)?.pet_id) {
            petStore.onRecentlyViewedPetsClick(unref(selectedPet).pet_id)
        }
    },
    { immediate: true }
)
</script>
