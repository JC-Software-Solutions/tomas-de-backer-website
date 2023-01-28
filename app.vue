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
  ],
  meta: [
    ...(i18nHead.meta ?? []),
    {
      hid: 'description',
      name: 'description',
      content: $i18n.t('seo.description'),
    },
  ],
  title: $i18n.t('seo.title'),
})
</script>

<template>
  <div relative min-h-screen>
    <AppHeader />
    <main pb-10 container mx-auto>
      <NuxtPage />
    </main>
    <AppFooter absolute bottom-0 w-full />
  </div>
</template>
