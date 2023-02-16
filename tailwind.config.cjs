/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // screens: {
      //   sm: '414px',
      //   md: '960px',
      //   lg: '1080px',
      // },
      // container:{
      //   padding: {
      //     DEFAULT: '1rem',
      //     sm: '2rem',
      //     lg: '4rem',
      //     xl: '5rem',
      //     '2xl': '6rem',
      //   },
      // },
      screens: {
        sm: '567px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
      colors: {
        websiteMainBg: '#000000',
        themeModeColor:"#1E1F1F"
      },
    },
  },
  plugins: [],
};
