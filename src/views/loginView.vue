 <template>
<div class="mt-20 flex flex-row">
  <form class="flex flex-col w-[22rem] rtl gap-5 mx-auto mt-10 rounded-lg bg-gradient-to-tr from-[#2181ce99] to-[#2151fe99] p-8">
    <div class="mb-6 flex flex-col items-start">
      <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">پست الکترونیک</label>
      <input type="email" id="text" v-model="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required>
    </div>
    <div class="mb-6 flex flex-col items-start">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">کلمه ی عبور</label>
      <input type="password" id="password" v-model="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="......"  required>
    </div>

    <button
        type="submit"
        @click="login"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      ورود
    </button>
  </form>
</div>
</template>

<script setup>
import store from '@/store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const username = ref()
const password = ref()
const router = useRouter()
const login = async () => {
  await store.dispatch('generateUserLogin',{email: username.value, password: password.value})
  await router.push({path: '/' })
}
</script>

<style scoped>
</style>
