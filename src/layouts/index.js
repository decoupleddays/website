import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'

import './index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content="Decoupled Drupal Days" />
      <meta name="keywords" content="drupal, decoupled, conferences" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Helmet>
    <Header
      siteTitle={data.site.siteMetadata.title}
      backgroundImage={data.bg.childImageSharp}
      sponsors={data.headerSponsors.edges}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Footer icons={data.allSocialIconsJson.edges} />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
      }
    }

    bg: file(relativePath: { eq: "header.jpg" }) {
      childImageSharp {
        sizes(
          maxWidth: 1600
          duotone: { highlight: "#80a7d5", shadow: "#192550" }
        ) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }

    allSocialIconsJson {
      edges {
        node {
          url
          icon
          id
        }
      }
    }

    headerSponsors: allSponsorsJson(filter: {level: {eq:"Diamond"}}) {
      edges {
        node {
          name
          link
          childrenImageSharp {
            sizes(maxWidth: 100) {
              src
            }
          }
        }
      }
    }
  }
`
