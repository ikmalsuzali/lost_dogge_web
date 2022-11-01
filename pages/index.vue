<script lang="ts" setup>
import { defineComponent, h } from 'vue'
import {
    ArrowUturnLeftIcon,
    Bars3Icon,
    ChatBubbleBottomCenterTextIcon,
    ChatBubbleLeftEllipsisIcon,
    ChatBubbleLeftRightIcon,
    DocumentChartBarIcon,
    HeartIcon,
    InboxIcon,
    PencilSquareIcon,
    QuestionMarkCircleIcon,
    SparklesIcon,
    TrashIcon,
    UsersIcon,
    XMarkIcon
} from '@heroicons/vue/24/outline'

const navigation = {
    main: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Accessibility', href: '#' },
        { name: 'Partners', href: '#' }
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                            'clip-rule': 'evenodd'
                        })
                    ])
            })
        },
        {
            name: 'Instagram',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                            'clip-rule': 'evenodd'
                        })
                    ])
            })
        },
        {
            name: 'Twitter',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'
                        })
                    ])
            })
        },
        {
            name: 'GitHub',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                            'clip-rule': 'evenodd'
                        })
                    ])
            })
        },
        {
            name: 'Dribbble',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z',
                            'clip-rule': 'evenodd'
                        })
                    ])
            })
        }
    ]
}

const heroNavigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' }
]

const solutions = [
    {
        name: 'Inbox',
        description:
            'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: InboxIcon
    },
    {
        name: 'Messaging',
        description:
            'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: ChatBubbleBottomCenterTextIcon
    },
    {
        name: 'Live Chat',
        description: "Your customers' data will be safe and secure.",
        href: '#',
        icon: ChatBubbleLeftRightIcon
    },
    {
        name: 'Knowledge Base',
        description:
            "Connect with third-party tools that you're already using.",
        href: '#',
        icon: QuestionMarkCircleIcon
    }
]
const features = [
    {
        name: 'Unlimited Inboxes',
        description:
            'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: InboxIcon
    },
    {
        name: 'Manage Team Members',
        description:
            'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: UsersIcon
    },
    {
        name: 'Spam Report',
        description:
            'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: TrashIcon
    },
    {
        name: 'Compose in Markdown',
        description:
            'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: PencilSquareIcon
    },
    {
        name: 'Team Reporting',
        description:
            'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: DocumentChartBarIcon
    },
    {
        name: 'Saved Replies',
        description:
            'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ArrowUturnLeftIcon
    },
    {
        name: 'Email Commenting',
        description:
            'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ChatBubbleLeftEllipsisIcon
    },
    {
        name: 'Connect with Customers',
        description:
            'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: HeartIcon
    }
]
const metrics = [
    {
        id: 1,
        stat: '8K+',
        emphasis: 'Companies',
        rest: 'use laoreet amet lacus nibh integer quis.'
    },
    {
        id: 2,
        stat: '25K+',
        emphasis: 'Countries around the globe',
        rest: 'lacus nibh integer quis.'
    },
    {
        id: 3,
        stat: '98%',
        emphasis: 'Customer satisfaction',
        rest: 'laoreet amet lacus nibh integer quis.'
    },
    {
        id: 4,
        stat: '12M+',
        emphasis: 'Issues resolved',
        rest: 'lacus nibh integer quis.'
    }
]

// meta
definePageMeta({
    layout: 'page'
})

// vars
// const titlesText = computed<string[]>(() => t('pages.index.title').split('[]'))
// const leadingsText = computed(() => [
//   {
//     text: titlesText.value[0],
//     startColor: '#007CF0',
//     endColor: '#00DFD8',
//     delay: 0,
//   },
//   {
//     text: titlesText.value[1],
//     startColor: '#7928CA',
//     endColor: '#FF0080',
//     delay: 2,
//   },
//   {
//     text: titlesText.value[2],
//     startColor: '#FF4D4D',
//     endColor: '#F9CB28',
//     delay: 4,
//   },
// ])
// const tooltip = ref(false)

// const
// const cancelTooltip = () => {
//   tooltip.value = false
//   const tt = document.querySelector('.tooltiptext')
//   if (tt) tt.innerHTML = `Copy to clipboard`
// }
// const copyBash = () => {
//   const bash = 'git clone https://github.com/viandwi24/nuxt3-awesome-starter'
//   navigator.clipboard.writeText(bash)
//   tooltip.value = true
//   const tt = document.querySelector('.tooltiptext')
//   if (tt) tt.innerHTML = `Copied!!!`
// }
</script>

