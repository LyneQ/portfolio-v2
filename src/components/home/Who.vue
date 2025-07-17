<script setup lang="ts">

import Badge from "@/components/utils/Badge.vue";
</script>

<template>
  <div class="who-container">

    <div class="who-wrapper">
      <h2>Hi,</h2>
      <h2>I'm <span class="human-name">Lyne Quequin</span></h2>
    </div>

    <Badge
        class="badge badge--top"
        text="Tech enjoyer"
        color="secondary"
        animate
        reverse
    />
    <Badge
        class="badge badge--right"
        text="Resilient Mind"
        color="primary"
        animate
    />
    <Badge
        class="badge badge--bottom-right"
        text="Craft-focused"
        color="tertiary"
        animate
        reverse
    />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/_variables' as *;

.who-container {
  position: relative;
  padding: 2rem 0;
  height: fit-content;
}
.who-wrapper {
  font-size: 1.5rem;

  h2, .human-name {
    font-weight: 600;
    line-height: 1;
  }
}

.human-name {
  background-image: -webkit-linear-gradient(to right, $c-primary, $c-secondary, $c-primary);
  background-image: linear-gradient(to right, $c-primary, $c-secondary, $c-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: slide 3s linear infinite;
}

@keyframes slide {
  to {
    background-position: 200% center;
  }
  from {
    background-position: 0 center;
  }
}

.badge {
  position: absolute;
}

.badge--top {
  top: 10%;
  left: 35%;
  transform: translateX(-50%);
}

.badge--right {
  top: 45%;
  right: 5%;
  transform: translateY(-50%);
}

.badge--bottom-right {
  bottom: 0;
  right: 0;
}

</style>