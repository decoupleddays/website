import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {Helmet} from 'react-helmet'

import SEO from '../seo';
import TopBar from '../TopBar'
import Header from '../Header'
import HeaderSponsors from '../HeaderSponsors'
import Sponsors from '../../entities/Sponsors'
import Footer from '../Footer'
import FooterCopywrite from '../FooterCopywrite'
import './style.scss'
const Layout = props => {
  const {site,
    headerSponsors,
    diamondSponsors,
    goldSponsors,
    silverSponsors,
    bronzeSponsors,
    inkindSponsors
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        headerSponsors:allNodeSponsors(filter: {
          field_sponsor_level: {eq: "diamond"},
          relationships: {
            field_tags: {elemMatch: {name: {eq: "2021"}}}
          }
        }) {
          nodes {
            ...sponsorFragment
          }
        }
        diamondSponsors:allNodeSponsors(filter: {
          field_sponsor_level: {eq: "diamond"},
          relationships: {
            field_tags: {elemMatch: {name: {eq: "2021"}}}
          }
        }) {
          nodes {
            ...sponsorFragment
          }
        }
        goldSponsors:allNodeSponsors(filter: {
          field_sponsor_level: {eq: "gold"},
          relationships: {
            field_tags: {elemMatch: {name: {eq: "2021"}}}
          }
        }) {
          nodes {
            ...sponsorFragment
          }
        }
        silverSponsors:allNodeSponsors(filter: {
          field_sponsor_level: {eq: "silver"},
          relationships: {
            field_tags: {elemMatch: {name: {eq: "2021"}}}
          }
        }) {
          nodes {
            ...sponsorFragment
          }
        }
        bronzeSponsors:allNodeSponsors(filter: {
          field_sponsor_level: {eq: "bronze"},
          relationships: {
            field_tags: {elemMatch: {name: {eq: "2021"}}}
          }
        }) {
          nodes {
            ...sponsorFragment
          }
        }
        inkindSponsors:allNodeSponsors(filter: {
          field_sponsor_level: {eq: "in-kind"},
          relationships: {
            field_tags: {elemMatch: {name: {eq: "2021"}}}
          }
        }) {
          nodes {
            ...sponsorFragment
          }
        }

      }
    `
  );

  return (
    <>
      <SEO />
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
      { headerSponsors.nodes.length > 0 && (
        <HeaderSponsors sponsors={headerSponsors.nodes} />
      ) }
      <section className="width-1/2">{props.children}</section>
      <section className="footer-sponsors">
        <div className="wrapper">
          {diamondSponsors.nodes.length > 0 && (
            <Sponsors
              level="Diamond"
              sponsors={diamondSponsors.nodes}
            />
           )}
           {goldSponsors.nodes.length > 0 && (
            <Sponsors
              level="Gold"
              sponsors={goldSponsors.nodes}
            />
           )}
           {silverSponsors.nodes.length > 0 && (
            <Sponsors
              level="Silver"
              sponsors={silverSponsors.nodes}
            />
           )}
           {bronzeSponsors.nodes.length > 0 && (
            <Sponsors
              level="Bronze"
              sponsors={bronzeSponsors.nodes}
            />
           )}
          {inkindSponsors.nodes.length > 0 && (
            <Sponsors
              level="In Kind / Media"
              sponsors={inkindSponsors.nodes}
            />
           )}
        </div>
      </section>
      <Footer />
      <FooterCopywrite />
    </>
  )
}

export default Layout
