/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: '#00FFE5',
          blue: '#1A69F4',
          dark: '#0B2D92'
        },
        background: {
          dark: '#2A2F36',
          darker: '#2A2F36'
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}