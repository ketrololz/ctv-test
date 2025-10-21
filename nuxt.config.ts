export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
    'nuxt-tiptap-editor',
    '@pinia/nuxt',
  ],
  tiptap: {
    prefix: 'Tiptap',
  },
  fonts: {
    families: [
      { name: 'SourceSans3', src: 'public/fonts/SourceSans3-SemiBold.ttf' },
      { name: 'FuturaPT', src: 'public/fonts/FuturaPT-Book.ttf' },
    ],
  },
  nitro: {
    routeRules: {
      '/api/test/materials/**': {
        proxy: 'https://naukatv.ru/api/test/materials/**',
      },
    },
  },
});