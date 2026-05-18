/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          900: '#00563B',
          800: '#006647',
          700: '#007a56',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        miniver: ['Miniver', 'cursive'],
      }
    },
  },
  plugins: [],
}
