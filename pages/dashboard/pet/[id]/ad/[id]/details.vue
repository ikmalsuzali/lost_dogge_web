<template>
    <div>
        <div
            v-if="myPet?.status == 0"
            class="m-6 mb-0 bg-orange-100 border-t-4 border-orange-500 rounded-lg text-orange-900 px-4 py-3 shadow-md"
            role="alert"
        >
            <div class="flex">
                <div class="flex">
                    <div class="py-1">
                        <svg
                            class="fill-current h-6 w-6 text-orange-500 mr-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
                            />
                        </svg>
                    </div>
                    <div>
                        <p class="font-bold text-left">Mark as lost or found</p>
                        <p class="text-sm">
                            Set your pet as lost or found to start creating ads
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div
            v-if="
                (myPet?.status == 1 || myPet?.status == 2) &&
                payment?.fb_adsets?.status === 'IN_PROGRESS'
            "
            class="m-6 mb-0 bg-orange-100 border-t-4 border-orange-500 rounded-lg text-orange-900 px-4 py-3 shadow-md"
            role="alert"
        >
            <div class="flex">
                <div class="flex">
                    <div class="py-1">
                        <svg
                            class="fill-current h-6 w-6 text-orange-500 mr-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
                            />
                        </svg>
                    </div>
                    <div>
                        <p class="font-bold text-left">Reunited</p>
                        <p class="text-sm">
                            If the pet has been reunited with the owner, please
                            mark as reunited
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div
            v-if="!payment?.adset_id || payment?.fb_adsets?.status !== 'ACTIVE'"
            class="m-6 bg-orange-100 border-t-4 border-orange-500 rounded-lg text-orange-900 px-4 py-3 shadow-md"
            role="alert"
        >
            <div class="flex">
                <div class="flex">
                    <div class="py-1">
                        <svg
                            class="fill-current h-6 w-6 text-orange-500 mr-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
                            />
                        </svg>
                    </div>
                    <div
                        v-if="
                            payment.payment?.fb_adsets?.status ===
                                'PENDING_REVIEW' || !payment.payment?.adset_id
                        "
                    >
                        <p class="font-bold text-left">Review and verify</p>
                        <p class="text-sm">
                            After confirmation, Facebook will take 3 to 24+
                            hours to approve until ads go live
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="min-h-0 flex-1 overflow-y-auto p-6 pt-0">
            <div
                class="space-y-2 py-4 sm:space-y-4 bg-white px-4 shadow sm:rounded-lg"
            >
                <div class="bg-gray-50 px-4 py-6 sm:px-6">
                    <div class="flex items-start justify-between space-x-3">
                        <div class="space-y-1">
                            <div class="text-lg font-medium text-gray-900">
                                My facebook ad
                            </div>
                        </div>
                        <div class="flex h-7 items-center space-x-2">
                            <button
                                v-if="
                                    payment?.adset_id &&
                                    payment?.fb_adsets?.status ===
                                        'PENDING_REVIEW'
                                "
                                class="py-2 px-4 shadow-md no-underline rounded-full bg-slate text-white font-sans font-semibold text-sm border-slate btn-primary hover:text-white hover:bg-slate-light focus:outline-none active:shadow-none mr-2"
                            >
                                Pending Facebook Review
                            </button>
                            <button
                                v-if="
                                    payment?.adset_id &&
                                    payment?.fb_adsets?.status === 'DISAPPROVED'
                                "
                                class="py-2 px-4 shadow-md no-underline rounded-full bg-red-700 text-white font-sans font-semibold text-sm border-red hover:text-white hover:bg-red-light focus:outline-none active:shadow-none mr-2"
                            >
                                Facebook Rejected
                            </button>
                            <button
                                v-if="
                                    payment?.adset_id &&
                                    payment?.fb_adsets?.status === 'IN_PROCESS'
                                "
                                class="py-2 px-4 shadow-md no-underline rounded-full bg-slate text-white font-sans font-semibold text-sm border-slate btn-primary hover:text-white hover:bg-slate-light focus:outline-none active:shadow-none mr-2"
                            >
                                In Progress
                            </button>
                            <button
                                v-if="
                                    payment?.adset_id &&
                                    payment?.fb_adsets?.status === 'ARCHIVED'
                                "
                                class="py-2 px-4 shadow-md no-underline rounded-full bg-slate text-white font-sans font-semibold text-sm border-slate btn-primary hover:text-white hover:bg-slate-light focus:outline-none active:shadow-none mr-2"
                            >
                                Archived
                            </button>
                            <button
                                v-if="
                                    payment?.adset_id &&
                                    payment?.fb_adsets?.status === 'PAUSED'
                                "
                                class="py-2 px-4 shadow-md no-underline rounded-full bg-slate-300 text-gray-800 font-sans font-semibold text-sm border-slate hover:text-white hover:bg-slate-light focus:outline-none active:shadow-none mr-2"
                            >
                                PAUSED
                            </button>
                            <Button
                                v-if="
                                    !payment?.adset_id ||
                                    payment?.fb_adsets?.status === 'DISAPPROVED'
                                "
                                :loading="isConfirmAdLoading"
                                @click="onConfirmAdClick"
                                >Confirm Ad</Button
                            >
                        </div>
                    </div>
                </div>

                <!-- Facebook ad -->
                <div class="px-2 space-y-2">
                    <div class="grid grid-cols-5 space-x-4 space-y-4">
                        <ul
                            role="list"
                            class="col-span-5 mt-3 grid grid-cols- gap-4 sm:grid-cols-3 sm:gap-6 xl:grid-cols-3"
                        >
                            <li
                                class="relative col-span-1 flex rounded-md shadow-sm"
                            >
                                <div
                                    class="flex-shrink-0 flex items-center justify-center w-16 bg-red-400 text-white text-sm font-medium rounded-l-md"
                                >
                                    DL
                                </div>
                                <div
                                    class="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200"
                                    :class="{
                                        'bg-slate-300':
                                            payment?.fb_adsets?.status ===
                                                'PENDING_REVIEW' ||
                                            payment?.fb_adsets?.status ===
                                                'ARCHIVED' ||
                                            payment?.fb_adsets?.status ===
                                                'DISAPPROVED' ||
                                            !payment.adset_id
                                    }"
                                >
                                    <div
                                        class="flex-1 truncate px-4 py-2 text-sm"
                                    >
                                        <a
                                            href="#"
                                            class="font-medium text-gray-900 hover:text-gray-600"
                                            >{{ daysLeft }}</a
                                        >

                                        <p class="text-gray-500">days left</p>
                                    </div>
                                </div>
                            </li>

                            <li
                                class="relative col-span-1 flex rounded-md shadow-sm"
                            >
                                <div
                                    class="flex-shrink-0 flex items-center justify-center w-16 bg-green-600 text-white text-sm font-medium rounded-l-md"
                                >
                                    AV
                                </div>
                                <div
                                    class="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200"
                                    :class="{
                                        'bg-slate-300':
                                            payment?.fb_adsets?.status ==
                                                'PENDING_REVIEW' ||
                                            payment?.fb_adsets?.status ==
                                                'ARCHIVED' ||
                                            payment?.fb_adsets?.status ==
                                                'DISAPPROVED' ||
                                            !payment.adset_id
                                    }"
                                >
                                    <div
                                        class="flex-1 truncate px-4 py-2 text-sm"
                                    >
                                        <a
                                            href="#"
                                            class="font-medium text-gray-900 hover:text-gray-600"
                                            >{{
                                                payment?.fb_adsets
                                                    ?.impression_count || 0
                                            }}</a
                                        >
                                        <p class="text-gray-500">Ad views</p>
                                    </div>
                                </div>
                            </li>
                            <li
                                class="relative col-span-1 flex rounded-md shadow-sm"
                            >
                                <div
                                    class="flex-shrink-0 flex items-center justify-center w-16 bg-yellow-400 text-white text-sm font-medium rounded-l-md"
                                >
                                    AC
                                </div>
                                <div
                                    class="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white"
                                >
                                    <div
                                        class="flex-1 truncate px-4 py-2 text-sm"
                                        :class="{
                                            'bg-slate-300':
                                                payment?.fb_adsets?.status ===
                                                    'PENDING_REVIEW' ||
                                                payment?.fb_adsets?.status ===
                                                    'ARCHIVED' ||
                                                payment?.fb_adsets?.status ===
                                                    'DISAPPROVED' ||
                                                !payment.adset_id
                                        }"
                                    >
                                        <a
                                            href="#"
                                            class="font-medium text-gray-900 hover:text-gray-600"
                                            >{{
                                                payment?.fb_adsets
                                                    ?.link_clicks_count || 0
                                            }}</a
                                        >
                                        <p class="text-gray-500">Ad clicks</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="col-span-5 w-full space-y-2">
                            <div
                                class="text-lg font-medium text-gray-900 text-center"
                            >
                                Extend your reach, share your post anywhere
                                through these networks
                            </div>

                            <div
                                class="flex flex-auto space-x-4 justify-center"
                            >
                                <ShareNetwork :my-pet="myPet" />
                            </div>
                        </div>
                        <div class="py-2 col-span-5 flex flex-wrap space-x-4">
                            <div class="flex-none space-y-2">
                                <div class="text-lg font-medium text-gray-900">
                                    Ad Preview
                                </div>
                                <FacebookAd
                                    class="flex-none"
                                    :images="
                                        myPet.pet_images?.map(
                                            petImage => petImage.url
                                        )
                                    "
                                />
                            </div>
                            <div class="grow">
                                <div class="text-lg font-medium text-gray-900">
                                    Ad Location
                                </div>
                                <MapboxMap
                                    v-if="myPet?.longitude && myPet?.latitude"
                                    class="pt-2"
                                    :accessToken="mapboxApi"
                                    :center="selectedPetLatLong"
                                    height="510px"
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
                    </div>
                </div>
                <div class="flex space-x-4 mx-4">
                    <div
                        class="text-lg font-medium text-gray-900 py-2 flex-grow"
                    >
                        How others see your facebook ad when clicking on it
                    </div>
                    <Button @click="onOtherViewClick(myPet)">View Now</Button>
                </div>
                <div v-if="payment?.fb_ad_preview_url" class="flex space-x-4">
                    <div
                        class="text-lg font-medium text-gray-900 py-2 flex-grow"
                    >
                        How others see your facebook ad
                    </div>
                    <Button @click="onPreviewClick">
                        Preview from Facebook
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Button from '~/components/atom/Button.vue'
import FacebookAd from '~/components/atom/FacebookAd.vue'
import ShareNetwork from '~/components/atom/ShareNetwork.vue'
import useSubscriptionRepository from '~/repositories/subscription'
import { useRoute } from 'vue-router'
import {
    MapboxMap,
    MapboxMarker,
    MapboxGeogeometryCircle,
    MapboxNavigationControl
} from 'vue-mapbox-ts'
import facebookIcon from '@/assets/images/facebook.svg'
import twitterIcon from '@/assets/images/twitter.svg'
import redditIcon from '@/assets/images/reddit.svg'
import whatsappIcon from '@/assets/images/whatsapp.svg'
import emailIcon from '@/assets/images/email.svg'

