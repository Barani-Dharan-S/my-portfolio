/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030712',
          900: '#0f1724',
        }
      }
    },
  },
  plugins: [],
}
