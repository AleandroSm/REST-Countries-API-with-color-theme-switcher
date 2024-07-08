const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "lightEle": 'hsl(0, 0%, 100%)',
        "darkBackground": 'hsl(207, 26%, 17%)',
        "darkEle": 'hsl(209, 23%, 22%)'
      },
    },
  },
  plugins: [
  ],
}