const { confirmAd, fetchPaymentAd } = useSubscriptionRepository()

const config = useRuntimeConfig()
const route = useRoute()
const isPaymentAdLoading = ref(false)
const isConfirmAdLoading = ref(false)
const payment = ref()
const mapboxApi = config.MAPBOX_KEY

const shareNetworks = ref([
    { network: 'facebook', src: facebookIcon },
    { network: 'twitter', src: twitterIcon },
    { network: 'reddit', src: redditIcon },
    { network: 'whatsapp', src: whatsappIcon },
    { network: 'email', src: emailIcon }
])

const props = withDefaults(
    defineProps<{
        myPet: string
    }>(),
    {
        myPet: ''
    }
)

const daysLeft = computed(() => {
    let endDate = new Date(unref(payment)?.end_date)
    if (unref(payment)?.end_date) {
        let daysLeft = Math.ceil((endDate - new Date()) / (1000 * 60 * 60 * 24))
        return daysLeft
    } else {
        return 30
    }
})

const onConfirmAdClick = async () => {
    try {
        isConfirmAdLoading.value = true
        await confirmAd(route.params?.id)
        await getPaymentAds()
        useNuxtApp().$toast.success('Ad sent to facebook review')
    } catch (error) {
        useNuxtApp().$toast.error(
            error?.response?.data.message || 'Failed to create an ad'
        )
    } finally {
        isConfirmAdLoading.value = false
    }
}

