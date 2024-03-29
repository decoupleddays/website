import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import SEO from '../seo';
import TopBar from '../TopBar';
import Header from '../Header';
import Footer from '../Footer';
import FooterCopywrite from '../FooterCopywrite';

const Layout = (props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  const { children } = props;

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
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Helmet>
      <TopBar />
      <Header />

      <section className="width-1/2">{children}</section>

      <Footer />
      <FooterCopywrite />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
