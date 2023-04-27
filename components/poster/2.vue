<template>
    <div class="relative w-a4 h-a4 bg-black">
        <div class="flex flex-col items-center h-full">
            <div
                class="flex flex-col justify-center items-center w-full h-4/5 p-10 pt-20 pb-0 bg-yellow-300"
            >
                <img
                    class="!w-[400px] aspect-square object-fit border-black border-[10px] rounded-3xl"
                    :src="petImage"
                />
                <div class="text-[70px] font-extrabold">
                    MISSING {{ myPet?.animal_types?.name?.toUpperCase() }}
                </div>
                <div
                    class="flex-grow text-4xl font-bold text-center text-ellipsis space-y-2"
                >
                    <div class="text-2xl line-clamp-5 overflow-ellipsis w-full">
                        {{ myPet?.description }}
                    </div>
                    <div>
                        {{
                            `${myPet?.status == 1 ? 'Lost' : 'Found'} near ${
                                myPet?.address || ''
                            }`
                        }}
                    </div>
                </div>
                <div class="text-center uppercase font-bold text-[35px]">
                    If you meet {{ myPet?.gender == 0 ? 'him' : 'her' }}, please
                    contact
                </div>
            </div>
            <div class="flex h-1/5 bg-black items-center">
                <div class="w-full text-white bold text-[75px] font-bold">
                    <div>
                        {{ myPet?.contact_number }}
                    </div>
                    <div class="text-3xl text-center">
                        {{ myPet?.email }}
                    </div>
                </div>
                <!-- <div class="text-white text-[45px]">
                    {{ myPet?.email }}
                </div> -->
            </div>
        </div>
        <div class="absolute top-5 left-5">
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
