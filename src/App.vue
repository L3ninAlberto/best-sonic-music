<script setup>
import { RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';

</script>

<template>
  <main class="h-screen flex flex-col gap-y-10 bg-blue-800">
    <HeaderComponent/>
    <RouterView />
  </main>
</template>