<script setup>
import { useRoute } from 'vue-router';
import VueIcon from '@/components/output/vueIcon';
import { arrow } from '@/assets/icon/icon';
import router from '@/router';
import { computed, onMounted } from 'vue';
import store from '@/store';
import SetCategory from '@/components/templates/seCategory'
import ErrorPopUp from '@/components/output/errors/errorPopUp'


const route = useRoute()
const categories = computed(() => store.getters.getCategories)
onMounted(() => {
  if (categories.value.length === 0) {
    store.dispatch('generateCategories')
  }
})
const deleteUser = (e) => {
  store.dispatch('deleteCategories', e).then(() => {
    store.dispatch('generateCategories')
  })
}

let usersError = computed(() => store.getters.getCategoriesError)
const closer = () => {
  store.commit('setCategoriesError', { status: false })
}
</script>
<template>
  <error-pop-up :action="closer" v-if="usersError?.desc" :later="usersError.status" :title="usersError.title"
                :type="usersError.type" :desc="usersError.desc"/>
  <nav class="flex flex-row justify-between items-center px-8 p-4 bg-slate-600">
    <button @click="router.go(-1)" class="bg-slate-800 p-2 self-start rounded-lg shrink-0">
      <vue-icon :path="arrow" width="30" height="23" class="stroke-cyan-50" viewBox="0 0 30 23"/>
    </button>
    <div class="flex px-4 gap-4 flex-row-reverse ">
      <p class="text-blue-50 text-xl">{{ route.name }} management</p>
      <set-category/>

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
            title
          </th>
          <th scope="col" class="px-6 py-3">
            description
          </th>
          <th scope="col" class="px-6 py-3">
            parent id
          </th>
          <th scope="col" class="px-6 py-3">
            disabled
          </th>
          <th scope="col" class="px-6 py-3">
            depth
          </th>
          <th scope="col" class="px-6 py-3">
            count of children
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
        <tr v-for="(category, i) in categories" :key="i"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <label class="">{{ category?.id }}</label>
            </div>
          </td>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ category?.title }}
          </th>
          <th scope="row" class="px-6 py-4 ">
            {{ category?.description }}
          </th>
          <td class="px-6 py-4">
            {{ category?.parent_id??'no have' }}
          </td>
          <td class="px-6 py-4">
            {{ category?.disabled }}
          </td>
          <td class="px-6 py-4">
            {{ category?.depth ||'no have'  }}
          </td>
          <td class="px-6 py-4">
            {{ category?.children_recursive.length || 'no have'  }}
          </td>
          <td class="px-6 py-4">
            {{ new Date(category?.updated_at).toString().split(' ').slice(0, 6).join(' ') }}
          </td>
          <td class="px-6 py-4">
            {{ new Date(category?.created_at).toString().split(' ').slice(0, 6).join(' ') }}
          </td>
          <td class="px-6 py-4">
            <button @click="deleteUser(category?.id)" class="font-medium text-blue-600 dark:text-red-500 hover:underline">
              delete
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>
