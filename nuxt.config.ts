export default defineNuxtConfig({
  ssr: false,

  typescript: {
    shim: false,
    strict: true,
  },

  modules: [
    '@nuxt/content',
    'nuxt-windicss',
    '@nuxtjs/google-fonts',
  ],

  content: {
  },

  googleFonts: {
    families: {
      Montserrat: [100, 300, 400],
      Oxanium: [700],
    },
  },
})
