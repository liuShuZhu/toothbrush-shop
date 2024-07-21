<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white/95 sticky top-0 z-30">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="mobileMenuOpen">
      <Dialog as="div" class="fixed inset-0 flex z-40 lg:hidden" @close="mobileMenuOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
          <div class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
            <div class="px-4 pt-5 pb-2 flex">
              <button type="button" class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-black" @click="mobileMenuOpen = false">
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-8 w-8" aria-hidden="true" />
              </button>
            </div>
            <div class="border-t border-gray-200 py-6 px-4 space-y-6">
              <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                <span @click="toLink(page.href)" :class="{active:pagePath.includes(page.href)}" class="mbLinkItem ">{{ page.name }}</span>
              </div>
            </div>

         
          </div>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>

    <header class="relative z-10">
      <nav aria-label="Top">
        <!-- Secondary navigation -->
        <div class="bg-white">
          <div class="border-b border-gray-200">
            <div class="w-full 4xl:max-w-9xl lg:max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="h-16 flex items-center justify-between">
                <!-- Logo (lg+) -->
                <div class="hidden lg:flex lg:flex-1 lg:items-center">
                  <a href="#">
                    <span class="sr-only">Workflow</span>
                    <img class="h-8 w-auto" src="@/assets/logo.jpeg" alt="" />
                  </a>
                </div>

                <div class="hidden h-full lg:flex">
                  <!-- Mega menus -->
                  <PopoverGroup class="ml-8">
                    <div class="h-full flex justify-center space-x-8">
                      <span @click="toLink(page.href)" v-for="page in navigation.pages" :key="page.name" :href="page.href" class="pcLinkItem" :class="{active:pagePath.includes(page.href)}">{{ page.name }}</span>
                    </div>
                  </PopoverGroup>
                </div>

                <!-- Mobile menu and search (lg-) -->
                <div class="flex-1 flex items-center lg:hidden">
                  <button type="button" class="-ml-2 bg-white p-2 rounded-md text-black" @click="mobileMenuOpen = true">
                    <span class="sr-only">Open menu</span>
                    <Bars3Icon class="h-8 w-8" aria-hidden="true" />
                  </button>
                </div>

                <!-- Logo (lg-) -->
                <a href="#" class="lg:hidden">
                  <span class="sr-only">Workflow</span>
                  <img src="@/assets/logo.jpeg" alt="" class="h-8 w-auto" />
                </a>

                <div class="flex-1 flex items-center justify-end">
                  <div class="flex items-center lg:ml-8">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter ,useRoute} from 'vue-router';
const router = useRouter();
const route = useRoute()
const pagePath = computed(()=>{
  return route.path
})
import {
  Dialog,
  DialogOverlay,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { Bars3Icon,XMarkIcon } from '@heroicons/vue/24/outline'
const mobileMenuOpen = ref(false)
const navigation = {
  pages: [
    { name: 'Product', href: '/product' },
    { name: 'Warranty', href: '/warranty' },
  ],
}
const toLink =  (path) => {
      router.push({
        path
      })
      mobileMenuOpen.value = false

    }


</script>

<style lang="less" scoped>
.mbLinkItem{
  @apply -m-2 p-2 block font-medium text-gray-900 cursor-pointer;
  &.active,&:hover,&:active{
    color:#01799c;
  }
}
.pcLinkItem{
  @apply flex relative cursor-pointer items-center text-base 4xl:text-xl font-medium text-black;
  &.active,&:hover{
    &:before{
      content:'';
      display: block;
      position: absolute;
      width:100%;
      height: 2px;
      background:#1d1d1d;
      bottom:10px
    }
  }
}
</style>