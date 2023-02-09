<script lang="ts" setup>
const { $i18n } = useNuxtApp()
useSeoMeta({
  title: $i18n.t('seo.results-title', { separator: '|' }),
  description: $i18n.t('seo.results-description'),
})
</script>

<template>
  <h1>Resultaten</h1>
</template>
