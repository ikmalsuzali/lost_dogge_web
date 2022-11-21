<template>
    <div class="w-full h-screen">
        <div class="flex h-full">
            <div class="flex-1 bg-gray-100 w-full h-full">
                <div class="main-body container h-full flex flex-col">
                    <div class="main flex-1 flex flex-col">
                        <!-- <div class="hidden lg:block heading flex-2">
                            <h1 class="text-3xl text-gray-700 mb-4">Chat</h1>
                        </div> -->

                        <div class="flex-1 flex h-full">
                            <div
                                class="sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-6 h-[calc(100vh-40px)]"
                            >
                                <!-- <div class="search flex-2 pb-6 px-2">
                                    <input
                                        type="text"
                                        class="outline-none py-2 block w-full bg-transparent border-b-2 border-gray-200"
                                        placeholder="Search"
                                    />
                                </div> -->
                                <div class="flex-1 h-full overflow-auto px-2">
            
                                    <div
                                        v-for="(pet, index) in petMatches"
                                        :key="index"
                                    >
                                        <div
                                            class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md"
                                        >
                                            <div class="flex-2">
                                                <div class="w-12 h-12 relative">
                                                    <img
                                                        class="w-12 h-12 rounded-full mx-auto"
                                                        src="../resources/profile-image.png"
                                                        alt="chat-user"
                                                    />
                                                    <span
                                                        class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"
                                                    ></span>
                                                </div>
                                            </div>
                                            <div class="flex-1 px-2">
                                                <div class="truncate w-32">
                                                    <span class="text-gray-800"
                                                        >Karp Bonolo</span
                                                    >
                                                </div>
                                                <div>
                                                    <small class="text-gray-600"
                                                        >Yea, Sure!</small
                                                    >
                                                </div>
                                            </div>
                                            <div class="flex-2 text-right">
                                                <div>
                                                    <small class="text-gray-500"
                                                        >15 April</small
                                                    >
                                                </div>
                                                <div>
                                                    <small
                                                        class="text-xs bg-red-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block"
                                                    >
                                                        10
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md border-l-4 border-red-500"
                                    >
                                        <div class="flex-2">
                                            <div class="w-12 h-12 relative">
                                                <img
                                                    class="w-12 h-12 rounded-full mx-auto"
                                                    src="../resources/profile-image.png"
                                                    alt="chat-user"
                                                />
                                                <span
                                                    class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"
                                                ></span>
                                            </div>
                                        </div>
                                        <div class="flex-1 px-2">
                                            <div class="truncate w-32">
                                                <span class="text-gray-800"
                                                    >Mercedes Yemelyan</span
                                                >
                                            </div>
                                            <div>
                                                <small class="text-gray-600"
                                                    >Yea, Sure!</small
                                                >
                                            </div>
                                        </div>
                                        <div class="flex-2 text-right">
                                            <div>
                                                <small class="text-gray-500"
                                                    >15 April</small
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md"
                                    >
                                        <div class="flex-2">
                                            <div class="w-12 h-12 relative">
                                                <img
                                                    class="w-12 h-12 rounded-full mx-auto"
                                                    src="../resources/profile-image.png"
                                                    alt="chat-user"
                                                />
                                                <span
                                                    class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"
                                                ></span>
                                            </div>
                                        </div>
                                        <div class="flex-1 px-2">
                                            <div class="truncate w-32">
                                                <span class="text-gray-800"
                                                    >Cadi Kajetán</span
                                                >
                                            </div>
                                            <div>
                                                <small class="text-gray-600"
                                                    >Yea, Sure!</small
                                                >
                                            </div>
                                        </div>
                                        <div class="flex-2 text-right">
                                            <div>
                                                <small class="text-gray-500"
                                                    >15 April</small
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md"
                                    >
                                        <div class="flex-2">
                                            <div class="w-12 h-12 relative">
                                                <img
                                                    class="w-12 h-12 rounded-full mx-auto"
                                                    src="../resources/profile-image.png"
                                                    alt="chat-user"
                                                />
                                                <span
                                                    class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"
                                                ></span>
                                            </div>
                                        </div>
                                        <div class="flex-1 px-2">
                                            <div class="truncate w-32">
                                                <span class="text-gray-800"
                                                    >Rina Samuel</span
                                                >
                                            </div>
                                            <div>
                                                <small class="text-gray-600"
                                                    >Yea, Sure!</small
                                                >
                                            </div>
                                        </div>
                                        <div class="flex-2 text-right">
                                            <div>
                                                <small class="text-gray-500"
                                                    >15 April</small
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="chat-area flex-1 flex flex-col h-[calc(100vh-40px)]"
                            >
                                <div class="flex-3">
                                    <h2
                                        class="text-xl py-1 mb-8 border-b-2 border-gray-200"
                                    >
                                        Chatting with <b>Mercedes Yemelyan</b>
                                    </h2>
                                </div>
                                <div class="messages flex-1 overflow-auto">
                                    <div class="message mb-4 flex">
                                        <div class="flex-2">
                                            <div class="w-12 h-12 relative">
                                                <img
                                                    class="w-12 h-12 rounded-full mx-auto"
                                                    src="../resources/profile-image.png"
                                                    alt="chat-user"
                                                />
                                                <span
                                                    class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"
                                                ></span>
                                            </div>
                                        </div>
                                        <div class="flex-1 px-2">
                                            <div
                                                class="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700"
                                            >
                                                <span
                                                    >Hey there. We would like to
                                                    invite you over to our
                                                    office for a visit. How
                                                    about it?</span
                                                >
                                            </div>
                                            <div class="pl-4">
                                                <small class="text-gray-500"
                                                    >15 April</small
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="message mb-4 flex">
                                        <div class="flex-2">
                                            <div class="w-12 h-12 relative">
                                                <img
                                                    class="w-12 h-12 rounded-full mx-auto"
                                                    src="../resources/profile-image.png"
                                                    alt="chat-user"
                                                />
                                                <span
                                                    class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"
                                                ></span>
                                            </div>
                                        </div>
                                        <div class="flex-1 px-2">
                                            <div
                                                class="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700"
                                            >
                                                <span
                                                    >All travel expenses are
                                                    covered by us of course
                                                    :D</span
                                                >
                                            </div>
                                            <div class="pl-4">
                                                <small class="text-gray-500"
                                                    >15 April</small
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="message me mb-4 flex text-right"
                                    >
                                        <div class="flex-1 px-2">
                                            <div
                                                class="inline-block bg-blue-600 rounded-full p-2 px-6 text-white"
                                            >
                                                <span
                                                    >It's like a dream come
                                                    true</span
                                                >
                                            </div>
                                            <div class="pr-4">
                                                <small class="text-gray-500"
                                                    >15 April</small
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="message me mb-4 flex text-right"
                                    >
                                        <div class="flex-1 px-2">
                                            <div
                                                class="inline-block bg-blue-600 rounded-full p-2 px-6 text-white"
                                            >
                                                <span
                                                    >I accept. Thank you very
                                                    much.</span
                                                >
                                            </div>
                                            <div class="pr-4">
                                                <small class="text-gray-500"
                                                    >15 April</small
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="message me mb-4 flex text-right"
                                    >
                                        <div class="flex-1 px-2">
                                            <div
                                                class="inline-block bg-blue-600 rounded-full p-2 px-6 text-white"
                                            >
                                                <span
                                                    >I accept. Thank you very
                                                    much.</span
                                                >
                                            </div>
                                            <div class="pr-4">
                                                <small class="text-gray-500"
                                                    >15 April</small
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="message me mb-4 flex text-right"
                                    >
                                        <div class="flex-1 px-2">
                                            <div
                                                class="inline-block bg-blue-600 rounded-full p-2 px-6 text-white"
                                            >
                                                <span
                                                    >I accept. Thank you very
                                                    much.</span
                                                >
                                            </div>
                                            <div class="pr-4">
                                                <small class="text-gray-500"
                                                    >15 April</small
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="message me mb-4 flex text-right"
                                    >
                                        <div class="flex-1 px-2">
                                            <div
                                                class="inline-block bg-blue-600 rounded-full p-2 px-6 text-white"
                                            >
                                                <span
                                                    >I accept. Thank you very
                                                    much.</span
                                                >
                                            </div>
                                            <div class="pr-4">
                                                <small class="text-gray-500"
                                                    >15 April</small
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="message me mb-4 flex text-right"
                                    >
                                        <div class="flex-1 px-2">
                                            <div
                                                class="inline-block bg-blue-600 rounded-full p-2 px-6 text-white"
                                            >
                                                <span
                                                    >I accept. Thank you very
                                                    much.</span
                                                >
                                            </div>
                                            <div class="pr-4">
                                                <small class="text-gray-500"
                                                    >15 April</small
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="message me mb-4 flex text-right"
                                    >
                                        <div class="flex-1 px-2">
                                            <div
                                                class="inline-block bg-blue-600 rounded-full p-2 px-6 text-white"
                                            >
                                                <span
                                                    >I accept. Thank you very
                                                    much.</span
                                                >
                                            </div>
                                            <div class="pr-4">
                                                <small class="text-gray-500"
                                                    >15 April</small
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="message me mb-4 flex text-right"
                                    >
                                        <div class="flex-1 px-2">
                                            <div
                                                class="inline-block bg-blue-600 rounded-full p-2 px-6 text-white"
                                            >
                                                <span
                                                    >I accept. Thank you very
                                                    much.</span
                                                >
                                            </div>
                                            <div class="pr-4">
                                                <small class="text-gray-500"
                                                    >15 April</small
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="message mb-4 flex">
                                        <div class="flex-2">
                                            <div class="w-12 h-12 relative">
                                                <img
                                                    class="w-12 h-12 rounded-full mx-auto"
                                                    src="../resources/profile-image.png"
                                                    alt="chat-user"
                                                />
                                                <span
                                                    class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"
                                                ></span>
                                            </div>
                                        </div>
                                        <div class="flex-1 px-2">
                                            <div
                                                class="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700"
                                            >
                                                <span
                                                    >You are welome. We will
                                                    stay in touch.</span
                                                >
                                            </div>
                                            <div class="pl-4">
                                                <small class="text-gray-500"
                                                    >15 April</small
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-2 pt-4 pb-10">
                                    <div class="write bg-white flex rounded-lg">
                                        <div class="flex-1">
                                            <textarea
                                                autofocus
                                                name="message"
                                                rows="1"
                                                placeholder="Type a message..."
                                                class="block w-full py-4 px-4 border-transparent rounded-l-lg outline-none shadow-sm sm:text-sm resize-none"
                                            ></textarea>
                                        </div>
                                        <div
                                            class="flex-2 w-32 p-2 flex content-center items-center"
                                        >
                                            <div class="flex-1 text-center">
                                                <span
                                                    class="text-gray-400 hover:text-gray-800"
                                                >
                                                    <span
                                                        class="inline-block align-text-bottom"
                                                    >
                                                        <svg
                                                            fill="none"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            class="w-6 h-6"
                                                        >
                                                            <path
                                                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                                            ></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="flex-1">
                                                <button
                                                    class="bg-blue-400 w-10 h-10 rounded-full inline-block"
                                                >
                                                    <span
                                                        class="inline-block align-text-bottom"
                                                    >
                                                        <svg
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            viewBox="0 0 24 24"
                                                            class="w-4 h-4 text-white"
                                                        >
                                                            <path
                                                                d="M5 13l4 4L19 7"
                                                            ></path>
                                                        </svg>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import usePetRepository from '~/repositories/pets'
import { usePetStore } from '~~/stores/pet'
import { PetMatchPossibleType } from '~~/types'

const { getMyPetMatches } = usePetRepository()
const petStore = usePetStore()

definePageMeta({
    layout: 'dashboard',
    middleware: 'auth'
})

const petMatches = ref([])

const fetchMyPetMatches = async () => {
    try {
        petMatches.value = await getMyPetMatches(petStore.myPetIds, [
            PetMatchPossibleType.MATCH,
            PetMatchPossibleType.POSSIBLE
        ])
    } catch (error) {
        console.log(error)
    }
}

fetchMyPetMatches()
</script>
