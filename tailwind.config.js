
/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('tailwind-scrollbar-hide'),
//   ],
// }

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fluidContainer: {
      'small': {
        maxWidth: { // defaults to null (no max width)
          default: '800px',
          lg: '1000px',
        },
        padding: { // defaults to '15px'
          default: '15px',
          sm: '30px',
        },
      },
      'large': {
        maxWidth: '1200px', // defaults to null (no max width)
        padding: { // defaults to '15px'
          default: '15px',
          sm: '30px',
        },
      },
    },
  },
  variants: { // for the utilities
    fluidContainer: ['responsive'], // defaults to ['responsive']
  },
  plugins: [
    require('tailwindcss-fluid-container')({
      componentPrefix: 'c-',          // defaults to 'c-'
      widthUtilities: true,           // defaults to true
      paddingUtilities: true,         // defaults to true
      marginUtilities: true,          // defaults to true
      negativeMarginUtilities: true,  // defaults to true
    }),
  ],
};