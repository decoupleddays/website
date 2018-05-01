import React from 'react'
import styled from 'styled-components'

import './footer.scss'

const Footer = ({ siteTitle }) => (
  <FooterContainer>
    <Masthead>
      <p className="footer__masthead--main">Decoupled Drupal Days</p>
      <p>Aug. 17-19, 2018</p>
      <p>John Jay College of Criminal Justice</p>
      <p>524 W 59th St, New York, NY 10019</p>
    </Masthead>
    <Map>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3021.631989835315!2d-73.9892263!3d40.7701182!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xefb0711781c769e!2sJohn+Jay+College+of+Criminal+Justice!5e0!3m2!1sen!2sus!4v1525136243936" />
    </Map>
    <InfoContainer>
      <Copywrite>© 2018 DECOUPLED DRUPAL DAYS ALL RIGHTS RESERVED</Copywrite>
      <SocialIconsList>
        <SocialIcon>Tweeters</SocialIcon>
        <SocialIcon>Mailto</SocialIcon>
        <SocialIcon>Subscribe?</SocialIcon>
      </SocialIconsList>
    </InfoContainer>
  </FooterContainer>
)

export default Footer

const FooterContainer = styled.footer``

const Masthead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Map = styled.div``

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`

const Copywrite = styled.div``

const SocialIconsList = styled.ul``

const SocialIcon = styled.li``
