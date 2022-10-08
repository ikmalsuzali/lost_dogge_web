import { defineStore } from 'pinia';

export enum AuthType {
    SIGN_IN = 'signIn',
    SIGN_UP = 'signUp'
  }

export type DrawerState = {
    isSignupLoginDrawerOpen: boolean
    type: AuthType
};



export const useDrawerStore = defineStore({
  id: 'auth',
  state: (): DrawerState => {
    return {
     isSignupLoginDrawerOpen: false,
     type: AuthType.SIGN_IN
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
