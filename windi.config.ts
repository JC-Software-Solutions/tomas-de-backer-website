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
      hover:bg-secondary/40
    `,
  },

  plugins: [
    require('windicss/plugin/forms'),
  ],
})
