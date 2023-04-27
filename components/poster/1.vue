<template>
    <div class="relative w-a4 h-a4 bg-[#F96A64]">
        <div class="flex flex-col items-center h-full">
            <div class="flex items-center justify-center w-full h-1/3 p-10">
                <img
                    class="aspect-square object-fit rounded-xl h-full"
                    :src="petImage"
                />
            </div>
            <div class="text-slate-100 text-4xl text-center mb-5 uppercase">
                <div>{{ myPet?.name }}</div>
            </div>
            <div class="text-center text-xl text-slate-100">
                <div>Lost at</div>
                <div>{{ myPet?.address }}</div>
            </div>
            <div class="w-full p-10 px-24">
                <div
                    class="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0"
                >
                    <div
                        class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
                    >
                        <div>
                            <label
                                for="project-name"
                                class="block text-sm font-medium text-slate-200 sm:mt-px sm:pt-2"
                                >Gender</label
                            >
                        </div>
                        <div class="sm:col-span-2">
                            <div
                                class="mt-2 text-sm text-slate-200 sm:col-span-2 sm:mt-2 text-right"
                            >
                                {{ myPet?.gender === 1 ? 'Female' : 'Male' }}
                            </div>
                        </div>
                    </div>
                    <div
                        class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
                    >
                        <div>
                            <label
                                for="project-name"
                                class="block text-sm font-medium text-slate-200 sm:mt-px sm:pt-2"
                                >Height/Weight</label
                            >
                        </div>
                        <div class="sm:col-span-2">
                            <div
                                class="mt-2 text-sm text-slate-200 sm:col-span-2 sm:mt-2 text-right"
                            >
                                {{
                                    `${myPet.height} inches / ${myPet.weight} pounds`
                                }}
                            </div>
                        </div>
                    </div>
                    <div
                        v-if="myPet?.description"
                        class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
                    >
                        <div>
                            <label
                                for="project-name"
                                class="block text-sm font-medium text-slate-200 sm:mt-px sm:pt-2"
                                >Description</label
                            >
                        </div>
                        <div class="sm:col-span-2">
                            <div
                                class="mt-2 text-sm text-slate-200 sm:col-span-2 sm:mt-2 text-right"
                            >
                                {{ myPet?.description }}
                            </div>
                        </div>
                    </div>
                    <div
                        class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
                    >
                        <div>
                            <label
                                for="project-name"
                                class="block text-sm font-medium text-slate-200 sm:mt-px sm:pt-2"
                                >Email</label
                            >
                        </div>
                        <div class="sm:col-span-2">
                            <div
                                class="mt-2 text-sm text-slate-200 sm:col-span-2 sm:mt-2 text-right"
                            >
                                {{ myPet.email }}
                            </div>
                        </div>
                    </div>
                    <div
                        class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
                    >
                        <div>
                            <label
                                for="project-name"
                                class="block text-sm font-medium text-slate-200 sm:mt-px sm:pt-2"
                                >Phone number</label
                            >
                        </div>
                        <div class="sm:col-span-2">
                            <div
                                class="mt-2 text-sm text-slate-200 sm:col-span-2 sm:mt-2 text-right"
                            >
                                {{ myPet.contact_number }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute bottom-10 left-10">
            <div class="flex">
                <img
                    class="aspect-square h-20"
                    src="~/assets/images/logo-lost-doggo.svg"
                />
                <div class="self-center text-white">
                    <div class="text-2xl">Lost Doggo</div>
                    <div class="text-xs underline text-blue-800">
                        {{ `https://www.lostdoggo.com/pets/${myPet?.id}` }}
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute bottom-4 right-4">
            <div class="">
                <div
                    class="justify-center text-white text-center leading-5 mb-2"
                >
                    If you have <br />
                    seen me?<br />
                    Scan here
                </div>
                <QrcodeVue
                    class="aspect-square"
                    :size="80"
                    level="H"
                    :value="'https://www.lostdoggo.com/pets/'"
                    render-as="svg"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import QrcodeVue from 'qrcode.vue'
import { useRoute } from 'vue-router'

const props = withDefaults(
    defineProps<{
        myPet: Object
    }>(),
    {
        myPet: () => {}
    }
)

const route = useRoute()

const getMyPetDetailsByRouteData = () => {
    console.log(route.query)
}

const petImage = computed(() => {
    return (
        props?.myPet?.pet_images?.[0]?.url ||
        'https://fhasuqzjmruhvugclutt.supabase.co/storage/v1/object/public/pets/website/lost_doggo.jpg'
    )
})
</script>
