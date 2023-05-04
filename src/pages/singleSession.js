import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/pro-regular-svg-icons';
import SiteLayout from '../components/siteLayout';
import SEO from '../components/meta/seo';

const SessionPage = () => (
  <SiteLayout>
    <SEO title="Session" />
    <article className="prose text-neutral-900 lg:prose-xl prose-h1:font-parityDisplay prose-headings:font-parityDisplay prose-headings:text-blue-700 marker:text-neutral-400 pb-28">
      <p>
        <Link to="/sessions" className="text-sm font-bold uppercase">
          <FontAwesomeIcon icon={faLeftLong} /> All Sessions
        </Link>
      </p>
      <h1 className="!mb-2">
        <span className="text-lg font-paritySans block !leading-[.9] mb-3 md:mb-1 text-neutral-900">
          JavaScript and JAMstack <span className="text-neutral-600">•</span>{' '}
          Intermediate
        </span>
        Frontend &amp; Figma Magic: Building a connected UI Kit for Emulsify
      </h1>
      <h2 className="!font-paritySans !text-2xl !leading-none !text-neutral-900 !mt-3 !mb-10">
        1:00 – 1:50pm <br /> August 17, 2023
      </h2>
      <h3 className="!mb-0">Speakers</h3>
      <ul className="flex flex-row items-center gap-5 !p-0 !m-0 !mb-20">
        <li className="flex flex-row items-center gap-2 !p-0 !m-0 list-none">
          <img
            className="w-[60px] rounded-full !m-0 drop-shadow-lg block z-50 border-4 border-solid border-white"
            src="https://www.fourkitchens.com/wp-content/uploads/2020/03/Brian.jpg"
            alt=""
          />
          <span className="font-bold">Brian Lewis</span>
        </li>
        <li className="flex flex-row items-center gap-2 !p-0 !m-0 list-none">
          <img
            className="w-[60px] rounded-full !m-0 drop-shadow-lg block z-50 border-4 border-solid border-white"
            src="https://www.fourkitchens.com/wp-content/uploads/2020/03/dean-600x600.jpg"
            alt=""
          />
          <span className="font-bold">Randy Oest</span>
        </li>
      </ul>
      <p>
        Learn how Four Kitchens leveraged Emulsify to create a UI Kit that
        speaks design and code. Let designers make decisions in Figma that are
        automatically implemented in your Emulsify-based codebase. We will share
        why we took this approach, what the benefits are, and show you how to
        set up your own Figma project, connect it with Emulsify, and create your
        own UI Kit.
      </p>
    </article>
  </SiteLayout>
);

SessionPage.propTypes = {};

export default SessionPage;

// export const query = graphql`
//   query SessionsPageQuery {
//     allNodeSession(
//       filter: {
//         status: { eq: true }
//         relationships: { field_tags: { elemMatch: { name: { eq: "2023" } } } }
//       }
//       sort: {
//         fields: [field_time, relationships___field_room___weight, title]
//         order: ASC
//       }
//     ) {
//       edges {
//         node {
//           nid: drupal_internal__nid
//           title
//           path {
//             alias
//           }
//           field_session_length
//           datetime: field_time(formatString: "h:mm:a")
//           day: field_time(formatString: "d")
//           time: field_time
//           track: field_track
//           r: relationships {
//             room: field_room {
//               name
//               tid: drupal_internal__tid
//             }
//             sponsor: field_sponsor {
//               r: relationships {
//                 logo: field_sponsor_logo {
//                   url
//                   gatsbyImage(width: 10)
//                 }
//               }
//               title
//             }
//             speakers: field_speakers {
//               nid: drupal_internal__nid
//               title
//               relationships {
//                 field_company {
//                   title
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
