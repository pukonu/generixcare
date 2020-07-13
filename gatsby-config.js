/* eslint-disable global-require */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: `${process.env.PRISMIC_REPOSITORY}`,
        accessToken: `${process.env.PRISMIC_API_KEY}`,
        schemas: {
          page: require('./src/schemas/page.json'),
          home_content: require('./src/schemas/home_content.json')
        },
        // eslint-disable-next-line no-unused-vars
        linkResolver: ({ node, key, value }) => (doc) => `/${doc.uid}`
      }
    },
    'gatsby-plugin-root-import',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components'
  ]
};
