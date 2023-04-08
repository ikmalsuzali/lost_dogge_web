<template>
    <Drawer v-model:drawer-open="drawerOpenState" drawerTitle="Pet Details">
        <div>
            <div class="pb-1 sm:pb-6">
                <Carousel :items-to-show="1">
                    <Slide
                        v-for="(image, index) in props.selectedPet?.pet_images"
                        :key="index"
                    >
                        <img
                            class="aspect-video w-full object-cover object-center"
                            :src="image.url"
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
                                    <div
                                        v-if="props.selectedPet?.name"
                                        class="flex items-center"
                                    >
                                        <h3
                                            class="text-xl font-bold text-gray-900 sm:text-2xl"
                                        >
                                            {{ props.selectedPet?.name }}
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
                                                props.selectedPet?.created_at
                                            ).format('MMM DD, YYYY hh:mm A')
                                        }}
                                    </dd>
                                </div>
                            </div>
                            <div
                                v-if="props.type === PetType.FOUND_BY_MATCH"
                                class="mt-5 space-y-3"
                            >
                                <button
                                    type="button"
                                    class="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    @click="emit('messageClick', selectedPet)"
                                >
                                    Message
                                </button>
                                <div class="flex flex-wrap space-x-3">
                                    <button
                                        type="button"
                                        class="w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex-1"
                                        @click="
                                            emit('petMatchTypeClick', {
                                                selectedPetId: selectedPet.id,
                                                type: PetMatchPossibleType.POSSIBLE
                                            })
                                        "
                                    >
                                        Its a match!
                                    </button>
                                    <button
                                        type="button"
                                        class="w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex-1"
                                        @click="
                                            emit('petMatchTypeClick', {
                                                selectedPetId: selectedPet.id,
                                                type: PetMatchPossibleType.POSSIBLE
                                            })
                                        "
                                    >
                                        Possible
                                    </button>
                                    <button
                                        type="button"
                                        class="w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex-1"
                                        @click="
                                            emit('petMatchTypeClick', {
                                                selectedPetId: selectedPet.id,
                                                type: PetMatchPossibleType.POSSIBLE
                                            })
                                        "
                                    >
                                        Not a match
                                    </button>
                                </div>
                            </div>
                            <div
                                v-if="props.type === PetType.LOST"
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
                                                >isPetDetailsDrawerOpen options
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
                    <div v-if="props.selectedPet.description">
                        <dt
                            class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
                        >
                            Description
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">
                            <p>
                                {{ props.selectedPet.description }}
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
                            {{ props.selectedPet.address }}
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
                                    :radius="10"
                                />

                                <MapboxMarker :lng-lat="selectedPetLatLong" />
                            </MapboxMap>
                        </div>
                    </div>
                    <div
                        v-if="props.type === PetType.LOST"
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
                                <time datetime="1988-06-23">June 23, 1988</time>
                            </dd>
                        </div>
                    </div>
                </dl>
            </div>
        </div>
    </Drawer>
</template>

<script lang="ts" setup>
import Drawer from '@/components/atom/Drawer.vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { definitions } from '~~/types/supabase'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { MapboxMap, MapboxMarker, MapboxGeogeometryCircle } from 'vue-mapbox-ts'
import dayjs from 'dayjs'
import { PetType, PetMatchPossibleType } from '~/types/index'

const emit = defineEmits([
    'update:drawerOpen',
    'messageClick',
    'petMatchTypeClick'
])
const config = useRuntimeConfig()

const props = withDefaults(
    defineProps<{
        type: PetType
        isDrawerOpen: boolean
        selectedPet: definitions['pets']
    }>(),
    {
        type: PetType.LOST,
        isDrawerOpen: false,
        selectedPet: {
            pet_images: []
        }
    }
)

const drawerOpenState = computed({
    get: () => props.isDrawerOpen,
    set: value => {
        emit('update:drawerOpen', value)
    }
})

const mapboxApi = config.MAPBOX_KEY

const breedAndTypeName = pet => {
    if (!pet?.breed) return ''
    return `${pet?.breed?.type ? pet?.breed?.type + ' - ' : ''}${
        pet?.breed.name || ''
    }`
}

const selectedPetLatLong = computed(() => {
    return [props.selectedPet.longitude, props.selectedPet.latitude]
})
</script>
