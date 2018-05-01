import React from 'react'
import Link from 'gatsby-link'

import Section from '../components/section/section';
import Sponsors from '../components/sponsors/sponsors';

import papers from '../sections/papers';
import tickets from '../sections/tickets';

const IndexPage = () => (
  <div>
    <Section data={papers} />
    <Section data={tickets} />

    <h3>Our Sponsors</h3>
    <Sponsors level="Diamond" />
    <Sponsors level="Gold" />
    <Sponsors level="Silver" />

  </div>
)

export default IndexPage
