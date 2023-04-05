<template>
    <div>
        <TransitionRoot as="template" :show="drawer.isSignupLoginDrawerOpen">
            <Dialog
                as="div"
                class="relative z-10"
                @close="toggleSignupLoginDrawer"
            >
                <TransitionChild
                    as="template"
                    enter="ease-in-out duration-500"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="ease-in-out duration-500"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <div
                        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    />
                </TransitionChild>
                <div class="fixed inset-0" />
                <div class="fixed inset-0 overflow-hidden">
                    <div class="absolute inset-0 overflow-hidden">
                        <div
                            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16"
                        >
                            <TransitionChild
                                as="template"
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enter-from="translate-x-full"
                                enter-to="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leave-from="translate-x-0"
                                leave-to="translate-x-full"
                            >
                                <DialogPanel
                                    class="pointer-events-auto w-screen md:max-w-xl"
                                >
                                    <div
                                        class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                                    >
                                        <div class="px-4 py-6 sm:px-6">
                                            <div
                                                class="flex items-start justify-between"
                                            >
                                                <h2
                                                    id="slide-over-heading"
                                                    class="text-lg font-medium text-gray-900"
                                                >
                                                    {{ drawer.type }}
                                                </h2>
                                                <div
                                                    class="ml-3 flex h-7 items-center"
                                                >
                                                    <button
                                                        type="button"
                                                        class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                                                    >
                                                        <span class="sr-only"
                                                            >Close panel</span
                                                        >
                                                        <XMarkIcon
                                                            class="h-6 w-6"
                                                            aria-hidden="true"
                                                            @click="
                                                                toggleSignupLoginDrawer
                                                            "
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            v-if="
                                                drawer.type === AuthType.LOGIN
                                            "
                                        >
                                            <div class="flex">
                                                <div
                                                    class="flex flex-1 flex-col justify-center py-6"
                                                >
                                                    <div
                                                        class="mx-auto w-full max-w-sm"
                                                    >
                                                        <div
                                                            class="flex space-x-1"
                                                        >
                                                            <img
                                                                class="block h-10 w-auto"
                                                                src="~/assets/images/logo-lost-doggo.svg"
                                                                alt="Your Company"
                                                            />
                                                            <h2
                                                                class="text-3xl font-bold tracking-tight text-gray-900"
                                                            >
                                                                Sign in to your
                                                                account
                                                            </h2>
                                                        </div>

                                                        <div class="mt-8">
                                                            <div>
                                                                <div>
                                                                    <p
                                                                        class="text-sm font-medium text-gray-700"
                                                                    >
                                                                        Sign in
                                                                        with
                                                                    </p>

                                                                    <div
                                                                        class="mt-1 grid grid-cols-1 gap-3"
                                                                    >
                                                                        <div
                                                                            @click="
                                                                                onSignFacebookClick()
                                                                            "
                                                                        >
                                                                            <a
                                                                                class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                                                                            >
                                                                                <span
                                                                                    class="sr-only"
                                                                                    >Sign
                                                                                    in
                                                                                    with
                                                                                    Facebook</span
                                                                                >
                                                                                <svg
                                                                                    class="h-5 w-5"
                                                                                    aria-hidden="true"
                                                                                    fill="currentColor"
                                                                                    viewBox="0 0 20 20"
                                                                                >
                                                                                    <path
                                                                                        fill-rule="evenodd"
                                                                                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                                                                        clip-rule="evenodd"
                                                                                    />
                                                                                </svg>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="relative mt-6"
                                                                >
                                                                    <div
                                                                        class="absolute inset-0 flex items-center"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <div
                                                                            class="w-full border-t border-gray-300"
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        class="relative flex justify-center text-sm"
                                                                    >
                                                                        <span
                                                                            class="bg-white px-2 text-gray-500"
                                                                            >Or
                                                                            continue
                                                                            with</span
                                                                        >
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="mt-6">
                                                                <form
                                                                    action="#"
                                                                    method="POST"
                                                                    class="space-y-6"
                                                                >
                                                                    <div>
                                                                        <Input
                                                                            v-model="
                                                                                authLogin.email
                                                                            "
                                                                            label="Email"
                                                                            required
                                                                            :error-message="
                                                                                errorMessages.email
                                                                            "
                                                                        />
                                                                    </div>

                                                                    <div
                                                                        class="space-y-1"
                                                                    >
                                                                        <Input
                                                                            v-model="
                                                                                authLogin.password
                                                                            "
                                                                            label="Password"
                                                                            required
                                                                            :type="
                                                                                InputType.PASSWORD
                                                                            "
                                                                            :error-message="
                                                                                errorMessages.password ||
                                                                                errorMessages.generic
                                                                            "
                                                                        />
                                                                    </div>

                                                                    <div
                                                                        class="flex items-center justify-between"
                                                                    >
                                                                        <div
                                                                            class="flex items-center"
                                                                        >
                                                                            <input
                                                                                id="remember-me"
                                                                                name="remember-me"
                                                                                type="checkbox"
                                                                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                            />
                                                                            <label
                                                                                for="remember-me"
                                                                                class="ml-2 block text-sm text-gray-900"
                                                                                >Remember
                                                                                me</label
                                                                            >
                                                                        </div>

                                                                        <div
                                                                            class="text-sm"
                                                                        >
                                                                            <a
                                                                                class="font-medium text-indigo-600 hover:text-indigo-500"
                                                                                @click="
                                                                                    onForgetPasswordClick
                                                                                "
                                                                                >Forgot
                                                                                your
                                                                                password?</a
                                                                            >
                                                                        </div>
                                                                    </div>

                                                                    <div
                                                                        class="flex"
                                                                    >
                                                                        <Button
                                                                            type="primary"
                                                                            :loading="
                                                                                isLoginLoading
                                                                            "
                                                                            @click="
                                                                                onLoginClick
                                                                            "
                                                                            :block="
                                                                                true
                                                                            "
                                                                        >
                                                                            Sign
                                                                            in
                                                                        </Button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            v-if="
                                                drawer.type === AuthType.SIGN_UP
                                            "
                                        >
                                            <div class="flex">
                                                <div
                                                    class="flex flex-1 flex-col justify-center py-6"
                                                >
                                                    <div
                                                        class="mx-auto w-full max-w-sm"
                                                    >
                                                        <div
                                                            class="flex space-x-2"
                                                        >
                                                            <img
                                                                class="block h-10 w-auto"
                                                                src="~/assets/images/logo-lost-doggo.svg"
                                                                alt="Your Company"
                                                            />
                                                            <h2
                                                                class="text-3xl font-bold tracking-tight text-gray-900"
                                                            >
                                                                Sign up your
                                                                account
                                                            </h2>
                                                        </div>

                                                        <div class="mt-8">
                                                            <div>
                                                                <div>
                                                                    <p
                                                                        class="text-sm font-medium text-gray-700"
                                                                    >
                                                                        Sign up
                                                                        with
                                                                    </p>

                                                                    <div
                                                                        class="mt-1"
                                                                    >
                                                                        <div>
                                                                            <a
                                                                                class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                                                                                @click="
                                                                                    onSignFacebookClick
                                                                                "
                                                                            >
                                                                                <span
                                                                                    class="sr-only"
                                                                                    >Sign
                                                                                    up
                                                                                    with
                                                                                    Facebook</span
                                                                                >
                                                                                <svg
                                                                                    class="h-5 w-5"
                                                                                    aria-hidden="true"
                                                                                    fill="currentColor"
                                                                                    viewBox="0 0 20 20"
                                                                                >
                                                                                    <path
                                                                                        fill-rule="evenodd"
                                                                                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                                                                        clip-rule="evenodd"
                                                                                    />
                                                                                </svg>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="relative mt-6"
                                                                >
                                                                    <div
                                                                        class="absolute inset-0 flex items-center"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <div
                                                                            class="w-full border-t border-gray-300"
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        class="relative flex justify-center text-sm"
                                                                    >
                                                                        <span
                                                                            class="bg-white px-2 text-gray-500"
                                                                            >Or
                                                                            continue
                                                                            with</span
                                                                        >
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="mt-6">
                                                                <form
                                                                    action="#"
                                                                    method="POST"
                                                                    class="space-y-6"
                                                                >
                                                                    <div
                                                                        class="grid grid-cols-2 space-x-6"
                                                                    >
                                                                        <div>
                                                                            <Input
                                                                                v-model="
                                                                                    authSignup.firstName
                                                                                "
                                                                                label="First Name"
                                                                                required
                                                                                :error-message="
                                                                                    errorMessages.firstName
                                                                                "
                                                                            />
                                                                        </div>

                                                                        <div>
                                                                            <Input
                                                                                v-model="
                                                                                    authSignup.lastName
                                                                                "
                                                                                label="Last Name"
                                                                                required
                                                                                :error-message="
                                                                                    errorMessages.lastName
                                                                                "
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div>
                                                                        <Input
                                                                            v-model="
                                                                                authSignup.email
                                                                            "
                                                                            label="Email address"
                                                                            required
                                                                            :type="
                                                                                InputType.EMAIL
                                                                            "
                                                                            :error-message="
                                                                                errorMessages.email
                                                                            "
                                                                        />
                                                                    </div>

                                                                    <div
                                                                        class="space-y-1"
                                                                    >
                                                                        <div
                                                                            class="mt-1"
                                                                        >
                                                                            <Input
                                                                                v-model="
                                                                                    authSignup.password
                                                                                "
                                                                                label="Password"
                                                                                required
                                                                                :type="
                                                                                    InputType.PASSWORD
                                                                                "
                                                                                :error-message="
                                                                                    errorMessages.password
                                                                                "
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        class="space-y-1"
                                                                    >
                                                                        <Input
                                                                            v-model="
                                                                                authSignup.confirmPassword
                                                                            "
                                                                            label="Confirm Password"
                                                                            required
                                                                            :type="
                                                                                InputType.PASSWORD
                                                                            "
                                                                            :error-message="
                                                                                errorMessages.confirmPassword
                                                                            "
                                                                        />
                                                                    </div>

                                                                    <div>
                                                                        <Button
                                                                            :loading="
                                                                                isSigninLoading
                                                                            "
                                                                            @click="
                                                                                onSignupClick
                                                                            "
                                                                            :block="
                                                                                true
                                                                            "
                                                                        >
                                                                            Sign
                                                                            up
                                                                        </Button>
                                                                        <!-- <button
                                                                            type="button"
                                                                            class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                                            @click="
                                                                                onSignupClick
                                                                            "
                                                                        >
                                                                            Sign
                                                                            up
                                                                        </button> -->
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            v-if="
                                                drawer.type ===
                                                AuthType.FORGOT_PASSWORD
                                            "
                                        >
                                            <div class="flex">
                                                <div
                                                    class="flex flex-1 flex-col justify-center py-6"
                                                >
                                                    <div
                                                        class="mx-auto w-full max-w-sm"
                                                    >
                                                        <div
                                                            class="flex space-x-2"
                                                        >
                                                            <img
                                                                class="block h-10 w-auto"
                                                                src="~/assets/images/logo-lost-doggo.svg"
                                                                alt="Your Company"
                                                            />
                                                            <h2
                                                                class="text-3xl font-bold tracking-tight text-gray-900"
                                                            >
                                                                Forget your
                                                                password?
                                                            </h2>
                                                        </div>

                                                        <div class="mt-8">
                                                            <div class="mt-6">
                                                                <form
                                                                    action="#"
                                                                    method="POST"
                                                                    class="space-y-6"
                                                                >
                                                                    <div>
                                                                        <Input
                                                                            v-model="
                                                                                authForgetPassword.email
                                                                            "
                                                                            label="Email address"
                                                                            required
                                                                            :type="
                                                                                InputType.EMAIL
                                                                            "
                                                                            :error-message="
                                                                                errorMessages.email
                                                                            "
                                                                        />
                                                                    </div>

                                                                    <div>
                                                                        <Button
                                                                            :loading="
                                                                                isForgetPasswordSubmitLoading
                                                                            "
                                                                            @click="
                                                                                onForgetPasswordSubmitClick
                                                                            "
                                                                            :block="
                                                                                true
                                                                            "
                                                                        >
                                                                            Send
                                                                            Email
                                                                            to
                                                                            Reset
                                                                            Password
                                                                        </Button>
                                                                        <!-- <button
                                                                            type="button"
                                                                            class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                                            @click="
                                                                                onSignupClick
                                                                            "
                                                                        >
                                                                            Sign
                                                                            up
                                                                        </button> -->
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
        <slot name="app-before" />
        <div id="app-before"></div>
        <div class="flex flex-col min-h-screen">
            <slot name="header">
                <NavBar
                    @signIn="toggleSignupLoginDrawer(AuthType.LOGIN)"
                    @signUp="toggleSignupLoginDrawer(AuthType.SIGN_UP)"
                />
            </slot>
            <div>
                <slot />
            </div>
            <slot name="footer">
                <Footer />
            </slot>
        </div>
        <slot name="app-after" />
        <div id="app-after"></div>
    </div>
