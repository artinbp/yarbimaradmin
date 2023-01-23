<template>
  <div class="home">
    <div class="w-[70vw] h-[80vh] mx-auto  mt-16 rounded-2xl  backdrop-blur-lg bg-[#2129] flex flex-wrap gap-5 p-4">
      <router-link to="/users" class="flex backdrop-blur-2xl w-1/6 flex-col items-center gap-6 h-fit rounded-2xl p-4 bg-slate-600">
        <vue-icon :path="user" width="100" class="stroke-cyan-50" height="100" viewBox="0 0 24 31" />
        <p class=" text-2xl text-blue-50 hover:text-blue-600">user manager</p>
      </router-link>
      <router-link to="/categories" class="flex backdrop-blur-2xl w-1/6 flex-col items-center gap-6 h-fit rounded-2xl p-4 bg-slate-600">
        <vue-icon :path="category" width="100" height="100" class="stroke-cyan-50" viewBox="0 0 86 89" fill="none" />
        <p class=" text-2xl text-blue-50 whitespace-pre-wrap hover:text-blue-600">categories manager</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import VueIcon from '@/components/output/vueIcon';
import {user,category} from  '@/assets/icon/icon.js'
</script>
