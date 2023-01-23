<script setup>
import { useRoute } from 'vue-router';
import VueIcon from '@/components/output/vueIcon';
import { arrow } from '@/assets/icon/icon';
import router from '@/router';
import { computed, onMounted } from 'vue';
import store from '@/store';
import SetUser from '@/components/templates/setUser'
import ErrorPopUp from '@/components/output/errors/errorPopUp'
const route = useRoute()
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

let usersError = computed(() => store.getters.getUsersError)
const closer = () => {
  store.commit('setUsersError', {status:false})
}
</script>
<template>
  <error-pop-up :action="closer" v-if="usersError?.desc" :later="usersError.status" :title="usersError.title"  :type="usersError.type" :desc="usersError.desc"/>
  <nav class="flex flex-row justify-between items-center px-8 p-4 bg-slate-600">
    <button @click="router.go(-1)" class="bg-slate-800 p-2 self-start rounded-lg shrink-0">
      <vue-icon :path="arrow" width="30" height="23" class="stroke-cyan-50" viewBox="0 0 30 23"/>
    </button>
    <div class="flex px-4 gap-4 flex-row-reverse ">
      <p class="text-blue-50 text-xl">{{ route.name }} management</p>
      <set-user/>
    </div>
  </nav>
  <div class="p-8">

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
               <label class="">#</label>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">
            username
          </th>
          <th scope="col" class="px-6 py-3">
            full name
          </th>
          <th scope="col" class="px-6 py-3">
            email
          </th>
          <th scope="col" class="px-6 py-3">
            role
          </th>
          <th scope="col" class="px-6 py-3">
            updated at
          </th>
          <th scope="col" class="px-6 py-3">
            created at
          </th>
          <th scope="col" class="px-6 py-3">
            Action
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
            {{ user.role.name }}
          </td>
          <td class="px-6 py-4">
            {{ new Date(user.updated_at).toString().split(' ').slice(0,6).join(' ') }}
          </td>
          <td class="px-6 py-4">
            {{ new Date(user.created_at).toString().split(' ').slice(0,6).join(' ') }}
          </td>
          <td class="px-6 py-4">
            <button @click="deleteUser(user.id)" class="font-medium text-blue-600 dark:text-red-500 hover:underline">delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>
