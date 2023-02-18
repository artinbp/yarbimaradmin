<script setup>
import { arrow, editIcon, deleteIcon } from '@/assets/icon/icon';
import VueIcon from '@/components/output/vueIcon';
import router from '@/router';
import { computed, onMounted } from 'vue';
import store from '@/store';
import ErrorPopUp from '@/components/output/errors/errorPopUp'
import {toJalali} from '@/utils';
import SetDiseases from '@/components/templates/setDiseases';
import EditDiseases from '@/components/templates/editDiseases';


const rows = computed(() => store.getters.getDiseases)
onMounted(() => {
  if (rows.value) {
    store.dispatch('generateDiseases')
  }
})
const edit = (e) => {
  store.dispatch('generateUpdateDiseases',e)

}
const doDelete = (e) => {
  store.dispatch('deleteDiseases', e).then(() => {
    store.dispatch('generateDiseases')
  })
}

let Error = computed(() => store.getters.getDiseasesError)
const closer = () => {
  store.commit('setDiseasesError', { status: false })
}
</script>
<template>
  <edit-diseases></edit-diseases>
  <error-pop-up :action="closer" v-if="Error?.desc" :later="Error.status" :title="Error.title"
                :type="Error.type" :desc="Error.desc"/>
  <nav class="flex flex-row justify-between items-center px-8 p-4 bg-slate-600">
    <button @click="router.go(-1)" class="bg-slate-800 p-2 self-start rounded-lg shrink-0">
      <vue-icon :path="arrow" width="30" height="23" class="stroke-cyan-50" viewBox="0 0 30 23"/>
    </button>
    <div class="flex px-4 gap-4 flex-row-reverse ">
      <p class="text-blue-50 text-xl">مدیریت بیماری ها</p>
      <set-diseases/>

    </div>
  </nav>
  <div class="p-8">

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full rtl text-sm text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <label class="">#</label>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">
            نام بیماری
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
        <tr v-for="(row, i) in rows" :key="i"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <label class="">{{ i+1 }}</label>
            </div>
          </td>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ row?.name }}
          </th>
          <td class="px-6 py-4">
            {{ toJalali(row?.updated_at) }}
          </td>
          <td class="px-6 py-4">
            {{ toJalali(row?.created_at) }}
          </td>
          <td class="px-6 py-4 flex flex-row gap-2">
            <button @click="edit(row.id)" class="font-medium text-red-500 p-2 bg-blue-400 rounded-lg dark:text-red-500  hover:underline"> <vue-icon :path="editIcon" width="20" height="20" class="stroke-cyan-50" viewBox="0 0 20 20"/>
            </button>
            <button @click="doDelete(row.id)" class="font-medium text-red-500 p-2 bg-red-200 rounded-lg dark:text-red-500 hover:underline"> <vue-icon :path="deleteIcon" width="20" height="20" class="stroke-red-500" viewBox="0 0 20 20"/>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>
