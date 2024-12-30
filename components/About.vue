<template>
  <section class="flex justify-center items-center flex-wrap md:flex-nowrap flex-row text-white py-20">
    <div class="w-full md:w-2/5">
      <div class="mt-12 md:mt-0 mx-auto  p-4 xs:p-0 md:p-12" data-aos="fade-right">
        <NuxtPicture
          src="/img/tomas/tomas-1.jpg"
          format="webp"
          :img-attrs="{
            class: 'rounded-lg shadow-lg max-h-100 md:max-h-500px mx-auto m-4',
            alt: $t('img-alt.tomas'),
          }"
        />
      </div>
    </div>
    <div class="w-full md:w-2/3 px-4" data-aos="fade-left">
      <h3 class="font-sans font-weight-bold text-2xl py-2">
        {{ $t('about-excerpt-title') }}
      </h3>

      <p class="font-sans font-weight-light w-full md:w-4/5">
        {{ $t('about-excerpt') }}
      </p>

      <div class="text-center md:text-left">
        <NuxtLink to="/about" class="btn my-5 mx-auto">
          {{ $t('about-discover-full') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
