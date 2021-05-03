<template>
  <div>
    <nav-bar />
    <main-visual />
    <Nuxt />
    <common-footer />
  </div>
</template>

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

.h2--primary-orange {
  color: var(--primary-orange);
  border-color: var(--primary-orange);
}
</style>
