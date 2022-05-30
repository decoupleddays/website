import * as React from 'react';
import { Link } from 'gatsby';
import Logo from '../logo';
import MenuPrimary from '../menuPrimary';
import Button from '../callForPapersButton';

const SiteHeader = () => (
  <header className="pt-5">
    <div className="pb-5 px-5 max-w-screen-xl mx-auto flex flex-row items-center gap-7">
      <Link to="/">
        <Logo />
      </Link>
      <Button>Call for Papers</Button>
      <MenuPrimary className="ml-auto" />
    </div>
  </header>
);

export default SiteHeader;
