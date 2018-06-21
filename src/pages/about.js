import React from 'react'
import Link from 'gatsby-link'

import Sponsors from '../components/sponsors/sponsors'

const AboutPage = ({ data }) => {

  return (
    <div className="main">
      <h1>About</h1>
      <p>In its second year after a successful debut in 2017, <strong>Decoupled Drupal Days</strong> (D3) is a conference for architects, developers, and businesspeople involved in implementing decoupled Drupal architectures. The 2018 edition is scheduled for <strong>August 17–19, 2018</strong> in <strong>New York City</strong>.</p>
      <p>Decoupled Drupal is the use of Drupal as a content service for other non-Drupal applications, whether they are in native desktop or mobile, universal JavaScript, set-top boxes, IoT devices, conversational interfaces, or other technologies.</p>
      <h2>Mission</h2>
      <p>The mission of Decoupled Drupal Days, beyond helping attendees engage and connect with people sharing their interests, is threefold:</p>
      <ul>
        <li><strong>Share best practices in <em>sessions</em>.</strong> We encourage everyone to share their experiences in both back-end development of Drupal as a content service and front-end development of non-Drupal applications consuming Drupal content, especially those in JavaScript.</li>
        <li><strong>Discuss difficult shared problems in <em>discussions</em>.</strong> We invite everyone to help identify and discuss shared issues in decoupling Drupal Drupal-backed front ends to gather in discussions to unblock progress in our respective communities.</li>
        <li><strong>Build open-source projects in <em>sprints</em>.</strong> We collaborate with contributors and members of open-source projects across the Drupal ecosystem and outside of it to build other open-source projects in code sprints that tangibly benefit our communities.</li>
      </ul>
      <h2>Conference</h2>
      <p>The conference consists of three days:</p>
      <ul>
        <li><strong>Friday, August 17</strong>: Opening remarks, keynote, and three tracks of sessions</li>
        <li><strong>Saturday, August 18</strong>: Keynote, three tracks of sessions, and closing remarks</li>
        <li><strong>Sunday, August 19</strong>: Code sprints and discussions</li>
      </ul>
    <h2>Tracks</h2>
      <p>For the first time, Decoupled Drupal Days will introduce three separate tracks for sessions to occur in parallel:</p>
      <ul>
        <li>The <strong>Drupal</strong> track will cover the use of Drupal as a content service. Topics include Drupal web services, recommended architectures and frameworks, techniques, and the surrounding decoupled Drupal ecosystem (SDKs, API-first distributions, and libraries).</li>
        <li>The <strong>JavaScript</strong> track will cover modern JavaScript and its use in decoupled Drupal architectures. Topics include universal JavaScript, server-side rendering, Node.js and ES6 techniques, frameworks and libraries such as Angular, React, Ember, and Vue, and JavaScript modernization efforts in Drupal.</li>
        <li>The <strong>Future</strong> track will concern experimental approaches and emerging technologies making use of decoupled Drupal, such as augmented and virtual reality, conversational interfaces, and the Internet of Things (IoT).</li>
      </ul>
    </div>
  )
}

export default AboutPage;

