<script setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const results = ref([
  {
    title: 'Round 1',
    championship: 'Ford Fiesta Sprint Cup',
    track: 'Spa Francorchamps, BE',
    startDate: new Date('2021-09-11'),
    endDate: new Date('2021-09-12'),
    sessions: [{
      name: 'qualifying',
      position: 10,
      kph: 180.6,
      laps: 5,
      fastestLap: '1:45.123',
    }, {
      name: 'race 1',
      position: 1,
      kph: 190.5,
      laps: 5,
      fastestLap: '1:45.123',
    }, {
      name: 'race 2',
      position: 2,
      kph: 180.6,
      laps: 5,
      fastestLap: '1:45.123',
    }],
  },
  {
    title: 'Round 2',
    championship: 'Ford Fiesta Sprint Cup',
    track: 'Spa Francorchamps, BE',
    startDate: new Date('2021-09-11'),
    endDate: new Date('2021-09-12'),
    sessions: [{
      name: 'qualifying',
      position: 10,
      kph: 180.6,
      laps: 5,
      fastestLap: '1:45.123',
    }, {
      name: 'race 1',
      position: 1,
      kph: 190.5,
      laps: 5,
      fastestLap: '1:45.123',
    }, {
      name: 'race 2',
      position: 2,
      kph: 180.6,
      laps: 5,
      fastestLap: '1:45.123',
    }],
  },
  {
    title: 'Round 3',
    championship: 'Ford Fiesta Sprint Cup',
    track: 'Zandvoort, NL',
    startDate: new Date('2021-09-11'),
    endDate: new Date('2021-09-12'),
    sessions: [{
      name: 'qualifying',
      position: 10,
      kph: 180.6,
      laps: 5,
      fastestLap: '1:45.123',
    }, {
      name: 'race 1',
      position: 1,
      kph: 190.5,
      laps: 5,
      fastestLap: '1:45.123',
    }, {
      name: 'race 2',
      position: 2,
      kph: 180.6,
      laps: 5,
      fastestLap: '1:45.123',
    }],
  },
])
</script>

<template>
  <Carousel :items-to-show="1" :wrap-around="true" :transition="300">
    <Slide v-for="result in results" :key="result.title">
      <div class="carousel__item">
        <h4 class="text-secondary text-lg md:text-2xl lg:text-3xl font-weight-bold">
          {{ result.title }}
        </h4>
        <h5 class="font-weight-thin lg:text-xl">
          {{ result.championship }}
        </h5>
        <h5 class="font-weight-light italic lg:text-xl">
          {{ result.track }}
        </h5>

        <ResultSessionTable :sessions="result.sessions" />
      </div>
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
