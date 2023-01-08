<script lang="ts" setup>
const sponsors = ref([{
  name: 'JC Software Solutions',
  url: 'https://www.jcss.be/',
  image: '/img/sponsors/jcss.png',
}, {
  name: 'JC Software Solutions',
  url: 'https://www.jcss.be/',
  image: '/img/sponsors/jcss.png',
}, {
  name: 'JC Software Solutions',
  url: 'https://www.jcss.be/',
  image: '/img/sponsors/jcss.png',
}, {
  name: 'JC Software Solutions',
  url: 'https://www.jcss.be/',
  image: '/img/sponsors/jcss.png',
}, {
  name: 'JC Software Solutions',
  url: 'https://www.jcss.be/',
  image: '/img/sponsors/jcss.png',
}, {
  name: 'JC Software Solutions',
  url: 'https://www.jcss.be/',
  image: '/img/sponsors/jcss.png',
}, {
  name: 'JC Software Solutions',
  url: 'https://www.jcss.be/',
  image: '/img/sponsors/jcss.png',
}, {
  name: 'JC Software Solutions',
  url: 'https://www.jcss.be/',
  image: '/img/sponsors/jcss.png',
}, {
  name: 'JC Software Solutions',
  url: 'https://www.jcss.be/',
  image: '/img/sponsors/jcss.png',
}, {
  name: 'JC Software Solutions',
  url: 'https://www.jcss.be/',
  image: '/img/sponsors/jcss.png',
}])
</script>

<template>
  <section id="sponsors" class="px-4">
    <h3 class="font-sans font-weight-bold text-xl md:text-4xl py-2">
      Sponsors
    </h3>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
      <NuxtLink v-for="sponsor in sponsors" :key="sponsor.name" :href="sponsor.url" target="_blank" rel="noopener noreferrer">
        <img :src="sponsor.image" :alt="sponsor.name">
      </NuxtLink>
    </div>

    <div class="text-center">
      <NuxtLink to="#contact" class="btn my-5">
        Get in touch.
      </NuxtLink>
    </div>
  </section>
</template>
