<template>
    <ul
        role="list"
        class="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
        <li
            v-for="(pet, index) in petMatches"
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
                                    <!-- <carousel :items-to-show="1">
                                        <slide
                                            v-for="(image, imageIndex) in [{}]"
                                            :key="imageIndex"
                                        >
                                            <img
                                                class="aspect-video w-full object-cover object-center"
                                                :src="image.url"
                                            />
                                        </slide>
                                    </carousel> -->
                                </div>
                                <!-- <div class="absolute bottom-0 left-5 mb-3 flex">
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
                                <div class="absolute top-0 inline-flex right-2">
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
                                </div> -->

                                <!-- <span
                                    class="absolute top-0 left-0 z-10 mt-3 ml-3 inline-flex select-none rounded-lg bg-transparent px-3 py-2 text-lg font-medium text-white"
                                >
                                    <i class="fa fa-star"></i>
                                </span> -->
                            </div>
                            <!-- 
                            <div class="mt-4">
                                <h2
                                    class="line-clamp-1 text-2xl font-medium text-gray-800 md:text-lg"
                                    title="New York"
                                >
                                    1000 yards (Brand New) Bungalow Available
                                    in...
                                </h2>

                                <p
                                    class="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight"
                                >
                                    <span class="text-2xl">{{ pet.name }}</span>
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
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div> -->
                        </div>
                    </a>
                </div>
            </div>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { Carousel, Slide } from 'vue3-carousel'
definePageMeta({
    layout: 'dashboard',
    middleware: 'auth'
})

const petMatches = ref([{}])
</script>
