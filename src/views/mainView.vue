<template>
  <nav-bar v-if="route.name!=='login'|| route.name!=='register'"/>
  <div class="bg-gray-900">
    <router-view/>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue';
import NavBar from '@/components/layout/navBar';
import store from '@/store';

const router = useRouter()
const route = useRoute()
const token = sessionStorage.getItem('token')
onMounted(() => {
      console.log(sessionStorage.getItem('token'))
      if (!token && !(route.path === '/login' || route.path === '/register')) {
        router.push('/login')
      }
      store.dispatch('generateUserInfo')
    }
)
</script>

<style scoped>

</style>
