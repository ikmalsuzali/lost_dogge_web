import { defineStore } from 'pinia';

export enum AuthType {
    LOGIN = 'Login',
    SIGN_UP = 'Sign up',
    FORGOT_PASSWORD = 'Forgot Password'
  }

export type DrawerState = {
    isSignupLoginDrawerOpen: boolean
    type: AuthType
};


export const useDrawerStore = defineStore({
  id: 'drawer',
  state: (): DrawerState => {
    return {
     isSignupLoginDrawerOpen: false,
     type: AuthType.LOGIN
    };
  },
  actions: {
    toggleSignupLoginDrawer() {
      this.isSignupLoginDrawerOpen = !this.isSignupLoginDrawerOpen;
    },
    setDrawerType(type: AuthType) { 
        this.type = type
    }
  },
});
