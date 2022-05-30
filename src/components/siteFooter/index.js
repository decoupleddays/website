import * as React from 'react';
import { Link } from 'gatsby';
import Logo from '../logo';
import badge from '../../assets/images/4k-badge.svg';

const SiteFooter = () => (
  <footer className="bg-neutral-50">
    <div className="pb-14 pt-10 px-5 max-w-screen-xl mx-auto text-neutral-700">
      <Link to="/">
        <Logo />
      </Link>
      <p className="text-sm mt-9">
        © 2022 Decoupled Days. All rights reserved.
      </p>
      <p className="text-sm mt-9 flex flex-row items-center gap-2 ">
        Designed with 💚 by
        <img src={badge} alt="" />
      </p>
    </div>
  </footer>
);

export default SiteFooter;
