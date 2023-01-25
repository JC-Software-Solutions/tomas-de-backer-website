<template>
  <!-- Background video -->
  <video autoplay muted loop cover playsinline preload="auto">
    <source src="/video/hero.mp4" type="video/mp4">
  </video>

  <!-- Overlay -->
  <section class="font-display text-white text-center flex flex-col align-center h-64vh sm:h-70vh">
    <div class="mt-40">
      <h1 class="text-4xl md:text-7xl text-shadow-lg">
        Tomas De Backer
      </h1>
      <h2 class="text-xl md:text-4xl text-shadow-lg">
        {{ $t('hero-title') }}
      </h2>
    </div>
  </section>
</template>

<style scoped>
video {
  width: 100vw;
  height: 70vh;
  object-fit: cover;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}
</style>
