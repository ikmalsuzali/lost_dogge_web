import { useAuthStore } from '~~/stores/auth'

export default defineNuxtRouteMiddleware(to => {
    const auth = useAuthStore()
    const router = useRouter()
    const route = useRoute()

    console.log('🚀 ~ file: auth.ts:7 ~ route:', route.query)
    

    if (!auth?.token) {
        return router.push({
            path: '/'
        })
    }
})
