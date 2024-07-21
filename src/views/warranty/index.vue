<template>
    <div class="flex flex-col min-h-screen">
      <Head></Head>
    <router-view></router-view>
    <Foot/> 
    </div> 
  </template>
  <script setup>
  import Head from '@/components/head.vue'
  import Foot from '@/components/foot.vue'
  </script>