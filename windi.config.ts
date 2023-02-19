import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // slate-900
        secondary: '#dc2626', // red-600
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Oxanium', 'sans-serif'],
      },
    },
  },

  shortcuts: {
    btn: `
    text-sm
    md:text-base
    px-4
    py-2
    rounded
    font-weight-light
    bg-secondary
    inline-block
    transition
    duration-300
    border-1
    border-secondary
    enabled:hover:bg-secondary/40
    disabled:opacity-60
    disabled:cursor-not-allowed
    `,
  },

  plugins: [
    require('windicss/plugin/forms'),
  ],
})
