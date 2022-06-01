import React from 'react';
import Logo from '../logo';
import Button from '../callForPapersButton';
import MenuPrimary from '../menuPrimary';

const HomeHero = () => (
  <div className="pb-14 pt-5 md:pt-10 md:max-w-screen-xl mx-auto flex flex-col gap-5 hero">
    <div className="flex flex-col items-start md:items-center mx-auto w-full gap-2 md:gap-6">
      <Logo size="lg" className="md:order-2" />
      <MenuPrimary className="px-4 md:order-1" />
    </div>

    <div className="mx-auto flex flex-col gap-5 md:gap-10 items-start px-5 md:px-12 lg:px-5">
      <h1 className="hero__headline text-4xl md:text-5xl lg:text-7xl font-parityDisplay font-black leading-none md:text-center mt-10 md:mt-20">
        The only conference on the future of CMS, headlessCMS, and decoupledCMS.
      </h1>

      <Button
        isURLExternal
        url="https://docs.google.com/forms/d/e/1FAIpQLSfX0kI6q_86yXNO0tAl7NSBZnnjcqM5FuBOoSuQc6J8HvSuuA/viewform"
        className="inline-block md:mx-auto"
      >
        Call for Papers
      </Button>

      <p className="mt-11 text-2xl max-w-3xl mx-auto">
        In its sixth year after a successful debut in 2017,{' '}
        <strong>Decoupled Days</strong> is a conference for architects,
        developers, and businesspeople involved in implementing headless CMS
        architectures. The 2022 edition is scheduled for <strong>August</strong>{' '}
        in person in New York City!
      </p>

      <p className="mt-0 text-xl max-w-3xl mx-auto">
        Headless or decoupled CMS is the use of a content management system as a
        content service for other non-CMS applications, whether they are in
        native desktop or mobile, universal JavaScript, set-top boxes, IoT
        devices, conversational interfaces, or other technologies.
      </p>
    </div>
  </div>
);

export default HomeHero;
