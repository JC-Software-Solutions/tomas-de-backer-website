<script lang="ts" setup>
defineProps<{
  sessions: {
    name: string;
    position: number;
    kph: number;
    laps: number;
    fastestLap: number;
  }[];
}>()
</script>

<template>
  <table class="table my-4">
    <thead>
      <tr class="text-secondary font-normal text-xs md:text-sm lg:text-base">
        <th />
        <th>Position</th>
        <th>Kph</th>
        <th>Laps</th>
        <th>Fastest Lap</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="session in sessions" :key="session.name">
        <tr>
          <td class="text-secondary capitalize text-xs lg:text-base">
            {{ session.name }}
          </td>
          <td class="w-80px text-xs lg:text-base">
            {{ session.position }}
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
