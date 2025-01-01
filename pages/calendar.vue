<script lang="ts" setup>
// const { data: calendar } = useAsyncData('calendar', () => queryContent('/calendar-2023').findOne())

const { $i18n } = useNuxtApp()
useSeoMeta({
  title: $i18n.t('seo.calendar-title', { separator: '|' }),
  description: $i18n.t('seo.calendar-description'),
})
</script>

<template>
  <div class="container flex flex-col mx-auto pt-4 min-h-[calc(100vh-100px)]">
    <h3 class="text-center text-4xl capitalize">
      {{ $t('calendar') }}
    </h3>

    <p class="uppercase text-secondary text-center pt-5">
      {{ $t('calendar-announced') }}
    </p>
    <!-- <CalendarEntry v-for="cal in calendar?.body" :key="cal.title" :data="cal" class="my-5" /> -->
  </div>
</template>
