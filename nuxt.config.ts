export default defineNuxtConfig({
  ssr: false,

  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },

  typescript: {
    shim: false,
    strict: true,
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
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

  content: {
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

  robots: {
    UserAgent: '*',
    Disallow: '',
    SiteMap: 'https://tomasdebacker.be/sitemap.xml',
  },
})
