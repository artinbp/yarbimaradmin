<template>

  <div class="flex flex-row pt-10 px-28">
    <div v-if="banner?.title" style="transition: 1s" class="flex w-[100vw] h-[70vh] flex-row transition-all">
      <img :alt="banner?.title" class="w-[100%] h-[70vh] rounded-2xl" style="transition: 1s" :src="banner?.url"/>
      <div class="flex absolute flex-col bg-slate-200 bottom-[20vh] left-28 w-[40vw] rounded-r-3xl p-4 px-3">
        <p class="mt-5 text-2xl font-semibold rtl">{{ banner?.title }}</p>
        <span class="flex flex-row justify-between rtl"> {{ banner?.description }}</span>
        <div class="flex flex-row gap-2">
          <router-link class="bg-blue-600 p-3 text-white rounded-md" :to="`/product/${banner?.id}`">مشاهده محصول</router-link>
        </div>
      </div>
    </div>
    <div class="flex flex-col absolute justify-between w-[10vw] h-[60vh] right-6 p-5 gap-2 mx-[6vw]">
      <button @click="setBanner(pro.id)" v-for="(pro,i) in banners" :key="pro"
              class="flex flex-row-reverse justify-between ease-in-out">
        <img :alt="pro.title" class="w-[6vw] h-[6vw] shadow-[#aaa6] shadow-md transition-all during-1000 ease-in-out rounded-lg" :class="[counter===i?'filter grayscale-0':'filter grayscale scale-90']" style="transition: 1s;object-fit: cover ; object-position: center"
             :src="pro.url">
      </button>
    </div>
  </div>

</template>

<script setup>
import store from '@/store';
import { computed, ref } from 'vue';

let images = computed(() => store.getters.getBanners)
const counter = ref(0)
const banners = ref(images.value.slice(0, 5))
const banner = ref(images.value.slice(0, 5)[counter.value])
const setBanner = (e) => {

  banner.value = banners.value.filter((item) => {
    if (item.id === e) counter.value = banners.value.indexOf(item)
    return item.id === e
  })[0]
}
setInterval(() => {
  if ((counter.value + 1) < banners.value.length) {
    counter.value += 1
  } else {
    counter.value = 0
  }
  banner.value = images.value.slice(0, 5)[counter.value]
}, 5000)
</script>

<style scoped>

</style>
