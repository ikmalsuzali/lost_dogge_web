<template>
    <div class="text-center">
        <div class="w-5/12 flex mx-auto justify-center mt-20">
            <Vue3Lottie
                class="w-80"
                animationLink="https://fhasuqzjmruhvugclutt.supabase.co/storage/v1/object/public/pets/website/lost-dog-loading.json"
            />
        </div>
        <h3 class="mt-2 text-xl font-medium text-gray-900">
            Processing your payment
        </h3>
        <p class="mt-1 text-sm text-gray-500">
            One step closer to creating your pet
        </p>
    </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import useSubscription from '~/repositories/subscription'

const route = useRoute()
const router = useRouter()

const { fetchSubscription } = useSubscription()

const subscription = ref()
let intervalId = ref()
let count = ref(0)

const getSubscription = async () => {
    try {
        subscription.value = await fetchSubscription(route.params.id)
        count.value = unref(count) + 1
    } catch (error) {
        console.log(error)
        clearInterval(intervalId.value)
        router.push({
            path: `/dashboard/pet/${
                unref(subscription).pet_id
            }/ad/create?status=failed`
        })
    }
}

const subscriptionIntervalInit = () => {
    intervalId.value = window.setInterval(() => {
        console.log('get subscription')
        getSubscription()
    }, 3000)
}

watch(
    () => unref(subscription),
    value => {
        console.log(value)
        if (unref(subscription)?.status !== 0) {
            clearInterval(intervalId.value)
        }
        if (unref(subscription)?.status === 1)
            router.push({
                path: `/dashboard/pet/${unref(subscription).pet_id}/ad/details`
            })

        if (unref(subscription)?.status === 2)
            router.push({
                path: `/dashboard/pet/${
                    unref(subscription).pet_id
                }/ad/create?status=2`
            })
    }
)

watch(
    () => unref(count),
    _ => {
        if (unref(count) === 5) {
            clearInterval(intervalId.value)
            router.push({
                path: `/dashboard/pet/${
                    unref(subscription).pet_id
                }/ad/create?status=failed`
            })
        }
    }
)

subscriptionIntervalInit()
</script>
