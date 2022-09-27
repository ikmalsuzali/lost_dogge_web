<template>
  <div class="bg-white">
    <!-- Pricing with four tiers and toggle -->
    <div class="bg-gradient-to-b from-white to-gray-50">
      <div class="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <div class="sm:align-center sm:flex sm:flex-col">
          <h1
            class="text-5xl font-bold tracking-tight text-gray-900 sm:text-center"
          >
            Pricing Plans
          </h1>
          <p class="mt-5 text-xl text-gray-500 sm:text-center">
            Start building for free, then add a site plan to go live. Account
            plans unlock additional features.
          </p>
          <div
            class="relative mt-6 flex self-center rounded-lg bg-gray-100 p-0.5 sm:mt-8"
          >
            <button
              type="button"
              class="relative w-1/2 whitespace-nowrap rounded-md border-gray-200 bg-white py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-purple-500 sm:w-auto sm:px-8"
            >
              Monthly billing
            </button>
            <button
              type="button"
              class="relative ml-0.5 w-1/2 whitespace-nowrap rounded-md border border-transparent py-2 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-purple-500 sm:w-auto sm:px-8"
            >
              Yearly billing
            </button>
          </div>
        </div>
        <div
          class="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4"
        >
          <div
            v-for="tier in tiers"
            :key="tier.name"
            class="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm"
          >
            <div class="p-6">
              <h2 class="text-lg font-medium leading-6 text-gray-900">
                {{ tier.name }}
              </h2>
              <p class="mt-4 text-sm text-gray-500">{{ tier.description }}</p>
              <p class="mt-8">
                <span class="text-4xl font-bold tracking-tight text-gray-900"
                  >${{ tier.priceMonthly }}</span
                >
                {{ " " }}
                <span class="text-base font-medium text-gray-500">/mo</span>
              </p>
              <a
                :href="tier.href"
                class="mt-8 block w-full rounded-md border border-transparent bg-purple-600 py-2 text-center text-sm font-semibold text-white hover:bg-purple-700"
                >Buy {{ tier.name }}</a
              >
            </div>
            <div class="px-6 pt-6 pb-8">
              <h3 class="text-sm font-medium text-gray-900">What's included</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li
                  v-for="feature in tier.features"
                  :key="feature"
                  class="flex space-x-3"
                >
                  <CheckIconMini
                    class="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span class="text-sm text-gray-500">{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Feature list -->
      <div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900">
            All-in-one platform
          </h2>
          <p class="mt-4 text-lg text-gray-500">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p>
        </div>
        <dl
          class="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8"
        >
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <CheckIconOutline
                class="absolute h-6 w-6 text-green-500"
                aria-hidden="true"
              />
              <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                {{ feature.name }}
              </p>
            </dt>
            <dd class="mt-2 ml-9 flex text-base text-gray-500 lg:py-0 lg:pb-4">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <!-- Logo cloud on brand -->
    <div class="bg-purple-600">
      <div class="mx-auto max-w-7xl py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <div class="lg:space-y-10">
          <h2 class="text-3xl font-bold tracking-tight text-white">
            The world's most innovative companies use our app
          </h2>
          <div class="mt-8 flow-root lg:mt-0">
            <div class="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
              <div
                v-for="logo in logos"
                :key="logo.name"
                class="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0"
              >
                <img class="h-12" :src="logo.url" :alt="logo.name" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ offset -->
    <div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
      <div class="lg:grid lg:grid-cols-3 lg:gap-8">
        <div class="space-y-4">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <p class="text-lg text-gray-500">
            Can’t find the answer you’re looking for? Reach out to our
            <a
              href="#"
              class="font-medium text-purple-600 hover:text-purple-500"
              >customer support</a
            >
            team.
          </p>
        </div>
        <div class="mt-12 lg:col-span-2 lg:mt-0">
          <dl class="space-y-12">
            <div v-for="faq in faqs" :key="faq.id">
              <dt class="text-lg font-medium leading-6 text-gray-900">
                {{ faq.question }}
              </dt>
              <dd class="mt-2 text-base text-gray-500">{{ faq.answer }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
    import { capitalize } from '~/utils/str'
    
    
    const tiers = [
      {
        name: 'Hobby',
        href: '#',
        priceMonthly: 12,
        description: 'All the basics for starting a new business',
        features: ['Potenti felis, in cras at at ligula nunc.', 'Orci neque eget pellentesque.'],
      },
      {
        name: 'Freelancer',
        href: '#',
        priceMonthly: 24,
        description: 'All the basics for starting a new business',
        features: [
          'Potenti felis, in cras at at ligula nunc. ',
          'Orci neque eget pellentesque.',
          'Donec mauris sit in eu tincidunt etiam.',
        ],
      },
      {
        name: 'Startup',
        href: '#',
        priceMonthly: 32,
        description: 'All the basics for starting a new business',
        features: [
          'Potenti felis, in cras at at ligula nunc. ',
          'Orci neque eget pellentesque.',
          'Donec mauris sit in eu tincidunt etiam.',
          'Faucibus volutpat magna.',
        ],
      },
      {
        name: 'Enterprise',
        href: '#',
        priceMonthly: 48,
        description: 'All the basics for starting a new business',
        features: [
          'Potenti felis, in cras at at ligula nunc. ',
          'Orci neque eget pellentesque.',
          'Donec mauris sit in eu tincidunt etiam.',
          'Faucibus volutpat magna.',
          'Id sed tellus in varius quisque.',
          'Risus egestas faucibus.',
          'Risus cursus ullamcorper.',
        ],
      },
    ]
    const features = [
      {
        name: 'Invite team members',
        description: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
      },
      {
        name: 'Notifications',
        description: 'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.',
      },
      {
        name: 'List view',
        description: 'Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.',
      },
      {
        name: 'Boards',
        description: 'Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.',
      },
      {
        name: 'Keyboard shortcuts',
        description: 'Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.',
      },
      {
        name: 'Reporting',
        description: 'Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.',
      },
      {
        name: 'Calendars',
        description: 'Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.',
      },
      {
        name: 'Mobile app',
        description: 'Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.',
      },
    ]
    const logos = [
      { name: 'Tuple', url: 'https://tailwindui.com/img/logos/tuple-logo-purple-200.svg' },
      { name: 'Mirage', url: 'https://tailwindui.com/img/logos/mirage-logo-purple-200.svg' },
      { name: 'StaticKit', url: 'https://tailwindui.com/img/logos/statickit-logo-purple-200.svg' },
      { name: 'Transistor', url: 'https://tailwindui.com/img/logos/transistor-logo-purple-200.svg' },
      { name: 'Workcation', url: 'https://tailwindui.com/img/logos/workcation-logo-purple-200.svg' },
    ]
    const faqs = [
      {
        id: 1,
        question: 'How do you make holy water?',
        answer:
          'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
      },
      {
        id: 2,
        question: "What's the best thing about Switzerland?",
        answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
      {
        id: 3,
        question: 'What do you call someone with no body and no nose?',
        answer: 'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
      },
      {
        id: 4,
        question: 'Why do you never see elephants hiding in trees?',
        answer:
          "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
    ]
    
    // compiler macro
    definePageMeta({
      layout: 'page',
    })
    useHead(() => ({
      title: 'Pricing',
      meta: [
        {
          name: 'description',
          content: '',
        },
      ],
    }))
    </script>
    