<script lang="ts" setup>
const { data: calendar } = useAsyncData('calendar', () => queryContent('/calendar-2023').findOne())
const { data: sponsors } = useAsyncData('sponsors', () => queryContent('/sponsors').findOne())

const nextRace = computed(() => {
  if (!calendar.value)
    return null

  const now = new Date().getTime()
  const sortedCalendar = [...calendar.value.body]
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
    <Sponsors :data="sponsors ? sponsors.body : []" />
    <Contact />
  </div>
</template>
