<template>
    <div :class="counterStore.hasScrollBar?'pt-28 -mt-28':'pt-16 -mt-16'">
        <slot></slot>
    </div>
</template>
<script setup>
  import {useCounterStore} from '@/stores/counter'
const counterStore = useCounterStore()
</script>
