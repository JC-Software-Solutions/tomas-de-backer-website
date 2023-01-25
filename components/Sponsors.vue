<script lang="ts" setup>
interface Sponsor {
  name: string;
  url: string;
  image: string;
}

defineProps<{
  data?: Sponsor[];
}>()
</script>

<template>
  <section id="sponsors" class="px-4">
    <h3 class="font-sans font-weight-bold text-xl md:text-4xl py-2">
      Sponsors
    </h3>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
      <NuxtLink v-for="sponsor in data" :key="sponsor.name" :href="sponsor.url" target="_blank" rel="noopener noreferrer" class="mx-5 my-5">
        <img :src="sponsor.image" :alt="sponsor.name" class="mx-auto">
      </NuxtLink>
    </div>

    <div class="text-center">
      <NuxtLink to="#contact" class="btn my-5">
        Get in touch.
      </NuxtLink>
    </div>
  </section>
</template>
