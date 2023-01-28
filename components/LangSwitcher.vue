<script lang="ts" setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const { $i18n } = useNuxtApp()
const availableLocales = computed(() => {
  return Object.values($i18n.locales.value).filter(i => i.code !== $i18n.locale.value)
})

const flags: Record<string, string> = {
  en: 'flagpack:gb-ukm',
  nl: 'flagpack:nl',
  fr: 'flagpack:fr',
}
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        name="language switcher"
        class="inline-flex w-full justify-center rounded-md bg-black bg-opacity-10 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <Icon :name="flags[$i18n.localeProperties.value.code]" size="24" />
        <Icon name="ph:caret-down-light" aria-hidden="true" size="20" class="ml-2 my-auto" />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="px-1 py-1">
          <MenuItem v-for="locale in availableLocales" :key="locale.code" v-slot="{ active }" as="div">
            <button
              class="group flex w-full items-center rounded-md px-2 py-2 text-sm" :class="[
                active ? 'bg-primary bg-gradient-to-br from-secondary/50 via-secondary/10 to-primary text-white' : 'text-gray-900',
              ]"
              @click.prevent.stop="$i18n.setLocale(locale.code)"
            >
              <Icon :name="flags[locale.code]" size="24" aria-hidden="true" class="mr-2" />
              {{ locale.name }}
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
