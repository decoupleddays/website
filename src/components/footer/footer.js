import React from 'react'
import styled from 'styled-components'

const Footer = ({ siteTitle, icons }) => (
  <FooterContainer>
    <Masthead>
      <Title>Decoupled Drupal Days</Title>
      <SubTitle>Aug. 17-19, 2018</SubTitle>
      <SubTitle>John Jay College of Criminal Justice</SubTitle>
      <SubTitle>524 W 59th St, New York, NY 10019</SubTitle>
    </Masthead>
    <Map>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3021.631989835315!2d-73.9892263!3d40.7701182!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xefb0711781c769e!2sJohn+Jay+College+of+Criminal+Justice!5e0!3m2!1sen!2sus!4v1525136243936" />
    </Map>
    <InfoContainer>
      <Copywrite>© 2018 DECOUPLED DRUPAL DAYS ALL RIGHTS RESERVED</Copywrite>
      <SocialIconsList>
        {icons.map(({ node }, i) => (
          <SocialIcon>
            <a
              href={node.url}
              dangerouslySetInnerHTML={{ __html: node.icon }}
              key={i}
            />
          </SocialIcon>
        ))}
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
const Title = styled.p``

const SubTitle = styled.p``

const Map = styled.div``

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
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
`
