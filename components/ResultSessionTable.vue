<script lang="ts" setup>
defineProps<{
  sessions: {
    name: string;
    position: number;
    positionBelgium: number;
    kph: number;
    laps: number;
    fastestLap: number;
  }[];
}>()
</script>

<template>
  <table class="table my-4 mx-auto" data-aos="zoom-in">
    <thead>
      <tr class="text-secondary font-normal text-xs md:text-sm lg:text-base">
        <th />
        <th>#{{ $t('general') }}</th>
        <th>#{{ $t('belgium') }}</th>
        <th>{{ $t('kph') }}</th>
        <th>{{ $t('laps') }}</th>
        <th>{{ $t('fastest-lap') }}</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="session in sessions" :key="session.name">
        <tr>
          <td class="text-secondary capitalize text-xs lg:text-base">
            {{ $t(session.name) }}
          </td>
          <td class="w-80px text-xs lg:text-base">
            {{ session.position }}
          </td>
          <td class="w-90px text-xs lg:text-base">
            {{ session.positionBelgium }}
          </td>
          <td class="w-40px md:w-80px text-xs lg:text-base">
            {{ session.kph }}
          </td>
          <td class="w-60px md:w-80px text-xs lg:text-base">
            {{ session.laps }}
          </td>
          <td class="w-80px text-xs lg:text-base">
            {{ session.fastestLap }}
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>
