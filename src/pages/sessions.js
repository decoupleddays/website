import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SiteLayout from '../components/siteLayout';
import SEO from '../components/meta/seo';

const SessionCard = () => (
  <div className="flex flex-col md:flex-row md:items-center md:gap-4 ">
    <div className="text-lg md:text-base font-bold !leading-none font-paritySans block order-2 md:order-1">
      1:00pm – 1:50pm
    </div>

    <div className="order-1 md:order-2">
      <h3 className="!m-0 !p-0 !leading-none !mb-3">
        <span className="text-sm font-paritySans block !leading-[.9] mb-3 md:mb-1 text-neutral-900">
          JavaScript and JAMstack <span className="text-neutral-600">•</span>{' '}
          Intermediate
        </span>
        <a
          href="/singleSession"
          className="!leading-tight font-paritySans font-bold "
        >
          Frontend &amp; Figma Magic: Building a connected UI Kit for Emulsify
        </a>
      </h3>
      <p className="font-paritySans block font-bold !mb-2 !md:mb-0">
        Speakers: Brian Lewis, Randy Oest
      </p>
    </div>

    <div className="flex ml-5 order-3 md:order-3 mt-3 md:mt-0">
      <img
        className="w-[60px] md:w-[100px] rounded-full !m-0 !-ml-5 drop-shadow-lg block z-50 border-4 border-solid border-white"
        src="https://www.fourkitchens.com/wp-content/uploads/2020/03/Brian.jpg"
        alt=""
      />
      <img
        className="w-[60px] md:w-[100px] rounded-full !m-0 !-ml-5 drop-shadow-lg block z-40 border-4 border-solid border-white"
        src="https://www.fourkitchens.com/wp-content/uploads/2020/03/dean-600x600.jpg"
        alt=""
      />
    </div>
  </div>
);

const SessionsPage = () => (
  <SiteLayout>
    <SEO title="Sessions" />
    <article className="text-neutral-900 prose lg:prose-xl prose-h1:font-parityDisplay prose-headings:font-parityDisplay prose-headings:text-blue-700 marker:text-neutral-400">
      <h1>Sessions</h1>
      <h2>August 17, 2022</h2>
      <ul className="!m-0 !p-0">
        <li className="!m-0 !p-0 list-none !mb-14">
          <SessionCard />
        </li>
        <li className="!m-0 !p-0 list-none !mb-14">
          <SessionCard />
        </li>
        <li className="!m-0 !p-0 list-none !mb-14">
          <SessionCard />
        </li>
        <li className="!m-0 !p-0 list-none !mb-14">
          <SessionCard />
        </li>
      </ul>
    </article>
  </SiteLayout>
);

SessionsPage.propTypes = {};

export default SessionsPage;

export const query = graphql`
  query SessionsPageQuery {
    allNodeSession(
      filter: {
        status: { eq: true }
        relationships: { field_tags: { elemMatch: { name: { eq: "2022" } } } }
      }
      sort: {
        fields: [field_time, relationships___field_room___weight, title]
        order: ASC
      }
    ) {
      edges {
        node {
          nid: drupal_internal__nid
          title
          path {
            alias
          }
          field_session_length
          datetime: field_time(formatString: "h:mm:a")
          day: field_time(formatString: "d")
          time: field_time
          track: field_track
          r: relationships {
            room: field_room {
              name
              tid: drupal_internal__tid
            }
            sponsor: field_sponsor {
              r: relationships {
                logo: field_sponsor_logo {
                  url
                  gatsbyImage(width: 10)
                }
              }
              title
            }
            speakers: field_speakers {
              nid: drupal_internal__nid
              title
              relationships {
                field_company {
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`;
