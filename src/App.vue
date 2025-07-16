<template>
  <Header id="header" />
  <main>
    <RouterView />
  </main>
</template>
<script setup lang="ts">
import Header from "@/components/Header.vue";
</script>

<style lang="scss">

#header {
  margin-top: 1rem;
}
</style>