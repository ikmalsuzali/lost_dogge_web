import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const supabase = createClient(
    config.SUPABASE_PROJECT_URL,
    config.SUPABASE_PUBLIC_KEY
  )

  return {
    provide: {
      supabase,
    },
  }
})
