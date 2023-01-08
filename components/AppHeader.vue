<script lang="ts" setup>
const socials = ref([
  {
    name: 'instagram',
    url: 'https://www.instagram.com/tomasdebacker/',
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/tomas.debacker.1',
  },
])
</script>

<template>
  <header>
    <nav
      class="
        flex flex-wrap
        items-center
        justify-between
        md:justify-around
        w-full
        py-4
        pb-10
        md:py-0
        px-4
        text-lg
        bg-primary
        bg-gradient-to-br
        from-secondary/50
        via-secondary/10
        to-primary
      "
    >
      <div>
        <NuxtLink href="/">
          LOGO
        </NuxtLink>
      </div>

      <HamburgerIcon />

      <div class="hidden w-full md:flex md:items-center md:w-auto">
        <ul
          class="
            list-none
            pt-4
            text-base
            md:flex
            md:justify-between
            md:pt-0
          "
        >
          <li>
            <NuxtLink class="link" to="/">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/about">
              About Tomas
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" href="#last-result">
              Results
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" href="#calendar">
              Calendar
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" href="#sponsors">
              Sponsors
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" href="#contact">
              Contact
            </NuxtLink>
          </li>
        </ul>

        <div class="pl-5">
          <NuxtLink
            v-for="social in socials"
            :key="social.name"
            class="hover:opacity-60 transition duration-200"
            :href="social.url"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon :name="`bxl:${social.name}`" size="24" class="mx-1 cursor-pointer" />
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.link {
  @apply md:p-4 py-2 block hover:opacity-60 transition duration-200;
}
</style>
