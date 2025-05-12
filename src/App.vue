<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";
import CopyrightTextComponent from "./components/CopyrightTextComponent.vue";
</script>

<template>
  <main class="min-h-screen flex flex-col gap-y-5 bg-blue-800">
    <HeaderComponent />
    <RouterView />
    <CopyrightTextComponent />
  </main>
</template>
