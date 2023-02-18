<template>
    <div class="bg-gray-900">
        <div class="relative overflow-hidden pt-32 pb-96 lg:pt-20">
            <div>
                <img
                    class="absolute bottom-0 left-1/2 w-[1440px] max-w-none -translate-x-1/2"
                    alt=""
                />
            </div>
            <div class="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
                <div class="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 class="text-lg font-semibold leading-8 text-indigo-400">
                        Create Ads Now
                    </h2>
                    <p
                        class="mt-2 text-4xl font-bold tracking-tight text-white"
                    >
                        {{
                            `We know you love your ${getMyPetAnimalType()} , ${
                                myPet.name
                            }`
                        }}
                    </p>
                    <p class="mt-2 text-lg leading-8 text-white/60">
                        {{
                            `Every day your pet is lost, you lower your chances of finding your pet`
                        }}
                    </p>
                    <p class="text-lg leading-8 text-white/60">
                        Create an ad now to increase your chances of finding
                        your pet
                    </p>
                </div>
            </div>
        </div>
        <div class="flow-root bg-white pb-12 lg:pb-12">
            <div class="relative -mt-[22rem]">
                <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-8"
                    >
                        <div
                            v-for="tier in tiers"
                            :key="tier.name"
                            class="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10"
                        >
                            <div class="p-8 sm:p-10 sm:pb-3">
                                <h3
                                    class="text-lg font-semibold leading-8 tracking-tight text-indigo-600"
                                    :id="tier.id"
                                >
                                    {{ tier.name }}
                                </h3>
                                <div
                                    class="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900"
                                >
                                    ${{ tier.priceMonthly }}
                                    <span
                                        class="text-lg font-semibold leading-8 tracking-normal text-gray-500"
                                        >/day</span
                                    >
                                    <span
                                        class="w-1/4 flex text-lg font-semibold leading-8 tracking-normal text-gray-900 px-2"
                                        >≈ {{ tier.totalPrice }}</span
                                    >
                                </div>
                            </div>
                            <div class="flex flex-1 flex-col p-2">
                                <div
                                    class="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8"
                                >
                                    <ul role="list" class="space-y-6">
                                        <li
                                            v-for="feature in tier.features"
                                            :key="feature"
                                            class="flex items-start"
                                        >
                                            <div class="flex-shrink-0">
                                                <CheckIcon
                                                    class="h-6 w-6 text-indigo-600"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <p
                                                class="ml-3 text-sm leading-6 text-gray-600"
                                            >
                                                {{ feature }}
                                            </p>
                                        </li>
                                    </ul>
                                    <div class="mt-8">
                                        <Button
                                            class="inline-block w-full"
                                            @click="onSubscribeClick(tier.id)"
                                            >Start your ads now
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { CheckIcon } from '@heroicons/vue/24/outline'
import usePetRepository from '~/repositories/pets'
import useSubscriptionRepository from '~/repositories/subscription'
import Button from '~/components/atom/Button.vue'

import { useRoute } from 'vue-router'
import { useAuthStore } from '~~/stores/auth'

enum Gender {
    Male = 0,
    Female = 1
}

const route = useRoute()
const auth = useAuthStore()
const config = useRuntimeConfig()
const { getPetDetails, getAnimalTypes } = usePetRepository()
const { getAllSubscriptions, subscribeStripePayment } =
    useSubscriptionRepository()
const isLoading = ref()
const isSubscriptionLoading = ref()

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
const animalTypes = ref([])
const subscriptions = ref([])
const tiers = [
    {
        id: 'daily-ads-15',
        name: '15 days of running ads',
        href: '#',
        priceMonthly: 12,
        totalPrice: '$180',
        features: [
            'Targeted to 5 mile radius of where you lost your pet',
            'Reach 500 to 3000+ people per day (Facebook Estimates)'
        ]
    },
    {
        id: 'daily-ads-30',
        name: '30 days of running ads',
        href: '#',
        priceMonthly: 10,
        totalPrice: '$300',
        features: [
            'Targeted to 5 mile radius of where you lost your pet',
            'Reach 500 to 3000+ people per day (Facebook Estimates)'
        ]
    }
]

const getMyPetAnimalType = () => {
    if (unref(animalTypes)?.length) {
        return unref(animalTypes)
            ?.find(animalType => animalType.id === unref(myPet).animal_type_id)
            ?.name?.toLowerCase()
    }
    return ''
}

const fetchAnimalTypes = async () => {
    try {
        animalTypes.value = await getAnimalTypes()
    } catch (error) {}
}

const fetchPetDetails = async () => {
    if (unref(myPet).id) {
        try {
            isLoading.value = true
            const data = await getPetDetails(unref(myPet).id)
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

const fetchSubscription = async () => {
    try {
        subscriptions.value = await getAllSubscriptions()
    } catch (error) {
        console.log(error)
    }
}

const onSubscribeClick = async tierId => {
    const webHost = config.WEB_HOST
    try {
        isSubscriptionLoading.value = true
        const subscription = unref(subscriptions)?.find(
            subscriptionItem => subscriptionItem.key === tierId
        )
        console.log(subscription)
        if (!subscription) return console.log('subscription failed')
        const data = await subscribeStripePayment({
            pet_id: unref(myPet).id,
            price_id: subscription.stripe_price_id,
            user_id: unref(myPet).user_id,
            success_url: webHost,
            cancel_url: webHost
        })

        window.location.href = data.stripe_url

        console.log(data)
    } catch (error) {
        console.log(error)
    } finally {
        isSubscriptionLoading.value = false
    }
}

fetchPetDetails()
fetchAnimalTypes()
fetchSubscription()
</script>
