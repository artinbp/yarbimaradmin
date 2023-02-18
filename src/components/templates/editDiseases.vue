<template>
  <pop-up class="relative flex flex-row items-center w-fit justify-center w-full z-20 h-full mx-auto"
          :disable="data.status"
          :close="closer">
    <div class="rtl w-[30vw] mx-auto bg-slate-800 rounded-lg p-4 mt-[10vh]">
      <div class="mb-6">
        <errors-inputs text="عنوان" for="title" type="title" :error="errors"/>
        <input type="text" id="title" v-model="userData.name"
               class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
               placeholder="دسته 1" required>
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

const part = ref(1)
const errors = ref([])
const data = computed(() => store.getters.getDiseasesUpdateTemp)
const userData = ref({
  id: 0,
  name: '',

})

watchEffect(() => {
      if (data.value.data) {
        userData.value = data.value.data
      }
    }
)


const closer = () => {
  store.commit('setDiseasesUpdateTemp', {
    status: false,
    data: {}
  })
}
const edit = () => {
  errors.value = []
  if (errors.value.length === 0) {
    let payload
    payload =  {
      id: userData.value.id,
      data: { name:userData.value.name }
    }
    console.log(payload)
    store.dispatch('updateDiseases',payload).then(() => store.dispatch('generateDiseases').then(()=>userData.value={
      name: '',
    }))
    part.value = 1
    store.commit('setDiseasesUpdateTemp', {
      status: false,
      data: {}
    })
  }
}
</script>

<style scoped>

</style>
