<script setup lang="ts">
import {defineProps, ref} from 'vue'

defineProps({
  title: {type: String, default: 'Untitled.js'},
  code: {type: String, default: ''},
})

const isMinimized = ref(false)
const container = ref<HTMLElement | null>(null)

function onMinimize() {
  isMinimized.value = !isMinimized.value;
}


function onFullscreen() {
  const el = container.value
  if (!el) return

  if (!document.fullscreenElement) {
    el.requestFullscreen()?.catch(() => {
      console.error('Failed to enter fullscreen');
    })
  } else {
    document.exitFullscreen()?.catch(() => {
      console.error('Failed to exit fullscreen');
    })
  }
}
</script>

<template>
  <div
      class="code-window"
      :class="{ minimized: isMinimized }"
      ref="container"
  >
    <div class="titlebar">
      <span class="title">{{ title }}</span>
      <div class="window-controls">
        <button class="min-btn" @click="onMinimize">–</button>
        <button class="fs-btn" @click="onFullscreen">▢</button>
        <button class="close-btn">×</button>
      </div>
    </div>
    <div class="code-content" v-show="!isMinimized">
      <pre><code>{{ code }}</code></pre>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/_variables' as *;

.code-window {
  display: flex;
  flex-direction: column;
  border: $v-border-width $v-border-style $color-border;
  border-radius: $v-border-radius;
  background-color: $color-background;
  color: inherit;
  overflow: hidden;
  max-width: 100%;

  @media (prefers-color-scheme: dark) {
    background-color: $c-black;
    border-color: $c-divider-dark-2;
    color: $c-text-dark-1;
  }

  &.minimized {
    .code-content {
      display: none;
    }
  }

  .titlebar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: $color-background-mute;
    border-bottom: $v-border-width-small $v-border-style $color-border-hover;

    @media (prefers-color-scheme: dark) {
      background-color: $c-black-mute;
      border-bottom-color: $c-divider-dark-1;
    }

    .window-controls {
      display: flex;
      gap: 0.5rem;

      button {
        background: transparent;
        border: none;
        color: inherit;
        font-size: 1rem;
        width: 1.5rem;
        height: 1.5rem;
        padding: 0;
        border-radius: $v-border-radius-small;
        cursor: pointer;
        transition: background-color 0.2s;

        @include hover {
          &:hover {
            background-color: $c-secondary-soft;
          }
        }
      }

      .min-btn {
        font-weight: bold;
      }

      .fs-btn {
        font-size: 0.9rem;
      }

      .close-btn {
        font-size: 1.2rem;
        line-height: 1;
      }
    }
  }

  .code-content {
    background-color: $color-background-soft;
    padding: 1rem;
    height: 100%;
    overflow-x: auto;

    pre {
      margin: 0;
      font-family: 'Fira Code', monospace;
      font-size: 0.9rem;

      code {
        color: inherit;
      }
    }

    @media (prefers-color-scheme: dark) {
      background-color: $c-black-soft;
    }
  }
}
</style>