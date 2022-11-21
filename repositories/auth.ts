import { useAuthStore } from '~~/stores/auth'
const auth = useAuthStore()

export interface signInPayload {
    email: string
    password: string
}

export interface signUpPayload {
    email: string
    password: string
    firstName: string
    lastName: string
}

export enum AuthProviderType {
    GOOGLE = 'google',
    FACEBOOK = 'facebook'
}

export enum UserType {
    OWNER = 0,
    FOUNDER = 1
}

const useAuthRepository = () => {
    const { $supabase } = useNuxtApp()

    const signIn = async (payload: signInPayload) => {
        try {
            let user
            const { data, error } = await $supabase.auth.signIn({
                email: payload.email,
                password: payload.password
            })
            if (error) throw error
            if (data) {
                user = await getUser(data!.user!.id)
            }
            return user
        } catch (error) {
            throw error
        }
    }

    const signOut = async () => {
        const responsePayload = await $supabase.auth.signOut()
        return responsePayload
    }

    const signUp = async (payload: signUpPayload) => {
        try {
            const data = await $supabase.auth.signUp({
                email: payload.email,
                password: payload.password
            })

            const userId = data!.user!.id
            let userData = await createUserDetails({
                userId,
                email: payload.email,
                firstName: payload.firstName,
                lastName: payload.lastName
            })

            return userData
        } catch (error) {}
    }

    const signInProvider = async (type: AuthProviderType) => {
        return await $supabase.auth.signIn({
            provider: type
        })
    }

    const forgetPassword = async (email: string) => {
        return await $supabase.auth.api.resetPasswordForEmail(email)
    }

    const getUserByEmail = async (email: string) => {
        return await $supabase.from('users').select('*').eq('email', email)
    }

    const createUserDetails = async payload => {
        return await $supabase.from('users').insert([
            {
                id: payload.userId,
                email: payload.email,
                first_name: payload.firstName,
                last_name: payload.lastName,
                type: payload.type,
                default_measurement: payload.measurementType,
                about_me: payload.aboutMe || ''
            }
        ])
    }

    const updateUserDetails = async (userId: string, payload) => {
        await $supabase
            .from('users')
            .update({
                first_name: payload.firstName,
                last_name: payload.lastName,
                type: payload.type,
                default_measurement: payload.measurementType,
                about_me: payload.aboutMe || ''
            })
            .eq('id', userId)
    }

    const getUser = async (userId: string) => {
        let _userId = userId
        let publicUser

        if (!_userId) {
            const data = await $supabase.auth.user()
            _userId = data!.user!.id
        }

        if (_userId) {
            const data = await $supabase
                .from('users')
                .select('*')
                .eq('id', _userId)

            publicUser = data.data![0]
        }

        return publicUser
    }

    const updateUserType = async (userType: UserType) => {
        let userId
        let response

        const data = await $supabase.auth.user()
        userId = data!.user!.id

        if (!data?.user) throw 'No user found'

        if (userId) {
            response = await $supabase
                .from('users')
                .update({ user_type: userType })
                .eq('id', userId)
        }

        return response
    }

    return {
        signIn,
        signOut,
        signUp,
        signInProvider,
        updateUserDetails,
        createUserDetails,
        getUser,
        forgetPassword,
        getUserByEmail,
        updateUserType
    }
}

export default useAuthRepository
