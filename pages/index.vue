<template>
    <div>
        <main class="mx-auto mt-16 max-w-7xl px-4 sm:my-24">
            <div class="text-center">
                <h1
                    class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
                >
                    <span class="block xl:inline">Lost your pet?</span>
                    <div></div>
                    <span class="block text-indigo-600 xl:inline"
                        >Bring your pet home</span
                    >
                </h1>
                <p
                    class="mx-auto mb-5 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"
                >
                    We love our pets and we want to reunite you with yours,
                    safely. Find your lost pet or post a Lost & Found message on
                    our app. We are here to help you find your beloved little
                    friend.
                </p>
                <div class="w-3/12 flex mx-auto" v-if="isLoading">
                    <Vue3Lottie
                        animationLink="https://fhasuqzjmruhvugclutt.supabase.co/storage/v1/object/public/pets/website/lost-dog-loading.json"
                    />
                </div>
                <carousel
                    v-else
                    :items-to-show="5"
                    class="my-5"
                    :autoplay="3000"
                    wrap-around
                    autoplayHoverPause
                >
                    <slide
                        v-for="(pet, index) in lostPets"
                        :key="index"
                        class="p-2"
                    >
                        <div
                            class="mx-auto flex w-full flex-col justify-center bg-white rounded-2xl shadow-none shadow-slate-300/60 cursor-pointer hover:shadow-xl"
                            @click="onPetClick(pet)"
                        >
                            <img
                                class="aspect-square w-full rounded-2xl object-cover object-center"
                                :src="
                                    pet.pet_images.length
                                        ? pet.pet_images[0].url
                                        : 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                "
                            />
                        </div>
                    </slide>
                </carousel>
                <Autocomplete
                    v-model="searchedLocationName"
                    placeholder="Search last seen location of your pet"
                    :throttle-time="1000"
                    :items="geocodingLocations"
                    item-key="id"
                    item-value="place_name"
                    @returned-object="updateLocation"
                />
                <div
                    class="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8"
                >
                    <div class="rounded-md shadow">
                        <a
                            class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                            @click="onPetSearchClick(PetTypeRoute.LOST)"
                            >Search Lost</a
                        >
                    </div>
                    <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                        <a
                            class="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                            @click="onPetSearchClick(PetTypeRoute.FOUND)"
                            >Search Found</a
                        >
                    </div>
                </div>
            </div>
        </main>

        <div class="relative overflow-hidden bg-gray-800">
            <div class="relative pt-6 pb-16 sm:pb-24">
                <main class="mt-16 sm:mt-24">
                    <div class="mx-auto max-w-7xl">
                        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                            <div
                                class="px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left"
                            >
                                <div>
                                    <h1
                                        class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-2xl md:text-4xl"
                                    >
                                        Help reunite and start posting lost pets
                                    </h1>
                                    <p
                                        class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                                    >
                                        Start by signing up or logging in. If
                                        your pet has gone missing, come and
                                        search for pets that are lost, or post a
                                        lost & found report about your pet.
                                        LostPetto will help bring your missing
                                        pet home.
                                    </p>
                                    <div
                                        class="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8"
                                    >
                                        <div class="rounded-md shadow">
                                            <a
                                                class="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                                                @click="
                                                    onPetSearchClick(
                                                        PetTypeRoute.LOST
                                                    )
                                                "
                                                >Signup</a
                                            >
                                        </div>
                                        <div
                                            class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"
                                        >
                                            <a
                                                class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                                                @click="
                                                    onPetSearchClick(
                                                        PetTypeRoute.FOUND
                                                    )
                                                "
                                                >Login</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-16 sm:mt-24 lg:col-span-5 lg:mt-0">
                                <Vue3Lottie
                                    animationLink="https://fhasuqzjmruhvugclutt.supabase.co/storage/v1/object/public/pets/website/search-globe-lottie.json"
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>

        <div class="relative overflow-hidden pt-16 pb-32">
            <div
                aria-hidden="true"
                class="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
            />
            <div class="relative">
                <div
                    class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
                >
                    <div
                        class="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0"
                    >
                        <div>
                            <div>
                                <span
                                    class="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600"
                                >
                                    <MagnifyingGlassIcon
                                        class="h-6 w-6 text-white"
                                        aria-hidden="true"
                                    />
                                </span>
                            </div>
                            <div class="mt-6">
                                <h2
                                    class="text-3xl font-bold tracking-tight text-gray-900"
                                >
                                    Powerful search driven by AI
                                </h2>
                                <p class="mt-4 text-lg text-gray-500">
                                    This AI powered app is powered by facial
                                    recognition and photo match technology.
                                    Start by using your camera on your phone or
                                    desktop browser, upload an image of your pet
                                    with the press of a button.
                                </p>
                                <div class="mt-6">
                                    <a
                                        href="#"
                                        class="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                                        >Upload photos</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-12 sm:mt-16 lg:mt-0">
                        <div
                            class="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0"
                        >
                            <img
                                class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                                alt="Inbox user interface"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-24">
                <div
                    class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
                >
                    <div
                        class="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0"
                    >
                        <div>
                            <div>
                                <span
                                    class="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600"
                                >
                                    <NewspaperIcon
                                        class="h-6 w-6 text-white"
                                        aria-hidden="true"
                                    />
                                </span>
                            </div>
                            <div class="mt-6">
                                <h2
                                    class="text-3xl font-bold tracking-tight text-gray-900"
                                >
                                    Promote your lost pet through Facebook and
                                    Instagram Ads
                                </h2>
                                <p class="mt-4 text-lg text-gray-500">
                                    Encourage people to lookout for your pet by
                                    running a Facebook/Instagram Ads. Lost Petto
                                    will find and help you find your lost pet by
                                    delivering tons of targeted exposure to our
                                    subscribers in their local proximity
                                </p>
                                <div class="mt-6">
                                    <a
                                        href="#"
                                        class="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                                        >Create Ads</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                        <div
                            class="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0"
                        >
                            <img
                                class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                                alt="Customer profile user interface"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-gray-100">
            <div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                <div class="bg-indigo-600 pb-16 lg:relative lg:z-10 lg:pb-0">
                    <div
                        class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8"
                    >
                        <div class="relative lg:-my-8">
                            <div
                                aria-hidden="true"
                                class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                            ></div>
                            <div
                                class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0"
                            >
                                <div
                                    class="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full"
                                >
                                    <img
                                        class="object-cover lg:h-full lg:w-full"
                                        src="https://fhasuqzjmruhvugclutt.supabase.co/storage/v1/object/public/pets/website/dominik-hofbauer-0dz2LIB0xU4-unsplash%20(1).jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                            <div
                                class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20"
                            >
                                <blockquote>
                                    <div>
                                        <svg
                                            class="h-12 w-12 text-white opacity-25"
                                            fill="currentColor"
                                            viewBox="0 0 32 32"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                                            />
                                        </svg>
                                        <carousel
                                            :items-to-show="1"
                                            :autoplay="3000"
                                            wrap-around
                                            autoplayHoverPause
                                        >
                                            <slide
                                                v-for="(
                                                    testimonial, index
                                                ) in testimonials"
                                                :key="index"
                                            >
                                                <div>
                                                    <p
                                                        class="mt-6 text-2xl font-medium text-white"
                                                    >
                                                        {{ testimonial.text }}
                                                    </p>
                                                    <footer>
                                                        <p
                                                            class="text-base font-medium text-white"
                                                        >
                                                            {{
                                                                testimonial.name
                                                            }}
                                                        </p>
                                                    </footer>
                                                </div>
                                            </slide>
                                        </carousel>
                                    </div>
                                    <footer class="mt-6"></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-white">
            <div
                class="mx-auto max-w-4xl py-16 px-4 sm:px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8"
            >
                <h2
                    class="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                    <span class="block">Ready to get started?</span>
                    <span
                        class="-mb-1 block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text pb-1 text-transparent"
                        >Get in touch or create an account.</span
                    >
                </h2>
                <div class="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
                    <a
                        href="#"
                        class="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                        >Learn more</a
                    >
                    <a
                        href="#"
                        class="flex items-center justify-center rounded-md border border-transparent bg-indigo-50 px-4 py-3 text-base font-medium text-indigo-800 shadow-sm hover:bg-indigo-100"
                        >Get started</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Autocomplete from '@/components/atom/Autocomplete.vue'
