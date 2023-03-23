<template>
    <main>
        <div
            class="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8"
        >
            <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                <h1
                    class="max-w-2xl text-4xl font-black tracking-tight text-gray-900 sm:text-6xl"
                >
                    <span class="text-[#F96A64]">Lost your pet?</span>
                    <br /><span class="text-[#5C1511]">Bring it home!</span>
                </h1>
                <p class="mt-4 text-lg max-w-lg leading-8 text-gray-600">
                    We love our pets and we want to reunite you with yours,
                    safely. Create an ad for your lost pet in less than 5
                    minutes, and get your ad viewed by thousands of people
                    within the area of your lost or found pet.
                </p>
                <div class="mt-4 flex items-center gap-x-6">
                    <a
                        href="#"
                        class="rounded-md bg-[#5C1511] px-6 py-3 text-lg font-extrabold text-white shadow-sm hover:[#5C1511]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5C1511]"
                        @click="randomToast"
                        >Create an Facebook / Instagram Ad Now</a
                    >
                    <!-- <a
                        href="#"
                        class="text-lg font-semibold leading-6 text-gray-700 underline decoration-wavy decoration-[#F96A64] underline-offset-4"
                        >See how it works <span aria-hidden="true">→</span></a
                    > -->
                </div>
            </div>
            <div
                class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow relative"
            >
                <FacebookAd
                    ref="mockFacebookAd"
                    :adHeader="facebookAdDetails.adHeader"
                    :images="randomPetImages"
                    :isAutoPlay="false"
                />

                <!-- <img src="~/assets/images/logo-lost-doggo.svg" alt="" />
                <div
                    class="absolute bottom-3 bg-yellow-300 inline-flex p-2 px-4 outline-2 outline-dashed outline-[#5C1511] rounded-sm origin-bottom -rotate-6"
                >
                    <ul>
                        <li><span>Breed name:</span> <span>John Doe</span></li>
                        <li>
                            <span>Location:</span> <span>McaFFee Road, NJ</span>
                        </li>
                        <li><span>Posted:</span> <span>Just now</span></li>
                    </ul>
                </div> -->
            </div>
        </div>
    </main>
</template>

<script lang="ts" setup>
import FacebookAd from '~/components/atom/FacebookAd.vue'
import usePetRepository from '~/repositories/pets'
import { useIntervalFn } from '@vueuse/core'
import { toast } from 'vue3-toastify'
import CustomToast from '~/components/atom/CustomToast.vue'
import { AuthType, useDrawerStore } from '~~/stores/drawer'

definePageMeta({
    layout: 'page'
})

const facebookDetailsInit = () => {
    return {
        image: 'https://fhasuqzjmruhvugclutt.supabase.co/storage/v1/object/public/pets/website/lost_doggo.jpg',
        adHeader:
            'Generate and run ads. Increase the chances of you finding your pet'
    }
}

const pets = ref([])
const { getRandomPets } = usePetRepository()
const isRandomPetLoading = ref(false)
const mockFacebookAd = ref()
const facebookAdDetails = ref()
const randomPetDetails = ref([facebookDetailsInit()])
const interval = ref()

const randomPetImages = computed(() => {
    return unref(randomPetDetails).map(
        randomPet => randomPet?.image || [unref(facebookAdDetails).image]
    )
})

const setRandomInterval = (intervalFunction, minDelay, maxDelay) => {
    let timeout

    if (!document.hidden) {
        clearTimeout(timeout)
    }

    const runInterval = () => {
        const timeoutFunction = () => {
            intervalFunction()
            runInterval()
        }

        const delay =
            Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay

        timeout = setTimeout(timeoutFunction, delay)
    }

    runInterval()

    return {
        clear() {
            clearTimeout(timeout)
        }
    }
}

const notifyPetDetails = ref()
const randomToast = async () => {
    console.log('random toast', randomToast)
    notifyPetDetails.value = await getRandomPets(1)
    const petStatus = unref(notifyPetDetails)[0]?.status || 0

    const statusTitle = {
        0: ['posted as lost pet'],
        1: ['created an ad'],
        2: ['posted as found', 'have been found recently']
    }

    useNuxtApp().$toast(CustomToast, {
        transition: 'bounce',
        position: 'top-center',
        data: {
            petImage: unref(notifyPetDetails)[0]?.pet_images?.[0].url,
            petName: unref(notifyPetDetails)[0]?.name,
            title: randomItemFromArr(statusTitle[petStatus])
        }
    })
}

const randomItemFromArr = arr => arr[Math.floor(Math.random() * arr.length)]

const fetchRandomPets = async (count: number) => {
    try {
        isRandomPetLoading.value = true
        pets.value = await getRandomPets(count)

        console.log('hi', pets.value)
        let i = 0
        let slideArr = []
        pets.value?.forEach(pet => {
            if (i % 5 === 0) {
                slideArr.push(facebookDetailsInit())
            }
            slideArr.push({
                image: pet.pet_images?.[0]?.url,
                adHeader: pet.description
            })
            i++
        })
        randomPetDetails.value = slideArr
    } catch (error) {
        console.log(error)
    } finally {
        isRandomPetLoading.value = false
    }
}

const { pause, resume, isActive } = useIntervalFn(() => {
    nextFbAdSlide()
}, 3000)

const nextFbAdSlide = () => {
    unref(mockFacebookAd)?.onNext()
    if (unref(randomPetDetails).length) {
        facebookAdDetails.value.adHeader =
            unref(randomPetDetails)[
                unref(mockFacebookAd)?.myCarousel?.data.currentSlide.value
            ]?.adHeader
    }
}

const slideStart = payload => {
    console.log('slide start')
    console.log(payload)
}

interval.value = setRandomInterval(() => randomToast(), 5000, 60000)
facebookAdDetails.value = facebookDetailsInit()

// onMounted(() => {
nextTick(() => {
    fetchRandomPets(30)
})
// })
</script>
