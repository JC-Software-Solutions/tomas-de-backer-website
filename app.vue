<script lang="ts" setup>
import AOS from 'aos'

onMounted(() => {
  AOS.init({
    duration: 1000,
    delay: 150,
  })
})

const htmlClasses = [
  'scroll-smooth',
]

const bodyClasses = [
  'antialiased',
  'bg-primary',
  'text-white',
  'bg-gradient-to-bl',
  'from-primary',
  'via-secondary/5',
  'to-secondary/30',
]

const { $localeHead, $i18n } = useNuxtApp()
const i18nHead = $localeHead({ addSeoAttributes: true })
useHead({
  htmlAttrs: {
    ...i18nHead.htmlAttrs,
    class: htmlClasses.join(' '),
  },
  bodyAttrs: {
    class: bodyClasses.join(' '),
  },
  link: [
    ...(i18nHead.link ?? []),
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#0f172a' },
  ],
  meta: [
    ...(i18nHead.meta ?? []),
    {
      hid: 'description',
      name: 'description',
      content: $i18n.t('seo.description'),
    },
    {
      name: 'theme-color',
      content: '#0f172a',
    },
  ],
  title: $i18n.t('seo.title'),
})

const nuxtApp = useNuxtApp()
const loading = ref(false)
nuxtApp.hook('page:start', () => {
  loading.value = true
})
nuxtApp.hook('page:finish', () => {
  loading.value = false
})
</script>

<template>
  <div relative min-h-screen>
    <FullScreenLoader v-if="loading" />

    <AppHeader />
    <main pb-10 container mx-auto>
      <NuxtPage />
    </main>
    <AppFooter absolute bottom-0 w-full />
  </div>
</template>
