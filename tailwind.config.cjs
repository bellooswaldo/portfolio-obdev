/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: '#00d9ffff',
          blue: '#0072FF',
          dark: '#0033FF'
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