const createSitemapRoutes = async () => {
  const routes = []
  const { $content } = require('@nuxt/content')
  const articles = await $content('news').fetch()
  for (const article of articles) {
    routes.push(`news/${article.slug}`)
  }
  return routes
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NPO法人 MOTTAI',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content:
          'MOTTAIは「当たり前の裏側にアクセスしやすい社会を創る」をビジョンに掲げて活動するNPO法人です。',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'NPO法人 MOTTAI | 公式サイト',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'NPO法人 MOTTAI',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'ja_JP',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://npo-mottai.org',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'MOTTAIは「当たり前の裏側にアクセスしやすい社会を創る」をビジョンに掲げて活動するNPO法人です。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/image/ogp.png',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'NPO法人 MOTTAI',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'MOTTAIは「当たり前の裏側にアクセスしやすい社会を創る」をビジョンに掲げて活動するNPO法人です。',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/image/ogp.png',
      },
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/image/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: '/image/favicon-32x32.png',
      },
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: '/image/favicon-16x16.png',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-lazy-load',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // 404 ページの設定
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue'),
      })
    },
  },

  // Google Analytics の設定
  googleAnalytics: {
    id: 'UA-132467750-2',
  },

  // sitemap の生成
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://npo-mottai.org',
    // generate: true,
    exclude: ['/404'],
    routes: createSitemapRoutes,
  },
}
