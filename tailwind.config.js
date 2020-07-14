/* eslint-disable global-require */
module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1280px'
    },
    extend: {
      boxShadow: {
        outline: '0 0 0 3px rgba(190, 30, 45, 0.5)'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')]
};
