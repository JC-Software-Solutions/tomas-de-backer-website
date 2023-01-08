<script lang="ts" setup>
const { data } = useAsyncData(async () => {
  const calendar = await fetch('/data/calendar-2023.json').then(res => res.json())
  return calendar
})
</script>

<template>
  <div class="container flex flex-col mx-auto pt-4">
    <h3 class="text-center text-4xl">
      My 2023 Season Calendar
    </h3>

    <CalendarEntry v-for="cal in data" :key="cal.title" :data="cal" class="my-5" />
  </div>
</template>
