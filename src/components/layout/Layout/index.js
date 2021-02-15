import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {Helmet} from 'react-helmet'

import TopBar from '../TopBar'
import Header from '../Header'
import HeaderSponsors from '../HeaderSponsors'
//import Sponsors from '../../entities/Sponsors'
import Footer from '../Footer'
import FooterCopywrite from '../FooterCopywrite'
import './style.scss'
const Layout = props => {
  const {site, sponsors} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        sponsors:allNodeSponsors(filter: {field_sponsor_level: {eq: "diamond"}, relationships: {field_tags: {elemMatch: {name: {eq: "2021"}}}}}) {
          nodes {
            id
            drupal_id
            title
            body {
              processed
            }
            path {
              alias
            }
            link:field_sponsor_link {
              uri
            }
            r: relationships {
              logo: field_sponsor_logo {
                filename
                localFile {
                  cis:childImageSharp {
                    # Specify a fluid image and fragment
                    # The default maxWidth is 800 pixels
                    fluid(maxWidth:200) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content="Decoupled Days" />
        <meta
          name="keywords"
          content="decoupled, conferences, javascript, jamstack"
        />
        <link
          rel="shortcut icon"
          href="/favicon.ico"
          type="image/x-icon"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Helmet>
      <TopBar />
      <Header />
      { sponsors.nodes.length > 0 && (
        <HeaderSponsors sponsors={sponsors.nodes} />
      ) }
      <section className="width-1/2">{props.children}</section>
      <Footer />
      <FooterCopywrite />
    </>
  )
}

export default Layout
