<script setup>
import { useRoute } from 'vue-router';
import VueIcon from '@/components/output/vueIcon';
import { arrow, deleteIcon, editIcon } from '@/assets/icon/icon';
import router from '@/router';
import { computed, onMounted } from 'vue';
import store from '@/store';
import ErrorPopUp from '@/components/output/errors/errorPopUp'
import { toJalali } from '@/utils';
import SetAddress from '@/components/templates/setAddress';
import EditAddress from '@/components/templates/editAddress'

const route = useRoute()
const address = computed(() => store.getters.getAddress)
onMounted(() => {
  if (address.value) {
    console.log(address.value)
    store.dispatch('generateAddress', route.params.id)
  }
})
const deleteAddress = (e) => {
  store.dispatch('deleteAddress', { id: route.params.id, data: e }).then(() => {
    store.dispatch('generateAddress', route.params.id)
  })
}
const editAddress = (e) => {
  store.dispatch('generateUpdateAddress', { id: route.params.id, data: e })
}

let usersError = computed(() => store.getters.getCategoriesError)
const closer = () => {
  store.commit('setCategoriesError', { status: false })
}
</script>
<template>
  <EditAddress/>
  <error-pop-up :action="closer" v-if="usersError?.desc" :later="usersError.status" :title="usersError.title"
                :type="usersError.type" :desc="usersError.desc"/>
  <nav class="flex flex-row justify-between items-center px-8 p-4 bg-slate-600">
    <button @click="router.go(-1)" class="bg-slate-800 p-2 self-start rounded-lg shrink-0">
      <vue-icon :path="arrow" width="30" height="23" class="stroke-cyan-50" viewBox="0 0 30 23"/>
    </button>
    <div class="flex px-4 gap-4 flex-row-reverse ">
      <p class="text-blue-50 text-xl">مدیریت آدرس ها</p>
      <set-address/>

    </div>
  </nav>
  <div class="p-8">

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full rtl text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <label class="">#</label>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">
            نام گیرنده
          </th>
          <th scope="col" class="px-6 py-3">
            استان
          </th>
          <th scope="col" class="px-6 py-3">
            شهر
          </th>
          <th scope="col" class="px-6 py-3">
            آدرس
          </th>
          <th scope="col" class="px-6 py-3">
            کد پستی
          </th>
          <th scope="col" class="px-6 py-3">
            شماره واحد
          </th>
          <th scope="col" class="px-6 py-3">
            شماره پلاک
          </th>
          <th scope="col" class="px-6 py-3">
            بروز شده در
          </th>
          <th scope="col" class="px-6 py-3">
            ساخته شده در
          </th>
          <th scope="col" class="px-6 py-3">
            عملیات ها
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(adrs, i) in address" :key="i"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <label class="">{{ adrs?.id }}</label>
            </div>
          </td>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ adrs?.receiver_first_name + ' ' + adrs?.receiver_last_name }}
          </th>
          <th scope="row" class="px-6 py-4 ">
            {{ adrs?.state }}
          </th>
          <td class="px-6 py-4">
            {{ adrs?.city ?? 'no have' }}
          </td>
          <td class="px-6 py-4">
            {{ adrs?.address }}
          </td>
          <td class="px-6 py-4">
            {{ adrs?.zip_code || 'no have' }}
          </td>
          <td class="px-6 py-4">
            {{ adrs?.unit_number || 'no have' }}
          </td>
          <td class="px-6 py-4">
            {{ adrs?.building_number || 'no have' }}
          </td>
          <td class="px-6 py-4">
            {{ toJalali(adrs?.updated_at) }}
          </td>
          <td class="px-6 py-4">
            {{ toJalali(adrs?.created_at) }}
          </td>
          <td class="px-6 py-4 flex flex-row gap-2">
            <button @click="editAddress(adrs.id)"
                    class="font-medium text-red-500 p-2 bg-blue-400 rounded-lg dark:text-red-500  hover:underline">
              <vue-icon :path="editIcon" width="20" height="20" class="stroke-cyan-50" viewBox="0 0 20 20"/>
            </button>
            <button @click="deleteAddress(adrs.id)"
                    class="font-medium text-red-500 p-2 bg-red-200 rounded-lg dark:text-red-500 hover:underline">
              <vue-icon :path="deleteIcon" width="20" height="20" class="stroke-red-500" viewBox="0 0 20 20"/>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>
