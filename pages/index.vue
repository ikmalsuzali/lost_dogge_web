<template>
    <div>
        <!-- Hero - sign in form -->
        <main class="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
            <div class="text-center">
                <h1
                    class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
                >
                    <span class="block xl:inline">Find your </span>
                    <span class="block text-indigo-600 xl:inline"
                        >beloved pet</span
                    >
                </h1>
                <p
                    class="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"
                >
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua.
                </p>
                <Autocomplete
                    v-model="searchedLocation"
                    placeholder="Search last seen location of your pet"
                    :throttle-time="1000"
                    :items="geocodingLocations"
                    item-key="id"
                    item-value="place_name"
                />
                <div
                    class="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8"
                >
                    <div class="rounded-md shadow">
                        <a
                            class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                            @click="onPetSearchClick(PetTypeRoute.LOST)"
                            >Search Lost</a
                        >
                    </div>
                    <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                        <a
                            class="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                            @click="onPetSearchClick(PetTypeRoute.FOUND)"
                            >Search Found</a
                        >
                    </div>
                </div>
            </div>
        </main>
        <div class="relative mt-10">
            <div class="absolute inset-0 flex flex-col" aria-hidden="true">
                <div class="flex-1"></div>
                <div class="w-full flex-1 bg-gray-800"></div>
            </div>
            <div class="mx-auto w-7/12 px-4 sm:px-6">
                <Vue3Lottie
                    class="rounded-xl"
                    animationLink="https://fhasuqzjmruhvugclutt.supabase.co/storage/v1/object/public/pets/website/search-globe-lottie.json"
                />
            </div>
        </div>
        <!--end container-->
        <!--end section-->
        <div class="relative overflow-hidden bg-gray-800">
            <div class="relative pt-6 pb-16 sm:pb-24">
                <main class="mt-16 sm:mt-24">
                    <div class="mx-auto max-w-7xl">
                        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                            <div
                                class="px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left"
                            >
                                <div> 
                                    <a
                                        href="#"
                                        class="inline-flex items-center rounded-full bg-gray-900 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                                    >
                                        <span
                                            class="rounded-full bg-indigo-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white"
                                            >We're hiring</span
                                        >
                                        <span class="ml-4 text-sm"
                                            >Visit our careers page</span
                                        >
                                        <!-- <ChevronRightIcon class="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" /> -->
                                    </a>
                                    <h1
                                        class="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
                                    >
                                        Data to enrich your online business
                                    </h1>
                                    <p
                                        class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                                    >
                                        Anim aute id magna aliqua ad ad non
                                        deserunt sunt. Qui irure qui lorem
                                        cupidatat commodo. Elit sunt amet fugiat
                                        veniam occaecat fugiat aliqua ad ad non
                                        deserunt sunt.
                                    </p>
                                    <p
                                        class="mt-8 text-base font-semibold text-white sm:mt-10"
                                    >
                                        Used by
                                    </p>
                                    <div
                                        class="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0"
                                    >
                                        <div
                                            class="flex flex-wrap items-start justify-between"
                                        >
                                            <div
                                                class="flex justify-center px-1"
                                            >
                                                <img
                                                    class="h-9 sm:h-10"
                                                    src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                                                    alt="Tuple"
                                                />
                                            </div>
                                            <div
                                                class="flex justify-center px-1"
                                            >
                                                <img
                                                    class="h-9 sm:h-10"
                                                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                                                    alt="Workcation"
                                                />
                                            </div>
                                            <div
                                                class="flex justify-center px-1"
                                            >
                                                <img
                                                    class="h-9 sm:h-10"
                                                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                                                    alt="StaticKit"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
                                <div
                                    class="bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg"
                                >
                                    <div class="px-4 py-8 sm:px-10">
                                        <div>
                                            <p
                                                class="text-sm font-medium text-gray-700"
                                            >
                                                Sign in with
                                            </p>

                                            <div
                                                class="mt-1 grid grid-cols-3 gap-3"
                                            >
                                                <div>
                                                    <a
                                                        href="#"
                                                        class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                                                    >
                                                        <span class="sr-only"
                                                            >Sign in with
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

                                                <div>
                                                    <a
                                                        href="#"
                                                        class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                                                    >
                                                        <span class="sr-only"
                                                            >Sign in with
                                                            Twitter</span
                                                        >
                                                        <svg
                                                            class="h-5 w-5"
                                                            aria-hidden="true"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>

                                                <div>
                                                    <a
                                                        href="#"
                                                        class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                                                    >
                                                        <span class="sr-only"
                                                            >Sign in with
                                                            GitHub</span
                                                        >
                                                        <svg
                                                            class="h-5 w-5"
                                                            aria-hidden="true"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                                                clip-rule="evenodd"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="relative mt-6">
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
                                                    >Or</span
                                                >
                                            </div>
                                        </div>

                                        <div class="mt-6">
                                            <form
                                                action="#"
                                                method="POST"
                                                class="space-y-6"
                                            >
                                                <div>
                                                    <label
                                                        for="name"
                                                        class="sr-only"
                                                        >Full name</label
                                                    >
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        autocomplete="name"
                                                        placeholder="Full name"
                                                        required=""
                                                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>

                                                <div>
                                                    <label
                                                        for="mobile-or-email"
                                                        class="sr-only"
                                                        >Mobile number or
                                                        email</label
                                                    >
                                                    <input
                                                        type="text"
                                                        name="mobile-or-email"
                                                        id="mobile-or-email"
                                                        autocomplete="email"
                                                        placeholder="Mobile number or email"
                                                        required=""
                                                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>

                                                <div>
                                                    <label
                                                        for="password"
                                                        class="sr-only"
                                                        >Password</label
                                                    >
                                                    <input
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        placeholder="Password"
                                                        autocomplete="current-password"
                                                        required=""
                                                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>

                                                <div>
                                                    <button
                                                        type="submit"
                                                        class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    >
                                                        Create your account
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div
                                        class="border-t-2 border-gray-200 bg-gray-50 px-4 py-6 sm:px-10"
                                    >
                                        <p
                                            class="text-xs leading-5 text-gray-500"
                                        >
                                            By signing up, you agree to our
                                            <a
                                                href="#"
                                                class="font-medium text-gray-900 hover:underline"
                                                >Terms</a
                                            >,
                                            <a
                                                href="#"
                                                class="font-medium text-gray-900 hover:underline"
                                                >Data Policy</a
                                            >
                                            and
                                            <a
                                                href="#"
                                                class="font-medium text-gray-900 hover:underline"
                                                >Cookies Policy</a
                                            >.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <!-- Logo Cloud -->
        <div class="bg-gray-100">
            <div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                <p class="text-center text-base font-semibold text-gray-500">
                    Trusted by over 5 very average small businesses
                </p>
                <div
                    class="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5"
                >
                    <div
                        class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
                    >
                        <img
                            class="h-12"
                            src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                            alt="Tuple"
                        />
                    </div>
                    <div
                        class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
                    >
                        <img
                            class="h-12"
                            src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                            alt="Mirage"
                        />
                    </div>
                    <div
                        class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
                    >
                        <img
                            class="h-12"
                            src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                            alt="StaticKit"
                        />
                    </div>
                    <div
                        class="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1"
                    >
                        <img
                            class="h-12"
                            src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                            alt="Transistor"
                        />
                    </div>
                    <div
                        class="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1"
                    >
                        <img
                            class="h-12"
                            src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                            alt="Workcation"
                        />
                    </div>
                </div>
            </div>
        </div>
        <!-- Hero -->

        <!-- Alternating Feature Sections -->
        <div class="relative overflow-hidden pt-16 pb-32">
            <div
                aria-hidden="true"
                class="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
            />
            <div class="relative">
                <div
                    class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
                >
                    <div
                        class="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0"
                    >
                        <div>
                            <div>
                                <span
                                    class="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600"
                                >
                                    <!-- <InboxIcon
                                    class="h-6 w-6 text-white"
                                    aria-hidden="true"
                                /> -->
                                </span>
                            </div>
                            <div class="mt-6">
                                <h2
                                    class="text-3xl font-bold tracking-tight text-gray-900"
                                >
                                    Stay on top of customer support
                                </h2>
                                <p class="mt-4 text-lg text-gray-500">
                                    Semper curabitur ullamcorper posuere nunc
                                    sed. Ornare iaculis bibendum malesuada
                                    faucibus lacinia porttitor. Pulvinar laoreet
                                    sagittis viverra duis. In venenatis sem arcu
                                    pretium pharetra at. Lectus viverra dui
                                    tellus ornare pharetra.
                                </p>
                                <div class="mt-6">
                                    <a
                                        href="#"
                                        class="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                                        >Get started</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="mt-8 border-t border-gray-200 pt-6">
                            <blockquote>
                                <div>
                                    <p class="text-base text-gray-500">
                                        &ldquo;Cras velit quis eros eget rhoncus
                                        lacus ultrices sed diam. Sit orci risus
                                        aenean curabitur donec aliquet. Mi
                                        venenatis in euismod ut.&rdquo;
                                    </p>
                                </div>
                                <footer class="mt-3">
                                    <div class="flex items-center space-x-3">
                                        <div class="flex-shrink-0">
                                            <img
                                                class="h-6 w-6 rounded-full"
                                                src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                                alt=""
                                            />
                                        </div>
                                        <div
                                            class="text-base font-medium text-gray-700"
                                        >
                                            Marcia Hill, Digital Marketing
                                            Manager
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                    <div class="mt-12 sm:mt-16 lg:mt-0">
                        <div
                            class="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0"
                        >
                            <img
                                class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                                alt="Inbox user interface"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-24">
                <div
                    class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
                >
                    <div
                        class="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0"
                    >
                        <div>
                            <div>
                                <span
                                    class="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600"
                                >
                                    <!-- <SparklesIcon
                                    class="h-6 w-6 text-white"
                                    aria-hidden="true"
                                /> -->
                                </span>
                            </div>
                            <div class="mt-6">
                                <h2
                                    class="text-3xl font-bold tracking-tight text-gray-900"
                                >
                                    Better understand your customers
                                </h2>
                                <p class="mt-4 text-lg text-gray-500">
                                    Semper curabitur ullamcorper posuere nunc
                                    sed. Ornare iaculis bibendum malesuada
                                    faucibus lacinia porttitor. Pulvinar laoreet
                                    sagittis viverra duis. In venenatis sem arcu
                                    pretium pharetra at. Lectus viverra dui
                                    tellus ornare pharetra.
                                </p>
                                <div class="mt-6">
                                    <a
                                        href="#"
                                        class="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                                        >Get started</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                        <div
                            class="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0"
                        >
                            <img
                                class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                                alt="Customer profile user interface"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- CTA Section -->
        <div class="bg-white">
            <div
                class="mx-auto max-w-4xl py-16 px-4 sm:px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8"
            >
                <h2
                    class="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                    <span class="block">Ready to get started?</span>
                    <span
                        class="-mb-1 block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text pb-1 text-transparent"
                        >Get in touch or create an account.</span
                    >
                </h2>
                <div class="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
                    <a
                        href="#"
                        class="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                        >Learn more</a
                    >
                    <a
                        href="#"
                        class="flex items-center justify-center rounded-md border border-transparent bg-indigo-50 px-4 py-3 text-base font-medium text-indigo-800 shadow-sm hover:bg-indigo-100"
                        >Get started</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Autocomplete from '@/components/atom/Autocomplete.vue'
import useMapboxRepository from '@/repositories/mapbox'
import { useAuthStore } from '~~/stores/auth'
import { useRouter } from 'vue-router'

definePageMeta({
    layout: 'page'
})

const auth = useAuthStore()
const router = useRouter()

enum PetTypeRoute {
    LOST = 'lost',
    FOUND = 'found'
}

const { getGeocodingLocations } = useMapboxRepository()
const geocodingLocations = ref([])
const searchedLocation = ref('')

const onSearchedLocation = async () => {
    geocodingLocations.value = []
    geocodingLocations.value = await getGeocodingLocations(
        searchedLocation.value
    )
}

const onPetSearchClick = (petType: PetTypeRoute) => {
    try {
        if (searchedLocation.value.itemMeta) {
            const longitude = searchedLocation.value?.itemMeta?.center[0]
            const latitude = searchedLocation.value?.itemMeta?.center[1]

            auth.setLocation({
                name: searchedLocation.value.name,
                longitude,
                latitude
            })
        }

        router.push({
            path: '/pets',
            query: {
                type: petType,
                ...auth.location
            }
        })
    } catch (error) {
        console.log(error)
    }
}

watchEffect(() => onSearchedLocation())
</script>
