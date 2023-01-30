<script setup>

import VueIcon from '@/components/output/vueIcon';
import { arrow, editIcon, deleteIcon } from '@/assets/icon/icon';
import router from '@/router';
import { computed, onMounted } from 'vue';
import store from '@/store';
import SetUser from '@/components/templates/setUser'
import EditUser from '@/components/templates/editUser'
import ErrorPopUp from '@/components/output/errors/errorPopUp'
import { roles } from '@/context/roles';

const users = computed(() => store.getters.getUsers)
onMounted(() => {
  if (users.value.length === 0) {
    store.dispatch('generateUsers')
  }
})
const deleteUser = (e) => {
  store.dispatch('deleteUsers',e).then(()=>{
    store.dispatch('generateUsers')
  })
}

const editUser = (e) => {
  store.dispatch('generateUpdateUsers',e)

}
let usersError = computed(() => store.getters.getUsersError)
const closer = () => {
  store.commit('setUsersError', {status:false})
}
</script>
<template>
      <EditUser></EditUser>
  <error-pop-up :action="closer" v-if="usersError?.desc" :later="usersError.status" :title="usersError.title"  :type="usersError.type" :desc="usersError.desc"/>
  <nav class="flex flex-row justify-between items-center px-8 p-4 bg-slate-600">
    <button @click="router.go(-1)" class="bg-slate-800 p-2 self-start rounded-lg shrink-0">
      <vue-icon :path="arrow" width="30" height="23" class="stroke-cyan-50" viewBox="0 0 30 23"/>
    </button>
    <div class="flex px-4 gap-4 flex-row-reverse ">
      <p class="text-blue-50 text-xl">مدیریت کاربران</p>
      <set-user/>
    </div>
  </nav>
  <div class="p-8">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full rtl text-s text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
               <label class="">#</label>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">
            نام کاربری
          </th>
          <th scope="col" class="px-6 py-3">
            نام کامل
          </th>
          <th scope="col" class="px-6 py-3">
            پست الکترونیکی
          </th>
          <th scope="col" class="px-6 py-3">
            سطح دسترسی
          </th>
          <th scope="col" class="px-6 py-3">
            تقییر داده شد در
          </th>
          <th scope="col" class="px-6 py-3">
            ساخته شد در
          </th>
          <th scope="col" class="px-6 py-3">
            عملیات ها
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(user, i) in users" :key="i" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="w-4 p-4">
            <div class="flex items-center">
             <label  class="">{{ user.id }}</label>
            </div>
          </td>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ user.username }}
          </th>
          <th scope="row" class="px-6 py-4 ">
            {{ user.first_name + ' ' + user.last_name }}
          </th>
          <td class="px-6 py-4">
            {{ user.email }}
          </td>
          <td class="px-6 py-4">
            {{ roles.filter((item)=>item.value===user.role.name)[0].name }}
          </td>
          <td class="px-6 py-4">
            {{ new Date(user.updated_at).toString().split(' ').slice(0,6).join(' ') }}
          </td>
          <td class="px-6 py-4">
            {{ new Date(user.created_at).toString().split(' ').slice(0,6).join(' ') }}
          </td>
          <td class="px-6 py-4 flex flex-row gap-2">
            <button @click="editUser(user.id)" class="font-medium text-red-500 p-2 bg-blue-400 rounded-lg dark:text-red-500  hover:underline"> <vue-icon :path="editIcon" width="20" height="20" class="stroke-cyan-50" viewBox="0 0 20 20"/>
            </button>
            <button @click="deleteUser(user.id)" class="font-medium text-red-500 p-2 bg-red-200 rounded-lg dark:text-red-500 hover:underline"> <vue-icon :path="deleteIcon" width="20" height="20" class="stroke-red-500" viewBox="0 0 20 20"/>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>
