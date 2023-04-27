import { useAuthStore } from '~/stores/auth'
import { usePetStore } from '~/stores/pet'

export default defineNuxtRouteMiddleware(to => {
    const auth = useAuthStore()
    const router = useRouter()
    const route = useRoute()
    const petStore = usePetStore()

    if (route.params.id) {
        petStore.setMyPet({
            id: route.params.id
        })
    }

    if (!auth?.token) {
        return router.push({
            path: '/'
        })
    }
})
