<template>
  <div class="home">
    <div class="w-[60vw] h-[80vh] mx-auto rtl mt-16 rounded-2xl  backdrop-blur-lg bg-[#2129] flex flex-wrap gap-4 justify-between p-4">
      <router-link to="/users" class="flex backdrop-blur-2xl w-[240px] flex-row items-center gap-6 h-fit rounded-2xl p-4 bg-slate-600">
        <vue-icon :path="user" width="100" class="stroke-cyan-50" height="100" viewBox="0 0 24 31" />
        <p class=" text-2xl text-blue-50 hover:text-blue-600">مدیریت کاربران</p>
      </router-link>
      <router-link to="/categories" class="flex backdrop-blur-2xl w-[240px] flex-row items-center gap-6 h-fit rounded-2xl p-4 bg-slate-600">
        <vue-icon :path="category" width="100" height="100" class="stroke-cyan-50" viewBox="0 0 86 89" fill="none" />
        <p class=" text-2xl text-blue-50 whitespace-pre-wrap hover:text-blue-600">مدیریت دسته بندی</p>
      </router-link>
      <router-link to="/diseases" class="flex backdrop-blur-2xl w-[240px] flex-row items-center gap-6 h-fit rounded-2xl p-4 bg-slate-600">
        <vue-icon :path="disasesIcon" width="100" height="100" class="stroke-cyan-50" viewBox="0 0 48 48" fill="none" />
        <p class=" text-2xl text-blue-50 whitespace-pre-wrap hover:text-blue-600">مدیریت بیماری ها</p>
      </router-link>
      <router-link to="/products" class="flex backdrop-blur-2xl w-[240px] flex-row items-center gap-6 h-fit rounded-2xl p-4 bg-slate-600">
        <vue-icon :path="productsIcon" width="100" height="100" class="stroke-cyan-50" viewBox="0 0 20 20" fill="none" />
        <p class=" text-2xl text-blue-50 whitespace-pre-wrap hover:text-blue-600">مدیریت محصولات</p>
      </router-link>
      <router-link to="/orders" class="flex backdrop-blur-2xl w-[240px] flex-row items-center gap-6 h-fit rounded-2xl p-4 bg-slate-600">
        <vue-icon :path="ordersIcon" width="100" height="100" class="stroke-cyan-50" viewBox="0 0 20 20" fill="none" />
        <p class=" text-2xl text-blue-50 whitespace-pre-wrap hover:text-blue-600">مدیریت سفارشات</p>
      </router-link>
      <router-link to="/slides" class="flex backdrop-blur-2xl w-[240px] flex-row items-center gap-6 h-fit rounded-2xl p-4 bg-slate-600">
        <vue-icon :path="caroselIcon" width="100" height="100" class="stroke-cyan-50" viewBox="0 0 20 20" fill="none" />
        <p class=" text-2xl text-blue-50 whitespace-pre-wrap hover:text-blue-600">مدیریت  اسلاید ها</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import VueIcon from '@/components/output/vueIcon';
import {user,category,disasesIcon,productsIcon,ordersIcon,caroselIcon} from  '@/assets/icon/icon.js'
</script>
