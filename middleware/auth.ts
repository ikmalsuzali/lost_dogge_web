import { useAuthStore } from '~~/stores/auth';

export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore()
  const router = useRouter();

  if (!auth?.user?.id) {
    return router.push({
      path: '/'
    });
  }
});
