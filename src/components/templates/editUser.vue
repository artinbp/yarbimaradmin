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
      <plux-button title="next" type="square" color="primary"
                   class="rounded-lg text-sm px-5 min-w-[2vw] py-2.5 text-center  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                   @action="nextPart"></plux-button>
    </div>
    <div v-if="part===2" class=" w-[30vw] mx-auto bg-slate-800 rounded-lg p-4 mt-[10vh] rtl">
      <table>
        <tr>
          <th>

          </th>
        </tr>
      </table>
      <div>
        <div class="mb-6 flex flex-row  gap-1">
        <div class="w-1/2">
          <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شهر</label>
          <input type="text" id="city" v-model="userData.city"
                 class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                 placeholder="حمید" required>
        </div>
        <div class="w-1/2">
          <label for="state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">استان</label>
          <input type="text" id="state" v-model="userData.state"
                 class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                 placeholder="بحرپیما" required>
        </div>
      </div>
      <div class="mb-6">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ادرس</label>
        <input type="text" id="name" v-model="userData.address"
               class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
               placeholder="name@flowbite.com" required>
      </div>
      <div class="mb-6 flex flex-row  gap-1">
        <div class="w-1/3">
          <label for="zip" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">کد پستی</label>
          <input type="text" id="zip" v-model="userData.zip_code"
                 class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                 placeholder="154656" required>
        </div>
        <div class="w-1/2">
          <label for="usn" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">واحد</label>
          <input type="text" id="usn" v-model="userData.unit_number"
                 class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                 placeholder="حمید" required>
        </div>
        <div class="w-1/2">
          <label for="hs" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">پلاک</label>
          <input type="text" id="hs" v-model="userData.building_number"
                 class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                 placeholder="بحرپیما" required>
        </div>
      </div>
      </div>
      <button @click="append" type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          به روز رسانی
      </button>
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

const append = () => {
  if (errors.value.length === 0) {
    store.dispatch('appendUsers', {
      username: userData.value.username,
      first_name: userData.value.first_name,
      last_name: userData.value.last_name,
      email: userData.value.email,
      password: userData.value.password,
      password_confirmation: userData.value.password_confirmation,
      role: 3,
      addresses: [
        {
          address: userData.value.address,
          state: userData.value.state,
          city: userData.value.city,
          building_number: userData.value.building_number,
          unit_number: userData.value.unit_number,
          zip_code: userData.value.zip_code,
          receiver_first_name: userData.value.first_name,
          receiver_last_name: userData.value.last_name,
          receiver_phone: userData.value.receiver_phone
        }
      ]
    }).then(()=>store.dispatch('generateUsers'))
    part.value=1
    store.commit('setUsersUpdateTemp',{status: false,
    data:{}}) 
  }
}
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
    part.value++
  }
}
</script>

<style scoped>

</style>
