require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  plugins: [
    'gatsby-plugin-root-import',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components'
  ]
};
