import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Footer from '../components/footer/footer'

import './index.scss'

const Layout404 = ({ children, data }) => (
  <div>
    <Helmet>
      <title>Oops! | {data.site.siteMetadata.title}</title>
      <meta name="description" content="Decoupled Drupal Days" />
      <meta name="keywords" content="drupal, decoupled, conferences" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Helmet>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {children()}
    </div>
  </div>
)

Layout404.propTypes = {
  children: PropTypes.func,
}

export default Layout404

export const query = graphql`
  query Layout404Query {
    site {
      siteMetadata {
        title
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
  }
`
