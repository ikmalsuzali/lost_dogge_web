
export interface signInPayload {
  email: string
  password: string
}

export interface signUpPayload {
  email: string
  password: string
}

export enum AuthProviderType {
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
}

const useAuthRepository = () => {
  const {$supabase} = useNuxtApp()

  const signIn = async (payload: signInPayload) => {
    await $supabase.auth.signIn({
      email: payload.email,
      password: payload.password,
    })

  }
  
  const signOut = async () => {
    const responsePayload = await $supabase.auth.signOut()
    return responsePayload
  }
  
  const signUp = async (payload: signUpPayload) => {
    try {
    const data = await $supabase.auth.signUp({
      email: payload.email,
      password: payload.password,
    })

    const userId = data!.user!.id

    createUserDetails({
      user_id: userId
    })
  } catch (error) {
      
  }
  }
  
  const signInProvider = async (type: AuthProviderType) => {
    return await $supabase.auth.signIn({
      provider: type,
    })
  }
  
  const createUserDetails = async (payload) => {
    await $supabase.from('users').insert([
      {
        user_id: payload.userId,
        first_name: payload.firstName,
        last_name: payload.lastName,
        type: payload.type,
        default_measurement_type: payload.measurementType,
        about_me: payload.aboutMe || '',
      },
    ])
  }
  
  const updateUserDetails = async (userId: string, payload) => {
    return await $supabase
      .from('users')
      .update({
        first_name: payload.firstName,
        last_name: payload.lastName,
        type: payload.type,
        default_measurement_type: payload.measurementType,
        about_me: payload.aboutMe || '',
      })
      .eq('user_id', userId)
  }
  
  const getUser = async () => {
    let user = await $supabase.auth.user()
    if (user) {
      const _user = await $supabase
        .from('users')
        .select('*')
        .eq('user_id', user.id)
  
      user = { ...user, ..._user }
    }
  
    return user
  }

  return {
    signIn,
    signOut,
    signUp,
    signInProvider,
    updateUserDetails,
    createUserDetails,
    getUser,

  }

}

export default useAuthRepository
