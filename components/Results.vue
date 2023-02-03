<script lang="ts" setup>
const { data: results } = useAsyncData('results', async () => queryContent('/results-2023').findOne())
</script>

<template>
  <section id="results" class="px-2 py-20">
    <h3 class="font-sans font-weight-bold text-xl md:text-4xl py-2 capitalize" data-aos="fade-right">
      {{ $t('results') }}
    </h3>

    <ClientOnly>
      <ResultCarousel :results="results ? results.body : []" />
    </ClientOnly>

    <div class="text-center" data-aos="fade-up">
      <NuxtLink class="btn my-5 mx-auto">
        {{ $t('check-all-results') }}
      </NuxtLink>
    </div>
  </section>
</template>
