<script setup lang="ts">

import IconHouse from "@/components/icons/IconHouse.vue";
import IconCode from "@/components/icons/IconCode.vue";
import IconWork from "@/components/icons/IconWork.vue";
import IconMail from "@/components/icons/IconMail.vue";
</script>

<template>
  <nav>
    <RouterLink to="/">
      <IconHouse/>
      Home
    </RouterLink>
    <RouterLink to="/projects">
      <IconCode/>
      Projects
    </RouterLink>
    <RouterLink to="/experience">
      <IconWork/>
      Experience
    </RouterLink>
    <RouterLink to="/contact">
      <IconMail/>
      Contact
    </RouterLink>
  </nav>
</template>

<style scoped lang="scss">
@use '@/assets/_variables' as *;

nav {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  width: fit-content;
  margin: 0 auto;

  background-color: $c-primary-opacity;
  border: $v-border-width-large $v-border-style $c-primary-soft;
  border-radius: $v-border-radius-circle;

  a {
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;

  }

  @include hover {
    a:hover {
      background-color: $c-white-opacity;
      border-radius: $v-border-radius-circle;
    }
  }
}
</style>