<template>
    <main>
        <div
            class="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8"
        >
            <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                <h1
                    class="max-w-2xl text-4xl font-black tracking-tight text-gray-900 sm:text-6xl"
                >
                    <span class="text-[#F96A64]">Lost your pet?</span>
                    <br /><span class="text-[#5C1511]">Bring it home!</span>
                </h1>
                <p class="mt-4 text-lg max-w-lg leading-8 text-gray-600">
                    We love our pets and we want to reunite you with yours,
                    safely. Find your lost pet or post a Lost & Found message on
                    our app. We are here to help you find your beloved little
                    friend.
                </p>
                <div class="mt-4 flex items-center gap-x-6">
                    <a
                        href="#"
                        class="rounded-md bg-[#5C1511] px-6 py-3 text-lg font-extrabold text-white shadow-sm hover:[#5C1511]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5C1511]"
                        >Get started</a
                    >
                    <a
                        href="#"
                        class="text-lg font-semibold leading-6 text-gray-700 underline decoration-wavy decoration-[#F96A64] underline-offset-4"
                        >See how it works <span aria-hidden="true">→</span></a
                    >
                </div>
            </div>
            <div
                class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow relative"
            >
                <img src="~/assets/images/logo-lost-doggo.svg" alt="" />
                <div
                    class="absolute bottom-3 bg-yellow-300 inline-flex p-2 px-4 outline-2 outline-dashed outline-[#5C1511] rounded-sm origin-bottom -rotate-6"
                >
                    <ul>
                        <li><span>Breed name:</span> <span>John Doe</span></li>
                        <li>
                            <span>Location:</span> <span>McaFFee Road, NJ</span>
                        </li>
                        <li><span>Posted:</span> <span>Just now</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'page'
})
</script>
