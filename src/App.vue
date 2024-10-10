<script setup>
import { defineExpose } from 'vue';
import Search from './components/search/search.vue';
import Header from './components/header/header.vue';
defineExpose({
  Header,
  Search
});

</script>

<template>
 <div>
  <Header v-show="$route.path!='/login' && $route.path!='/register'"> </Header>
  <Search v-show="$route.path=='/layout/home' || $route.path =='/layout/banner'"></Search>
  <router-view></router-view>
 </div>
 
</template>

<style scoped>

</style>