const petRedirectUrl = computed(() => {
    return `${config.WEB_HOST}/pets?type=${
        props.myPet?.status == 2 ? 'found' : 'lost'
    }&pet_id=${props.myPet?.id}`
})

const hashtagsList = computed(() => {
    return [
        'lostdoggo',
        'lostpet',
        `lost-${props.myPet?.animal_types?.name.toLowerCase()}`,
        `${props.myPet?.address?.trim().replaceAll(',', '-')}`
    ]
})

const onOtherViewClick = pet => {
    window.open(
        `${config.WEB_HOST}/pets?type=${
            pet.status == 2 ? 'found' : 'lost'
        }&pet_id=${pet.id}`,
        '_blank'
    )
}

const getPaymentAds = async () => {
    try {
        isPaymentAdLoading.value = true
        payment.value = await fetchPaymentAd(route.params?.id)
    } catch (error) {
        useNuxtApp().$toast.error(error.message || 'Failed to create an ad')
    } finally {
        isPaymentAdLoading.value = true
    }
}

const onPreviewClick = async () => {
    window.open(payment.value?.fb_adsets?.fb_ad_preview_url, '_blank')
}

const selectedPetLatLong = computed(() => {
    return [props.myPet?.longitude, props.myPet?.latitude]
})

getPaymentAds()
</script>

<style scoped>
.custom-marker {
    padding: 1em;
    background-color: #fff;
    border-radius: 5px;
}
</style>
