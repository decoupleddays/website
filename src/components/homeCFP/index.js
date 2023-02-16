import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import bkgImg from '../../assets/images/teemu-paananen-bzdhc5b3Bxs-unsplash-BW.jpg';

const HomeCFP = ({ data }) => (
  <div className="md:grid md:grid-cols-[1fr_2fr] lg:grid-cols-2 w-screen mt-5 md:mt-10">
    <div
      className="hidden md:block before:mix-blend-color before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-800 before:to-purple-800 relative after:bg-blue-500 after:absolute after:inset-0 after:mix-blend-luminosity after:opacity-80"
      style={{
        backgroundImage: `url(${bkgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    />
    <div className="bg-purple-500 px-5 py-9 lg:p-14">
      <div className="prose lg:prose-lg z-10 text-white mx-auto max-w-none">
        <h2 className="lg:text-5xl font-parityDisplay font-black leading-none text-white mb-2 lg:mb-6">
          Call for Papers is Open!
        </h2>
        <p>
          We appreciate the time and effort you spend in crafting every
          proposal. This year, 50% of all accepted sessions will go to members
          of underrepresented groups, and 10% will go to first-time speakers.
        </p>
        <p>
          We’re accepting 25- and 50-minute proposals in the following five
          tracks:
        </p>
        <ul>
          <li>Traditional CMS</li>
          <li>Headless CMS</li>
          <li>JavaScript and Jamstack</li>
          <li>People and Community</li>
          <li>Business/CXO</li>
        </ul>
      </div>
      <a
        className="inline-block font-bold uppercase leading-tight px-6 py-3 transition-all border-2 border-solid border-white/50 text-white no-underline mt-4 hover:bg-purple-900 hover:border-purple-900/100"
        href="https://forms.gle/yNyD9a5R834AAbYp9"
      >
        Submit your paper <FontAwesomeIcon icon={faRightLong} />
      </a>
    </div>
  </div>
);

HomeCFP.propTypes = {
  data: PropTypes.node,
};

export default HomeCFP;
