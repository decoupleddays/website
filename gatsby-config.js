require('dotenv').config({
  path: `.env`,
});

const metaData = {
  title: 'Decoupled Days 2022',
  description:
    'The only conference on the future of CMS, headlessCMS, and decoupledCMS.',
  url: 'https://2022.decoupleddays.com',
  image: 'src/assets/images/sharing-image.png',
  twitterUsername: '@decoupleddays',
};

module.exports = {
  siteMetadata: {
    title: metaData.title,
    description: metaData.description,
    url: metaData.url,
    image: metaData.image,
    twitterUsername: metaData.twitterUsername,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: ['node_modules', 'src/global'],
        },
        // eslint-disable-next-line global-require
        postCssPlugins: [require('tailwindcss')],
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
      resolve: `gatsby-source-drupal`,
      options: {
        skipFileDownloads: true,
        baseUrl: 'https://dev-decoupled-days-cms.pantheonsite.io/',
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
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'ggn8hxq',
        },
        google: {
          families: ['Inter:100,200,300,400,500,600,700,800,900'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: metaData.title,
        short_name: metaData.title,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#124088`,
        display: `standalone`,
        icon: `src/assets/favicon.svg`,
      },
    },
  ],
};
