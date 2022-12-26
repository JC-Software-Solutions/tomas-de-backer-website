<template>
  <!-- Background video -->
  <video autoplay muted loop cover>
    <source src="/video/hero.mp4" type="video/mp4">
  </video>

  <!-- Overlay -->
  <section class="font-display text-white text-center flex flex-col align-center" style="height: 70vh;">
    <div class="mt-40">
      <h1 class="text-7xl text-shadow-lg">
        Tomas De Backer
      </h1>
      <h2 class="text-4xl text-shadow-lg">
        2022 Ford Fiesta Sprint Cup BE Champion
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
