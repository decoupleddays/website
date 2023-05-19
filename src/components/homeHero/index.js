import React from 'react';
import Logo from '../logo';
import Button from '../callForPapersButton';
import MenuPrimary from '../menuPrimary';
import SponsorsDiamond from '../sponsorsDiamond';
import SponsorsSidebar from '../sponsorsSidebar';

const HomeHero = () => (
  <div className="flex flex-col gap-5 pt-5 mx-auto pb-14 md:pt-10 md:max-w-screen-xl hero">
    <div className="flex flex-col items-start w-full gap-2 mx-auto md:items-center md:gap-6">
      <Logo size="lg" className="md:order-2" hideTickets />
      <MenuPrimary className="px-4 md:order-1" />
    </div>

    <div className="flex flex-col items-start gap-5 px-5 mx-auto md:gap-10 md:px-12 lg:px-5">
      <h1 className="mt-10 text-4xl font-black leading-none hero__headline md:text-5xl lg:text-7xl font-parityDisplay md:text-center md:mt-20">
        The only conference on the future of CMS, headlessCMS, and decoupledCMS.
      </h1>

      <Button
        isURLExternal
        url="https://tinyurl.com/decoupled-days-2023-room-block"
        className="inline-block md:mx-auto"
      >
        Book Your Room
      </Button>

      <p className="max-w-3xl mx-auto text-2xl mt-11">
        In its seventh year after a successful debut in 2017,{' '}
        <strong>Decoupled Days</strong> is a conference for architects,
        developers, and businesspeople involved in implementing headless CMS
        architectures. The 2023 edition is scheduled for <strong>August</strong>{' '}
        in person in Albuquerque, New Mexico!
      </p>

      <p className="max-w-3xl mx-auto mt-0 text-xl">
        Headless or decoupled CMS is the use of a content management system as a
        content service for other non-CMS applications, whether they are in
        native desktop or mobile, universal JavaScript, set-top boxes, IoT
        devices, conversational interfaces, or other technologies.
      </p>
    </div>
  </div>
);

export default HomeHero;
