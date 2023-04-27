<template>
    <div class="relative w-a4 h-a4 bg-black">
        <div class="flex flex-col items-center h-full">
            <div class="flex h-1/5 items-center w-full bg-red-600">
                <div class="w-full text-white bold text-[75px] font-bold">
                    <div
                        class="text-[90px] font-extrabold leading-tight text-center"
                    >
                        MISSING {{ myPet?.animal_types?.name?.toUpperCase() }}
                    </div>
                    <div class="text-3xl text-center font-light uppercase">
                        A cry for help for our furry friend
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 grow w-full bg-white">
                <div class="flex-grow">
                    <img
                        class="!w-[400px] h-full object-cover rounded-3xl p-2"
                        :src="petImage"
                    />
                </div>
                <div class="p-2">
                    <div
                        class="flex-grow text-4xl font-bold text-center text-ellipsis"
                    >
                        <div class="text-[60px] mt-4">
                            {{ myPet?.name }}
                        </div>
                        <div class="border-red-500 m-10 border-8 rounded-xl" />
                        <div class="line-clamp-4 overflow-ellipsis">
                            {{ myPet?.description }}
                        </div>
                        <div class="border-red-500 m-10 border-8 rounded-xl" />
                        <div>
                            {{
                                `${
                                    myPet?.status == 1 ? 'Lost' : 'Found'
                                } near ${myPet?.address || ''}`
                            }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex h-1/5 bg-red-600 w-full items-center">
                <div class="w-full text-white bold text-[75px] font-bold">
                    <div class="text-white text-[30px] text-center font-light">
                        Call or text with any information
                    </div>
                    <div class="text-center">
                        {{ myPet?.contact_number }}
                    </div>
                    <div
                        class="text-white text-[30px] text-center font-light -mt-6"
                    >
                        {{ myPet?.email }}
                    </div>
                </div>
                <!-- <div class="text-white text-[45px]">
                    {{ myPet?.email }}
                </div> -->
            </div>
        </div>
        <div class="absolute top-2 left-2">
            <div class="flex">
                <img
                    class="aspect-square h-20"
                    src="~/assets/images/logo-lost-doggo.svg"
                />
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
import LogoLostDoggo from '@/assets/image/logo-lost-doggo.svg'

const props = withDefaults(
    defineProps<{
        myPet: Object
    }>(),
    {
        myPet: () => {}
    }
)

const petImage = computed(() => {
    return (
        props?.myPet?.pet_images?.[0]?.url ||
        'https://fhasuqzjmruhvugclutt.supabase.co/storage/v1/object/public/pets/website/lost_doggo.jpg'
    )
})
</script>
