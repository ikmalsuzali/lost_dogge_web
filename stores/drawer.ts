import { defineStore } from 'pinia'

export enum AuthType {
    LOGIN = 'Login',
    SIGN_UP = 'Sign up',
    FORGOT_PASSWORD = 'Forgot Password'
}

export type DrawerState = {
    isHomeDrawerOpen: boolean
    isSignupLoginDrawerOpen: boolean
    type: AuthType
    isAuthDrawerOpen: boolean
}

export const useDrawerStore = defineStore({
    id: 'drawer',
    state: (): DrawerState => {
        return {
            isHomeDrawerOpen: false,
            isSignupLoginDrawerOpen: false,
            isAuthDrawerOpen: false,
            type: AuthType.LOGIN
        }
    },
    actions: {
        toggleSignupLoginDrawer() {
            this.isSignupLoginDrawerOpen = !this.isSignupLoginDrawerOpen
            this.isHomeDrawerOpen = false
        },
        toggleAuthDrawer() {
            this.isAuthDrawerOpen = !this.isAuthDrawerOpen
        },
        toggleHomeDrawer() {
            this.isHomeDrawerOpen = !this.isHomeDrawerOpen
        },
        setDrawerType(type: AuthType) {
            this.type = type
        }
    }
})
