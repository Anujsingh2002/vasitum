/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#b52218"
      },
      gridTemplateColumns:{
        'auto1':'repeat(1,0.17fr 0.83fr)',
        'auto4':'repeat(1,0.6fr 0.4fr)'
      },
      gridTemplateRows:{
        'auto2':'repeat(1,0.07fr 0.38fr 0.58fr)',
        'auto3':'repeat(1,0.6fr 1fr 1fr 1fr 1fr 1fr)'
      }
    },
  },
  plugins: [],
}

