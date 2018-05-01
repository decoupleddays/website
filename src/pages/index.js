import React from 'react'
import Link from 'gatsby-link'

import Section from '../components/section/section';
import Sponsors from '../components/sponsors/sponsors';

import papers from '../sections/papers';
import tickets from '../sections/tickets';

const IndexPage = () => (
  <div>
    <Section data={papers} />
    <Sponsors level="Diamond" />
    <Section data={tickets} />

    <Sponsors level="Gold" />

  </div>
)

export default IndexPage
