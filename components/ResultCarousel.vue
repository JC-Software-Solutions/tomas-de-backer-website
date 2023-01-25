<script setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const { data } = useAsyncData(async () => {
  const calendar = await fetch('/data/results-2023.json').then(res => res.json())
  return calendar
})
</script>

<template>
  <Carousel :items-to-show="1" :wrap-around="true" :transition="300">
    <Slide v-for="result in data" :key="result.title">
      <ResultItem :result="result" />
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

:deep(.carousel__pagination) {
  padding-left: 0;
}

:deep(.carousel__pagination-button::after) {
  background-color: rgba(220, 38, 38, .4);
}

:deep(.carousel__pagination-button--active::after) {
  background-color: #dc2626;
}

:deep(.carousel__icon) {
  fill: #dc2626;
  margin-bottom: 130px
}
</style>
