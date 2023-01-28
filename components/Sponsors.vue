<script lang="ts" setup>
// import { vIntersectionObserver } from '@vueuse/components'

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
  <section id="sponsors" class="px-4 py-20">
    <h3 class="font-sans font-weight-bold text-xl md:text-4xl py-2 capitalize" data-aos="fade-right">
      {{ $t('sponsors') }}
    </h3>

    <div class="sponsor-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
      <NuxtLink v-for="sponsor in data" :key="sponsor.name" :to="sponsor.url" target="_blank" rel="noopener noreferrer" class="p-2 mx-5 my-5" data-aos="zoom-in">
        <NuxtImg :src="sponsor.image" format="webp" :alt="`${sponsor.name} sponsor logo`" class="mx-auto" />
      </NuxtLink>
    </div>

    <div class="text-center" data-aos="fade-up">
      <NuxtLink to="#contact" class="btn my-5">
        {{ $t('get-in-touch') }}.
      </NuxtLink>
    </div>
  </section>
</template>
