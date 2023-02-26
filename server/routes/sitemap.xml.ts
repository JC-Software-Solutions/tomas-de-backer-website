import { SitemapStream, streamToPromise } from 'sitemap'

const routes = [
  '/',
  '/about',
  '/calendar',
  '/results',
]

const locales = [
  '', // default = nl
  '/en',
  '/fr',
]

export default defineEventHandler(async (event) => {
  const sitemap = new SitemapStream({
    hostname: 'https://tomasdebacker.be',
  })
  routes.forEach((route) => {
    locales.forEach((locale) => {
      sitemap.write({
        url: `${locale}${route}`,
        changefreq: 'weekly',
      })
    })
  })

  sitemap.end()
  return streamToPromise(sitemap)
})
