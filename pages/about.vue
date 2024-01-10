<script lang="ts" setup>
const { $i18n } = useNuxtApp()

const { data: palmares } = useAsyncData('palmares', async () => queryContent(`/${$i18n.localeProperties.value.code}/palmares`).findOne())

useSeoMeta({
  title: $i18n.t('seo.about-title', { separator: '|' }),
  description: $i18n.t('seo.about-description'),
})
</script>

<template>
  <div class="container flex flex-col mx-auto p-4">
    <article class="mt-10">
      <h1 class="font-sans font-weight-bold text-xl md:text-4xl py-2 capitalize" data-aos="fade-right">
        {{ $t('about-full-title') }}
      </h1>

      <section class="flex flex-wrap justify-center xl:justify-around gap-5 md:mt-5 lg:mt-10">
        <div class="w-full lg:w-3/5 my-auto" data-aos="fade-right">
          <p class="ma-5">
            {{ $t('about-p1') }}
          </p>
          <p>
            {{ $t('about-p2') }}
          </p>
        </div>
        <div class="my-auto mx-auto">
          <NuxtPicture
            src="/img/tomas/tomas-eddy-karting.jpg"
            format="webp"
            :img-attrs="{
              'class': 'article-img',
              'alt': $t('img-alt.tomas-eddy'),
              'data-aos': 'fade-left',
            }"
          />
        </div>
      </section>

      <section class="flex flex-wrap flex-col-reverse xl:flex-row justify-center xl:justify-around gap-5 md:mt-5 lg:mt-10">
        <div class="my-auto mx-auto">
          <NuxtPicture
            src="/img/action/karting.jpg"
            format="webp"
            :img-attrs="{
              'class': 'article-img',
              'alt': $t('img-alt.karting'),
              'data-aos': 'fade-right',
            }"
          />
        </div>
        <div class="w-full lg:w-3/5 my-auto mx-auto" data-aos="fade-left">
          <p class="ma-5">
            {{ $t('about-p3') }}
          </p>
          <p>
            {{ $t('about-p4') }}
          </p>
        </div>
      </section>

      <section class="flex flex-wrap justify-center xl:justify-around gap-5 md:mt-5 lg:mt-10">
        <div class="w-full lg:w-3/5 my-auto mx-auto" data-aos="fade-right">
          <p>
            {{ $t('about-p5') }}
          </p>
          <p>
            {{ $t('about-p6') }}
          </p>
          <p>
            {{ $t('about-p7') }}
          </p>
        </div>
        <div class="my-auto mx-auto">
          <NuxtPicture
            src="/img/action/mazda.jpg"
            format="webp"
            :img-attrs="{
              'class': 'article-img',
              'alt': $t('img-alt.mazda'),
              'data-aos': 'fade-left',
            }"
          />
        </div>
      </section>

      <section class="flex flex-wrap flex-col-reverse xl:flex-row justify-center xl:justify-around gap-5 md:mt-5 lg:mt-10">
        <div class="my-auto mx-auto">
          <NuxtPicture
            src="/img/action/fiesta-1.jpg"
            format="webp"
            :img-attrs="{
              'class': 'article-img',
              'alt': $t('img-alt.fiesta'),
              'data-aos': 'fade-left',
            }"
          />
        </div>
        <div class="w-full lg:w-3/5 my-auto mx-auto" data-aos="fade-left">
          <p>
            {{ $t('about-p8') }}
          </p>
          <p>
            {{ $t('about-p9') }}
          </p>
          <p>
            {{ $t('about-p10') }}
          </p>
          <p class="text-secondary font-weight-bold text-xl">
            {{ $t('about-to-the-top') }}
          </p>
        </div>
      </section>

      <div class="flex flex-row flex-wrap justify-between items-center mt-5 gap-y-5">
        <div class="w-full md:w-1/2 md:px-5">
          <NuxtPicture
            src="/img/tomas/tomas-friends-family.jpg"
            format="webp"
            :img-attrs="{
              'class': 'rounded-lg shadow-lg w-full',
              'alt': $t('img-alt.tomas-family'),
              'data-aos': 'fade-right',
            }"
          />
        </div>
        <div class="w-full md:w-1/2 md:px-5">
          <NuxtPicture
            src="/img/tomas/tomas-sarah.jpg"
            format="webp"
            :img-attrs="{
              'class': 'rounded-lg shadow-lg',
              'alt': $t('img-alt.tomas-sarah'),
              'data-aos': 'fade-left',
            }"
          />
        </div>
      </div>
    </article>

    <div class="flex flex-wrap mt-16 align-center">
      <div class="w-full xl:w-1/2 text-sm md:text-base" data-aos="fade-right">
        <h3 class="font-sans font-weight-bold text-xl md:text-4xl py-2 capitalize" data-aos="fade-right">
          {{ $t('palmares') }}
        </h3>
        <ul class="ml-5">
          <li v-for="{ year, title } in palmares?.body" :key="title" class="flex flex-col flex-wrap md:flex-row my-3 md:my-1">
            <div class="font-weight-bold text-secondary inline-block w-28">
              {{ year }}
            </div>
            <div>
              {{ title }}
            </div>
          </li>
        </ul>
      </div>

      <div class="w-full xl:w-1/2" data-aos="fade-left">
        <NuxtPicture
          src="/img/tomas/tomas-p1.jpg"
          format="webp"
          :img-attrs="{
            class: 'rounded-lg shadow-lg md:float-right mt-24 md:max-w-600px w-auto',
            alt: $t('img-alt.tomas-p1'),
          }"
        />
      </div>
    </div>
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
