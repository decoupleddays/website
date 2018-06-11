import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Button from '../button/button'
import Img from 'gatsby-image'

import { colors } from '../../colors'
import Nav from '../nav/nav'

const Header = ({ siteTitle, backgroundImage }) => (
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
        <div className="sponsor">
          <a href="https://chromatichq.com/">
            <img src="https://chromatichq.com/themes/chromatic/images/svgs/chromatic-logo.svg" width="200" height="50" alt="Chromatic" />
          </a>
        </div>
        <div className="sponsor aten">
          <a href="https://atendesigngroup.com">
          <svg id="Aten_Logo" height="50" width="200" viewBox="0 0 250 100"><circle class="cls-1" fill="#fff" cx="50" cy="50" r="32.5"/><path class="cls-2" fill="#c00"d="M93.3,25l-25-6.7L75,6.7,50,13.4V0L31.7,18.3,25,6.7l-6.7,25L6.7,25l6.7,25H0L18.3,68.3,6.7,75l25,6.7L25,93.3l25-6.7V100L68.3,81.7,75,93.3l6.7-25L93.3,75,86.6,50H100L81.7,31.7Zm-28.37-.86,2.08,16,8.85-5.11L69.64,50H79.87L67,59.82l8.85,5.11L59.82,67l5.11,8.85L50,69.64V79.87L40.18,67l-5.11,8.85L33,59.82l-8.85,5.11L30.36,50H20.13L33,40.18l-8.85-5.11,16-2.08-5.11-8.85L50,30.36V20.13L59.82,33Z"/><path class="cls-3" fill="#414042" d="M160,40.19h-8.77V34.63h23.87v5.56h-8.77V65.37H160Zm28.8-5.56h21v5.56H195.16v7.05h12.39v5.43H195.16v7.14h14.65v5.56h-21Zm45,16.46a47,47,0,0,1-3.66-4.21,54.35,54.35,0,0,1,.45,5.61V65.37h-5.92v-31h.63l15.51,14.56a44.19,44.19,0,0,1,3.62,4.2s-.41-3.48-.41-5.61V34.63H250v31h-.63ZM137.47,65.37h6.65l-14.06-31h-.54L116,65.37h6.1l2.42-5.89H135ZM126.69,54.19l1.2-2.92c.86-2.13,1.76-5.34,1.81-5.47.09.31,1,3.43,1.85,5.47l1.23,2.92Z"/></svg>
          </a>
          </div>
      </HeaderSponsors>
    </HeaderSponsorsContainer>

  </HeaderContainer>
)

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
`

const HeaderSponsors = styled.div`
  display: flex;
  justify-content: center;
`
