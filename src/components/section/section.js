import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Button from '../button/button'

import { colors } from '../../colors'

const Section = ({ data }) => (
  <StyledSection>
    <ThumbnailContainer>
      <StyledThumbnail
        sizes={{ ...data.childImageSharp.sizes, aspectRatio: 4 / 3 }}
      />
    </ThumbnailContainer>
    <ContentContainer>
      <Title>{data.title}</Title>
      <Content>{data.content}</Content>
      <StyledLink to={data.link.url}>{data.link.title}</StyledLink>
    </ContentContainer>
  </StyledSection>
)

export default Section

const StyledSection = styled.section`
  display: flex;
  border-bottom: 1px solid ${colors.veniceBlue};
  padding-bottom: 1rem;
  margin-bottom: 3rem;

  &:last-of-type {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    border-bottom: none;
  }
`

const Title = styled.h2`
  color: ${colors.veniceBlue};
  font-size: 2rem;
  margin-bottom: 0.5rem;
`

const ContentContainer = styled.div`
  width: 65%;
  justify-content: flex-end;
  padding: 15px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Content = styled.div`
  margin-bottom: 1rem;
`

const StyledLink = styled(Link)`
  border-radius: 3px;
  padding: 0.5em 1em;
  background: ${colors.veniceBlue};
  color: ${colors.white};
  text-transform: uppercase;
  text-decoration: none;
`

const ThumbnailContainer = styled.div`
  width: 35%;
  padding: 15px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledThumbnail = styled(Img)`
  border-radius: 5%;
`

const RegisterButton = Button.extend`
  margin: 30px 0 0;
`
