export default defineNuxtConfig({
  ssr: false,

  typescript: {
    shim: false,
    strict: true,
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
    'nuxt-windicss',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
  ],

  content: {
  },

  i18n: {
    defaultLocale: 'nl',
    strategy: 'prefix_except_default',
    locales: [
      {
        name: 'Nederlands',
        code: 'nl',
        iso: 'nl-BE',
        file: 'nl-BE.json',
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json',
      },
      {
        name: 'Français',
        code: 'fr',
        iso: 'fr-BE',
        file: 'fr-BE.json',
      },
    ],
    lazy: true,
    langDir: 'locales',
    detectBrowserLanguage: {
      fallbackLocale: 'en',
    },
  },

  googleFonts: {
    families: {
      Montserrat: [100, 300, 400],
      Oxanium: [700],
    },
  },
})
