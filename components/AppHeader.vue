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

const menu = ref(null)
function toggleMenu() {
  if (menu.value) {
    const menuDiv = menu.value as HTMLElement
    menuDiv.classList.toggle('opacity-0')
    menuDiv.classList.toggle('h-auto')
    menuDiv.classList.toggle('max-h-96')
  }
}
</script>

<template>
  <header>
    <nav
      class="
        absolute
        md:static
        flex flex-wrap
        items-center
        justify-between
        md:justify-around
        w-full
        py-4
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
          <img src="/img/logo/TDB.svg" alt="Tomas De Backer logo" class="h-8">
        </NuxtLink>
      </div>

      <HamburgerIcon ref="hamburger" @click="toggleMenu" />

      <div ref="menu" class="opacity-0 h-0 w-full md:flex md:items-center md:w-auto md:h-16 md:opacity-100 transition-opacity duration-300">
        <ul
          class="
            list-none
            pt-4
            text-base
            md:flex
            md:justify-between
            md:pt-0
            transition-all
            duration-150
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
            <NuxtLink class="link" href="/calendar">
              Calendar
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" href="/#sponsors">
              Sponsors
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" href="#contact">
              Contact
            </NuxtLink>
          </li>
        </ul>

        <div class="pl-5 text-center">
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
