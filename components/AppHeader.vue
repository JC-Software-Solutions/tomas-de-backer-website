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

const route = useRoute()
const { $localePath } = useNuxtApp()

function findLocalePath(page: string) {
  if (page.includes('#')) {
    const pathWithoutLeadingSlash = route.path.slice(1)
    const [localePathPart] = pathWithoutLeadingSlash.split('/')
    return `/${localePathPart}${page}`
  }
  return $localePath(page)
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
        z-1
      "
    >
      <div @click="() => visible ? toggleMenu() : undefined">
        <NuxtLink :to="findLocalePath('index')">
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
            md:pb-0
            bg-primary
            bg-gradient-to-tr
            from-secondary/50
            via-secondary/10
            to-primary
            md:bg-transparent
            md:from-transparent
            md:to-transparent
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
          @click="() => visible ? toggleMenu() : undefined"
        >
          <li>
            <NuxtLink class="link" :to="findLocalePath('about')">
              {{ $t('about-tomas') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" :to="findLocalePath('results')">
              {{ $t('results') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" :to="findLocalePath('calendar')">
              {{ $t('calendar') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" :to="findLocalePath('/#sponsors')">
              {{ $t('sponsors') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" :to="findLocalePath('/#contact')">
              {{ $t('contact') }}
            </NuxtLink>
          </li>
          <li class="md:hidden my-5 text-center">
            <NuxtLink
              v-for="social in socials"
              :key="social.name"
              class="hover:opacity-60 transition duration-200"
              :to="social.url"
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
            :to="social.url"
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

:deep(#headlessui-menu-items-4) {
  @apply z-1;
}
</style>
