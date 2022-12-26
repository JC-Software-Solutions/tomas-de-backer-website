// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  typescript: {
    shim: false,
    strict: true,
  },

  // css: [
  //   'vue3-carousel/dist/carousel.css',
  // ],

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
