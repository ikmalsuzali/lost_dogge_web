import { useJwt } from '@vueuse/integrations/useJwt'
import useAuthRepository from '@/repositories/auth'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware(to => {
    const router = useRouter()
    const route = useRoute()
    const authStore = useAuthStore()
    const { createUserDetails, getUser } = useAuthRepository()

    // break url params with hash

    const checkUser = async (token: string) => {
        if (token) {
            const { payload } = useJwt(token)
            if (payload.value?.sub) {
                const user = await getUser(payload.value?.sub)
                if (user) authStore.setToken(token)
                if (!user) {
                    const emailName = payload.value?.email.substring(
                        0,
                        payload.value?.email.lastIndexOf('@')
                    )

                    const newUser = await createUserDetails({
                        userId: payload.value?.sub,
                        email: payload.value?.email,
                        firstName: emailName,
                        lastName: emailName
                    })

                    if (newUser) authStore.setToken(token)
                }

                router.push('/dashboard/pet')
            }
        }
    }

    let regex = /(?<=access_token=)(.*?)(?=&expires)/
    let token = regex.exec(route?.hash)?.[0]

    checkUser(token)
})
