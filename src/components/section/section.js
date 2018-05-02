import React from 'react'
import styled from 'styled-components'
import Button from '../button/button'

import { colors } from '../../colors'

const Section = ({ data }) => (
  <StyledSection>
    <img src={'http://placehold.it/260x180'} alt="Placeholder image" />
    <div className="section--text">
      <Title>{data.title}</Title>
      <Content>{data.content}</Content>
      <RegisterButton>{data.link.title}</RegisterButton>
    </div>
  </StyledSection>
)

export default Section

const StyledSection = styled.section`
  display: flex;
  border-bottom: 1px solid ${colors.veniceBlue};
  padding-bottom: 50px;
  padding-top: 50px;

  img {
    display: block;
    margin-right: 40px;
  }
`

const Title = styled.h2`
  color: ${colors.veniceBlue};
  font-size: 2rem;
`

const Content = styled.div``

const RegisterButton = Button.extend`
  margin: 30px 0 0;
`