import useMapboxRepository from '@/repositories/mapbox'
import { useAuthStore } from '~/stores/auth'
import { useRouter } from 'vue-router'
import { Carousel, Slide } from 'vue3-carousel'
import { MagnifyingGlassIcon, NewspaperIcon } from '@heroicons/vue/24/outline'
import usePetRepository from '~/repositories/pets'
import 'vue3-carousel/dist/carousel.css'

const { getRandomPets } = usePetRepository()

definePageMeta({
    layout: 'page'
})

const PetStatus = {
    LOST: 0,
    FOUND: 1
}

const auth = useAuthStore()
const router = useRouter()
const isLoading = ref(false)
const lostPets = ref<any[]>([])

enum PetTypeRoute {
    LOST = 'lost',
    FOUND = 'found'
}

const { getGeocodingLocations } = useMapboxRepository()
const geocodingLocations = ref([])
const searchedLocationName = ref('')
const searchedLocation = ref({})

const testimonials = ref([
    {
        text: `I must admit, I had my doubts about finding my lost dog. In the past, All I could do was rely on hope and a prayer that I could find my dog.`,
        name: 'Shirley Oliver'
    },
    {
        text: `My dog ran away in a rural area. I tried to find him on foot and with my car, but couldn't find him. I posted a lost pet report on LostPetto and received a call from someone who had found my dog! The person told me where he was, and I picked up my dog right away. My dog was very happy to see me.`,
        name: 'Cinda Green'
    },
    {
        text: `I hate being without my dog. He has always been by my side, even through the worst of times. But, when I lost him, I wasn't sure how to find him. Thanks to LostPetto, I have a way to find him again.`,
        name: 'William Walker'
    },
    {
        text: `All my doubts are gone. I found him! We found him!`,
        name: 'Melissa Williams'
    },
    {
        text: `I tried for hours to find my lost pet, but after two days of searching I was nearly at my wits end. Then I tried LostPetto, and found it was the best money I have ever spent. I was able to find my dog in 3 ½ hours -- a far cry from the week I spent knocking on neighbors' doors before finally giving up.`
    }
])

const fetchPets = async () => {
    try {
        isLoading.value = true
        lostPets.value = []
        lostPets.value = await getRandomPets(PetStatus.LOST)
    } catch (error) {
        console.log(error)
    } finally {
        isLoading.value = false
    }
}

const onSearchedLocation = async () => {
    geocodingLocations.value = []
    geocodingLocations.value = await getGeocodingLocations(
        searchedLocationName.value
    )
}

const updateLocation = val => {
    searchedLocation.value = val
}

const onPetClick = pet => {
    console.log(pet)
}

const onPetSearchClick = (petType: PetTypeRoute) => {
    try {
        if (searchedLocation.value?.itemMeta) {
            const longitude = searchedLocation.value?.itemMeta?.center[0]
            const latitude = searchedLocation.value?.itemMeta?.center[1]

            auth.setLocation({
                name: searchedLocation.value.name,
                longitude,
                latitude
            })
        }

        router.push({
            path: '/pets',
            query: {
                type: petType,
                ...auth.location
            }
        })
    } catch (error) {
        console.log(error)
    }
}

fetchPets()

watchEffect(() => onSearchedLocation())
</script>