</template>

<script lang="ts" setup>
import { InputType } from '~/types/InputType'
import Input from '~/components/atom/Input.vue'
import Footer from '~/components/Footer.vue'
import NavBar from '~/components/NavBar.vue'
import Button from '~/components/atom/Button.vue'
import { AuthType, useDrawerStore } from '~~/stores/drawer'
import { useAuthStore } from '~/stores/auth'
import { usePetStore } from '~/stores/pet'
import {
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import useAuthRepository, { AuthProviderType } from '~/repositories/auth'

const {
    signUp,
    getUserByEmail,
    signIn,
    signInProvider,
    forgetPassword,
    signInWithEmail
} = useAuthRepository()
const drawer = useDrawerStore()
const authStore = useAuthStore()
const petStore = usePetStore()
const router = useRouter()

const toggleSignupLoginDrawer = (authType: AuthType) => {
    resetState()
    drawer.setDrawerType(authType)
    drawer.toggleSignupLoginDrawer()
}

const isLoginLoading = ref(false)
const isSigninLoading = ref(false)
const isForgetPasswordSubmitLoading = ref(false)

const authLoginInit = () => {
    return {
        email: '',
        password: ''
    }
}

const authForgetPasswordInit = () => {
    return {
        email: ''
    }
}

const authSignupErrorMessageInit = () => {
    return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        generic: ''
    }
}

