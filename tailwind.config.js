/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#000000',
          white: '#FFFFFF',
          red: '#D6001C',
        },
        secondary: {
          darkgray: '#3A3A3A',
          lightgray: '#E0E0E0',
          navy: '#001F3F',
          blue: '#4DA8DA',
        },
      },
    },
  },
  plugins: [],
}
