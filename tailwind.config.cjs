/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      scrollBehavior: {
        smooth: 'smooth',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        'roboto-400':400,
        'roboto-900': 900,
        
      },
      screens: {
        sm: '413px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
      colors: {
        websiteMainBg: '#000000',
        themeModeColor:"#1E1F1F",
        primary:"#00ACB1",
        textSecondary:"#656F77",
        numbers:{
          gradStart:"#054546",
          gradEnd:"#C4C4C4",
        },

        pill:{
          bgPrimary:"#DDF3F4",
          bgSecondary:"#FFDEB7",
          bgThird:"#CDD9E3",

          live:"#7DD752",

          textPrimary:"#00ACB1",
          textSecondary:"#F29304",
          textThird:"#656F77"
        },
        hr:"#CDD9E3",
      },
    },
  },
  plugins: [],
};
