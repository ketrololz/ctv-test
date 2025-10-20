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
  ],
  fonts: {
    families: [
      { name: 'Source Sans 3', provider: 'google', weights: [400, 600, 700] },
      { name: 'Futura PT', src: 'public/fonts/FuturaCyrillicBook.ttf' },
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
