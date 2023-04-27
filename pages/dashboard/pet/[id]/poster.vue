<template>
    <div class="flex flex-wrap space-x-4 justify-around pt-10">
        <div class="my-2" v-for="(poster, index) in posters" :key="index">
            <BasePoster
                class="shadow-md hover:shadow-2xl"
                :posterName="poster.name"
                :pet="myPet"
                :settings="poster.settings"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import Poster1 from '~/components/poster/1.vue'
import Poster2 from '~/components/poster/2.vue'
import Poster3 from '~/components/poster/3.vue'
import { usePetStore } from '@/stores/pet'
import BasePoster from '~/components/poster/base.vue'

const { myPet } = usePetStore()

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
            isActionBarHidden: false,
            hasEmail: true,
            hasPhoneNumber: true
        }
    }
])
</script>
