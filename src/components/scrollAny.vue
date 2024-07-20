
<script setup>
</script>
<template>
  <div class="scrollBox">
    <Vue3Marquee pauseOnHover :duration="40">
    <span class="scrollItem" v-for="(item,i) in list" :key='i'>{{item}}</span>
  </Vue3Marquee>
  </div>
</template>
<script setup>
import { ref } from "vue"
import { Vue3Marquee } from 'vue3-marquee'
const list = ref([
    'Free Shipping Sitewide','Extra 10% Off with code : CL10',
    'Free Shipping Sitewide','Extra 10% Off with code : CL10',
    'Free Shipping Sitewide','Extra 10% Off with code : CL10',
    'Free Shipping Sitewide','Extra 10% Off with code : CL10',
    'Free Shipping Sitewide','Extra 10% Off with code : CL10',
    'Free Shipping Sitewide','Extra 10% Off with code : CL10',
    'Free Shipping Sitewide','Extra 10% Off with code : CL10',
    'Free Shipping Sitewide','Extra 10% Off with code : CL10',
    'Free Shipping Sitewide','Extra 10% Off with code : CL10',
    ]);
</script>
<style lang="less" scoped>
.scrollBox{
    @apply relative z-20;
background: linear-gradient(90deg, rgba(161, 225, 210, 1), rgba(40, 195, 197, 1) 6.7%, rgba(40, 195, 197, 1) 87%, rgba(119, 201, 169, 1) 100%);
    .scrollItem{
        @apply px-5 text-white flex h-12 items-center;
    }
}
</style>