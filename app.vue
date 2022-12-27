<script lang="ts" setup>
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

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
  ],
  htmlAttrs: {
    lang: 'en',
    class: htmlClasses.join(' '),
  },
  bodyAttrs: {
    class: bodyClasses.join(' '),
  },
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
  <p v-if="loading" class="text-secondary">
    Loading...
  </p>

  <div relative min-h-screen>
    <AppHeader />
    <main pb-10 container mx-auto>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </main>
    <AppFooter absolute bottom-0 w-full />
  </div>
</template>
