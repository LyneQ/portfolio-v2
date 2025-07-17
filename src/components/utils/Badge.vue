<script setup lang="ts">
import { defineProps, computed } from 'vue'

// @ts-ignore
const iconModules = import.meta.glob('@/components/icons/*.vue', { eager: true })
const iconsMap: Record<string, any> = {}
for (const path of Object.keys(iconModules)) {
  const name = path.split('/').pop()!.replace('.vue', '')
  iconsMap[name] = iconModules[path].default
}

const props = defineProps<{
  text: string
  animate?: boolean
  reverse?: boolean
  color?: string       // "primary", "secondary", "white",
  IconName?: string
}>()

const Icon = computed(() => props.IconName ? iconsMap[props.IconName] : null)
const colorClass = computed(() => props.color ? `badge--${props.color}` : '')
</script>

<template>
  <span
      class="badge"
      :class="[
      colorClass,
      { 'bounce-up':   props.animate && !props.reverse,
        'bounce-down': props.animate && props.reverse }
    ]"
  >
    <component v-if="Icon" :is="Icon" class="badge-icon" />
    {{ text }}
  </span>
</template>

<style scoped lang="scss">
@use '@/assets/_variables' as *;

// default gray
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  border: $v-border-width $v-border-style #b0b0b0;
  border-radius: $v-border-radius-circle;
  font-weight: 600;
  font-size: 0.875rem;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  will-change: transform;
}


.badge--primary {
  background-color: $c-primary-opacity;
  border-color:   $c-primary-soft;
  color:          $c-primary;
}
.badge--secondary {
  background-color: rgba($c-secondary, 0.11);
  border-color:     $c-secondary-soft;
  color:            $c-secondary;
}
.badge--tertiary {
  background-color: rgba($c-tertiary, 0.11);
  border-color:     $c-tertiary-soft;
  color:            $c-tertiary;
}
.badge--white {
  background-color: $c-white-opacity;
  border-color:     $c-white-soft;
  color:            $c-white;
}
.badge--black {
  background-color: rgba($c-black, 0.11);
  border-color:     $c-black-soft;
  color:            $c-black;
}

.badge-icon {
  width: 1em;
  height: 1em;
  stroke: currentColor;
}

.bounce-up {
  animation: bounce-up 10s ease-in-out infinite;
}
.bounce-down {
  animation: bounce-down 10s ease-in-out infinite;
}

@keyframes bounce-up {
  0%,100% { transform: translateY(0) }
  50%     { transform: translate3d(0, -8px, 0) }
}
@keyframes bounce-down {
  0%,100% { transform: translateY(0) }
  50%     { transform: translate3d(0, 8px, 0) }
}
</style>