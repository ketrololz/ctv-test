export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
    'nuxt-tiptap-editor',
  ],
  tiptap: {
    prefix: 'Tiptap',
  },
  nitro: {
    routeRules: {
      '/api/test/materials/**': {
        proxy: 'https://naukatv.ru/api/test/materials/**',
      },
    },
  },
});
