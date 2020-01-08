require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: 'Decoupled Days 2020',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['node_modules', 'src/global'],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `social_icons`,
        path: `${__dirname}/src/data/social-icons/`,
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: process.env.BASE_URL,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: 'white',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-source-decoupleddays',
  ],
}
