<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <footer class="bg-[#01799c] text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="4xl:max-w-9xl lg:max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
     <div>
         <img class="h-10 hidden  mb-10" src="@/assets/logo.jpeg" alt="Company name" />
        <div class="!hidden flex-col-reverse md:grid md:grid-cols-3 md:gap-8 ">
         
          <div class="mt-12 grid grid-cols-2 gap-8 md:mt-0 md:col-span-2">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold  tracking-wider uppercase">
                  Solutions
                </h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li v-for="item in navigation.solutions" :key="item.name">
                    <a :href="item.href" class="text-base font-thin  hover:text-gray-900">
                      {{ item.name }}
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-12 md:mt-0">
                <h3 class="text-sm font-semibold  tracking-wider uppercase">
                  Support
                </h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li v-for="item in navigation.support" :key="item.name">
                    <a :href="item.href" class="text-base font-thin  hover:text-gray-900">
                      {{ item.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold  tracking-wider uppercase">
                  Company
                </h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li v-for="item in navigation.company" :key="item.name">
                    <a :href="item.href" class="text-base font-thin  hover:text-gray-900">
                      {{ item.name }}
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-12 md:mt-0">
                <h3 class="text-sm font-semibold  tracking-wider uppercase">
                  Legal
                </h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li v-for="item in navigation.legal" :key="item.name">
                    <a :href="item.href" class="text-base font-thin  hover:text-gray-900">
                      {{ item.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="hidden space-y-8 xl:col-span-1 items-center md:items-end text-center md:text-right flex-col ">
            <p class=" text-base">
              Subscribe for store updates and discounts.
            </p>
            <div class="relative w-full">
            <input  type="email"  id="email" class="codeInput text-left text-[#1d1d1d] pr-10 xl:pr-[130px] !ring-0  !border-none" placeholder="Please enter your email"  aria-invalid="true" aria-describedby="name-error" />
            <div  class="warranty-common-btn absolute top-1/2 -translate-y-1/2 right-0.5 w-10 md:w-[120px] bg-[#f36819] rounded-full before:bg-[#01799c]">
              <span class=" hidden md:block relative z-10">SUBSCRIBE</span>
              <ArrowRightIcon class="md:hidden relative z-10 h-6 w-6 " />
            </div>
            </div>
            
          </div>
        </div>
        <div class="flex gap-4 text-white mt-10 justify-center md:justify-start md:mt-20">
          <a href="https://www.youtube.com/@HOMEAST" target="_blank">
            <svg  class="w-6 h-6 cursor-pointer" t="1721487187977" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6782" width="32" height="32"><path d="M512 1024a512 512 0 1 1 512-512 512.548571 512.548571 0 0 1-512 512z m0-987.428571a475.428571 475.428571 0 1 0 475.428571 475.428571 475.940571 475.940571 0 0 0-475.428571-475.428571z" fill="#ffffff" p-id="6783"></path><path d="M732.525714 324.534857a71.021714 71.021714 0 0 1 49.700572 50.249143 723.236571 723.236571 0 0 1 11.593143 137.618286 762.770286 762.770286 0 0 1-11.593143 137.142857 71.021714 71.021714 0 0 1-49.700572 50.249143 1696 1696 0 0 1-220.525714 11.739428 1633.974857 1633.974857 0 0 1-220.525714-12.214857 71.021714 71.021714 0 0 1-49.700572-50.249143 816.347429 816.347429 0 0 1 0-274.285714A72.448 72.448 0 0 1 291.474286 324.059429 1696 1696 0 0 1 512 312.32a1628.928 1628.928 0 0 1 220.562286 12.214857z m-130.011428 187.428572l-146.797715-79.396572v158.573714z" fill="#ffffff" p-id="6784"></path></svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61565986221196" target="_blank">
            <svg t="1718527009956" class="w-6 h-6 cursor-pointer" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5352" width="32" height="32"><path d="M512 64.050782c60.495816 0 119.153774 11.836583 174.345794 35.181267 53.335742 22.558785 101.245915 54.864562 142.401244 96.01989s73.461105 89.066525 96.01989 142.401244c23.344684 55.19202 35.181267 113.851001 35.181267 174.345794 0 60.494793-11.836583 119.153774-35.181267 174.345793-22.558785 53.334719-54.864562 101.245915-96.01989 142.401244s-89.066525 73.461105-142.401244 96.019891c-55.19202 23.344684-113.851001 35.181267-174.345794 35.181267s-119.153774-11.836583-174.345794-35.181267c-53.335742-22.558785-101.245915-54.864562-142.401244-96.019891S121.791857 739.679489 99.233072 686.34477c-23.344684-55.19202-35.181267-113.851001-35.181267-174.345793 0-60.495816 11.836583-119.153774 35.181267-174.345794 22.558785-53.335742 54.864562-101.245915 96.01989-142.401244s89.066525-73.461105 142.401244-96.01989c55.19202-23.344684 113.849978-35.181267 174.345794-35.181267m0-51.16531c-275.653107 0-499.114528 223.461421-499.114528 499.114528S236.346893 1011.114528 512 1011.114528s499.114528-223.461421 499.114528-499.114528S787.653107 12.885472 512 12.885472z" fill="#fff" p-id="5353"></path><path d="M450.54023 373.666398v76.873832h-61.508889v92.188632h61.508889v215.156268h92.205005V542.729885h92.222401v-92.188632h-92.206028v-61.491493c0-18.450211 12.295024-30.729885 30.697139-30.729885h61.508889V266.113847h-76.906577c-58.356083-0.001023-107.520829 49.1627-107.520829 107.552551z" fill="#fff" p-id="5354"></path></svg>
          </a>
            <a href="https://www.tiktok.com/@homeastus" target="_blank">
              <svg t="1719161880334" class="w-6 h-6 cursor-pointer" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1549" width="200" height="200"><path d="M715.710638 408.782979c-0.27234-5.991489 0-11.982979 0-17.974468-7.897872-0.27234-15.523404-0.817021-23.421276-2.451064-13.07234-2.723404-25.6-7.897872-36.765958-14.978724-0.817021-0.817021-1.361702-1.634043-2.451064-2.178723-15.251064-9.259574-27.506383-23.421277-35.676595-39.489362-5.174468-10.348936-9.531915-21.242553-11.710639-32.40851h-0.54468c-1.089362-6.808511-1.906383-13.617021-1.906383-20.425532h-80.612766c0 38.944681 0.27234 78.161702-0.272341 117.106383v204.255319c0 22.604255-12.52766 44.66383-31.591489 56.374468-19.880851 12.8-46.570213 13.889362-66.995745 2.451064-7.625532-4.629787-14.706383-10.076596-20.425532-16.885107-8.442553-9.804255-13.889362-22.059574-15.251064-34.859574-1.361702-13.07234 0.817021-26.689362 6.808511-38.67234 3.540426-7.080851 8.442553-13.07234 14.434043-18.246809 9.804255-8.170213 21.787234-13.617021 34.314893-16.340426 10.348936-2.451064 21.514894-2.451064 31.86383 1.089362v-40.306383c0-7.897872 0.27234-15.795745-0.27234-23.693617-0.27234-6.26383 0-12.52766 0-18.791489-33.497872-4.902128-68.629787 2.451064-97.497873 20.425532-19.880851 12.255319-36.765957 29.412766-49.021276 49.293617-13.344681 21.787234-20.970213 47.114894-21.514894 72.714893-0.817021 27.778723 6.26383 55.829787 20.425532 79.795745 10.621277 17.974468 24.782979 33.770213 41.940425 45.480851 0.27234 0.27234 0.817021 0.817021 1.089362 0.817021 16.068085 11.165957 34.314894 19.06383 53.378724 23.148937 13.617021 2.995745 27.506383 3.812766 41.395744 3.268085 27.234043-0.817021 54.468085-9.804255 76.52766-26.144681 17.157447-12.52766 31.046809-28.595745 41.668085-46.842553 12.255319-20.970213 19.880851-44.66383 21.514894-69.174468 0.544681-6.53617 0.27234-13.344681 0.27234-19.880852-0.27234-49.838298-0.544681-99.404255-0.544681-149.242553 32.13617 22.876596 71.353191 35.404255 110.842553 34.859575 0-20.153191 0.27234-41.123404 0-62.093617z m0 0" p-id="1550" fill="#ffffff"></path><path d="M512 1024C229.582979 1024 0 794.417021 0 512S229.582979 0 512 0s512 229.582979 512 512-229.582979 512-512 512z m0-980.425532C253.821277 43.574468 43.574468 253.821277 43.574468 512s210.246809 468.425532 468.425532 468.425532 468.425532-210.246809 468.425532-468.425532S770.178723 43.574468 512 43.574468z" fill="#ffffff" p-id="1551"></path></svg>
          </a>
          <span class="flex items-center gap-2">
            <svg t="1721559098871" class="w-6 h-6" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16508" width="32" height="32"><path d="M808.421053 403.671579a26.947368 26.947368 0 0 1 0 0.970105V619.789474a134.736842 134.736842 0 0 1-134.736842 134.736842h-323.368422A134.736842 134.736842 0 0 1 215.578947 619.789474V404.641684A134.736842 134.736842 0 0 1 350.315789 269.473684h323.368422A134.736842 134.736842 0 0 1 808.421053 403.671579z m-55.188211-13.958737A80.842105 80.842105 0 0 0 673.684211 323.368421h-323.368422a80.842105 80.842105 0 0 0-79.548631 66.344421l227.381895 136.461474a26.947368 26.947368 0 0 0 27.701894 0l227.381895-136.461474zM754.526316 451.799579l-200.919579 120.562526a80.842105 80.842105 0 0 1-83.213474 0L269.473684 451.799579V619.789474A80.842105 80.842105 0 0 0 350.315789 700.631579h323.368422a80.842105 80.842105 0 0 0 80.842105-80.842105V451.799579zM512 1024a512 512 0 1 1 0-1024 512 512 0 0 1 0 1024z m0-53.894737a458.105263 458.105263 0 1 0 0-916.210526 458.105263 458.105263 0 0 0 0 916.210526z" fill="#ffffff" p-id="16509"></path></svg> support@homeast.vip
          </span>
            </div>
     </div>
        <div class="mt-6 border-t border-gray-200/50 pt-8">
          <p class="text-base text-white text-center md:text-left">
             Copyright &copy; 2024, HOMEAST All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  </template>
  
  <script >
  import { defineComponent, h } from 'vue'
  import { ArrowRightIcon } from "@heroicons/vue/24/outline";



  const navigation = {
    solutions: [
      { name: 'Marketing', href: '#' },
      { name: 'Analytics', href: '#' },
      { name: 'Commerce', href: '#' },
      { name: 'Insights', href: '#' },
    ],
    support: [
      { name: 'Pricing', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'API Status', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    legal: [
      { name: 'Claim', href: '#' },
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
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
                d:
                  'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                'clip-rule': 'evenodd',
              }),
            ]),
        }),
      },
      {
        name: 'Instagram',
        href: '#',
        icon: defineComponent({
          render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d:
                  'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                'clip-rule': 'evenodd',
              }),
            ]),
        }),
      },
      {
        name: 'Twitter',
        href: '#',
        icon: defineComponent({
          render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                d:
                  'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
              }),
            ]),
        }),
      },
      {
        name: 'GitHub',
        href: '#',
        icon: defineComponent({
          render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d:
                  'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                'clip-rule': 'evenodd',
              }),
            ]),
        }),
      },
      {
        name: 'Dribbble',
        href: '#',
        icon: defineComponent({
          render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d:
                  'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z',
                'clip-rule': 'evenodd',
              }),
            ]),
        }),
      },
    ],
  }
  
  export default {
    setup() {
      return {
        navigation,
      }
    },
    components: {
      ArrowRightIcon
  },
  }
  </script>

  <style lang="less" scoped>
  .codeInput{
    @apply pl-3 py-3   placeholder:text-gray-400   block w-full  border-none rounded-full;
}
.warranty-common-btn{
    @apply text-white  mx-auto h-10  overflow-hidden cursor-pointer flex justify-center items-center;
    &:before{
      @apply absolute w-0 h-full left-0 transition-all rounded-full;
      content: '';
    }
    &:hover:before{
      width:100%;
    }
  }
  </style>