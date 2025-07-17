<script setup lang="ts">

import Badge from "@/components/utils/Badge.vue";
</script>

<template>
  <div class="who-wrapper">
    <h2>Hi,</h2>
    <h2>I'm <span class="human-name">Lyne Quequin</span></h2>
  </div>

  <Badge text="Designer"                    />
  <Badge text="Developer" animate           />
  <Badge text="Freelancer" animate reverse   />
  <Badge text="VueExpert" color="secondary" />
  <Badge text="Home"    IconName="IconHouse" />
  <Badge text="Mail"    IconName="IconMail" animate color="primary" />
</template>

<style scoped lang="scss">
@use '@/assets/_variables' as *;


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

</style>