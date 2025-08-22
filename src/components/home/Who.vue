<script setup lang="ts">

import Badge from "@/components/utils/Badge.vue";
</script>

<template>
  <div class="who-container">
    <div class="who-wrapper">
      <h2>Hi, I'm</h2>
      <h2> <span class="human-name">Lyne Quequin</span></h2>
      <Badge class="who-btn" text="Passionate Full Stack Developer" style="cursor: text; font-size: 1.5rem" />
      <p class="who-description">
        Passionate Full-Stack Developer with a strong foundation in modern web technologies and backend systems.
        Quick learner, highly adaptable, and committed to writing clean, maintainable code.
        Thrives in collaborative environments and delivers reliable, scalable solutions.
      </p>

      <div class="buttons-group">
        <a href="https://github.com/LyneQ" target="_blank" ><Badge class="url-link who-btn" text="Learn more" /> </a>
       <!-- <a href="/public/resume" download><Badge class="url-link who-btn" text="Get resume" /> </a> -->
      </div>
    </div>

    <Badge
        class="badge badge--top absolute"
        text="Tech enjoyer"
        color="secondary"
        animate
        reverse
    />
    <Badge
        class="badge badge--right absolute"
        text="Resilient Mind"
        color="primary"
        animate
    />
    <Badge
        class="badge badge--bottom-right absolute"
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
  width: 40vw;

  @media (max-width: 1300px) {
    width: fit-content;
  }

  @include mobile-display {
    width: 100%;
  }
}
.who-wrapper {
  font-size: 1.5rem;

  @media (max-width: 1300px) {
    width: 70vw;
    margin: 0 auto;
  }

  h2, .human-name {
    font-weight: 600;
    line-height: 1;
    font-size: 4rem;
  }
}

.who-description {
  margin: 1rem 0;
  font-size: 1.2rem;
  line-height: 1.5;
  width: 75%;
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

a:has(.who-btn) {
  padding: 0;
  &:hover {
    text-decoration: none;
    background-color: transparent;
  }
}
.who-btn {
  margin: 1rem 0;
  padding: 0.3rem 1rem;
  cursor: pointer;
  font-size: 1rem;
}


.buttons-group {
  display: flex;
  gap: 0.5rem;
}

.absolute{
  position: absolute;
}

.url-link, .url-link:hover {
  transition: 0.1s;
}
.url-link:hover {
  background-color: $c-white-opacity;
  box-shadow: 0 0 10px $c-white-opacity;
  font-size: 1rem;
}

@media (max-width: 1300px) {
  .badge:not(.who-btn) { display: none; }
}

.badge--top {
  top: -5%;
  left: 12%;
  transform: translateX(-50%);
}

.badge--right {
  top: 12%;
  right: 5%;
  transform: translateY(-50%);
}

.badge--bottom-right {
  top: 35%;
  right: 0;
}

</style>