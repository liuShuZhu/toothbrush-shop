<template>
    <div class="fixed z-50 left-0 top-0 w-screen h-screen bg-black/50 flex items-center justify-center">
        <div class="rounded-full bg-[#636162] p-2 absolute top-6 right-6 z-10" @click='onClose'>
            <XMarkIcon class="h-6 w-6 text-white" />
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
  import { XMarkIcon } from "@heroicons/vue/24/outline";
import { onMounted } from "vue";
const emit = defineEmits(['close'])
  const onClose = () => {
    document.body.style.overflow = 'auto'
    emit('close')
  }
  onMounted(() => {
    document.body.style.overflow='hidden'
  })
</script>