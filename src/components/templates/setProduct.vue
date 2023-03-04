<template>
  <button
      @click="disable=true"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
    افزودن محصول
  </button>
  <pop-up class="relative flex flex-row items-center w-fit justify-center w-full z-20 h-full mx-auto" :disable="disable"
          :close="closer">
    <div class="rtl w-[50vw] scale-95 mx-auto bg-slate-800 rounded-lg flex flex-row  mt-[2vh]">
      <div class="rtl w-2/3 mx-auto bg-slate-800 rounded-lg p-4 mt-[1vh]">
        <div class="mb-2">
          <errors-inputs text="عنوان" for="title" type="title" :error="errors"/>
          <input type="text" id="title" v-model="userData.title"
                 class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                 placeholder="عنوان محصول" required>
        </div>
        <div class="mb-2">
          <errors-inputs text="توضیحات" for="title" type="title" :error="errors"/>
          <textarea type="text" id="description" v-model="userData.description"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="درمورد محصول" required></textarea>
        </div>
        <div class="mb-2">
          <errors-inputs text="رسانه" for="media" type="title" :error="errors"/>
          <media-input type="text" id="media" v-model="userData.description"
                       class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                       :placeholder="'وارد کنید'" required/>
        </div>
        <div class="mb-2 flex flex-row  gap-2">
          <div class="w-1/2">
            <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">قیمت</label>
            <input type="text" id="price" v-model="userData.price"
                   class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                   placeholder="1000 تومان" required>
          </div>
          <div class="w-1/2">
            <label for="diseases" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">بیماری</label>
            <select id="diseases" multiple v-model="userData.diseases"
                    class="shadow-sm bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            >
              <option v-for="(cat, i) in diseases" :key="i" :value="cat.id">{{ cat.name }}</option>
            </select>
          </div>
        </div>
        <plux-button title="ثبت محصول" type="square" color="none"
                     class="rounded-lg text-sm px-5 min-w-[5vw] py-2.5 text-center  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                     @action="append"></plux-button>
      </div>
      <div class="rtl w-1/3 mx-auto bg-slate-800 rounded-lg p-4 mt-[1vh]">
        <div class="mb-2">
          <errors-inputs text="برند" for="title" type="title" :error="errors"/>
          <input type="text" id="brand" v-model="userData.brand"
                 class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                 placeholder="brand" required>
        </div>
        <div class="mb-2">
          <errors-inputs text="دسته بندی" for="parent" type="parent" :error="errors"/>
          <select id="parent" v-model="userData.cat"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          >
            <option value="null">بدون دسته</option>
            <option v-for="(cat, i) in categories" :key="i" :value="cat.id">{{ cat.title }}</option>
          </select>
        </div>
        <div class="mb-2">
          <errors-inputs text="موجودی" for="stock" type="title" :error="errors"/>
          <input type="text" id="stock" v-model="userData.stock"
                 class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                 placeholder="kg 1" required>
        </div>
        <div class="mb-2">
          <errors-inputs text="وزن" for="weight" type="title" :error="errors"/>
          <input type="text" id="weight" v-model="userData.weight"
                 class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                 placeholder="kg 1" required>
        </div>
        <div class="mb-2">
          <errors-inputs text="ارتفاع" for="height" type="title" :error="errors"/>
          <input type="text" id="height" v-model="userData.height"
                 class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                 placeholder="cm 1" required>
        </div>
        <div class="mb-2">
          <errors-inputs text="طول" for="breadth" type="title" :error="errors"/>
          <input type="text" id="breadth" v-model="userData.length"
                 class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                 placeholder="cm 1" required>
        </div>
        <div class="mb-2">
          <errors-inputs text="عرض" for="width" type="title" :error="errors"/>
          <input type="text" id="width" v-model="userData.width"
                 class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                 placeholder="cm 1" required>
        </div>
        <div class="mb-2">
          <errors-inputs text="رنگ" for="color" type="title" :error="errors"/>
          <input type="color" id="color" v-model="userData.color"
                 class="shadow-sm h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                 placeholder="" required>
        </div>
      </div>
    </div>
  </pop-up>
</template>

<script setup>
import PopUp from '@/components/layout/popUp';
import { computed, onMounted, ref } from 'vue';
import store from '@/store';
import PluxButton from '@/components/input/pluxButton';

import ErrorsInputs from '@/components/output/errors/errorsInputs';
import MediaInput from '@/components/input/mediaInput';

onMounted(async () => {
  await store.dispatch('generateCategories')
  await store.dispatch('generateDiseases')
})

const errors = ref([])
const disable = ref(true)
const userData = ref({
  title: '',
  description: '',
  brand: '',
  price: '',
  color: '',
  weight: '',
  length: '',
  height: '',
  stock: '',
  size: '0',
  breadth: '',
  manufacturing_country: 'iran',
  width: '',
  diseases: [],
  cat: 'null'
})
const append = () => {
  if (errors.value.length === 0) {
    const media = []
    store.getters.getMedia.forEach((item) => {
      media.push(item.id)
    })
    let payload = {
      title: userData.value.title,
      description: userData.value.description,
      media,
      manufacturing_country: userData.value.manufacturing_country,
      stock: parseInt(userData.value.stock),
      size: parseInt(userData.value.size),
      weight: parseInt(userData.value.weight),
      length: parseInt(userData.value.length),
      breadth: (parseInt(userData.value.width)*parseInt(userData.value.length)*parseInt(userData.value.height)),
      width: parseInt(userData.value.width),
      height: parseInt(userData.value.height),
      brand: userData.value.brand,
      thumbnail_path: store.getters.getThumbnail,
      diseases: userData.value.diseases,
      discount: 0,
      categories: [userData.value.cat],
      price: parseInt(userData.value.price),
      color: userData.value.color
    }

    console.log(payload)
    store.dispatch('appendProducts', payload).then(() => store.dispatch('generateProducts').then(() => {
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
const categories = computed(() => store.getters.getCategories)
const diseases = computed(() => store.getters.getDiseases)

const closer = () => {
  disable.value = false
}
</script>

<style scoped>

</style>
