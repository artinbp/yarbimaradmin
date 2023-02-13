<script setup>
import VueIcon from '@/components/output/vueIcon'
import { arrow, deleteIcon, editIcon } from '@/assets/icon/icon'
import router from '@/router'
import { computed, onMounted } from 'vue'
import {toJalali} from '@/utils'
import store from '@/store'
import SetCategory from '@/components/templates/setCategory'
import ErrorPopUp from '@/components/output/errors/errorPopUp'

const products = computed(() => store.getters.getProducts)
onMounted(() => {
  if (products.value) {
    store.dispatch('generateProducts')
  }
})
const editProducts = (e) => {
  store.dispatch('generateUpdateProducts', e)
}
const deleteProducts = (e) => {
  store.dispatch('deleteCategories', e).then(() => {
    store.dispatch('generateCategories')
  })
}

let usersError = computed(() => store.getters.getCategoriesError)
const closer = () => {
  store.commit('setCategoriesError', { status: false })
}
</script>
<template>
  <error-pop-up :action="closer" v-if="usersError?.desc" :later="usersError.status" :title="usersError.title"
                :type="usersError.type" :desc="usersError.desc"/>
  <nav class="flex flex-row justify-between items-center px-8 p-4 bg-slate-600">
    <button @click="router.go(-1)" class="bg-slate-800 p-2 self-start rounded-lg shrink-0">
      <vue-icon :path="arrow" width="30" height="23" class="stroke-cyan-50" viewBox="0 0 30 23"/>
    </button>
    <div class="flex px-4 gap-4 flex-row-reverse ">
      <p class="text-blue-50 text-xl">مدیریت محصول</p>
      <set-category/>

    </div>
  </nav>
  <div class="p-8">

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm rtl text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <label class="">#</label>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">
            عکس
          </th>
          <th scope="col" class="px-6 py-3">
            عنوان
          </th>
          <th scope="col" class="px-6 py-3">
            توضیحات
          </th>
          <th scope="col" class="px-6 py-3">
            برند
          </th>
          <th scope="col" class="px-6 py-3">
           تعداد
          </th>
          <th scope="col" class="px-6 py-3">
            قیمت
          </th>
          <th scope="col" class="px-6 py-3">
           سایز
          </th>
          <th scope="col" class="px-6 py-3">
            بروز شده در
          </th>
          <th scope="col" class="px-6 py-3">
            ساخته شده در
          </th>
          <th scope="col" class="px-6 py-3">
            عملیات
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(pro, i) in products" :key="i"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <label class="">{{ i+1 }}</label>
            </div>
          </td>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <img class="w-12 h-12" :src="pro?.thumbnail_url" alt="">
          </th>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ pro?.title }}
          </th>
          <th scope="row" class="px-6 py-4 ">
            {{ pro?.description }}
          </th>
          <td class="px-6 py-4">
            {{ pro?.brand??'no have' }}
          </td>
          <td class="px-6 py-4">
            {{ pro?.stock }}
          </td>
          <td class="px-6 py-4">
            {{ pro?.price ||'no have'  }}
          </td>
          <td class="px-6 py-4">
            {{ pro?.size || 'no have'  }}
          </td>
          <td class="px-6 py-4">
            {{ toJalali(pro?.updated_at) }}
          </td>
          <td class="px-6 py-4">
            {{ toJalali(pro?.created_at) }}
          </td>
          <td class="px-6 py-4 flex flex-row gap-2">
            <button @click="editProducts(pro.id)" class="font-medium text-red-500 p-2 bg-blue-400 rounded-lg dark:text-red-500  hover:underline"> <vue-icon :path="editIcon" width="20" height="20" class="stroke-cyan-50" viewBox="0 0 20 20"/>
            </button>
            <button @click="router.push('/users/address/'+pro.id)" class="font-medium p-2 bg-emerald-400 rounded-lg  hover:underline"> <vue-icon :path="locationIcon" width="20" height="20" class="stroke-emerald-200" viewBox="0 0 20 20"/>
            </button>
            <button @click="deleteProducts(pro.id)" class="font-medium text-red-500 p-2 bg-red-200 rounded-lg dark:text-red-500 hover:underline"> <vue-icon :path="deleteIcon" width="20" height="20" class="stroke-red-500" viewBox="0 0 20 20"/>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>
