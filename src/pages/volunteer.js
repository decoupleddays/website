import React from 'react'
import Link from 'gatsby-link'

import Sponsors from '../components/sponsors/sponsors'

const VolunteerPage = ({ data }) => {

  return (
    <div className="main">
      <h1>Become a Volunteer</h1>
      <p>If you're interested in volunteering to contribute to Decoupled Drupal Days, we’d welcome your support.</p>
      <p>You can register a volunteer here [Link]; someone from core organizing committee will contact you ASAP and help you figure out the contribution you can bring in to the event.</p>
      <p>Some of the low hanging fruits in terms of volunteer requirements:</p>
      <ul>
        <li>Developers, Designers or Content Writers who can help us get the marketing up and going.</li>
        <li>Help in managing the event run smoothly. Any prior event management experience would be helpful.</li>
        <li>Photography team.</li>
      </ul>
      <p>What do you get?</p>
      <p>First of all a big Thank You from New York Drupal Community; second a free ticket to the event and the invite to the Happy Hour party!</p>
    </div>
  )
}

export default VolunteerPage;
