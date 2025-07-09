/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}",
  "./*.html"],
  theme: {
    fontFamily: {
      'sans': ['poppins', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        "home":"url('/assets/bg.png')"
      }
    },
  },
  plugins: [],
}

