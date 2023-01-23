<template>

  <nav
      @mouseleave="toggleMegaMenu"
      class="bg-white px-2 sm:px-4  fixed w-full z-20 top-16 left-0 border-b border-gray-200 dark:border-gray-600">
    <div class="container flex flex-row gap-2 justify-center  mx-auto">
      <div class="flex flex-row items-center gap-2">
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul class="flex flex-col  p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
            <li v-for="(category, i) in categories" :key="i" class="flex flex-row gap-1">
              <button @mouseover="setSubCategory(category)"

                      :class="[currentCategory===category.id?'text-blue-600':'text-gray-700']"
                      class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium  border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                {{ category.title }}
              </button>
              <svg v-if="category.children_recursive.length>0" aria-hidden="true" class="ml-1 w-5 h-5 md:w-4 md:h-4"
                   fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
              </svg>

              <div v-if="currentCategory===category.id  && toggleMenu" @blur="toggleMegaMenu" id="mega-menu-icons-dropdown"
                   class=" flex absolute w-[80vw] left-[10vw] translate-y-9 z-10 text-sm bg-white rounded-lg border shadow-md bg-gray-200">
                <div class="flex flex-col gap-[2px] rounded-l-lg bg-gray-400">
                  <router-link :to="`/category/${subCategories?.id}`"
                               class="flex p-2 pt-4  items-center text-gray-100  hover:text-blue-600 dark:hover:text-blue-500 group">
                    {{ subCategories?.title }}
                  </router-link>
                  <div v-for="(subCategory, j) in subCategories.children_recursive" :key="j"
                       class="p-2 pb-0 text-gray-900 md:pb-4 dark:text-white">
                    <button @mouseover="setSub(subCategory)"
                            :class="[currentSubCategory===subCategory.id?'text-blue-600':'text-gray-300']"
                            class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium  border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 ">
                      {{ subCategory.title }}
                    </button>
                  </div>
                </div>
                <div class="flex">
                  <ul class="flex flex-wrap gap-2 p-4" v-if="subC.children_recursive">
                    <li>
                      <router-link :to="`/category/${subC?.id}`"
                                   class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                        <span class="sr-only">{{ subC.title }}</span>
                        <svg
                            class="mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                            aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clip-rule="evenodd"></path>
                        </svg>
                        {{ subC.title }}
                      </router-link>
                    </li>
                    <li v-for="(sub,k) in subC?.children_recursive" :key="k">
                      <router-link :to="`/category/${sub?.id}`"
                                   class="flex items-center text-gray-100 hover:text-blue-600 dark:hover:text-blue-500 group">
                        <span class="sr-only">{{ sub.title }}</span>

                        {{ sub.title }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed, ref } from 'vue';
import store from '@/store';

let currentCategory = ref(0)
let currentSubCategory = ref(0)

let setSubCategory = (e) => {
  store.commit('setSubCategories', e)
  currentCategory.value = e.id
  console.log(e)
  toggleMenu.value = true
}
let setSub = (e) => {
  store.commit('setSubC', e)
  currentSubCategory.value = e.id
  console.log(e)
}
let toggleMegaMenu = (e) => {
  toggleMenu.value = !toggleMenu.value
  console.log(e)
}
const categories = computed(() => store.getters.getCategories)
const subCategories = computed(() => store.getters.getSubCategories)
const subC = computed(() => store.getters.getSubC)
const toggleMenu = ref(false)
</script>

<style scoped>

</style>
