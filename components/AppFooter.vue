<template>
  <footer
    class="
      flex
      text-xs
      justify-center
      items-center
      h-10
    "
  >
    <div>
      {{ new Date().getFullYear() }}
      &copy;
      <NuxtLink to="https://jcss.be" target="_blank" rel="noopener noreferrer">
        JCSS
      </NuxtLink>
    </div>
  </footer>
</template>
