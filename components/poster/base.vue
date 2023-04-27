<template>
    <div class="scale-35 -mx-[258px] -my-[365px]">
        <div :id="posterByPosterName.name">
            <component :is="posterByPosterName.component" :my-pet="myPet" />
        </div>
    </div>

    <div
        v-if="!settings?.isActionBarHidden"
        class="bg-slate-300 rounded-xl shadow-md h-10 mt-2"
    >
        <div class="flex justify-center pt-1 space-x-4">
            <PhotoIcon
                class="h-8 cursor-pointer"
                aria-hidden="true"
                @click="onImageClick"
            />
            <CloudIcon
                class="h-8 cursor-pointer"
                aria-hidden="true"
                @click="onCloudClick"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import * as htmlToImage from 'html-to-image'
import { PhotoIcon, CloudIcon, ShareIcon } from '@heroicons/vue/24/outline'
import Poster1 from '~/components/poster/1.vue'
import Poster2 from '~/components/poster/2.vue'
import Poster3 from '~/components/poster/3.vue'
import { defineExpose } from 'vue'

const props = withDefaults(
    defineProps<{
        posterName: String
        pet: Object
        settings: {
            isActionBarHidden: Boolean
            hasEmail: Boolean
            hasPhoneNumber: Boolean
        }
    }>(),
    {
        posterName: '',
        pet: () => {
            return {}
        },
        settings: () => {
            return {
                isActionBarHidden: false,
                hasEmail: false,
                hasPhoneNumber: false
            }
        }
    }
)

const myPetInit = () => {
    return {
        id: props?.pet?.id || 0,
        name: props?.pet?.name || 'Lost Doggo',
        address:
            props?.pet?.address || '123 Lost Doggo Street, Lost Doggo City',
        description:
            props?.pet?.description ||
            'Our goal is to help you find your lost pets faster and easier. We are a community of pet lovers. We are here to help you find your lost pets.',
        email: props?.pet?.email || 'app@lostdoggo.com',
        contact_number: props?.pet?.contact_number || '1234567890',
        weight: props?.pet?.weight || 0,
        height: props?.pet?.height || 0,
        pet_images: [
            {
                url:
                    props?.pet?.pet_images?.[0].url ||
                    'https://fhasuqzjmruhvugclutt.supabase.co/storage/v1/object/public/pets/website/lost_doggo.jpg'
            }
        ]
    }
}

const config = useRuntimeConfig()
const myPet = ref(myPetInit())

// const init = () => {
//     if (!props.pet.id) {
//         return props.pet
//     } else {
//         return myPetInit()
//     }
// }

const posters = ref([
    {
        name: 'poster1',
        component: Poster1,
        settings: {
            isActionBarHidden: false,
            hasEmail: true,
            hasPhoneNumber: true
        }
    },
    {
        name: 'poster2',
        component: Poster2,
        settings: {
            isActionBarHidden: false,
            hasEmail: true,
            hasPhoneNumber: true
        }
    },
    {
        name: 'poster3',
        component: Poster3,
        settings: {
            hasEmail: true,
            hasPhoneNumber: true
        }
    }
])

const posterByPosterName = computed(() => {
    return posters.value.find(poster => poster.name === props.posterName)
})

const onImageClick = async () => {
    let posterElement = document.getElementById(props.posterName)
    let image = new Image()
    image.src = await htmlToImage.toJpeg(posterElement)

    // download image
    let link = document.createElement('a')
    link.download = 'poster.jpeg'
    link.href = image.src
    link.click()
}

const onCloudClick = async () => {
    const posterQueryData = {
        poster_type: props.posterName,
        id: props.pet?.id,
        pet_url:
            props?.pet?.pet_images[0]?.url ||
            'https://fhasuqzjmruhvugclutt.supabase.co/storage/v1/object/public/pets/website/lost_doggo.jpg',
        weight: props?.pet?.weight || 0,
        height: props?.pet?.height || 0,
        name: props.pet?.name || 'Lost Doggo',
        address: props.pet?.address || '123 Lost Doggo Street, Lost Doggo City',
        description:
            props.pet?.description ||
            'Our goal is to help you find your lost pets faster and easier. We are a community of pet lovers. We are here to help you find your lost pets.',
        email: props.pet?.email || 'app@lostdoggo.com',
        contact_number: props.pet?.contact_number || '1234567890'
    }

    let urlParameters = Object.entries(posterQueryData)
        .map(e => e.join('='))
        .join('&')
    let url = `${config.WEB_HOST}/poster/type?${urlParameters}`

    window.open(url, '_blank')
}

// init()

// watch props pet changes
watch(props.pet, () => {
    console.log('props.pet changed', props.pet)
    myPet.value = {
        ...myPetInit(),
        ...props.pet
    }
})

defineExpose({
    onImageClick,
    onCloudClick
})
</script>
