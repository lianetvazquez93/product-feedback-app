module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius: {
      large: '10px',
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
        gray: {
          light: '#F7F8FD',
          DEFAULT: '#F2F4FF',
          dark: '#647196',
        },
      },
      fontFamily: {
        jost: ['Jost'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
