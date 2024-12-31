/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'below-tab': { 'max': '880px' },
        'hidde-nav': { 'max': '750px' }, 
        'below-sm': { 'max': '600px' },
      },
    },
  },
  plugins: [],
}