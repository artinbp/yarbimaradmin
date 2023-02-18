<template>
  <button
      @click="disable=true"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
    افزودن محصول
  </button>
  <pop-up class="relative flex flex-row items-center w-fit justify-center w-full z-20 h-full mx-auto" :disable="disable"
          :close="closer">
    <div class="rtl w-[50vw] scale-95 mx-auto bg-slate-800 rounded-lg flex flex-row  mt-[2vh]">
      <div class="rtl w-full mx-auto bg-slate-800 rounded-lg p-4 mt-[1vh]">
        <div class="mb-2">
          <errors-inputs text="عنوان" for="title" type="title" :error="errors"/>
          <input type="text" id="title" v-model="userData.title"
                 class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                 placeholder="عنوان " required>
        </div>
        <div class="mb-2">
          <errors-inputs text="پیوند" for="title" type="title" :error="errors"/>
          <input type="text" id="url" v-model="userData.url"
                 class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                 placeholder="http://example.com" required>
        </div>
        <div class="mb-2">
          <errors-inputs text="توضیحات" for="title" type="title" :error="errors"/>
          <textarea type="text" id="description" v-model="userData.description"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="درمورد " required></textarea>
        </div>
        <div class="mb-2">
          <errors-inputs text="رسانه" for="media" type="title" :error="errors"/>
          <media-input type="text" id="media" v-model="userData.description"
                       class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                       :placeholder="'وارد کنید'" required/>
        </div>
        <plux-button title="ثبت بیماری" type="square" color="none"
                     class="rounded-lg text-sm px-5 min-w-[5vw] py-2.5 text-center  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                     @action="append"></plux-button>
      </div>
    </div>
  </pop-up>
</template>

<script setup>
import PopUp from '@/components/layout/popUp';
import { ref } from 'vue';
import store from '@/store';
import PluxButton from '@/components/input/pluxButton';

import ErrorsInputs from '@/components/output/errors/errorsInputs';
import MediaInput from '@/components/input/mediaInput';


const errors = ref([])
const disable = ref(true)
const userData = ref({
  title: '',
  description: '',
  url: ''
})
const append = () => {
  if (errors.value.length === 0) {
    const media_id = store.getters.getMedia[0].id

    let payload = {
      title: userData.value.title,
      description: userData.value.description,
      media_id,
      url: userData.value.url,
    }

    console.log(payload)
    store.dispatch('appendSlides', payload).then(() => store.dispatch('generateSlides').then(() => {
          userData.value = {
            title: '',
            description: '',
            brand: '',
            price: '',
            weight: '',
            height: '',
            stock: '',
            size: '0',
            breadth: '',
            length: '',
            manufacturing_country: 'iran',
            width: '',
            color: '',
            diseases: [],
            cat: 'null'
          }
          store.commit('clearMedia')
        }
    ))
    disable.value = false

  }
}
const closer = () => {
  disable.value = false
}
</script>

<style scoped>

</style>
