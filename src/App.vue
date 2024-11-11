<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import { pages } from './router/pages';

console.log({ pages });
</script>

<template>
  <Header />
  <nav class="w-full space-x-4 text-gray-700 font-semibold p-4 text-center">
    <RouterLink 
      v-for="page in pages"
      :key="page.path"
      :to="page.path" 
      class="underline cursor-pointer"
    >
      {{ page.label }}
    </RouterLink>
    </nav>

  <RouterView />
</template>

<style scoped>
</style>
