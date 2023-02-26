import { defineStore } from 'pinia'
import { RemovableRef, useStorage } from '@vueuse/core'
import { definitions } from '~~/types/supabase'

export enum LocalStorage {
    LOCATION = 'location',
    TOKEN = 'authToken',
    USER = 'user',
    PETS = 'pet'
}
export interface AuthUser extends Record<string, any> {}
export interface Location {
    name: string
    longitude: string
    latitude: string
}

export type AuthState = {
    user: RemovableRef<AuthUser> | null
    token: RemovableRef<string> | null
    location: RemovableRef<Location> | Object
}

export const useAuthStore = defineStore({
    id: 'auth',
    state: (): AuthState => {
        return {
            user: useStorage(LocalStorage.USER, {}),
            token: useStorage(LocalStorage.TOKEN, ''),
            location: useStorage(LocalStorage.LOCATION, {})
        }
    },
    actions: {
        async logout() {
            localStorage.clear()
            this.user = {}
            this.token = ''
            this.location = {}
        },
        setToken(token: string) {
            this.token = token
        },
        setUser(payload: definitions['users'] | {}) {
            this.user = payload
        },
        setLocation(payload: Location) {
            this.location = {
                name: payload.name,
                longitude: payload.longitude,
                latitude: payload.latitude
            }
            localStorage.setItem(
                LocalStorage.LOCATION,
                JSON.stringify(this.location)
            )
        }
    }
})
