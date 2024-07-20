<script setup>
import { computed } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  round: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "medium",
  },
  isPlain: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  hoverScale: {
    type: Number,
    default: 100
  }
});
let scale = computed(() => {
  return 'hover:scale-' + props.hoverScale
})
</script>

<template>
  <button class="btn-common  hover:scale-125 " :class="{
    'btn-round': round,
    ['btn-' + type]: true,
    ['btn-' + size]: true,
    'is-plain': isPlain,
  }" :disabled="disabled || loading">
    <slot name="icon">
      <svg v-if="loading" class="btn-primary-icon animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
        </path>
      </svg>
    </slot>
    <slot></slot>
  </button>
</template>

<style scoped lang = 'less'>
.btn-common {
  @apply disabled:cursor-not-allowed inline-flex items-center gap-1 rounded border transition-all;

  +.btn-common {
    @apply ml-2;
  }
}

.btn-round {
  @apply rounded-full;
}

// 类型相关样式
.btn-default {
  @apply border-[#dcdfe6] text-[#606266] hover:border-[#66b1ff] hover:bg-[#66b1ff] hover:text-white active:border-[#3a8ee6] active:text-[#3a8ee6] disabled:text-[#c0c4cc] disabled:bg-white disabled:border-[#ebeef5];

  &.is-plain {
    @apply border-[#dcdfe6] text-[#606266] bg-white hover:border-[#409eff] hover:text-[#409eff] focus:border-[#409eff] focus:text-[#409eff] active:border-[#3a8ee6] active:text-[#3a8ee6] disabled:text-[#c0c4cc] disabled:bg-white disabled:border-[#ebeef5];
  }
}

.btn-primary {
  @apply bg-[#409eff] text-white border-[#409eff] hover:border-[#66b1ff] hover:bg-[#66b1ff] focus:border-[#66b1ff] focus:bg-[#66b1ff] active:border-[#3a8ee6] active:bg-[#3a8ee6] disabled:text-white disabled:bg-[#a0cfff] disabled:border-[#a0cfff];

  &.is-plain {
    @apply bg-[#ecf5ff] text-[#409eff] border-[#b3d8ff] hover:border-[#66b1ff] hover:bg-[#66b1ff] hover:text-white focus:border-[#66b1ff] focus:bg-[#66b1ff] focus:text-white active:border-[#3a8ee6] active:bg-[#3a8ee6] active:text-white disabled:text-[#8cc5ff] disabled:bg-[#ecf5ff] disabled:border-[#d9ecff];
  }
}

.btn-success {
  @apply bg-[#67c23a] border-[#67c23a] text-white hover:bg-[#85ce61] hover:border-[#85ce61] focus:bg-[#85ce61] focus:border-[#85ce61] active:bg-[#5daf34] active:border-[#5daf34] disabled:text-white disabled:bg-[#b3e19d] disabled:border-[#b3e19d];

  &.is-plain {
    @apply bg-[#f0f9eb] text-[#67c23a] border-[#c2e7b0] hover:bg-[#85ce61] hover:border-[#85ce61] hover:text-white focus:bg-[#85ce61] focus:border-[#85ce61] focus:text-white active:bg-[#5daf34] active:border-[#5daf34] active:text-white disabled:text-[#a4da89] disabled:bg-[#f0f9eb] disabled:border-[#e1f3d8];
  }
}

.btn-info {
  @apply bg-[#909399] border-[#909399] text-white hover:bg-[#a6a9ad] hover:border-[#a6a9ad] focus:bg-[#a6a9ad] focus:border-[#a6a9ad] active:bg-[#82848a] active:border-[#82848a] disabled:text-white disabled:bg-[#c8c9cc] disabled:border-[#c8c9cc];

  &.is-plain {
    @apply bg-[#f4f4f5] text-[#909399] border-[#d3d4d6] hover:bg-[#a6a9ad] hover:border-[#a6a9ad] hover:text-white focus:bg-[#a6a9ad] focus:border-[#a6a9ad] focus:text-white active:bg-[#82848a] active:border-[#82848a] active:text-white disabled:text-[#bcbec2] disabled:bg-[#f4f4f5] disabled:border-[#e9e9eb];
  }
}

.btn-warning {
  @apply bg-[#e6a23c] border-[#e6a23c] text-white hover:bg-[#ebb563] hover:border-[#ebb563] focus:bg-[#ebb563] focus:border-[#ebb563] active:bg-[#cf9236] active:border-[#cf9236] disabled:text-white disabled:bg-[#f3d19e] disabled:border-[#f3d19e];

  &.is-plain {
    @apply bg-[#fdf6ec] text-[#e6a23c] border-[#f5dab1] hover:bg-[#ebb563] hover:border-[#ebb563] hover:text-white focus:bg-[#ebb563] focus:border-[#ebb563] focus:text-white active:bg-[#cf9236] active:border-[#cf9236] active:text-white disabled:text-[#f0c78a] disabled:bg-[#fdf6ec] disabled:border-[#faecd8];
  }
}

.btn-danger {
  @apply bg-[#f56c6c] border-[#f56c6c] text-white hover:bg-[#f78989] hover:border-[#f78989] focus:bg-[#f78989] focus:border-[#f78989] active:bg-[#dd6161] active:border-[#dd6161] disabled:text-white disabled:bg-[#fab6b6] disabled:border-[#fab6b6];

  &.is-plain {
    @apply bg-[#fef0f0] text-[#f56c6c] border-[#fbc4c4] hover:bg-[#f78989] hover:border-[#f78989] hover:text-white focus:bg-[#f78989] focus:border-[#f78989] focus:text-white active:bg-[#dd6161] active:border-[#dd6161] active:text-white disabled:text-[#f9a7a7] disabled:bg-[#fef0f0] disabled:border-[#fde2e2];
  }
}

.btn-text {
  @apply bg-transparent border-transparent text-[#409eff] hover:bg-transparent hover:border-transparent hover:text-[#66b1ff] focus:bg-transparent focus:border-transparent focus:text-[#66b1ff] active:bg-transparent active:border-transparent active:text-[#3a8ee6] disabled:text-[#c0c4cc] disabled:bg-transparent disabled:border-transparent;
}

.btn-primary-icon {}

// 大小相关样式
.btn-mini {
  @apply px-3 py-1 text-xs;

  .btn-primary-icon {
    @apply w-3 h-3;
  }
}

.btn-small {
  @apply px-3 py-2 text-xs;

  .btn-primary-icon {
    @apply w-3 h-3;
  }
}

.btn-medium {
  @apply px-4 py-2 text-base;

  .btn-primary-icon {
    @apply w-4 h-4;
  }
}

.btn-large {
  @apply px-5 py-2 text-xl;

  .btn-primary-icon {
    @apply w-5 h-5;
  }
}
</style>