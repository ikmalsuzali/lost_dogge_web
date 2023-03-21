<template>
    <div
        class="bg-white rounded-sm shadow-md shadow-slate-400 w-[375px] hover:shadow-slate-500"
    >
        <div class="items-start flex p-3">
            <div class="flex mr-2">
                <img
                    class="h-10 w-auto rounded-full"
                    src="~/assets/images/logo-lost-doggo.svg"
                    alt="Your Company"
                />
            </div>
            <div class="grow overflow-hidden">
                <div>LostDoggo.com</div>
                <div class="flex text-gray-300 text-sm">Sponsored</div>
            </div>
            <div class="align-start flex p-2">
                <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    width="1em"
                    height="1em"
                    data-v-1de8c032=""
                >
                    <g
                        fill-rule="evenodd"
                        transform="translate(-446 -350)"
                        data-v-1de8c032=""
                    >
                        <path
                            d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
                            data-v-1de8c032=""
                        ></path>
                    </g>
                </svg>
            </div>
        </div>
        <!-- <p
            ref="adHeaderElement"
            class="p-4 pt-0 pb-1 mt-[-5px]"
            :class="showTruncate"
        >
            {{ adHeader }}
        </p> -->
        <Carousel
            ref="myCarousel"
            :items-to-show="1"
            snapAlign="start"
            wrapAround
            :autoplay="isAutoPlay ? 5000 : 0"
        >
            <Slide v-for="(image, index) in images" :key="index">
                <div class="h-[300px]">
                    <img
                        class="aspect-video object-cover h-[300px]"
                        :src="image"
                    />
                </div>
            </Slide>
        </Carousel>
        <div class="">
            <div
                class="items-center bg-slate-100 border-b-slate-200 flex cursor-pointer px-3 py-4 relative flex border-b-[1px]"
            >
                <div
                    class="flex-1 overflow-hidden px-2 text-ellipsis whitespace-nowrap"
                >
                    <span
                        class="break-word uppercase text-ellipsis overflow-hidden font-light text-sm"
                        >Lostdoggo.com</span
                    >
                </div>
                <div class="pt-2 pb-4">
                    <div
                        class="cursor-pointer relative items-center bg-slate-200 rounded-md flex flex-nowrap justify-center break-word px-3 text-start whitespace-nowrap h-9"
                    >
                        Learn More
                    </div>
                </div>
            </div>
            <div class="items-center flex text-md py-[6px] px-[14px]">
                <button
                    class="flex items-center flex-1 font-semibold text-sm justify-center px-1 space-x-2 p-2"
                >
                    <i class="relative top-[-2px] w-4">
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 49.625 49.625"
                            xml:space="preserve"
                            data-v-1de8c032=""
                        >
                            <g data-v-1de8c032="">
                                <path
                                    d="M12.94,26.221c-3.98,0-7.96,0-11.94,0c-0.545,0-1,0.455-1,1c0,6.218,0,12.436,0,18.654 c0,0.746,0,1.491,0,2.237c0,0.545,0.455,1,1,1c3.98,0,7.96,0,11.94,0c0.273,0,0.476-0.102,0.633-0.244 c0.024-0.018,0.049-0.033,0.071-0.053c0.018-0.02,0.032-0.043,0.048-0.064c0.144-0.158,0.247-0.362,0.247-0.638 c0-6.218,0-12.436,0-18.654c0-0.746,0-1.491,0-2.237C13.94,26.676,13.485,26.221,12.94,26.221z M2,28.221c3.313,0,6.627,0,9.94,0 c0,5.885,0,11.769,0,17.654c0,0.413,0,0.825,0,1.237c-3.313,0-6.627,0-9.94,0c0-5.885,0-11.769,0-17.654 C2,29.046,2,28.633,2,28.221z M48.711,34.767c0-0.342,0-0.683,0-1.025c0.928-0.664,0.907-2.425,0.911-3.459 c0.004-0.943,0.045-1.912-0.572-2.679c-0.164-0.203-0.383-0.321-0.619-0.402c0-0.063,0-0.126,0-0.189 c0.03-0.003,0.059-0.005,0.089-0.008c0.402-0.035,0.901-0.275,0.964-0.734c0.161-1.167,0.074-2.353,0.087-3.527 c0.016-1.515-0.476-2.767-1.748-3.647c-1.318-0.912-3.153-0.71-4.684-0.735c-3.415-0.057-6.831-0.121-10.246-0.185 c0.703-0.893,1.405-1.787,2.106-2.682c1.358-1.736,2.742-3.374,3.678-5.384c0.93-1.997,1.654-4.491,0.797-6.643 c-0.603-1.514-1.916-2.644-3.545-2.895c-1.56-0.24-3.17,0.208-4.291,1.348c-0.485,0.494-0.763,1.097-1.089,1.694 c-0.341,0.624-0.71,1.234-1.083,1.839c-2.25,3.654-4.71,7.183-7.159,10.706c-2.318,3.335-4.662,6.653-7.038,9.948 c-0.006,0.008-0.005,0.018-0.01,0.026c-0.028,0.05-0.045,0.108-0.064,0.166c-0.033,0.092-0.057,0.181-0.057,0.279 c0,0.012-0.007,0.021-0.007,0.033c0,6.221,0,12.442,0,18.663c0,0.946,0,1.893,0,2.839c0,0.545,0.455,1,1,1 c6.102,0,12.205,0,18.307,0c2.924,0,5.848,0,8.772,0c1.756,0,3.407-0.741,4.349-2.296c0.521-0.86,0.432-2.152,0.519-3.125 c0.021-0.238,0.043-0.476,0.064-0.714c0.02-0.226,0.04-0.451,0.061-0.677c0.007-0.075,0.014-0.151,0.021-0.226 c0.004-0.008,0.007-0.011,0.013-0.027c0.002-0.006,0.004-0.011,0.006-0.017c1.312-0.586,1.354-2.589,1.368-3.807 c0.01-0.905,0.094-1.986-0.315-2.811C49.156,35.131,48.956,34.924,48.711,34.767z M47.908,36.508c-0.006,0-0.012-0.002-0.018-0.003 c0.065-0.005,0.129-0.001,0.203-0.019C48.036,36.5,47.948,36.505,47.908,36.508z M47.694,29.056c-0.001,0-0.002-0.001-0.003-0.002 c0.028,0,0.056,0.001,0.083,0.003C47.737,29.055,47.712,29.055,47.694,29.056z M47.243,40.268c0.057-0.03,0.086-0.045,0.103-0.054 c-0.003,0.004-0.007,0.009-0.009,0.012C47.325,40.228,47.298,40.239,47.243,40.268z M47.462,40.043 c-0.026,0.054-0.035,0.078-0.038,0.091c-0.008,0.004-0.024,0.017-0.059,0.055c-0.013,0.014-0.011,0.015-0.018,0.023 c-0.03,0.013-0.094,0.041-0.139,0.047c-0.352,0.048-0.589,0.398-0.698,0.698c-0.52,1.428-0.47,3.148-0.605,4.654 c0,0.005,0,0.006-0.001,0.011c-0.005,0.019-0.011,0.039-0.019,0.072c-0.001,0.003-0.111,0.21-0.126,0.235 c-0.145,0.239-0.378,0.428-0.588,0.606c-0.372,0.316-0.928,0.579-1.421,0.579c-0.221,0-0.443,0-0.664,0c-3.003,0-6.007,0-9.01,0 c-5.648,0-11.296,0-16.944,0c0-5.888,0-11.775,0-17.663c0-0.842,0-1.685,0-2.527c3.987-5.532,7.925-11.108,11.696-16.792 c1.009-1.521,2.01-3.052,2.94-4.623c0.307-0.518,0.597-1.044,0.868-1.581c0.075-0.149,0.166-0.288,0.261-0.424 c-0.124,0.177,0.153-0.17,0.21-0.228c0.056-0.057,0.116-0.11,0.175-0.163c0.025-0.022,0.022-0.021,0.031-0.03 c0.008-0.006,0.003-0.002,0.015-0.01c0.148-0.109,0.308-0.202,0.47-0.287c0.042-0.022,0.085-0.041,0.127-0.06 c0.011-0.002,0.114-0.044,0.14-0.054c0.148-0.052,0.301-0.091,0.454-0.125c0.043-0.009,0.086-0.016,0.13-0.023 c0.012,0,0.119-0.015,0.149-0.018c0.183-0.015,0.367-0.013,0.55-0.003c0.044,0.002,0.087,0.008,0.131,0.012 c0.01,0.003,0.119,0.019,0.149,0.025c0.155,0.03,0.306,0.074,0.456,0.123c0.019,0.006,0.09,0.034,0.128,0.048 c0.047,0.022,0.095,0.043,0.141,0.067c0.166,0.084,0.322,0.185,0.473,0.294c-0.181-0.13,0.168,0.159,0.225,0.216 c0.058,0.059,0.113,0.121,0.167,0.184c0.013,0.015,0.009,0.009,0.017,0.019c0.007,0.011,0.006,0.012,0.031,0.047 c0.279,0.394,0.325,0.545,0.431,0.906c0.137,0.463,0.139,0.621,0.146,1.091c0.008,0.531-0.068,1.005-0.186,1.517 c-0.489,2.127-1.655,3.913-2.966,5.604c-0.789,1.017-1.583,2.03-2.378,3.042c-0.352,0.448-0.704,0.895-1.056,1.343 c-0.409,0.519-1.009,1.099-0.787,1.83c0.453,1.495,2.06,1.298,3.27,1.32c1.965,0.037,3.929,0.073,5.894,0.108 c1.823,0.033,3.646,0.072,5.469,0.091c1.076,0.011,2.118,0.361,2.422,1.497c0.164,0.611,0.042,1.38,0.046,2.011 c0.002,0.397,0.001,0.793-0.007,1.189c-0.045,0.004-0.091,0.008-0.136,0.012c-0.543,0.047-1,0.419-1,1c0,0.653,0,1.306,0,1.959 c0,0.545,0.455,1,1,1c0.052,0,0.103-0.002,0.155-0.003c0.007,0.09,0.007,0.182,0.011,0.263c0.016,0.321,0.024,0.643,0.025,0.964 c0.002,0.552,0.042,1.171-0.055,1.714c-0.002,0.012-0.003,0.013-0.005,0.023c-0.661,0.049-0.935,0.595-0.852,1.11 c0,0.798,0,1.595,0,2.393c0,0.491,0.376,0.891,0.848,0.969c0.002,0.009,0.006,0.017,0.007,0.025 c0.067,0.581,0.052,1.198,0.045,1.784C47.601,38.837,47.697,39.555,47.462,40.043z"
                                    style="fill: #030104"
                                    data-v-1de8c032=""
                                ></path>
                            </g>
                            <g data-v-1de8c032=""></g>
                            <g data-v-1de8c032=""></g>
                            <g data-v-1de8c032=""></g>
                            <g data-v-1de8c032=""></g>
                            <g data-v-1de8c032=""></g>
                            <g data-v-1de8c032=""></g>
                            <g data-v-1de8c032=""></g>
                            <g data-v-1de8c032=""></g>
                            <g data-v-1de8c032=""></g>
                            <g data-v-1de8c032=""></g>
                            <g data-v-1de8c032=""></g>
                            <g data-v-1de8c032=""></g>
                            <g data-v-1de8c032=""></g>
                            <g data-v-1de8c032=""></g>
                            <g data-v-1de8c032=""></g>
                        </svg>
                    </i>
                    <span class="text-slate-600">Like</span>
                </button>
                <button
                    class="flex items-center flex-1 font-semibold text-sm justify-center px-1 space-x-2"
                >
                    <i class="relative top-[-2px] w-4">
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            xml:space="preserve"
                            data-v-1de8c032=""
                        >
                            <g data-v-1de8c032="">
                                <path
                                    d="M424.8,31H87.2C56.2,31,31,56.2,31,87.2v253.1c0,31,25.2,56.2,56.2,56.2h84.4v73.8c0,6.2,5.1,10.5,10.5,10.5 c2.1,0,4.3-0.6,6.2-2.1l109.8-82.3h126.6c31,0,56.2-25.2,56.2-56.2V87.2C481,56.2,455.8,31,424.8,31z M438.8,340.4 c0,7.7-6.3,14.1-14.1,14.1H284.1l-11.2,8.4l-59.1,44.3v-52.7H87.2c-7.7,0-14.1-6.3-14.1-14.1V87.2c0-7.7,6.3-14.1,14.1-14.1h337.5 c7.7,0,14.1,6.3,14.1,14.1V340.4z"
                                    data-v-1de8c032=""
                                ></path>
                            </g>
                        </svg>
                    </i>
                    <span class="text-slate-600">Comment</span>
                </button>
                <button
                    class="flex items-center flex-1 font-semibold text-sm justify-center px-1 space-x-2"
                >
                    <i class="relative top-[-2px] w-4">
                        <svg
                            viewBox="0 0 512 512.00004"
                            xmlns="http://www.w3.org/2000/svg"
                            data-v-1de8c032=""
                        >
                            <path
                                d="m511.824219 255.863281-233.335938-255.863281v153.265625h-27.105469c-67.144531 0-130.273437 26.148437-177.753906 73.628906-47.480468 47.480469-73.628906 110.609375-73.628906 177.757813v107.347656l44.78125-49.066406c59.902344-65.628906 144.933594-103.59375 233.707031-104.457032v153.253907zm-481.820313 179.003907v-30.214844c0-59.132813 23.027344-114.730469 64.839844-156.542969s97.40625-64.839844 156.539062-64.839844h57.105469v-105.84375l162.734375 178.4375-162.734375 178.441407v-105.84375h-26.917969c-94.703124 0-185.773437 38.652343-251.566406 106.40625zm0 0"
                                data-v-1de8c032=""
                            ></path>
                        </svg>
                    </i>
                    <span class="text-slate-600">Share</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { useIntervalFn } from '@vueuse/core'
import 'vue3-carousel/dist/carousel.css'

const props = withDefaults(
    defineProps<{
        images: string[]
        adHeader: string
        isAutoPlay: boolean
    }>(),
    {
        images: () => [],
        adHeader:
            'Live in perject harmony with nature yet remain distintively urban in spirit Sunway dhill Kota Damansara Live in perject harmony with nature yet remain distintively urban in spirit Sunway dhill Kota Damansara',
        isAutoPlay: false
    }
)

const emit = defineEmits(['slide-start'])

const adHeaderElement = ref()
const myCarousel = ref()
console.log(adHeaderElement)

const showTruncate = computed(() => {
    if (
        unref(adHeaderElement)?.offsetHeight <
            unref(adHeaderElement)?.scrollHeight ||
        unref(adHeaderElement)?.offsetWidth <
            unref(adHeaderElement)?.scrollWidth
    ) {
        return 'line-clamp-3'
    } else {
        return 'line-clamp-4'
    }
})

const onNext = () => {
    unref(myCarousel).next()
}

defineExpose({ onNext, myCarousel })
</script>
