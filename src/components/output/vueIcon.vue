<template>
  <svg v-html="Props.path" :width="Props.width" :height="Props.height" :viewBox="Props.viewBox" :class="Props.class" fill="none" xmlns="http://www.w3.org/2000/svg">

  </svg>
</template>

<script setup>
import {defineProps} from 'vue';
const Props =defineProps({
  path:{
    type:String
  },
  viewBox:{
    type:String,
    default:'30 30 0 0 '
  },
  width:{
    type:String,
    default:'30'
  },
  height :{
    type:String,
    default:'30'
  },
  class :{
    type:String,
    default:'30'
  },
})
</script>

<style scoped>

</style>
