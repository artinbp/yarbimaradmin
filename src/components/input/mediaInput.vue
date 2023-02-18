<template>
  <div class="flex text-center gap-1 items-start justify-Start flex-wrap w-full h-56 w-full">
    <label :for="props.id"
           class=" flex flex-col w-[4.5rem] h-[4.5rem] items-center justify-center  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
      <div class="flex flex-col items-center justify-center pt-5 pb-6">
        <svg aria-hidden="true" class="w-8 h-8 mb-0 mt-1 text-gray-400" fill="none" stroke="currentColor"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
        </svg>
        <p class="mb-1 text-xs text-gray-500 dark:text-gray-400"><span class="font-semibold">{{ props.placeholder }}</span></p>
        <p class="text-xs text-gray-500 dark:text-gray-400"></p>
      </div>
      <input :id="props.id" ref="base"
             accept="image/*"
             @change="onFilePicked" type="file" class="hidden"/>
    </label>
    <label :for="'img-inp'+item.id" v-for="(item,i) in bucket"
         :key="i"
         :class="[picked===item.id?'dark:border-blue-600':'dark:border-gray-600']"
         class=" flex flex-col w-[4.5rem] h-[4.5rem] items-center justify-center  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:hover:border-gray-500 dark:hover:bg-gray-600">
      <button @click="deleteMedia(item.id)" class="font-medium text-red-500 p-1 bg-red-200 absolute translate-x-[2rem] -translate-y-[2rem] rounded-lg dark:text-red-500 hover:underline"><vue-icon :path="deleteIcon" class="w-5 h-5 stroke-red-500" view-box="0 0 20 20"/></button>
      <input type="radio" :id="'img-inp'+item.id" :value="item.id" v-model="picked" hidden />
      <img :src="item.url" @click="thumbnailMedia(item.path)" class="w-full h-full rounded-lg object-cover" alt="">
    </label>
  </div>

</template>

<script setup>
import {deleteIcon} from '@/assets/icon/icon';
import { computed, defineProps, ref } from 'vue';
import store from '@/store';
import VueIcon from '@/components/output/vueIcon';

const props = defineProps({
  id: {
    type: String
  },
  placeholder: {
    type: String
  }
})
const picked = ref()
const base = ref()
const bucket = computed(()=>store.getters.getMedia)
const onFilePicked = async (e) => {
  console.log(e, base.value?.files)
  if (base.value.files) {
    const form = new FormData()
    form.append('file',base.value.files[0],base.value.files[0].name)
    await store.dispatch('appendMedia',form)
    base.value.files = []
  }
}
const deleteMedia = async (e) => {
    await store.dispatch('deleteMedia',e)
    base.value.files = []
}
const thumbnailMedia = async (e) => {
    await store.commit('setThumbnail',e)
    base.value.files = []
}

</script>

<style scoped>

</style>
