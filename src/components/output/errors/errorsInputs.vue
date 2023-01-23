<template>
  <label :for="props.for"
         class="flex flex-row justify-between items-center mb-2 text-sm font-medium text-gray-900 dark:text-white">{{
      props.text
    }} <span class=" text-red-600 text-xs">{{ errorShower(props.error,props.type)  }}</span></label>
</template>

<script setup>
import {  defineProps } from 'vue';
import {errorShower} from '@/utils';

const props = defineProps({
  text: {
    default: ''
  },
  for: {
    default: ''
  },
  type: {
    default: ''
  },
  error: {
    default: ''
  }
})
// const errors = computed(() =>props.error)
console.log(props.error)
</script>

<style scoped>

</style>
