const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        main: {
          light: '#1E3A8A',
          dark: '#191919',
        },
        primary: {
          light: '#1E3A8A',
          dark: '#D4D4D4',
        },
        primaryBorder: {
          light: '#122559',
          dark: '#333333',
        },
        rowHover: {
          light: '#2E4A7B', // Custom lighter background color for light mode
          dark: '#2C2C2C',  // Custom lighter background color for dark mode
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-primary': {
          color: theme('colors.primary.light'),
          '@apply dark:text-primary-dark': {},
        },
        '.bg-main': {
          backgroundColor: theme('colors.main.light'),
          '@apply dark:bg-main-dark': {},
        },
        '.border-primary': {
          borderColor: theme('colors.primaryBorder.light'),
          '@apply dark:border-primaryBorder-dark': {},
        },
        '.hover-row': {
          '@apply hover:bg-rowHover-light dark:hover:bg-rowHover-dark': {},
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
