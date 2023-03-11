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
                    safely. Find your lost pet or post a Lost & Found message on
                    our app. We are here to help you find your beloved little
                    friend.
                </p>
                <div class="mt-4 flex items-center gap-x-6">
                    <a
                        href="#"
                        class="rounded-md bg-[#5C1511] px-6 py-3 text-lg font-extrabold text-white shadow-sm hover:[#5C1511]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5C1511]"
                        >Get started</a
                    >
                    <a
                        href="#"
                        class="text-lg font-semibold leading-6 text-gray-700 underline decoration-wavy decoration-[#F96A64] underline-offset-4"
                        >See how it works <span aria-hidden="true">→</span></a
                    >
                </div>
            </div>
            <div
                class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow relative"
            >
                <FacebookAd
                    ref="mockFacebookAd"
                    :adHeader="facebookAdDetails.adHeader"
                    :images="[facebookAdDetails.image]"
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

definePageMeta({
    layout: 'page'
})

const pets = ref([])
const { getRandomPets } = usePetRepository()
const isRandomPetLoading = ref(false)
const mockFacebookAd = ref()
const facebookAdDetails = ref()
const randomPetDetails = ref()

const facebookDetailsInit = () => {
    return {
        image: 'https://fhasuqzjmruhvugclutt.supabase.co/storage/v1/object/public/pets/website/lost_doggo.jpg',
        adHeader:
            'Generate and run ads. Increase the chances of you finding your pet'
    }
}

const fetchRandomPets = async () => {
    try {
        isRandomPetLoading.value = true
        pets.value = await getRandomPets(30)
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

// const randomPetDetails = computed(() => {
//     let i = 0
//     const slideArr = []
//     pets.value.forEach(pet => {
//         if (i % 5 === 0) {
//             slideArr.push(facebookInit())
//         }
//         slideArr.push({
//             image: pet.pet_images?.[0]?.url,
//             adHeader: pet.description
//         })
//         i = i++
//     })

//     return slideArr
// })

const { pause, resume, isActive } = useIntervalFn(() => {
    nextFbAdSlide()
}, 1000)

const nextFbAdSlide = () => {
    // let i = 0
    // if (i >= randomPetDetails.length) {
    //     i = 0
    // }
    // console.log('fb ad slide')
    // // facebookAdDetails.value = {
    // //     unref(randomPetDetails)[i]
    // // }
    // unref(mockFacebookAd).onNext()
    // // Destroy cleanup
    // i = i++
}

facebookAdDetails.value = facebookDetailsInit()

fetchRandomPets()
</script>
