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
        md:py-0
        px-4
        text-lg
        bg-secondary
        bg-gradient-to-r
        from-secondary/5
        via-primary
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
            <NuxtLink class="link" href="#">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" href="#">
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
      </div>
    </nav>
  </header>
</template>

<style scoped>
.link {
  @apply md:p-4 py-2 block hover:opacity-60 transition duration-200;
}
</style>
