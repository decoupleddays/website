require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: 'Decoupled Days 2022',
    description: "The only conference on the future of CMS, headlessCMS, and decoupledCMS.",
    url: "https://2022.decoupleddays.com",
    image: "/img/DD2022-Logo.png",
    twitterUsername: "@decoupleddays"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: ['node_modules', 'src/global']
        },
        postCssPlugins: [
          require("tailwindcss")
        ],
      },
    },
    `gatsby-plugin-image`,
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
        skipFileDownloads: true,
        baseUrl: 'https://dev-decoupled-days-cms.pantheonsite.io/',
        // @todo: add filter[tags.name][value] = "2021" for each content type.
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
