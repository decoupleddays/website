import React from 'react'
import styled from 'styled-components'

import Link from '../link/link'

const Section = ({ data }) => (
  <StyledSection>
    {/** <img src={data.image.url} alt={data.image.alt} /> **/}
    <Title>{data.title}</Title>
    <Content>{data.content}</Content>
    <StyledLink to={data.link.url}>{data.link.title}</StyledLink>
  </StyledSection>
)

export default Section

const StyledSection = styled.section``

const Title = styled.h2``

const Content = styled.div``

const StyledLink = styled(Link)``
