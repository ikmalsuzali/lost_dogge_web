<template>
    <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
        <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>
      <div class="fixed inset-0" />
      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div class="px-4 py-6 sm:px-6">
                    <div class="flex items-start justify-between">
                      <h2 id="slide-over-heading" class="text-lg font-medium text-gray-900">Profile</h2>
                      <div class="ml-3 flex h-7 items-center">
                        <button type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500" @click="open = false">
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" @click="open = false" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="pb-1 sm:pb-6">
                      <div>
                        <div class="relative h-40 sm:h-56">
                          <img class="absolute h-full w-full object-cover" src="https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=600&q=80" alt="" />
                        </div>
                        <div class="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                          <div class="sm:flex-1">
                            <div>
                              <div class="flex items-center">
                                <h3 class="text-xl font-bold text-gray-900 sm:text-2xl">Ashley Porter</h3>
                                <span class="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                                  <span class="sr-only">Online</span>
                                </span>
                              </div>
                              <p class="text-sm text-gray-500">@ashleyporter</p>
                            </div>
                            <div class="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                              <button type="button" class="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1">Message</button>
                              <button type="button" class="inline-flex w-full flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Call</button>
                              <div class="ml-3 inline-flex sm:ml-0">
                                <Menu as="div" class="relative inline-block text-left">
                                  <MenuButton class="inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <span class="sr-only">Open options menu</span>
                                    <EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true" />
                                  </MenuButton>
                                  <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                    <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                      <div class="py-1">
                                        <MenuItem v-slot="{ active }">
                                          <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">View profile</a>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active }">
                                          <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Copy profile link</a>
                                        </MenuItem>
                                      </div>
                                    </MenuItems>
                                  </transition>
                                </Menu>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
                      <dl class="space-y-8 px-4 sm:space-y-6 sm:px-6">
                        <div>
                          <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Bio</dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">
                            <p>Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean arcu.</p>
                          </dd>
                        </div>
                        <div>
                          <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Location</dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">New York, NY, USA</dd>
                        </div>
                        <div>
                          <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Website</dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">ashleyporter.com</dd>
                        </div>
                        <div>
                          <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Birthday</dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">
                            <time datetime="1988-06-23">June 23, 1988</time>
                          </dd>
                        </div>
                      </dl>
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
  <div
        class="mt-6 mx-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
    >
        <div v-for="pet in pets" :key="pet.id" class="group relative">
            <div
                class="mx-auto flex w-full flex-col justify-center bg-white rounded-2xl shadow-none shadow-slate-300/60 cursor-pointer hover:shadow-xl"
                @click="open = true"
            >
                <img
                    class="aspect-video w-full rounded-t-2xl object-cover object-center"
                    src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <div class="p-4">
                    <small class="text-blue-400 text-xs"
                        >Automobile company</small
                    >
                    <h1 class="text-2xl font-medium text-slate-600 pb-2">
                        Dodge Car
                    </h1>
                    <p
                        class="text-sm tracking-tight font-light text-slate-400 leading-6"
                    >
                        Dodge is an American brand of automobiles and a division
                        of Stellantis, based in Auburn Hills, Michigan..
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'
import useAnimalRepository from '../../repositories/animals.ts'


definePageMeta({
    layout: 'page'
})

const { getAnimalTypes, getBreedsByType } = await useAnimalRepository()
const pets = ref([])
const open = ref(true)
const animalTypes = ref([])
const filter = ref({
  animalBreedIds: [],
  animalTypeId: ''
})

const fetchTypes = async () => {
  animalTypes.value = await getAnimalTypes()
}

const breedsByType = computed(() => {
  return getBreedsByType(filter.value?.animalTypeId)
})

fetchTypes()


const getPets = () => {
    for (let i = 0; i < 1000; i++) {
        unref(pets).push({})
    }
}

getPets()
</script>