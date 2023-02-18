import { definitions } from '~/types/supabase'
import axios from 'axios'

const useSubscriptionRepository = () => {
    const { $supabase } = useNuxtApp()

    const getAllSubscriptions = async () => {
        const { data, error } = await $supabase
            .from('stripe_products')
            .select('*')

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
        console.log('stripe payment')
        const { data, error } = await axios.post(
            `https://lost-dogge-api.herokuapp.com/api/v1/checkout-session`,
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

    return {
        getAllSubscriptions,
        subscribeStripePayment,
        fetchSubscription
    }
}

export default useSubscriptionRepository
