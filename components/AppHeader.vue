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
const visible = ref(false)

function toggleMenu() {
  if (menu.value) {
    const menuDiv = menu.value as HTMLElement
    menuDiv.classList.toggle('opacity-0')
    menuDiv.classList.toggle('h-auto')
    menuDiv.classList.toggle('max-h-96')
    visible.value = !visible.value
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

      <HamburgerButton ref="hamburger" :is-active="visible" @click="toggleMenu" />

      <div
        ref="menu"
        class="
          opacity-0 h-0 w-full
          md:flex
          md:items-center
          md:w-auto
          md:h-16
          md:opacity-100
          transition-opacity
          duration-300
        "
      >
        <ul
          class="
            text-center
            md:text-left
            w-screen
            -ml-4
            md:ml-0
            mt-2
            md:mt-0
            md:w-auto
            pb-4
            bg-primary
            bg-gradient-to-tr
            from-secondary/50
            via-secondary/10
            to-primary
            md:bg-transparent
            list-none
            pt-4
            text-base
            md:flex
            md:justify-between
            md:pt-0
            capitalize
            transition-all
            duration-150
          "
        >
          <li>
            <NuxtLink class="link" to="about">
              {{ $t('about-tomas') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" href="#last-result">
              {{ $t('results') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" href="/calendar">
              {{ $t('calendar') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" href="/#sponsors">
              {{ $t('sponsors') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" href="#contact">
              {{ $t('contact') }}
            </NuxtLink>
          </li>
          <li class="md:hidden my-5 text-center">
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
          </li>
          <li class="md:hidden">
            <div class="mt-2 md:mt-0 text-center">
              <LangSwitcher />
            </div>
          </li>
        </ul>

        <div class="hidden md:block pl-5 text-center">
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

        <div class="hidden md:block mt-2 md:mt-0 ml-5 text-center">
          <LangSwitcher />
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.link {
  @apply md:p-4 py-2 block hover:opacity-60 transition duration-200;
}

li {
  @apply ml-4 md:ml-0
}
</style>
