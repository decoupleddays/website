import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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

const Speakers = ({ data }) => (
  <SiteLayout>
    <SEO title="Sessions" />
    <article className="text-neutral-900 prose lg:prose-xl prose-h1:font-parityDisplay prose-headings:font-parityDisplay prose-headings:text-blue-700 marker:text-neutral-400">
      <h1>Speakers</h1>
      <ul className="!m-0 !p-0">
        {Object.entries(data.allNodeSpeaker.edges).map((person) => (
          <li className="!m-0 !p-0 list-none !mb-14 drop-shadow-lg rounded-md !p-4 bg-purple-700 text-white">
            {person[1].node.relationships.field_photo && (
              <img
                className="w-[200px] h-[200px] -top-6 -left-6 relative rounded-full !m-0 block z-50 border-4 border-solid border-white"
                src={person[1].node.relationships.field_photo.url}
                alt={person[1].node.title}
              />
            )}
            <h2 className="!text-white !m-0">{person[1].node.title}</h2>
            {person[1].node.relationships.field_company && (
              <p>{person[1].node.relationships.field_company.title}</p>
            )}
          </li>
        ))}
      </ul>
    </article>
  </SiteLayout>
);

Speakers.propTypes = {};

export default Speakers;

export const query = graphql`
  query MyQuerySpeaker {
    allNodeSpeaker {
      edges {
        node {
          title
          relationships {
            field_company {
              title
            }
            field_photo {
              uri {
                url
              }
              url
            }
          }
        }
      }
    }
  }
`;