const authLogin = ref(authLoginInit())
const authSignup = ref(authSignupErrorMessageInit())
const authForgetPassword = ref(authForgetPasswordInit())

const errorMessages = ref(authSignupErrorMessageInit())

const resetState = () => {
    authSignup.value = authSignupErrorMessageInit()
    authLogin.value = authLoginInit()
    errorMessages.value = authSignupErrorMessageInit()
}

const validateRequired = (inputValue: string, label: string = '') => {
    return !inputValue ? `${label || 'Input'} is required` : ''
}

const validateEmail = (inputValue: string) => {
    if (!inputValue) return validateRequired(inputValue, 'Email')
    const re = /\S+@\S+\.\S+/
    return !re.test(inputValue) ? 'Email is invalid' : ''
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

const isErrorMessageEmpty = errorMessages =>
    Object.values(errorMessages).every(
        message => message === null || message === ''
    )

const allSignupErrorMessageValidation = async () => {
    errorMessages.value.email = validateEmail(unref(authSignup).email)
    errorMessages.value.password = validatePassword(unref(authSignup).password)
    errorMessages.value.firstName = validateRequired(
        unref(authSignup).firstName,
        'First name'
    )
    errorMessages.value.lastName = validateRequired(
        unref(authSignup).lastName,
        'Last name'
    )

    errorMessages.value.confirmPassword = validateConfirmPassword(
        unref(authSignup).password,
        unref(authSignup).confirmPassword
    )
    if (unref(authSignup).email !== '') {
        const data = await getUserByEmail(unref(authSignup).email)
        errorMessages.value.email = data!.data!.length
            ? 'Email has been taken'
            : ''
    }
}

const onForgetPasswordClick = () => {
    resetState()
    drawer.setDrawerType(AuthType.FORGOT_PASSWORD)
}

const onForgetPasswordSubmitClick = async () => {
    try {
        isForgetPasswordSubmitLoading.value = true
        await allForgetPasswordErrorMessageValidation()
        if (!isErrorMessageEmpty(unref(errorMessages))) return
        await forgetPassword(unref(authForgetPassword).email)
        useNuxtApp().$toast.remove()
        useNuxtApp().$toast.success('Please check your email')
    } catch (error) {
        console.log(error)
    } finally {
        isForgetPasswordSubmitLoading.value = false
    }
}

const onSignFacebookClick = async () => {
    await signInProvider(AuthProviderType.FACEBOOK)
}

const allLoginErrorMessageValidation = async () => {
    errorMessages.value.email = validateEmail(unref(authLogin).email)
    errorMessages.value.password = validateRequired(
        unref(authLogin).password,
        'Password'
    )
}

const allForgetPasswordErrorMessageValidation = async () => {
    errorMessages.value.email = validateEmail(unref(authForgetPassword).email)
}

const onSignupClick = async () => {
    try {
        isSigninLoading.value = true
        errorMessages.value = authSignupErrorMessageInit()
        await allSignupErrorMessageValidation()
        if (!isErrorMessageEmpty(unref(errorMessages))) return

        const data = await signUp(unref(authSignup))
        authStore.setUser(data?.user)
        authStore.setToken(data.token)
        drawer.toggleSignupLoginDrawer()
        router.push('/dashboard/pet')
    } catch (error) {
    } finally {
        isSigninLoading.value = false
    }
}

const onLoginClick = async () => {
    try {
        isLoginLoading.value = true
        errorMessages.value = authSignupErrorMessageInit()
        await allLoginErrorMessageValidation()
        if (!isErrorMessageEmpty(unref(errorMessages))) return
        let data = await signIn(unref(authLogin))
        authStore.setUser(data.user)
        authStore.setToken(data.token)
        await petStore.fetchMyPets()
        drawer.toggleSignupLoginDrawer()
        router.push('/dashboard/pet')
    } catch (error) {
        errorMessages.value.generic = error.message
        useNuxtApp().$toast.error(error.message)
    } finally {
        isLoginLoading.value = false
    }
}
</script>
