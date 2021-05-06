<template>
  <div>
    <nav-bar />
    <main-visual v-if="showMainVisual" />
    <div class="container px-4 sm:px-8 lg:px-0 lg:max-w-screen-md">
      <Nuxt />
    </div>
    <common-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

interface DataType {}

interface MethodType {}

interface ComputedType {
  showMainVisual(): boolean
}

interface PropType {}

export default {
  computed: {
    showMainVisual(): boolean {
      const routeNames: string[] = [
        'index',
        'about',
        'activities',
        'news',
        'support',
        'contact',
        'donation',
        'pro-bono',
        'request',
      ]
      const currentRouteName: string = this.$nuxt.$route.name?.toString()!
      return routeNames.includes(currentRouteName)
    },
  },
} as ThisTypedComponentOptionsWithRecordProps<
  Vue,
  DataType,
  MethodType,
  ComputedType,
  PropType
>
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

:root {
  --primary-orange: #dc4a19;
  --theme-blue: #2274a5;
}

:invalid {
  color: rgba(156, 163, 175, 1);
}

.h2--primary-orange {
  color: var(--primary-orange);
  border-color: var(--primary-orange);
}
</style>
