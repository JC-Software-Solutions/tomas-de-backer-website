<script lang="ts" setup>
const { data: calendar } = useAsyncData('calendar', () => queryContent('/calendar-2023').findOne())
</script>

<template>
  <div class="container flex flex-col mx-auto pt-4">
    <h3 class="text-center text-4xl">
      My 2023 Season Calendar
    </h3>

    <CalendarEntry v-for="cal in calendar?.body" :key="cal.title" :data="cal" class="my-5" />
  </div>
</template>
