<script lang="ts" setup>
const { data: results2022 } = useAsyncData('results2022', async () => queryContent('/results-2022').findOne())
const { data: results2023 } = useAsyncData('results2023', async () => queryContent('/results-2023').findOne())

const { $i18n } = useNuxtApp()
useSeoMeta({
  title: $i18n.t('seo.results-title', { separator: '|' }),
  description: $i18n.t('seo.results-description'),
})
</script>

<template>
  <div class="container flex flex-col mx-auto pt-4 text-center">
    <div class="divide-y-reverse">
      <h3 class="text-center text-4xl capitalize">
        {{ $t('results') }} (2023)
      </h3>

      <div v-for="result in results2023?.body" :key="result.title" class="my-5 justify-center">
        <ResultItem :result="result" class="mx-auto" />
      </div>
    </div>

    <div class="border-t-2 border-top border-secondary pt-4">
      <h3 class="text-center text-4xl capitalize">
        {{ $t('results') }} (2022)
      </h3>

      <div v-for="result in results2022?.body" :key="result.title" class="my-5 justify-center">
        <ResultItem :result="result" class="mx-auto" />
      </div>
    </div>
  </div>
</template>
