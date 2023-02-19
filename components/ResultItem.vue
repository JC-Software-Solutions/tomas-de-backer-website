<script lang="ts" setup>
defineProps({
  result: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div>
    <div>
      <h4 class="text-secondary text-lg md:text-2xl lg:text-3xl font-weight-bold">
        {{ result.title }}
      </h4>
      <h5 class="font-weight-thin lg:text-xl">
        {{ result.championship }}
      </h5>
      <h5 class="font-weight-light italic lg:text-xl">
        {{ result.track }}
      </h5>
    </div>

    <ResultSessionTable :sessions="result.sessions" />
  </div>
</template>
