<script lang="ts" setup>
const { $i18n } = useNuxtApp()

useSeoMeta({
  title: $i18n.t('seo.tdb-racing-title', { separator: '|' }),
  description: $i18n.t('seo.tdb-racing-description'),
})
</script>

<template>
  <div class="container flex flex-col mx-auto p-4">
    <article class="mt-10">
      <span class="inline-flex items-center justify-center">
        <h1 class="font-sans font-weight-bold text-xl md:text-4xl py-2 capitalize" data-aos="fade-right">
          {{ $t('tdb-racing') }}
        </h1>
        <img src="/img/logo/TDB-logo.svg" alt="TDB Racing Logo" class="w-20 ml-5 mt-2 md:mt-0" data-aos="fade-left">
      </span>

      <section class="flex flex-wrap justify-center xl:justify-around gap-5 md:mt-5 lg:mt-10">
        <div class="w-full lg:w-3/5 my-auto" data-aos="fade-right">
          <p class="ma-5">
            {{ $t('tdb-racing-p1') }}
          </p>
          <p>
            {{ $t('tdb-racing-p2') }}
          </p>
          <p>
            {{ $t('tdb-racing-p3') }}
          </p>
        </div>
        <div class="my-auto mx-auto mb-5">
          <NuxtPicture
            src="/img/tomas/tomas-eddy.jpg"
            format="webp"
            :img-attrs="{
              'class': 'article-img',
              'alt': $t('img-alt.tomas-eddy'),
              'data-aos': 'fade-left',
            }"
          />
        </div>
      </section>

      <section class="flex flex-wrap justify-center xl:justify-around gap-5 md:mt-5 lg:mt-10">
        <div class="my-auto mx-auto">
          <NuxtPicture
            src="/img/tomas/tomas-eddy-2.jpg"
            format="webp"
            :img-attrs="{
              'class': 'article-img',
              'alt': $t('img-alt.tomas-eddy-2'),
              'data-aos': 'fade-right',
            }"
          />
        </div>
        <div class="my-auto mx-auto">
          <NuxtPicture
            src="/img/tomas/coaching.jpg"
            format="webp"
            :img-attrs="{
              'class': 'article-img',
              'alt': $t('img-alt.coaching'),
              'data-aos': 'fade-left',
            }"
          />
        </div>
      </section>
    </article>
  </div>
</template>

<style>
.article-img {
  @apply rounded-lg shadow-lg mx-auto md:max-w-400px 2xl:max-w-500px w-auto ma-5
}

article p {
  @apply my-4;
}
</style>
