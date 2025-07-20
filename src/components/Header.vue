<script setup lang="ts">
import { ref } from 'vue';

import IconHouse from "@/components/icons/IconHouse.vue";
import IconCode from "@/components/icons/IconCode.vue";
import IconWork from "@/components/icons/IconWork.vue";
import IconMail from "@/components/icons/IconMail.vue";
import IconComputer from "@/components/icons/IconComputer.vue";
import IconBurger from "@/components/icons/IconBurger.vue";

const isOpen = ref(false);
</script>

<template>
  <div class="nav-wrapper">
    <button class="menu-toggle" @click="isOpen = !isOpen">
      <IconBurger /> portfolio
    </button>

    <nav :class="{ open: isOpen }">
      <RouterLink to="/">
        <IconHouse /> Home
      </RouterLink>
      <RouterLink to="/skills">
        <IconComputer /> Skills
      </RouterLink>
      <RouterLink to="/projects">
        <IconCode /> Projects
      </RouterLink>
<!--      <RouterLink to="/experience">
        <IconWork /> Experience
      </RouterLink>-->
      <RouterLink to="/contact">
        <IconMail /> Contact
      </RouterLink>
    </nav>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/_variables' as *;

.nav-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu-toggle {
  display: none;
  background: $c-primary-opacity;
  color: $c-white;
  border: none;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border: $v-border-width-large $v-border-style $c-primary-soft;
  border-radius: $v-border-radius-circle;
  font-size: 1rem;
  cursor: pointer;
  backdrop-filter: blur(10px);

  @include mobile-display {
    display: inline-flex;
    align-items: center;
  }
}

nav {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  width: fit-content;
  margin: 0 auto;

  backdrop-filter: blur(10px);
  background-color: $c-primary-opacity;
  border: $v-border-width-large $v-border-style $c-primary-soft;
  border-radius: $v-border-radius-circle;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease;

  a {
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    white-space: nowrap;
  }

  @include hover {
    a:hover {
      background-color: $c-white-opacity;
      border-radius: $v-border-radius-circle;
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;
    width: 100%;
    border-radius: $v-border-radius-large;

    max-height: 0;
    overflow: hidden;
    opacity: 0;

    &.open {
      max-height: 500px;
      opacity: 1;
      backdrop-filter: blur(4px);
    }

    a {
      justify-content: center;
      width: 100%;
      padding: 0.5rem;
    }
  }
}
</style>
