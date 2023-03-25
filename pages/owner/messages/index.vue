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
                                        v-for="(petMatch, index) in petMatches"
                                        :key="index"
                                    >
                                        <div
                                            class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 shadow-md flex"
                                            :class="{
                                                'border-l-4 border-green-500':
                                                    petMatch.id ===
                                                    selectedPetMatch?.id
                                            }"
                                            @click="onSelectedPet(petMatch)"
                                        >
                                            <div
                                                class="w-12 h-12 max-w-sm rounded-lg"
                                            >
                                                <Carousel :items-to-show="1">
                                                    <Slide
                                                        v-for="(
                                                            image, imageIndex
                                                        ) in petMatch
                                                            ?.found_pet_id
                                                            .pet_images"
                                                        :key="imageIndex"
                                                    >
                                                        <img
                                                            class="aspect-square w-full object-fit object-center rounded-lg"
                                                            :src="image.url"
                                                        />
                                                    </Slide>
                                                </Carousel>
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
                                    <div
                                        v-for="(chat, index) in chatLists"
                                        :key="index"
                                    >
                                        <div
                                            v-if="!chatPerspective(chat)"
                                            class="message mb-4 flex"
                                        >
                                            <div class="flex-1 px-2">
                                                <div
                                                    class="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700"
                                                >
                                                    <span>{{
                                                        chat.content
                                                    }}</span>
                                                </div>
                                                <div class="pl-4">
                                                    <small class="text-gray-500"
                                                        >15 April</small
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            v-else
                                            class="message me mb-4 flex text-right"
                                        >
                                            <div class="flex-1 px-2">
                                                <div
                                                    class="inline-block bg-blue-600 rounded-full p-2 px-6 text-white"
                                                >
                                                    <span>{{
                                                        chat.content
                                                    }}</span>
                                                </div>
                                                <div class="pr-4">
                                                    <small class="text-gray-500"
                                                        >15 April</small
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-2 pt-4 pb-10">
                                    <div class="write flex rounded-lg">
                                        <div class="flex-1">
                                            <textarea
                                                v-model="message"
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
                                                        class="inline-block align-text-center"
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
                                                    class="bg-blue-400 w-10 h-10 rounded-full inline-block hover:blue-400"
                                                    @click="onMessageSubmit"
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
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const { getMyPetMatches, getPetChatLists, createNewMessage, onNewMessage } =
    usePetRepository()
const petStore = usePetStore()

definePageMeta({
    layout: 'dashboard',
    middleware: 'auth'
})

const petMatches = ref([])
const selectedPetMatch = ref({
    id: ''
})
const chatLists = ref([])
const message = ref()
const isOwner = false

const chatPerspective = chat => {
    return chat.lost_pet_id?.includes(petStore.myPetIds)
}

const ownerPet = computed(() => {
    return isOwner
        ? selectedPetMatch.value?.lost_pet_id
        : selectedPetMatch.value?.found_pet_id
})

const fetchMyPetMatches = async () => {
    try {
        petMatches.value = await getMyPetMatches(petStore.myPetIds, [
            PetMatchPossibleType.MATCH,
            PetMatchPossibleType.POSSIBLE,
            PetMatchPossibleType.PENDING
        ])
    } catch (error) {}
}

const fetchChatList = async () => {
    try {
        chatLists.value = await getPetChatLists(selectedPetMatch.value?.id)
    } catch (error) {}
}

const onSelectedPet = async petMatch => {
    selectedPetMatch.value = petMatch
    await fetchChatList()
    onNewMessage(newMessage => {
        chatLists.value = [newMessage, ...chatLists.value]
    }, petMatch.id)
}

const onMessageSubmit = async () => {
    try {
        if (!message.value) return
        await createNewMessage(
            selectedPetMatch.value.id,
            ownerPet.value.id,
            message.value,
            isOwner
        )
        message.value = ''
    } catch (error) {}
}

fetchMyPetMatches()
</script>
