<template>
  <section id="results" class="px-2 py-20">
    <h3 class="font-sans font-weight-bold text-xl md:text-4xl py-2 capitalize" data-aos="fade-right">
      {{ $t('results') }}
    </h3>

    <ResultCarousel />

    <div class="text-center" data-aos="fade-up">
      <NuxtLink class="btn my-5 mx-auto">
        {{ $t('see-more') }}.
      </NuxtLink>
    </div>
  </section>
</template>
