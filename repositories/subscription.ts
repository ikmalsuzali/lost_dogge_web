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

    const subscribeStripePayment = async payload => {
        console.log('stripe payment')
        const { data, error } = await axios.post(
            `http://0.0.0.0:8080/api/v1/checkout-session`,
            {
                pet_id: payload.pet_id,
                price_id: payload.price_id,
                user_id: payload.user_id,
                success_url: payload.success_url,
                failure_url: payload.failure_url,
                cancel_url: payload.cancel_url
            }
        )

        if (error) throw error

        return data
    }

    return {
        getAllSubscriptions,
        subscribeStripePayment
    }
}

export default useSubscriptionRepository
