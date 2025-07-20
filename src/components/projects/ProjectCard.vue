<script setup lang="ts">

interface ProjectCardProps {
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const props = withDefaults(defineProps<ProjectCardProps>(), {
  title: 'Project Title',
  imageSrc: 'https://placeholder.lyneq.tech/400x250?label=project',
  imageAlt: 'Project Image',
});
</script>

<template>
  <div class="project-card">
    <div class="project-card-image">
      <img :src="props.imageSrc" :alt="props.imageAlt">
    </div>
    <div class="project-card-content">
      <h3 class="project-card-title">{{ props.title }}</h3>
      <div class="project-card-description">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use '@/assets/_variables' as *;

  .project-card {
    width: 100%;
    border-radius: $v-border-radius;
    background: $c-black-soft;
    background-image: linear-gradient(35deg, hsl(258deg 39.34% 6.89%), 80%, hsla(252, 67%, 12%, 0.6));
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    border: $v-border-width $v-border-style $c-divider-dark-1;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
    margin-bottom: 2rem;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }

    &-image {
      width: 100%;
      height: 250px;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
        
        &:hover {
          transform: scale(1.05);
        }
      }
    }

    &-content {
      padding: 1.5rem;
    }

    &-title {
      font-size: 1.75rem;
      font-weight: 600;
      color: $c-text-dark-1;
      margin-bottom: 1rem;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    &-description {
      font-size: 1rem;
      line-height: 1.6;
      color: $c-text-dark-2;
    }
  }
</style>