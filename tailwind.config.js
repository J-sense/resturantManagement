/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#8ABA51",
        secondary:"#758888"
      }
    },
    container:{
      center:true,
      screens:{
        "2xl":"1000px"
      }
    }
  },
  plugins: [],
}

