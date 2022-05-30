import React from 'react';
import Logo from '../logo';
import Button from '../callForPapersButton';
import MenuPrimary from '../menuPrimary';

const HomeHero = () => (
  <div className="pb-14 pt-10 px-5 max-w-screen-xl mx-auto flex flex-col gap-10 hero">
    <MenuPrimary className="mx-auto mt-5" />
    <Logo size="lg" className="mx-auto" />

    <h1 className="hero__headline text-7xl font-parityDisplay font-black leading-none text-center mt-20">
      The only conference on the future of CMS, headlessCMS, and decoupledCMS.
    </h1>

    <Button className="mx-auto">Call for Papers</Button>

    <p className="mt-11 text-2xl max-w-3xl mx-auto">
      In its sixth year after a successful debut in 2017,{' '}
      <strong>Decoupled Days</strong> is a conference for architects,
      developers, and businesspeople involved in implementing headless CMS
      architectures. The 2022 edition is scheduled for <strong>August</strong>{' '}
      in person in New York City!
    </p>

    <p className="mt-0 text-xl max-w-3xl mx-auto">
      Headless or decoupled CMS is the use of a content management system as a
      content service for other non-CMS applications, whether they are in native
      desktop or mobile, universal JavaScript, set-top boxes, IoT devices,
      conversational interfaces, or other technologies.
    </p>
  </div>
);

export default HomeHero;
