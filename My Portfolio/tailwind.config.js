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
        'custom2': '400px',
        'custom3': '1000px',
      },
      fontFamily: {
        'myfont':['JosefinSans-Regular']
      }
    },
  },
  plugins: [],
}

