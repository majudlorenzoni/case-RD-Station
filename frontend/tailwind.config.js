/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
      extend: {
        fontFamily: {
          agdasima: ['Agdasima', 'sans-serif'],
          roboto: ['Roboto', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }