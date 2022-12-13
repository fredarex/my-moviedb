/** @type {import('tailwindcss').Config} */ 
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'' 
      },
      fontSize:{
        'kbodymain':'64px',
        'kbody1':'56px',
        'kbody2':'48px',
        'kbody3':'36px',
        'kbody4':'24px',
        'kbody5':'16px',
        'kbody6':'14px',
        'kbody7':'12px'

      },
      fontFamily: {
        // Inter: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [],
 }