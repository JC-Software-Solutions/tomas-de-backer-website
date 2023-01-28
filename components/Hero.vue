<script lang="ts" setup>
const loading = ref(false)

const video = ref<HTMLVideoElement>()

onMounted(() => {
  loading.value = true
  video.value?.load()
})

function onVideoLoaded() {
  setTimeout(() => {
    loading.value = false
  }, 500)
}
</script>

<template>
  <FullScreenLoader v-if="loading" />

  <Transition name="video">
    <div v-show="!loading">
      <!-- Background video -->
      <video ref="video" autoplay muted loop cover playsinline preload="auto" class="mt-16" @loadeddata="onVideoLoaded">
        <source src="/video/hero.mp4" type="video/mp4">
      </video>

      <!-- Overlay -->
      <section class="font-display text-white text-center flex flex-col align-center h-64vh sm:h-70vh" data-aos="fade-up z-0">
        <div class="mt-40">
          <h1 class="text-4xl md:text-7xl text-shadow-lg">
            Tomas De Backer
          </h1>
          <h2 class="text-xl md:text-4xl text-shadow-lg">
            {{ $t('hero-title') }}
          </h2>
        </div>
      </section>
    </div>
  </Transition>
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

/* .video-enter-active, */
.video-enter-active {
  opacity: 0;
  transition: opacity 1s ease;
}

/* .video-enter-from, */
.video-enter-to {
  opacity: 1;
}
</style>
