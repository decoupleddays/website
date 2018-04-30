import React from 'react'
import Link from 'gatsby-link'

import Section from '../components/section/section';

import papers from '../sections/papers';

const IndexPage = () => (
  <div>
    <Section data={papers} />
  </div>
)

export default IndexPage
