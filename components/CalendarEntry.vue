<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
})

const { $i18n } = useNuxtApp()
const locale = computed(() => $i18n.locales.value.find((locale: any) => locale.code === $i18n.locale.value))

function formatWeekendDate(dates: string[]) {
  const startDate = new Date(dates[0])
  const endDate = new Date(dates[dates.length - 1])

  const startDateMonth = startDate.toLocaleString(locale.value.iso, { month: 'long' })
  const endDateMonth = endDate.toLocaleString(locale.value.iso, { month: 'long' })

  const year = startDate.getFullYear()

  let startDay: number | string = startDate.getDate()
  if (startDay < 10)
    startDay = `0${startDay}`

  let endDay: number | string = endDate.getDate()
  if (endDay < 10)
    endDay = `0${endDay}`

  if (startDate.getMonth() === endDate.getMonth())
    return `${startDay}-${endDay} ${startDateMonth} ${year}`

  return `${startDay}-${endDay} ${startDateMonth}-${endDateMonth} ${year}`
}
</script>

<template>
  <div class="flex flex-wrap justify-center md:justify-around items-center">
    <div class="w-full md:w-3/5 mx-auto text-center md:text-right">
      <div class="w-full md:w-1/2 mx-auto" data-aos="fade-right">
        <h4 class="text-secondary text-2xl lg:text-3xl font-weight-bold">
          {{ data.title }}
        </h4>
        <h5 class="font-weight-thin lg:text-xl">
          {{ data.championship }}
        </h5>
        <h5 class="font-weight-light italic lg:text-xl">
          {{ data.track }}
        </h5>

        <p>
          {{ formatWeekendDate(data.dates) }}
        </p>

        <table class="mx-auto md:float-right my-2">
          <template v-if="!data.sessions || data.sessions.length === 0">
            <span class="text-secondary">
              {{ $t('session-times-tba') }}
            </span>
          </template>
          <template v-else>
            <tr v-for="session in data.sessions" :key="session.name">
              <td class="text-secondary pr-4">
                {{ session.name }}
              </td>
              <td class="px-2">
                {{ session.position }}
              </td>
              <td class="text-right pl-2">
                {{ session.kph }}
              </td>
            </tr>
          </template>
        </table>
      </div>
    </div>

    <div class="w-full md:w-2/5" data-aos="fade-left">
      <img class="h-64 mx-auto md:mx-0 py-5 md:h-96" :src="`/img/tracks/${data.trackImg}`" :alt="`${data.track} trackmap`">
    </div>
  </div>
</template>
