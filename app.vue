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
  htmlAttrs: {
    lang: 'en',
    class: htmlClasses.join(' '),
  },
  bodyAttrs: {
    class: bodyClasses.join(' '),
  },
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
