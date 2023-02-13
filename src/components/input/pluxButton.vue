<script setup>
import { defineProps, ref, defineEmits } from 'vue';
const props = defineProps({
  title:{
    default: 'hi'
  },
  color:{
    default: 'primary'
  },
  type:{
    default: 'square'
  },
  toggle:{
    default: false
  },
  class:{
    default: ''
  }
})
const emit = defineEmits(['action'])
let classType = ref('')
switch (props.color) {
    case 'primary':
  classType.value = 'bg-primary  text-white transition-all active:bg-primary-active active:scale-95 hover:bg-primary-hover'
  break
    case 'success':
  classType.value = 'bg-success text-white transition-all active:bg-success-active active:scale-95 hover:bg-success-hover'
  break
    case 'warning':
  classType.value = 'bg-warning text-white transition-all active:bg-warning-active active:scale-95 hover:bg-warning-hover'
  break
    case 'error':
  classType.value = 'bg-error text-white transition-all active:bg-error-active active:scale-95 hover:bg-error-hover'
  break
    case 'disable':
  classType.value = 'bg-disable text-white rounded-md cursor-default'
  break
}
const btnToggle = ref(props.toggle)

const action = (e) => {
  emit('action', e, btnToggle.value)
}
const ontoggle = (e) =>{
  if (props.color !== 'disable')
  btnToggle.value=!btnToggle.value
  action(e)
}


</script>
<template>
  <button v-if="props.type === 'square'" @click="action" :class="[classType, 'p-1 px-4 rounded-md',props.class]">
    {{ props.title }}
  </button>
  <div v-if="props.type === 'toggle'" @click="ontoggle" :class="[classType, props.class,'cursor-pointer transition-all' ,btnToggle?'h-fit p-1 pl-7 pr-1 rounded-full':'bg-disable h-fit p-1 pl-1 pr-7 rounded-full']" >
    <span class="w-4 h-4 block bg-white rounded-full left-0"></span>
  </div>
</template>
<style scoped>

</style>
