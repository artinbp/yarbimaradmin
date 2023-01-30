<template>
  <nav-bar v-if="token"/>
  <div class="bg-gray-900">
    <router-view/>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import store from '@/store';
import NavBar from '@/components/layout/navBar'
if(sessionStorage.getItem('token') && sessionStorage.key('token')){
  store.commit('setUserToken',sessionStorage.getItem('token'))
}
const token = computed(()=> store.getters.getUserToken)

</script>

<style scoped>

</style>
