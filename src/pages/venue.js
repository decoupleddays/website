import React from 'react'
import Link from 'gatsby-link'

import Sponsors from '../components/sponsors/sponsors'

const VenuePage = ({ data }) => {

  return (
    <div className="main">
      <h1>Venue</h1>
      <p>Decoupled Drupal Days 2018 will be held in New York City at the <a href="http://www.jjay.cuny.edu">John Jay College of Criminal Justice</a>, part of the City University of New York system and located at <strong>524 West 59th Street, New York, NY 10019</strong>. Our Contribution Day on Sunday will also be held at the John Jay College of Criminal Justice.</p>
      <p>The venue is located near the <strong>59 St/Columbus Circle</strong> (1, 2, A, D service) and the <strong>57 St</strong> (N, Q, R, W service) stations on the New York City Subway.</p>
      <h2>How to get here</h2>
      <p>New York City can be difficult to navigate, but fortunately there are many different means of arriving in the area and getting around the city. If you are coming from elsewhere in the United States, we strongly recommend you avoid driving, as parking can be prohibitively expensive in Midtown Manhattan.</p>
      <h3>Arriving by plane</h3>
      <p>There are three airports serving New York City, each with straightforward access to the Columbus Circle area.</p>
      <ul>
        <li>From <strong>John F. Kennedy International Airport (JFK)</strong>, take the Jamaica-bound <strong>AirTrain</strong>. At the AirTrain terminus at <em>Sutphin Blvd/Archer Av/JFK</em>, transfer to the Manhattan-bound <strong>E</strong> train on the New York City Subway. You can then transfer to the uptown <strong>B</strong> or <strong>D</strong> train at <em>47–50 Sts/Rockefeller Center</em>. Continue on the uptown <strong>B</strong> or <strong>D</strong> train to <em>59 St/Columbus Circle</em>. This journey takes approximately 1 hour and 20 minutes.</li>
        <li>From <strong>Newark Liberty International Airport (EWR)</strong>, take the <strong>AirTrain</strong> to <em>Newark Liberty International Airport station</em> served by New Jersey Transit (NJT). Then, take either the <strong>North Jersey Coast</strong> line or <strong>Northeast Corridor</strong> line to <em>New York Penn Station</em> in Manhattan. At <em>34 St/Penn Station</em> on the New York City Subway, take an uptown A train to <em>59 St/Columbus Circle</em>. This journey takes approximately 1 hour and 20 minutes.</li>
        <li>From <strong>LaGuardia Airport (LGA)</strong>, take the <strong>Q70 LaGuardia Link</strong> bus service from LaGuardia Airport to <em>Jackson Hts/Roosevelt Ave.</em> Then, take the Manhattan-bound <strong>R</strong> train on the New York City Subway to 57 St. This journey takes approximately 1 hour and 15 minutes.</li>
      </ul>
      <p>Inclusive of gratuity, taxis from JFK to Columbus Circle will run approximately $60–80, from LGA approximately $30–40, and from EWR approximately $80–100.</p>
      <h3>Arriving by train</h3>
      <p>Amtrak operates <strong>Penn Station</strong> in Manhattan, which is served by the Northeast Regional service (Boston–Washington), Acela Express service (Boston–Washington), other long-haul train services, and commuter rail services. Penn Station is contiguous with <em>34 St/Penn Station</em> on the New York City Subway. There, you can take an uptown <strong>A</strong> train uptown to <em>59 St/Columbus Circle</em>.</p>
      <h3>Arriving by bus</h3>
      <p>Megabus, Peter Pan Bus, and Bolt Bus offer intercity bus services throughout the Northeast Corridor and along the East Coast to New York City. Some bus services terminate at Port Authority Bus Terminal, while others terminate near 34 St/Hudson Yards at 34 St between 11 Av and 12 Av. From <em>42 St/Port Authority Bus Terminal</em> on the New York City Subway, take the uptown <strong>A</strong> train to <em>59 St/Columbus Circle</em>.</p>
      <h2>Happy hour venue</h2>
      <p>DETAILS TBD</p>
      <h2>Lunch and coffee</h2>
      <p>The Decoupled Drupal Days organizing team regrets that we cannot provide lunch and coffee at the venue for conference attendees. However, there is a large variety of options for lunch and coffee around the John Jay College of Criminal Justice for any budget.</p>
      <h3>Lunch</h3>
      <p>The following locations serve lunch in the vicinity of the John Jay College of Criminal Justice:</p>
      <ul>
        <li><a href="http://greekkitchennyc.com">The Greek Kitchen</a> (Greek), 889 10th Ave</li>
        <li><a href="http://www.rexcoffeenyc.com">Rex</a> (sandwiches), 864 10th Ave</li>
        <li><a href="https://burritoboxhellskitchen.com">The Burrito Box</a> (Mexican), 885 9th Av</li>
        <li><a href="https://www.yelp.com/biz/caf%C3%A9-ole-new-york-2">Café Ole</a> (sandwiches), 453 W 54th St</li>
        <li><a href="https://www.barbacon.com">Bar Bacon</a> (American), 836 9th Ave</li>
        <li><a href="http://eatbonmi.com">BONMi</a> (Vietnamese), 150 W 62nd St</li>
        <li><a href="https://www.yelp.com/biz/han-sushi-new-york">Han Sushi</a> (Japanese), 854 10th Ave</li>
        <li><a href="https://www.yelp.com/biz/boston-market-new-york">Boston Market</a> (fast, American), 885 10th Ave</li>
        <li><a href="https://www.yelp.com/biz/justinos-pizzeria-new-york">Justino's Pizza</a> (Pizza), 881 10th Ave</li>
        <li><a href="http://terakawaramenny.com">Terakawa Ramen</a> (Japanese), 885C 9th Ave</li>
        <li><a href="https://www.lunchboxcafeny.com">Lunch Box</a> (sandwiches), 886 9th Ave</li>
        <li><a href="http://www.kashkavalgarden.com">Kashkaval Garden</a> (Mediterranean), 852 9th Ave</li>
        <li><a href="https://www.ousianyc.com">Ousia</a> (Mediterranean), 629 W 57th St</li>
        <li><a href="https://www.sfilatinonyc.com">Sfilantino Italian Gourmet</a> (Italian), 342 W 57th St</li>
        <li><a href="https://www.cozumeltortilla.com">Cozumel Tortilla</a> (Mexican), 877 10th Ave</li>
      </ul>
      <h3>Coffee</h3>
      <p>The following locations serve coffee in the vicinity of the John Jay College of Criminal Justice:</p>
      <ul>
        <li><a href="https://www.starbucks.com/store-locator/store/1009088">Starbucks</a>, 475 W 57th St (at the NE corner of 57 St and 10 Av)</li>
        <li><a href="http://www.rexcoffeenyc.com">Rex</a>, 864 10th Ave (at the SE corner of 57 St and 10 Av)</li>
        <li><a href="https://www.starbucks.com/store-locator/store/8735/59th-columbus-2-columbus-avenue-new-york-ny-100236924-us">Starbucks</a>, 2 Columbus Ave (at the SE corner of 59 St and 9 Av)</li>
        <li><a href="https://www.yelp.com/biz/dunkin-donuts-new-york-58">Dunkin' Donuts</a>, 815 10th Ave (at the SW corner of 55 St and 10 Av)</li>
        <li><a href="https://www.fikanyc.com">FIKA</a>, 824 10th Ave (at the SE corner of 55 St and 10 Av)</li>
        <li><a href="https://www.yelp.com/biz/caf%C3%A9-ole-new-york-2">Café Ole</a>, 453 W 54th St (at the NE corner of 54 St and 10 Av)</li>
      </ul>
      <h2>Things to do in the area</h2>
      <p>The Columbus Circle area, let alone Midtown Manhattan, has plenty to do for visitors to New York City.</p>
      <ul>
        <li>The <a href="https://www.topoftherocknyc.com">Top of the Rock</a> is the observation deck at the top of 30 Rockefeller Plaza. We recommend that you aim to arrive early in the day or late in the evening, as lines can get very long.</li>
        <li>The <a href="http://www.thetouratnbcstudios.com">NBC Studio Tour</a> takes visitors through the history and impact of NBC, one of the primary television broadcasters in the United States.</li>
        <li><a href="https://www.rockefellercenter.com">Rockefeller Center</a> itself is a shopping hub, with many noted stores located both above ground and underground.</li>
        <li><a href="http://www.radiocity.com">Radio City Music Hall</a>, an iconic performance venue where several popular television shows are filmed and the Rockettes perform, is located just north of 30 Rockefeller Plaza.</li>
        <li><a href="https://saintpatrickscathedral.org">St. Patrick's Cathedral</a>, one of the most iconic churches in New York City, is located at the northeast corner of 5th Av and 50th St.</li>
        <li>Times Square and Broadway are located mere blocks away from the venue.</li>
        <li>Further away, Grand Central Terminal is located to the southeast, and Central Park is located directly north of Rockefeller Center.</li>
      </ul>
      <h2>Expected weather</h2>
      <p>New York City can be extremely hot and humid during the month of August. We recommend you wear light clothing with few layers and drink ample water. The heat and humidity can be particularly stifling on New York City Subway platforms, where temperatures can reach high extremes.</p>
    </div>
  )
}

export default VenuePage;

