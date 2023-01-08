<script lang="ts" setup>
defineProps({
  nextRace: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section id="calendar" class="px-4">
    <h3 class="font-sans font-weight-bold text-xl md:text-4xl py-2">
      Next Race
    </h3>

    <CalendarEntry :data="nextRace" />

    <div class="text-center">
      <NuxtLink class="btn my-5 mx-auto" to="/calendar">
        See more.
      </NuxtLink>
    </div>
  </section>
</template>
