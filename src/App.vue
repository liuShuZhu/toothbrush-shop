
<template>
  <div>
    <scroll-any v-if="counterStore.hasScrollBar"></scroll-any>
    <router-view></router-view>
    <Notific/>
  </div>
</template>
<script setup>
import Notific from '@/components/Notifications/index.vue'
import ScrollAny from '@/components/scrollAny.vue'
import {useCounterStore} from '@/stores/counter'
const counterStore = useCounterStore()
</script>
<style lang="less">
body{
  font-family: "SinkinSans",Arial, Helvetica, sans-serif!important;
}
.scroll {
  height: 270px;
  width: 500px;
  margin: 100px auto;
  overflow: hidden;
}

.scroll .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 0;
}
</style>