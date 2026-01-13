/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        foundationYellow: '#D4A017', // The gold from your flyer
        foundationBlack: '#1A1A1A',  // Professional dark tone
      },
    },
  },
  plugins: [],
}