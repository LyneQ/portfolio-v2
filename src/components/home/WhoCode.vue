<script setup lang="ts">
import { defineProps, computed, ref, onMounted, watch } from 'vue'
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import '@/assets/prism-atom-dark.css'

const props = defineProps({
  title: { type: String, default: 'Untitled.js' },
  code:  { type: String, default: '' },
})

const isMinimized = ref(false)
const container    = ref<HTMLElement|null>(null)

const highlighted = computed(() =>
    Prism.highlight(props.code, Prism.languages.javascript, 'javascript')
)

function onMinimize() {
  isMinimized.value = !isMinimized.value
}
</script>

<template>
  <div class="code-window" :class="{ minimized: isMinimized }" ref="container">
    <div class="titlebar">
      <span class="title">{{ title }}</span>
      <div class="window-controls">
        <button class="min-btn" @click="onMinimize">–</button>
        <button class="fs-btn">▢</button>
        <button class="close-btn">×</button>
      </div>
    </div>
    <div class="code-content" v-show="!isMinimized">
      <pre class="language-javascript">
        <code v-html="highlighted"></code>
      </pre>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/_variables' as *;

.code-window {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: $v-border-width $v-border-style $c-primary-soft;
  border-radius: $v-border-radius;
  background-color: $color-background;
  color: inherit;
  overflow: hidden;
  max-width: 100%;
  max-height: 45vh;
  height: fit-content;

  @media (prefers-color-scheme: dark) {
    background-color: $c-black;
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
    background-color: rgba($c-primary-mute, 0.3);

    min-width: 40vw;
    width: 100%;

    @include mobile-display{
      width: 90vw;
    }
    @media (prefers-color-scheme: dark) {
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
    height: 100%;
    max-height: 91%;
    overflow: auto;
    pre {
      margin: 0;
      padding-top: 0;
      line-height: 1.4;
      font-family: 'Fira Code', monospace;
      font-size: 1rem;
      background-color: #200f3e !important;

      code {
        color: inherit;
      }
    }
  }
}
</style>