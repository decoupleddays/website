# gatsby-source-drupal-modified

Source plugin for pulling data (including images) into Gatsby from Drupal sites.

## Modified from [gatsby-source-drupal](https://www.gatsbyjs.org/packages/gatsby-source-drupal/)

Updated to use https://github.com/gatsbyjs/gatsby/pull/5020/commits/91b15cf72eb7b4a7654f7b46a0b6f06b6cd3a9f3.

Can be removed once this gets merged to GatsbyJS.

Pulls data from Drupal 8 sites with the
[Drupal JSONAPI module](https://www.drupal.org/project/jsonapi) installed.

An example site built with the headless Drupal distro
[ContentaCMS](https://twitter.com/contentacms) is at
https://using-drupal.gatsbyjs.org/

`apiBase` Option allows changing the API entry point depending on the version of
jsonapi used by your Drupal instance. The default value is `jsonapi`, which has
been used since jsonapi version `8.x-1.0-alpha4`.

## Install

`npm install --save gatsby-source-drupal`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-source-drupal`,
    options: {
      baseUrl: `https://live-contentacms.pantheonsite.io/`,
      apiBase: `api`, // optional, defaults to `jsonapi`
    },
  },
];
```

## How to query

You can query nodes created from Drupal like the following:

```graphql
{
  allArticle {
    edges {
      node {
        title
        internalId
        created(formatString: "DD-MMM-YYYY")
      }
    }
  }
}
```
