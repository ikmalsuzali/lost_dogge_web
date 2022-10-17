import { defineStore } from 'pinia';
import { RemovableRef, useStorage } from '@vueuse/core'
import { definitions } from "~~/types/supabase"


export enum LocalStorage {
  LOCATION = 'location',
  TOKEN = 'authToken',
  USER = 'user'
}
export interface AuthUser extends Record<string, any> {}

export type AuthState = {
  user: RemovableRef<AuthUser> | null;
  token: RemovableRef<string> | null;
};

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): AuthState => {
    return {
      user: useStorage(LocalStorage.USER, {}),
      token: useStorage(LocalStorage.TOKEN, '')
    };
  },
  actions: {
    logout() {
      localStorage.clear()
      this.user = {}
      this.token = ''
    },
    setToken(token: string) { 
      this.token = token
    },
    setUser(payload: definitions['users'] | {}) {
      this.user = payload
    }
  },
});
