<script setup>
const { data: results2022 } = useAsyncData('results2022', async () => queryContent('/results-2022').findOne())
const { data: results2023 } = useAsyncData('results2023', async () => queryContent('/results-2023').findOne())
const { data: results2024 } = useAsyncData('results2024', async () => queryContent('/results-2024').findOne())

const openSections = ref({
  2024: true,
  2023: false,
  2022: false,
})

const toggleSection = (year) => {
  openSections.value[year] = !openSections.value[year]
}

const { $i18n } = useNuxtApp()
useSeoMeta({
  title: $i18n.t('seo.results-title', { separator: '|' }),
  description: $i18n.t('seo.results-description'),
})
</script>

<template>
  <div class="container flex flex-col mx-auto pt-4 text-center min-h-[calc(100vh-100px)]">
    <div v-for="year in [2024, 2023, 2022]" :key="year" class="border-b-2 border-secondary py-5">
      <button
        class="w-full flex items-center justify-center gap-2 hover:opacity-80 transition-opacity"
        @click="toggleSection(year)"
      >
        <h3 class="text-center text-4xl capitalize">
          {{ $t('results') }} ({{ year }})
        </h3>
        <span class="transform transition-transform" :class="{ 'rotate-180': !openSections[year] }">
          ▼
        </span>
      </button>

      <Transition name="slide">
        <div v-if="openSections[year]" class="overflow-hidden">
          <div v-if="year === 2024 && results2024?.body">
            <div v-for="result in results2024.body" :key="result.title" class="my-5 justify-center">
              <ResultItem :result="result" class="mx-auto" />
            </div>
          </div>
          <div v-if="year === 2023 && results2023?.body">
            <div v-for="result in results2023.body" :key="result.title" class="my-5 justify-center">
              <ResultItem :result="result" class="mx-auto" />
            </div>
          </div>
          <div v-if="year === 2022 && results2022?.body">
            <div v-for="result in results2022.body" :key="result.title" class="my-5 justify-center">
              <ResultItem :result="result" class="mx-auto" />
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
