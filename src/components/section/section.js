import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Button from '../button/button'

import { colors } from '../../colors'

const Section = ({ data }) => (
  <StyledSection>
    <ThumbnailContainer>
      <Img sizes={data.childImageSharp.sizes} />
    </ThumbnailContainer>
    <Title>{data.title}</Title>
    <Content>{data.content}</Content>
    <StyledLink to={data.link.url}>{data.link.title}</StyledLink>
  </StyledSection>
)

export default Section

const StyledSection = styled.section`
  display: flex;
  border-bottom: 1px solid ${colors.veniceBlue};
  padding-bottom: 3rem;
  margin-bottom: 3rem;

  img {
    display: block;
    margin-right: 3rem;
  }
`

const Title = styled.h2`
  color: ${colors.veniceBlue};
  font-size: 2rem;
`

const Content = styled.div``

const StyledLink = styled(Link)``

const ThumbnailContainer = styled.div``
const RegisterButton = Button.extend`
  margin: 30px 0 0;
`
