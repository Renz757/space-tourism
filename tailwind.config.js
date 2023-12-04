/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'vulcan': '#0B0d17',
      'tropicalBlue': '#D0D6F9',
    },
    fontFamily: {
      'bellefair': ['Bellefair', 'serif'],
      'barlow': ['Barlow Condensed', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

