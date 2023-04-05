import { useAuthStore } from '~~/stores/auth'

export default defineNuxtRouteMiddleware(to => {
    const auth = useAuthStore()
    const router = useRouter()
    const route = useRoute()

    console.log(route)
    console.log(router)

    // if (!route.query?.token) {
    //     return router.push({
    //         path: '/'
    //     })
    // }
})
