<script lang="ts" setup>
const { data: results } = useAsyncData('results', async () => queryContent('/results-2022').findOne())

const { $i18n } = useNuxtApp()
useSeoMeta({
  title: $i18n.t('seo.results-title', { separator: '|' }),
  description: $i18n.t('seo.results-description'),
})
</script>

<template>
  <div class="container flex flex-col mx-auto pt-4 text-center">
    <h3 class="text-center text-4xl capitalize">
      {{ $t('results') }} (2022)
    </h3>

    <div v-for="result in results?.body" :key="result.title" class="my-5 justify-center">
      <ResultItem :result="result" class="mx-auto" />
    </div>
  </div>
</template>
