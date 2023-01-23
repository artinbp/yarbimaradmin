// tailwind.config.js
const colors = require('tailwindcss/colors')
console.log(colors)
const Colors = {
  ...colors,
  ...{
    white: '#ffffff',
    zahrat: {
      rose: '#ECBDBC',
      bone: '#FAFAFA',
      DEFAULT: '#27e',
      hover: '#27f',
      lightgray: '#EEEEEE',
      orange: '#FF6B00',
      lightgreen: '#92DF6D',
      green: '#6FD63F',
      darkgray: '#3D3D3D',
      gray: '#9E9E9E',
      lightGray: '#CECECE',
      slate: '#666',
    },
    disable: '#aaa',
    primary: {
      DEFAULT: '#37f',
      active: '#38f',
      hover: '#36e'
    },
    warning: {
      DEFAULT: '#cc2',
      active: '#cd2',
      hover: '#dc2'
    },
    success: {
      DEFAULT: '#3b3',
      active: '#3d4',
      hover: '#3a3'
    },
    error: {
      DEFAULT: '#d21',
      active: '#e11',
      hover: '#c11'
    },
    'tahiti': {
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
    }
  },
}


module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,vue,css,scss}"],
  theme: {
    colors: Colors,
    extend: {

    },
    screens: {
      '4k': {'min': '1600px', 'max': '2098px'},
      'laptop-large': {'min': '1440px', 'max': '1600px'},
      'laptop': {'min': '1201px', 'max': '1439px'},
      'laptop-mini': {'min': '1024px', 'max': '1200px'},
      'tablet-large': {'min': '830px', 'max': '1023'},
      'tablet': {'min': '758px', 'max': '829px'},
      'tablet-mini': {'min': '640px', 'max': '757px'},
      'mobile-large': {'min': '425px', 'max': '639px'},
      'mobile': {'min': '360px', 'max': '424px'},
      'mini-mobile': {'min': '320px', 'max': '359px'}
    },
  },
  plugins: [],
}
