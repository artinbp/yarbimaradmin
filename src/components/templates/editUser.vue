<template>
  <pop-up class="relative flex flex-row items-center w-fit justify-center w-full z-20 h-full mx-auto" :disable="data.status"
          :close="closer">
    <div v-if="part===1" class="rtl w-[30vw] mx-auto bg-slate-800 rounded-lg p-4 mt-[10vh]">
      <div class="mb-6 flex flex-row  gap-1">
        <div class="w-1/2">
          <label for="fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام</label>
          <input type="text" id="fname" v-model="userData.first_name"
                 class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                 placeholder="حمید" required>
        </div>
        <div class="w-1/2">
          <label for="lname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام خانوادگی</label>
          <input type="text" id="lname" v-model="userData.last_name"
                 class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                 placeholder="بحرپیما" required>
        </div>
      </div>
      <div class="mb-6">
        <label for="lname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام کاربری</label>
        <input type="text" id="username" v-model="userData.username"
               class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
               placeholder="hamidbp" required>
      </div>
      <div class="mb-6">
        <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">سطح دسترسی</label>
        <select type="text" id="username" v-model="userData.role"
               class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
               placeholder="" required>
               <option v-for="(role, i) in roles" :key="i" :value="role.id" :selected="userData.role.id === role.id ? 'true' : 'false'"> {{role.name}} </option>
              </select>
      </div>

      <div class="mb-6">
        <errors-inputs text="پست الکترونیکی" for="email" type="email" :error="errors"/>
        <input type="email" id="email" v-model="userData.email"
               class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
               placeholder="info@yarbimar.com" required>
      </div>
      <plux-button title="ویرایش" type="square" color="primary"
                   class="rounded-lg text-sm px-5 min-w-[2vw] py-2.5 text-center  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                   @action="nextPart"></plux-button>
    </div>
  </pop-up>
</template>

<script setup>
import PopUp from '@/components/layout/popUp';
import { ref,computed,watchEffect } from 'vue';
import store from '@/store';
import{roles} from '@/context/roles/'
import PluxButton from '@/components/input/pluxButton';
import {  mailValidate } from '@/utils';
import ErrorsInputs from '@/components/output/errors/errorsInputs';

const part = ref(1)
const errors = ref([])
const data = computed(()=>store.getters.getUsersUpdateTemp)
const userData = ref({
  username: '',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  password_confirmation: '',
  receiver_phone: '',
  role: 3,
  state: '',
  city: '',
  address: '',
  building_number: 0,
  unit_number: 0,
  zip_code: ''
})
watchEffect(()=>{
if (data.value.data){
 userData.value=data.value.data
 userData.value.role = data.value.data?.role?.id
}}
)


const closer = () => {
  store.commit('setUsersUpdateTemp',{status: false,
    data:{}})
}
const nextPart = () => {
  errors.value = []
  if (!(userData.value.email.length > 0)) {
    errors.value.push({
      title: 'پست الکترونیک خالی میباشد',
      id: 'email'
    })
  }
  if (!mailValidate(userData.value.email)) {
    errors.value.push({
      title: 'پست الکترونیک نا معتبر میباشد',
      id: 'email'
    })
  }
  console.log(errors.value)
  if (errors.value.length === 0) {
    store.dispatch('updateUsers', {
      id: userData.value.id,
      data:{
      username: userData.value.username,
      first_name: userData.value.first_name,
      last_name: userData.value.last_name,
      email: userData.value.email,
      role: userData.value.role,
      addresses:userData.value.address,
    }
    }).then(()=>store.dispatch('generateUsers'))
    part.value=1
    store.commit('setUsersUpdateTemp',{status: false,
    data:{}})
  }
}
</script>

<style scoped>

</style>
