/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'custom': '500px',
        'text': '40px',
        'text2': '20px',
        'deve': '40%',
        'ptop': '23%',
        'custom2': '250px',
        'custom1': '400px',
        'custom3': '1000px',
        'custom4': '150px',
        'custom5': '120px',
        'custom6': '109px',
        'custom7': '80px',
      },

    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),

],
}

