module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'xs': ['13px', {
        lineHeight: '19px'
      }],
      'sm': ['14 px', {
        letterSpacing: '-0,2px',
        lineHeight: '20px'
      }],
      'tiny': ['15px', {
        lineHeight: '22px',
      }],
      'base': ['16 px', {
        lineHeight: '23px',
      }],
      'lg': ['18 px', {
        letterSpacing: '-0,25px',
        lineHeight: '26px'
      }],
      'xl': ['20px', {
        letterSpacing: '-0,25px',
        lineHeight: '29px'
      }],
      '2xl': ['24px', {
        letterSpacing: '-0,33px',
        lineHeight: '35px'
      }],
    },
    borderRadius: {
      'large': '10px'
    },
    extend: {
      colors: {
        purple: {
          light: '#C75AF6',
          DEFAULT: '#AD1FEA',
        },
        red: {
          light: '#E98888',
          DEFAULT: '#D73737',
        },
        blue: {
          light: '#7C91F9',
          DEFAULT: '#4661E6',
          dark: '#656EA3',
          darkest: '#3A4374',
        },
      },
      fontFamily: {
        jost: ['Jost']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
