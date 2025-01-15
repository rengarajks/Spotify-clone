/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['MyCustomFont1', 'Arial'],
        poppinsMedium: [],
      },
      scrollbar: ['hidden'],
    },
  },
  plugins: [],
};
