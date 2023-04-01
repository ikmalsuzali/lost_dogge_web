<template>
    <div>
        <div
            v-if="!payment?.adset_id || payment?.fb_adsets?.status !== 'ACTIVE'"
            class="bg-orange-100 border-t-4 border-orange-500 rounded-b text-orange-900 px-4 py-3 shadow-md"
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
        <div class="min-h-0 flex-1 overflow-y-auto p-6">
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
                <div class="px-2">
                    <div v-if="payment?.adset_id" class="flex space-x-4">
                        <div class="text-lg font-medium text-gray-900 py-2">
                            Preview link to your ad
                        </div>
                        <Button @click="onPreviewClick">
                            Preview from Facebook
                        </Button>
                    </div>
                    <div class="grid grid-cols-5 space-x-4">
                        <div class="col-span-3 space-y-5">
                            <ul
                                role="list"
                                class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 xl:grid-cols-3"
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
                                                >30</a
                                            >
                                            <p class="text-gray-500">
                                                days left
                                            </p>
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
                                            <p class="text-gray-500">
                                                Ad views
                                            </p>
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
                                                    payment?.fb_adsets
                                                        ?.status ===
                                                        'PENDING_REVIEW' ||
                                                    payment?.fb_adsets
                                                        ?.status ===
                                                        'ARCHIVED' ||
                                                    payment?.fb_adsets
                                                        ?.status ===
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
                                            <p class="text-gray-500">
                                                Ad clicks
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="w-full my-2">
                                <MapboxMap
                                    v-if="selectedPetLatLong"
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
                                        :radius="15"
                                    />

                                    <MapboxMarker
                                        :lngLat="selectedPetLatLong"
                                    />
                                </MapboxMap>
                            </div>
                        </div>
                        <FacebookAd
                            class="col-span-2"
                            :images="
                                myPet.pet_images?.map(petImage => petImage.url)
                            "
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Button from '~/components/atom/Button.vue'
import FacebookAd from '~/components/atom/FacebookAd.vue'
import useSubscriptionRepository from '~/repositories/subscription'
import { useRoute } from 'vue-router'
import { MapboxMap, MapboxMarker, MapboxGeogeometryCircle } from 'vue-mapbox-ts'

const { confirmAd, fetchPaymentAd } = useSubscriptionRepository()

const config = useRuntimeConfig()
const route = useRoute()
const isPaymentAdLoading = ref(false)
const isConfirmAdLoading = ref(false)
const payment = ref()
const mapboxApi = config.MAPBOX_KEY

const props = withDefaults(
    defineProps<{
        myPet: string
    }>(),
    {
        myPet: ''
    }
)

const onConfirmAdClick = async () => {
    try {
        isConfirmAdLoading.value = true
        await confirmAd(route.params?.id)
        await getPaymentAds()
        useNuxtApp().$toast.success('Ad sent to facebook review')
    } catch (error) {
        console.log(error)
        useNuxtApp().$toast.error(
            error?.response?.data.message || 'Failed to create an ad'
        )
    } finally {
        isConfirmAdLoading.value = false
    }
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
    return [props.myPet?.latitude, props.myPet?.longitude]
})

getPaymentAds()
</script>
