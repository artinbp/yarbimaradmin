<template>
<div class="mt-6 flex flex-row">
  <form class="flex flex-col gap-5 mx-auto mt-4 rounded-lg">
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
        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">پست الکترونیکی</label>
        <input type="phone" id="phone" v-model="userData.receiver_phone"
               class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
               placeholder="+98 911 111 1234" required>
      </div>
      <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">پست الکترونیکی</label>
        <input type="email" id="email" v-model="userData.email"
               class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
               placeholder="info@yarbimar.com" required>
      </div>
      <div class="mb-6 flex flex-row  gap-1">
        <div class="w-1/2">
          <label for="passwert" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رمز عبور</label>
          <input type="text" id="passwert" v-model="userData.password"
                 class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                 placeholder="*********" required>
        </div>
        <div class="w-1/2">
          <label for="passwert_confirmation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">تایید
            رمز عبور</label>
          <input type="text" id="passwert_confirmation" v-model="userData.password_confirmation"
                 class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                 placeholder="********" required>
        </div>
      </div>
      <plux-button title="next" type="square" color="none" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @action="nextPart"></plux-button>
    </div>
    <div v-if="part===2" class=" w-[30vw] mx-auto bg-slate-800 rounded-lg p-4 mt-[10vh] rtl">
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
      <button @click="login" type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Register new account
      </button>
    </div>
  </form>
</div>
</template>

<script setup>
import store from '@/store';
import { ref } from 'vue';
import { mailValidate, passwordValidate } from '@/utils';
const part=ref(1)
const errors = ref([])
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
import PluxButton from '@/components/input/pluxButton'

const nextPart = () => {
  errors.value = []
  if (!(userData.value.password.length > 0)) {
    errors.value.push({
      title: 'پسورد خالی میباشد',
      id: 'password'
    })
  }
  if (!passwordValidate(userData.value.password)) {
    if (userData.value.password.length < 8) {
      errors.value.push({
        title: 'کلمه کمتر از 8 کارکتر میباشد',
        id: 'password'
      })
    }
    errors.value.push({
      title: 'کلمه ی عبور ضعیف است',
      id: 'password'
    })
  }
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
  if (userData.value.password !== userData.value.password_confirmation) {
    errors.value.push({
      title: 'پسوورد یکی نمی باشد',
      id: 'repassword'
    })
  }
  console.log(errors.value)
  if (errors.value.length === 0) {
    part.value++
  }
}
const login = () => {

  if (errors.value.length === 0) {
    store.dispatch('appendUsers', {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirmation: '',
      role: 3,
      addresses: [
        {
          address: '',
          state: '',
          city: '',
          building_number: 0,
          unit_number: 0,
          zip_code: '',
          receiver_first_name: '',
          receiver_last_name: '',
          receiver_phone: ''
        }
      ]
    })

    part.value=1
  }
}
</script>

<style scoped>
</style>
