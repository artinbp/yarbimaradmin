<template>
  <pop-up class="relative flex flex-row items-center w-fit justify-center w-full z-20 h-full mx-auto"
          :disable="data.status"
          :close="closer">
    <div class="rtl w-[30vw] mx-auto bg-slate-800 rounded-lg p-4 mt-[10vh]">
      <div class="mb-6">
        <errors-inputs text="عنوان" for="title" type="title" :error="errors"/>
        <input type="text" id="title" v-model="userData.title"
               class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
               placeholder="دسته 1" required>
      </div>
      <div class="mb-6">
        <errors-inputs text="توضیح" for="desc" type="desc" :error="errors"/>
        <input type="text" id="desc" v-model="userData.description"
               class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
               placeholder="توضیح 1" required>
      </div>
      <div class="mb-6">
        <errors-inputs text="والد" for="parent" type="parent" :error="errors"/>
        <select id="parent" v-model="userData.parent_id"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        >
          <option value="null" selected="true">بدون دسته</option>
          <option v-for="(cat, i) in categories" :key="i" :value="cat.id">{{ cat.title }}</option>
        </select>
      </div>
      <div class="mb-6">
        <errors-inputs text="والد" for="parent" type="parent" :error="errors"/>
        <plux-button title="ویرایش دسته بندی" type="toggle" :toggle="!userData.disabled" color="primary" class="w-12" @action="toggle"></plux-button>
      </div>
      <plux-button title="ویرایش دسته بندی" type="square" color="none"
                   class="rounded-lg text-sm px-5 min-w-[5vw] py-2.5 text-center  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                   @action="edit"></plux-button>
    </div>
  </pop-up>
</template>

<script setup>
import PopUp from '@/components/layout/popUp';
import { computed, ref, watchEffect } from 'vue';
import store from '@/store';
import PluxButton from '@/components/input/pluxButton';
import ErrorsInputs from '@/components/output/errors/errorsInputs';
const toggle = () => {
  userData.value.disabled=!userData.value.disabled
}
const part = ref(1)
const errors = ref([])
const data = computed(() => store.getters.getCategoriesUpdateTemp)
const userData = ref({
  id: 0,
  title: '',
  parent_id: null,
  description: '',
  disabled: false,
  depth: 0,
  created_at: '2023-02-10T11:54:28.000000Z',
  updated_at: '2023-02-10T11:54:28.000000Z'

})
const categories = computed(() => store.getters.getCategories)
watchEffect(() => {
      if (data.value.data) {
        userData.value = data.value.data
      }
    }
)


const closer = () => {
  store.commit('setCategoriesUpdateTemp', {
    status: false,
    data: {}
  })
}
const edit = () => {
  errors.value = []
  if (errors.value.length === 0) {
    let payload
    payload = (userData.value.parent_id === 'null'? {
      id: userData.value.id,
      title: userData.value.title,
      description: userData.value.description,
      parent_id: userData.value.parent_id,
      disabled: userData.value.disabled }:{
      id: userData.value.id,
      title: userData.value.title,
      description: userData.value.description,
      disabled: userData.value.disabled })
    console.log(payload)
    store.dispatch('updateCategories',payload).then(() => store.dispatch('generateCategories').then(()=>userData.value={
      title: '',
      description: '',
      parent_id: 'null'
    }))
    part.value = 1
    store.commit('setCategoriesUpdateTemp', {
      status: false,
      data: {}
    })
  }
}
</script>

<style scoped>

</style>
