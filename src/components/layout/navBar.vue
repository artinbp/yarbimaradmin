<script setup>
import {user} from '@/assets/icon/icon';
import logo from '@/assets/logo.png'
import VueIcon from '@/components/output/vueIcon';
import { computed, ref } from 'vue';
import store from '@/store';
const adminInfo = computed(()=> store.getters.getUserInfo)
let userError = computed(() => store.getters.getUserError)
import ErrorPopUp from '@/components/output/errors/errorPopUp'
const toggleProto = ref(false)
const close = () => {
  store.commit('setUserError',{status:false})
}
</script>
<template>
  <error-pop-up :action="close" v-if="userError.desc" :later="userError.status" :title="userError.title"  :type="userError.type" :desc="userError.desc"/>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <router-link to="/" class="flex items-center">
        <img :src="logo" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
      </router-link>
      <div @click="toggleProto=!toggleProto" class=" flex items-center gap-4 md:order-2">
        <p class="text-white ">{{ adminInfo.name }}</p>
        <button type="button" class="flex mr-3 p-2 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
          <span class="sr-only">Open user menu</span>
          <vue-icon :path="user" class="w-8 h-8 rounded-full stroke-white" view-box="0 0 24 31" alt="user photo"/>
        </button>
        <!-- Dropdown menu -->
        <div :class="[toggleProto?'':'hidden']" class="absolute translate-y-36 -translate-x-16 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900 dark:text-white">{{ adminInfo.name }}</span>
            <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{{ adminInfo.email }}</span>
          </div>
          <ul class="py-1" aria-labelledby="user-menu-button">
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
        </div>
        <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </div>

    </div>
  </nav>
</template>


<style scoped>

</style>
