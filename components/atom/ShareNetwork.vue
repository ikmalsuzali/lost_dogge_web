<template>
    <div class="flex flex-auto space-x-4 justify-center">
        <div v-for="shareNetwork in shareNetworks">
            <ShareNetwork
                :network="shareNetwork.network"
                :url="petRedirectUrl"
                :title="`Hi, I'm looking for my lost one, please help me find ${
                    myPet.gender ? 'her' : 'him'
                }. I lost ${myPet.gender ? 'her' : 'him'} in ${
                    myPet?.address
                }. You can click on the link below if you have more information or can help me anyway possible`"
                :description="myPet.description"
                :hashtags="hashtagsList"
            >
                <img class="h-12 w-12" :src="shareNetwork.src" />
            </ShareNetwork>
        </div>
    </div>
</template>

<script lang="ts" setup>
import facebookIcon from '@/assets/images/facebook.svg'
import twitterIcon from '@/assets/images/twitter.svg'
import redditIcon from '@/assets/images/reddit.svg'
import whatsappIcon from '@/assets/images/whatsapp.svg'
import emailIcon from '@/assets/images/email.svg'

const props = withDefaults(
    defineProps<{
        myPet: Object
        shareNetworks: string[]
    }>(),
    {
        myPet: () => {},
        shareNetworks: () => []
    }
)

const config = useRuntimeConfig()
const shareNetworks = ref([
    { network: 'facebook', src: facebookIcon },
    { network: 'twitter', src: twitterIcon },
    { network: 'reddit', src: redditIcon },
    { network: 'whatsapp', src: whatsappIcon },
    { network: 'email', src: emailIcon }
])

const petRedirectUrl = computed(() => {
    return `${config.WEB_HOST}/pets?type=${
        props.myPet?.status == 2 ? 'found' : 'lost'
    }&pet_id=${props.myPet?.id}`
})

const hashtagsList = computed(() => {
    return [
        'lostdoggo',
        'lost-pet',
        `lost-${props.myPet?.animal_types?.name.toLowerCase()}`,
        `${props.myPet?.address?.trim().replaceAll(',', '-')}`
    ]?.toString()
})

const showShareNetwork = () => {
    if (unref(shareNetworks).length) {
        unref(shareNetworks).filter(shareNetwork => {
            if (props.shareNetworks.includes(shareNetwork.network)) {
                return shareNetwork
            }
        })
    }
}

showShareNetwork()
</script>
