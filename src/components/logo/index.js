import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/pro-regular-svg-icons';

const GetTickets = () => {
  const button = classNames(
    'inline-block',
    'text-xs md:text-sm',
    'bg-purple-500 text-white',
    'font-bold uppercase leading-tight',
    'px-3 py-1 mt-2',
    'transition-all',
    'hover:bg-purple-700'
  );

  return (
    <p>
      <a
        className={button}
        href="https://www.eventbrite.com/e/decoupled-days-2022-registration-372881086367"
      >
        Get Your Ticket <FontAwesomeIcon icon={faRightLong} />
      </a>
    </p>
  );
};

const Logo = ({ size, className, hideTickets }) => {
  const wrapperStyle = classNames(
    'inline-flex flex-row flex-nowrap gap-2 items-center text-left',
    className
  );

  const nameStyle = classNames(
    'logo__name font-bold font-parityDisplay uppercase leading-extra-tight md:leading-extra-tight text-orange',
    { 'text-2xl md:text-4xl': !size, 'text-2xl md:text-5xl': size === 'lg' }
  );

  const dateStyle = classNames('font-black uppercase text-neutral-900', {
    'text-xs md:text-base': !size,
    'text-xs md:text-2xl': size === 'lg',
  });

  const panelStyle = classNames(
    'panels-panel absolute opacity-80 mix-blend-multiply'
  );

  const panel1Style = classNames(panelStyle, 'animate-panelFront');

  const panel2Style = classNames(panelStyle, 'animate-panelBack');

  return (
    <div className={wrapperStyle}>
      <div
        className={classNames(
          'panels text-orange items-center relative -top-2',
          size
        )}
      >
        <Link to="/">
        <svg
          width="63"
          height="81"
          viewBox="0 0 63 81"
          xmlns="http://www.w3.org/2000/svg"
          className={panel1Style}
        >
          <path
            fill="currentColor"
            d="M0 0C20.8818 2.37277 41.7636 4.74555 62.6454 7.11832C62.6454 28.6428 62.6454 50.1672 62.6454 71.6917C41.7636 74.7147 20.8818 77.7395 0 80.766C0 53.8422 0 26.9203 0 0Z"
          />
        </svg>
        <svg
          width="63"
          height="81"
          viewBox="0 0 63 81"
          xmlns="http://www.w3.org/2000/svg"
          className={panel2Style}
        >
          <path
            fill="currentColor"
            d="M0 0C20.8818 2.37277 41.7636 4.74555 62.6454 7.11832C62.6454 28.6428 62.6454 50.1672 62.6454 71.6917C41.7636 74.7147 20.8818 77.7395 0 80.766C0 53.8422 0 26.9203 0 0Z"
          />
        </svg>
        </Link>
      </div>
      <div>
        <Link to="/">
        <h1 className={nameStyle}>
          Decoupled <br />
          Days <span className="text-orange-light">2023</span>
        </h1>
        <p className={dateStyle}>August 16-17th, ABQ</p>
        </Link>
      </div>
    </div>
  );
};

Logo.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  hideTickets: PropTypes.bool,
};

export default Logo;
