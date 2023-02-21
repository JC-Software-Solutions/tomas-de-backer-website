import messages from './locales'

export default defineNuxtConfig({
  ssr: false,

  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },

  css: [
    '~/assets/css/reduced-motion.css',
  ],

  typescript: {
    shim: false,
    strict: true,
  },

  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/i18n',
    'nuxt-windicss',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
  ],

  googleFonts: {
    families: {
      Montserrat: [100, 300, 400],
      Oxanium: [700],
    },
  },

  i18n: {
    defaultLocale: 'nl',
    strategy: 'prefix_except_default',
    baseUrl: 'https://tomasdebacker.be',
    locales: [
      {
        name: 'Nederlands',
        code: 'nl',
        iso: 'nl-BE',
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
      },
      {
        name: 'Français',
        code: 'fr',
        iso: 'fr-BE',
      },
    ],
    detectBrowserLanguage: {
      fallbackLocale: 'en',
    },
    vueI18n: {
      messages,
    },
  },

  image: {
    provider: 'netlify',
  },
})