<template>
    <!-- Hero - sign in form -->
    <section class="relative mt-20">
        <div class="container-fluid md:mx-4 mx-2">
            <div
                class="relative pt-48 pb-60 table w-full rounded-2xl shadow-md overflow-hidden"
            >
                <div class="absolute inset-0 overflow-hidden">
                    <div
                        class="image-wrap absolute -top-[350px] -bottom-[350px] -left-[100px] -right-[100px] min-w-full w-auto min-h-full h-auto overflow-hidden m-auto"
                        id="home"
                    ></div>
                </div>
                <div class="absolute inset-0 bg-black/60"></div>
                <div class="container">
                    <div class="grid grid-cols-1">
                        <div class="md:text-left text-center">
                            <h1
                                class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6"
                            >
                                Discover Most Suitable <br />
                                Properties
                            </h1>
                            <p class="text-white/70 text-xl max-w-xl">
                                Start working with Tailwind CSS that can provide
                                everything you need to generate awareness, drive
                                traffic, connect.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--end Container-->
    </section>
    <div class="container">
        <div class="grid grid-cols-1 justify-center">
            <div class="relative -mt-32">
                <div class="grid grid-cols-1">
                    <div
                        class="p-6 bg-white dark:bg-slate-900 rounded-md shadow-md dark:shadow-gray-800"
                    >
                        <form action="#">
                            <div class="registration-form text-dark text-start">
                                <div
                                    class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6"
                                >
                                    <div
                                        class="filter-search-form relative filter-border"
                                    >
                                        <i class="uil uil-search icons"></i>
                                        <input
                                            name="name"
                                            type="text"
                                            id="job-keyword"
                                            class="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                                            placeholder="Search your keaywords"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Create your account
                                    </button>
                                </div>
                                <!--end grid-->
                            </div>
                            <!--end container-->
                        </form>
                    </div>
                </div>
                <!--end grid-->
            </div>
        </div>
        <!--end grid-->
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
                                    Anim aute id magna aliqua ad ad non deserunt
                                    sunt. Qui irure qui lorem cupidatat commodo.
                                    Elit sunt amet fugiat veniam occaecat fugiat
                                    aliqua ad ad non deserunt sunt.
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
                                        <div class="flex justify-center px-1">
                                            <img
                                                class="h-9 sm:h-10"
                                                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                                                alt="Tuple"
                                            />
                                        </div>
                                        <div class="flex justify-center px-1">
                                            <img
                                                class="h-9 sm:h-10"
                                                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                                                alt="Workcation"
                                            />
                                        </div>
                                        <div class="flex justify-center px-1">
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
                                    <p class="text-xs leading-5 text-gray-500">
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
                                <InboxIcon
                                    class="h-6 w-6 text-white"
                                    aria-hidden="true"
                                />
                            </span>
                        </div>
                        <div class="mt-6">
                            <h2
                                class="text-3xl font-bold tracking-tight text-gray-900"
                            >
                                Stay on top of customer support
                            </h2>
                            <p class="mt-4 text-lg text-gray-500">
                                Semper curabitur ullamcorper posuere nunc sed.
                                Ornare iaculis bibendum malesuada faucibus
                                lacinia porttitor. Pulvinar laoreet sagittis
                                viverra duis. In venenatis sem arcu pretium
                                pharetra at. Lectus viverra dui tellus ornare
                                pharetra.
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
                                    aenean curabitur donec aliquet. Mi venenatis
                                    in euismod ut.&rdquo;
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
                                        Marcia Hill, Digital Marketing Manager
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
                                <SparklesIcon
                                    class="h-6 w-6 text-white"
                                    aria-hidden="true"
                                />
                            </span>
                        </div>
                        <div class="mt-6">
                            <h2
                                class="text-3xl font-bold tracking-tight text-gray-900"
                            >
                                Better understand your customers
                            </h2>
                            <p class="mt-4 text-lg text-gray-500">
                                Semper curabitur ullamcorper posuere nunc sed.
                                Ornare iaculis bibendum malesuada faucibus
                                lacinia porttitor. Pulvinar laoreet sagittis
                                viverra duis. In venenatis sem arcu pretium
                                pharetra at. Lectus viverra dui tellus ornare
                                pharetra.
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

    <!-- Gradient Feature Section -->
    <!-- <div class="bg-gradient-to-r from-purple-800 to-indigo-700">
          <div class="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
            <h2 class="text-3xl font-bold tracking-tight text-white">Inbox support built for efficiency</h2>
            <p class="mt-4 max-w-3xl text-lg text-purple-200">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Blandit aliquam sit nisl euismod mattis in.</p>
            <div class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
              <div v-for="feature in features" :key="feature.name">
                <div>
                  <span class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                    <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div class="mt-6">
                  <h3 class="text-lg font-medium text-white">{{ feature.name }}</h3>
                  <p class="mt-2 text-base text-purple-200">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div> -->

    <!-- Stats section -->
    <!-- <div class="relative bg-gray-900">
          <div class="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
            <div class="h-full w-full xl:grid xl:grid-cols-2">
              <div class="h-full xl:relative xl:col-start-2">
                <img class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100" alt="People working on laptops" />
                <div aria-hidden="true" class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r" />
              </div>
            </div>
          </div>
          <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
            <div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
              <h2 class="text-base font-semibold">
                <span class="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">Valuable Metrics</span>
              </h2>
              <p class="mt-3 text-3xl font-bold tracking-tight text-white">Get actionable data that will help grow your business</p>
              <p class="mt-5 text-lg text-gray-300">Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu vulputate diam sit tellus quis at.</p>
              <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                <p v-for="item in metrics" :key="item.id">
                  <span class="block text-2xl font-bold text-white">{{ item.stat }}</span>
                  <span class="mt-1 block text-base text-gray-300"
                    ><span class="font-medium text-white">{{ item.emphasis }}</span> {{ item.rest }}</span
                  >
                </p>
              </div>
            </div>
          </div>
        </div> -->

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
</template>
