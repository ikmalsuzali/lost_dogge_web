import { definitions } from '~/types/supabase'
import axios from 'axios'

const useSubscriptionRepository = () => {
    const { $supabase } = useNuxtApp()
    const config = useRuntimeConfig()

    const getAllSubscriptions = async () => {
        const { data, error } = await axios.get(
            `${config.API_HOST}/api/v1/stripe/products`
        )

        if (error) throw error
        return data
    }

    const fetchSubscription = async (id: string) => {
        const { data, error } = await $supabase
            .from('payments')
            .select('*')
            .eq('id', id)
            .limit(1)
            .single()

        if (error) throw error
        return data
    }

    const subscribeStripePayment = async payload => {
        const { data, error } = await axios.post(
            `${config.API_HOST}/api/v1/checkout-session`,
            {
                pet_id: payload.pet_id,
                price_id: payload.price_id,
                user_id: payload.user_id,
                success_url: payload.success_url,
                cancel_url: payload.cancel_url
            }
        )

        if (error) throw error

        return data
    }

    const fetchFirstSuccessfulPayment = async (petId: string) => {
        const { data, error } = await $supabase
            .from('payments')
            .select('*')
            .eq('pet_id', petId)
            .eq('status', 1)
            .limit(1)
            .single()

        if (error) throw error
        return data
    }

    const fetchPaymentAd = async (paymentId: string) => {
        const { data, error } = await $supabase
            .from('payments')
            .select('*, fb_adsets(*)')
            .eq('id', paymentId)
            .limit(1)
            .single()

        if (error) throw error
        return data
    }

    const confirmAd = async (paymentId: string) => {
        const { data, error } = await axios.post<Ad>(
            `${config.API_HOST}/api/v1/fb/ad`,
            {
                payment_id: paymentId
            }
        )

        if (error) throw error

        return data
    }

    return {
        getAllSubscriptions,
        subscribeStripePayment,
        fetchSubscription,
        fetchFirstSuccessfulPayment,
        confirmAd,
        fetchPaymentAd
    }
}

export default useSubscriptionRepository
