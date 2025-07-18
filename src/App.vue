<template>
  <Header id="header" />
  <main id="main">
    <RouterView />
  </main>
</template>
<script setup lang="ts">
import Header from "@/components/Header.vue";
</script>

<style lang="scss">

#header {
  margin-top: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
</style>