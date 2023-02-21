import { SitemapStream, streamToPromise } from 'sitemap'
import { serverQueryContent } from '#content/server'

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
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: 'https://tomasdebacker.be',
  })
  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'weekly',
    })
  }

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
