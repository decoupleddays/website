import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Button from '../button/button'
import Img from 'gatsby-image'

import { colors } from '../../colors'
import Nav from '../nav/nav'

const Header = ({ siteTitle, backgroundImage, sponsors }) => {
  return (
  <HeaderContainer>
    <Nav />
    <HeaderHero>
      <HeaderTitle>A Conference About The Future Of Drupal</HeaderTitle>
      <HeaderSubTitle>New York City</HeaderSubTitle>
      <HeaderSubTitle>Aug. 17 - 19, 2018</HeaderSubTitle>
      <HeaderSubTitle>John Jay College of Criminal Justice</HeaderSubTitle>
    </HeaderHero>
    <Img
      sizes={backgroundImage.sizes}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
    <HeaderSponsorsContainer>
      <div className="label">Diamond sponsors</div>
      <HeaderSponsors>
        {sponsors.map(({ node }, i) => (
          <HeaderSponsor key={i}>
              <HeaderThumbnailContainer href={node.link}>
                <img src={ node.childImageSharp.sizes.src} />
              </HeaderThumbnailContainer>

          </HeaderSponsor>
          ))}
      </HeaderSponsors>
    </HeaderSponsorsContainer>
  </HeaderContainer>
)
}

export default Header

const HeaderContainer = styled.div`
  background-color: transparent;
  position: relative;
  margin-bottom: 4rem;
  font-family: 'League Spartan';
`

const HeaderHero = styled.div`
  max-width: 960px;
  margin: 0 auto;
  height: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${colors.white};
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.7);
  padding: 1rem;
`

const HeaderTitle = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 1.25px;

  &::after {
    height: 2px;
    width: 100%;
    display: block;
    background: ${colors.white};
    content: '';
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.7);
  }
`

const HeaderSubTitle = styled.h2`
  font-size: 1.5rem;
`

const HeaderSponsorsContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, .5);
  text-align: center;
  -webkit-border-top-left-radius: 20px;
  -webkit-border-top-right-radius: 20px;
  -moz-border-radius-topleft: 20px;
  -moz-border-radius-topright: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const HeaderSponsors = styled.div`
  display: flex;
  justify-content: center;
`

const HeaderSponsor = styled.div`
  width: 30%;
  @media (max-width: 768px) {
    width: 35%;
  }
`

const HeaderThumbnailContainer = styled.a`
  width: 100%;
  padding: 15px;
`
const HeaderThumbnail = styled(Img)`
  border-radius: 5%;
`
