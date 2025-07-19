<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import Badge from "@/components/utils/Badge.vue";

interface BadgeItem {
  text: string;
  iconName: string;
  color?: string;
}

interface SkillsCardProps {
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
  badges?: BadgeItem[];
}

const props = withDefaults(defineProps<SkillsCardProps>(), {
  title: 'Title',
  imageSrc: 'https://placeholder.lyneq.tech/100x100?label=placeholder',
  imageAlt: 'placeholder',
  badges: () => [
    { text: 'TypeScript', iconName: 'IconTypescript', color: 'primary' },
    { text: 'JavaScript', iconName: 'IconJavascript', color: 'secondary' },
    { text: 'Go', iconName: 'IconGo', color: 'tertiary' },
    { text: 'Vue.js', iconName: 'IconVue', color: 'primary' },
    { text: 'Nuxt.js', iconName: 'IconNuxt', color: 'primary' },
    { text: 'Svelte', iconName: 'IconSvelte', color: 'secondary' },
    { text: 'React', iconName: 'IconReact', color: 'tertiary' },
    { text: 'Next.js', iconName: 'IconNext', color: 'tertiary' },
    { text: 'Arch', iconName: 'IconArch', color: 'white' },
    { text: 'Prisma', iconName: 'IconPrisma', color: 'secondary' },
    { text: 'Debian', iconName: 'IconDebian', color: 'white' }
  ]
});
</script>

<template>
  <div class="card">
    <div class="card-head">
      <img :src="props.imageSrc" :alt="props.imageAlt" class="card-head-img">
      <h3 class="card-head-title">{{ props.title }}</h3>
    </div>
    <div class="card-body">
      <Badge 
        v-for="(badge, index) in props.badges" 
        :key="index"
        :text="badge.text" 
        :icon-name="badge.iconName" 
        :color="badge.color" 
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use '@/assets/_variables' as *;

  .card {
    width: 100%;
    padding: 1.5rem;
    border-radius: $v-border-radius;
    background: $c-black-soft;
    background-image: linear-gradient(35deg, hsl(258deg 39.34% 6.89%), 80%, hsla(252, 67%, 12%, 0.6));
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    border: $v-border-width $v-border-style $c-divider-dark-1;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: fit-content;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }

    &-head {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: $v-border-width $v-border-style $c-divider-dark-1;

      &-img {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        border: $v-border-width-small $v-border-style $c-primary-soft;
        box-shadow: 0 0 0 4px rgba($c-primary, 0.2);
        padding: 5px;
      }

      &-title {
        font-size: 1.75rem;
        font-weight: 600;
        color: $c-text-dark-1;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      }
    }

    &-body {
      display: grid;
      grid-template-columns: repeat(3, minmax(100px, 1fr));
      gap: 0.75rem;
      
      @include mobile-display {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
</style>