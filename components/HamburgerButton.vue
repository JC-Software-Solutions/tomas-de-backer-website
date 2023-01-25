<script setup lang="ts">
const props = defineProps<{
  isActive: boolean;
}>()
</script>

<template>
  <div class="hamburger cursor-pointer md:hidden block" v-bind="$attrs" :class="props.isActive ? 'open' : ''">
    <span class="bg-white" />
    <span class="bg-white" />
    <span class="bg-white" />
    <span class="bg-white" />
  </div>
</template>

<style scoped>
.hamburger {
  height: 15px;
  width: 30px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

.hamburger span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

.hamburger span:nth-child(1) {
  top: 0px;
}

.hamburger span:nth-child(2),
.hamburger span:nth-child(3) {
  top: 10px;
}

.hamburger span:nth-child(4) {
  top: 20px;
}

.hamburger.open span:nth-child(1) {
  top: 12px;
  width: 0%;
  left: 50%;
}

.hamburger.open span:nth-child(2) {
  transform: rotate(45deg);
}

.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg);
}

.hamburger.open span:nth-child(4) {
  top: 12px;
  width: 0%;
  left: 50%;
}
</style>
