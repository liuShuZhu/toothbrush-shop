<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <!-- Global notification live region, render this permanently at the end of the document -->
      <!-- Global notification live region, render this permanently at the end of the document -->
  <div aria-live="assertive" class="fixed inset-0 flex items-center px-4 py-6 pointer-events-none sm:p-6  z-40">
    <div class="w-full flex flex-col items-center space-y-4 ">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="notifStore.config.show" class="max-w-sm min-w-24 bg-black shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="px-3 py-2">
                <p class="text-center text-base font-medium text-white">
                  {{notifStore.config.text}}
                </p>
          </div>
        </div>
      </transition>
    </div>
  </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { XMarkIcon } from '@heroicons/vue/24/solid'
  import {useNotifStore} from '@/stores/notifications'
  const notifStore = useNotifStore()

  </script>