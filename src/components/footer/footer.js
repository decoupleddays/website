import React from 'react'

import styled from 'styled-components'

import GoogleMapWrapper from '../google-map/google-map'

const Footer = ({ siteTitle, icons }) => (
  <FooterContainer>
    <Masthead>
      <Title>Decoupled Drupal Days</Title>
      <SubTitle>Aug. 17-19, 2018</SubTitle>
      <SubTitle>John Jay College of Criminal Justice</SubTitle>
      <SubTitle>524 W 59th St, New York, NY 10019</SubTitle>
    </Masthead>
    <GoogleMapWrapper
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
    <InfoContainer>
      <Copywrite>© 2018 DECOUPLED DRUPAL DAYS ALL RIGHTS RESERVED</Copywrite>
      <SocialIconsList>
        {icons.map(({ node }, i) => (
          <SocialIcon key={i}>
            <a
              href={node.url}
              data-social-type={node.id}
              target="_blank"
              dangerouslySetInnerHTML={{ __html: node.icon }}
            />
          </SocialIcon>
        ))}
      </SocialIconsList>
    </InfoContainer>
  </FooterContainer>
)

export default Footer

const FooterContainer = styled.footer`
  box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.5);
`

const Masthead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.p``

const SubTitle = styled.p``

const Map = styled.div``

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  max-width: 960px;
  margin: 0 auto;
`

const Copywrite = styled.div``

const SocialIconsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SocialIcon = styled.li`
  padding: 0 10px;
  margin: 0;
`
