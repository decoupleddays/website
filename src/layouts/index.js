import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/header/header'
import Sponsors from '../components/sponsors/sponsors'
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
    <ContentDiv>
      {children()}
      <div>

        <Sponsors level="Diamond" sponsors={data.diamondSponsors.edges} />
        <Sponsors level="Gold" sponsors={data.goldSponsors.edges} />
        <Sponsors level="Silver" sponsors={data.silverSponsors.edges} />
      </div>
    </ContentDiv>
    <Footer icons={data.allSocialIconsJson.edges} />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

const ContentDiv = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem\;
  padding-top: 0;
`

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
          childImageSharp {
            sizes(maxWidth: 100) {
              src
            }
          }
        }
      }
    }

    diamondSponsors: allSponsorsJson(filter: {level: {eq:"Diamond"}}) {
      edges {
        node {
          name
          link
          childImageSharp {
            sizes(maxWidth: 200) {
              src
            }
          }
        }
      }
    }

    goldSponsors: allSponsorsJson(filter: {level: {eq:"Gold"}}) {
      edges {
        node {
          name
          link
          childImageSharp {
            sizes(maxWidth: 200) {
              src
            }
          }
        }
      }
    }
    silverSponsors: allSponsorsJson(filter: {level: {eq:"Silver"}}) {
      edges {
        node {
          name
          link
          childImageSharp {
            sizes(maxWidth: 150) {
              src
            }
          }
        }
      }
    }
  }
`
