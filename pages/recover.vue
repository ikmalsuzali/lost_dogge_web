<template>
    <div
        class="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
    >
        <div class="w-full max-w-md space-y-8">
            <div>
                <img
                    class="mx-auto h-12 w-auto"
                    src="~/assets/images/logo-lost-doggo.svg"
                    alt="Your Company"
                />
                <h2
                    class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
                >
                    Lost your password?
                </h2>
            </div>
            <form class="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true" />
                <div class="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <Input
                            v-model="authResetPassword.password"
                            label="Password"
                            required
                            :type="InputType.PASSWORD"
                            :error-message="errorMessages.password"
                        />
                    </div>
                    <div>
                        <label for="password" class="sr-only"
                            >Confirm Password</label
                        >
                        <Input
                            v-model="authResetPassword.confirmPassword"
                            label="Confirm Password"
                            required
                            :type="InputType.PASSWORD"
                            :error-message="errorMessages.confirmPassword"
                        />
                    </div>
                </div>

                <div>
                    <Button
                        preset="primary"
                        :loading="isUpdatingPasswordLoading"
                        :block="true"
                        :color="'primary'"
                        @click="triggerUpdateUserPassword"
                    >
                        Reset password
                    </Button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import useAuthRepository from '@/repositories/auth'
import Input from '~/components/atom/Input.vue'
import { InputType } from '~~/types/InputType'
import { useAuthStore } from '~/stores/auth'

definePageMeta({
    middleware: 'recover'
})

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const { verifyOTPWithEmail, updateUserPassword } = useAuthRepository()
const { token, email } = route.query
const isVerifiedFailed = ref(false)
const isUpdatingPasswordLoading = ref(false)
const errorMessages = ref([])
const verifyResponseData = ref()
const authResetPasswordInit = () => {
    return {
        password: '',
        confirmPassword: ''
    }
}

const authResetPassword = ref(authResetPasswordInit())

const validateRequired = (inputValue: string, label: string = '') => {
    return !inputValue ? `${label || 'Input'} is required` : ''
}

const validatePassword = (inputValue: string) => {
    if (!inputValue) return validateRequired(inputValue, 'Password')
    return inputValue.length < 6 ? 'Minimum characters is 6' : ''
}

const validateConfirmPassword = (password: string, confirmPassword: string) => {
    if (!confirmPassword)
        return validateRequired(confirmPassword, 'Confirm password')
    return password !== confirmPassword
        ? 'Password is not matching the confirmed password'
        : ''
}

const allResetPasswordMessageValidation = async () => {
    const { password, confirmPassword } = authResetPassword.value
    const passwordMessage = validatePassword(unref(authResetPassword).password)
    const confirmPasswordMessage = validateConfirmPassword(
        unref(authResetPassword).password,
        unref(authResetPassword).confirmPassword
    )
    errorMessages.value = {
        password: passwordMessage,
        confirmPassword: confirmPasswordMessage
    }
    return !passwordMessage && !confirmPasswordMessage
}

const triggerVerifyOTPWithEmail = async () => {
    try {
        isVerifiedFailed.value = false
        verifyResponseData.value = await verifyOTPWithEmail(email, token)
    } catch (error) {
        useNuxtApp().$toast.error('Session expired')
        isVerifiedFailed.value = true
    }
}

const triggerUpdateUserPassword = async () => {
    try {
        console.log('trigger update user passwsord')
        isUpdatingPasswordLoading.value = true
        if (!(await allResetPasswordMessageValidation())) return
        if (isVerifiedFailed.value) {
            useNuxtApp().$toast.error('Session expired')
            return
        }
        await updateUserPassword(
            unref(verifyResponseData).session.access_token,
            unref(authResetPassword).password
        )
        useNuxtApp().$toast.success('Password updated')
        authStore.setToken(unref(verifyResponseData)?.session?.access_token)
        router.push('/dashboard/pet')
    } catch (error) {
        console.log(error)
        useNuxtApp.$toast.error('Failed to update password')
    } finally {
        isUpdatingPasswordLoading.value = false
    }
}

triggerVerifyOTPWithEmail()

//  http://localhost:3000/recover?token=794099873767c8ac146809e6cdd4fd7aef171651ba2146247319a681
</script>
