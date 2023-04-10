import { useAuthStore } from '~~/stores/auth'

export default defineNuxtRouteMiddleware(to => {
    const auth = useAuthStore()
    const router = useRouter()
    const route = useRoute()

    if (!auth?.token) {
        return router.push({
            path: '/'
        })
    }
})
