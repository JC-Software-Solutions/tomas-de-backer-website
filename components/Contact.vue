<template>
  <section id="contact" class="px-4">
    <div class="flex justify-around">
      <div class="hidden w-1/2 md:block">
        <picture>
          <source srcset="/img/action/spa-rain-1.webp" type="image/webp">
          <source srcset="/img/action/spa-rain-1.jpg" type="image/jpeg">
          <img ref="image" src="/img/action/spa-rain-1.jpg" class="rounded-lg shadow-lg mx-auto max-h-1xl">
        </picture>
      </div>
      <div class="w-full sm:w-4/5 md:w-1/3 mx-auto my-auto">
        <h3 class="font-sans font-weight-bold text-xl md:text-4xl py-2">
          Contact
        </h3>

        <p class="my-4 text-sm">
          {{ $t('enquiries') }}
        </p>
        <form class="w-full  text-primary w-full">
          <input type="text" :placeholder="$t('name')" class="w-full p-2 mb-2 rounded-md">
          <input type="email" placeholder="e-mail" class="w-full p-2 mb-2 rounded-md">
          <textarea :placeholder="$t('message')" class="w-full p-2 mb-2 rounded-md min-h-5" rows="5" />
          <div class="text-center">
            <button class="btn w-full md:w-4/5 text-white capitalize">
              {{ $t('send') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
