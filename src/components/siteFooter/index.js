import * as React from 'react';
import Logo from '../logo';
import badge from '../../assets/images/4k-badge.svg';

const SiteFooter = () => (
  <footer className="bg-neutral-50 mix-blend-multiply">
    <div className="max-w-screen-xl pt-10 mx-auto pb-14 px-7 text-neutral-700">
      <Logo className="relative -left-4" />
      <p className="text-sm mt-9">
        © 2022 Decoupled Days. All rights reserved.
      </p>
      <p className="flex flex-row items-center gap-2 text-sm mt-9 ">
        Designed with 💚 by
        <img src={badge} alt="" />
      </p>
    </div>
  </footer>
);

export default SiteFooter;
