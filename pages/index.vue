<script lang="ts" setup>
const { data } = useAsyncData(async () => {
  const [
    sponsors,
    calendar,
  ] = await Promise.all([
    fetch('/data/sponsors.json').then(res => res.json()),
    fetch('/data/calendar-2023.json').then(res => res.json()),
  ])
  return {
    sponsors,
    calendar,
  }
})

const nextRace = computed(() => {
  if (!data.value?.calendar)
    return null

  const now = new Date().getTime()
  const sortedCalendar = [...data.value?.calendar]
  sortedCalendar.sort((a, b) => {
    const dateA = new Date(a.dates[0]).getTime()
    const dateB = new Date(b.dates[0]).getTime()

    const distA = Math.abs(now - dateA)
    const distB = Math.abs(now - dateB)
    return distA - distB
  })
  const [next] = sortedCalendar.filter((cal) => {
    const calDate = new Date(cal.dates[0]).getTime()
    return calDate - now > 0
  })

  return next
})
</script>

<template>
  <Hero />
  <div
    class="
      container
      mx-auto
    "
  >
    <About />
    <Results />
    <NextRace v-if="nextRace" :next-race="nextRace" />
    <Sponsors :data="data?.sponsors" />
    <Contact />
  </div>
</template>
