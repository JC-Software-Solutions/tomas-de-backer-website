<script lang="ts" setup>
defineProps({
  nextRace: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section id="calendar" class="px-4 py-20">
    <h3 class="font-sans font-weight-bold text-xl md:text-4xl py-2 capitalize" data-aos="fade-right">
      {{ $t('next-race') }}
    </h3>

    <CalendarEntry :data="nextRace" />

    <div class="text-center" data-aos="fade-up">
      <NuxtLink class="btn my-5 mx-auto" to="/calendar">
        {{ $t('see-more') }}.
      </NuxtLink>
    </div>
  </section>
</template>
