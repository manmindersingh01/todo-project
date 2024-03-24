/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bg': '#454545',
      "t-dark": '#FF6000',
      "t-light": '#FFA559',
      "t-fade": '#FFE6C7',

    },
    extend: {},
  },
  plugins: [],
}

