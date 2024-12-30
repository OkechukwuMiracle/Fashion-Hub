/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'HeroBg': "url('/assets/hero-bg.jpg')",
      },
      colors: {
        primary: '#EFC8B121',
        secondary: '#514644',
        neutral: '#EFC8B1C2',
        darkgold: '#F0A376',
      }
    },
  },
  plugins: [],
}

