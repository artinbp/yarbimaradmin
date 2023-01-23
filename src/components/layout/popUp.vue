<script setup>
import { computed, defineProps } from 'vue'
const props = defineProps([
  'disable',
  'close',
  'class',
])
const popup = computed(() => props.disable)

</script>
<template>
  <div class="popup" v-if="popup">
    <div class="closer" @click="props.close">
    </div>
    <div :class="props.class" >
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.popup {
  @apply fixed left-0 right-0 top-0 bottom-0 h-screen w-full overscroll-y-auto bg-[#4444] backdrop-blur-sm select-none overscroll-x-none z-20 bg-[#4440];
  .closer {
    @apply fixed left-0 right-0 top-0 bottom-0 h-screen w-screen z-10  cursor-pointer;
  }
}
</style>
