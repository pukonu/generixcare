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
          home_content: require('./src/schemas/home_content.json'),
          contact: require('./src/schemas/contact.json'),
          areas: require('./src/schemas/areas.json'),
          how_we_work: require('./src/schemas/how_we_work.json'),
          quality_assurance: require('./src/schemas/quality_assurance.json'),
          about: require('./src/schemas/about.json'),
          our_values: require('./src/schemas/our_values.json')
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
