import React from 'react'
import styled from 'styled-components'
import { colors } from '../../colors'

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: ${colors.veniceBlue};
  color: ${colors.white};
  text-transform: uppercase;
  cursor: pointer;
`
export default Button
