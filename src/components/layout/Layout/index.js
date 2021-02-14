import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {Helmet} from 'react-helmet'

import TopBar from '../TopBar'
import Header from '../Header'
//import HeaderSponsors from '../HeaderSponsors'
//import Sponsors from '../../entities/Sponsors'
import Footer from '../Footer'
import FooterCopywrite from '../FooterCopywrite'
import './style.scss'
const Layout = props => {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
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
      {/* data.headerSponsors.edges.length > 0 && (
        <HeaderSponsors sponsors={data.headerSponsors.edges} />
      ) */}
      <section className="width-1/2">{props.children}</section>
      <Footer />
      <FooterCopywrite />
    </>
  )
}

export default Layout
