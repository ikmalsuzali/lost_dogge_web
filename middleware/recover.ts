
export default defineNuxtRouteMiddleware(to => {
    const router = useRouter()
    const route = useRoute()

    if (!route.query?.token) {
        return router.push({
            path: '/'
        })
    }
})
