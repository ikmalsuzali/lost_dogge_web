<template>
    <div class="flex justify-center">
        <component :is="poster.component" :my-pet="myPet" />
    </div>
</template>

<script setup>
import Poster1 from '~/components/poster/1.vue'
import Poster2 from '~/components/poster/2.vue'
import Poster3 from '~/components/poster/3.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const posters = ref([
    {
        name: 'poster1',
        component: Poster1
    },
    {
        name: 'poster2',
        component: Poster2
    },
    {
        name: 'poster3',
        component: Poster3
    }
])

const poster = computed(() => {
    return posters.value.find(poster => poster.name === route.query.poster_type)
})

const myPet = ref({
    id: route.query.id || '',
    pet_images: [
        {
            url:
                route.query?.pet_url ||
                'https://fhasuqzjmruhvugclutt.supabase.co/storage/v1/object/public/pets/website/lost_doggo.jpg'
        }
    ],
    weight: route.query?.weight || 0,
    height: route.query?.height || 0,
    gender: route.query?.gender || 0,
    name: route.query?.name || 'Lost Doggo',
    address: route.query?.address || '123 Lost Doggo Street, Lost Doggo City',
    description:
        route.query?.description ||
        'Our goal is to help you find your lost pets faster and easier. We are a community of pet lovers. We are here to help you find your lost pets.',
    email: route.query?.email || 'app@lostdoggo.com',
    contact_number: route.query?.contact_number || '1234567890'
})

const initHead = () => {
    useHead({
        title: `Search for ${
            unref(myPet).gender == 1 ? 'lost' : 'found'
        } pets here| Lost Doggo`,
        meta: [
            {
                name: 'description',
                content: `Search for  ${
                    unref(myPet)?.address ? 'missing and lost' : 'found'
                } pets here. More Info: ${
                    unref(myPet).description
                } | Lost Doggo`
            },
            {
                property: 'og:image',
                content: unref(myPet).pet_images[0].url
            },
            {
                property: 'og:url',
                content: route.fullPath
            }
        ]
    })
}

initHead()
</script>
