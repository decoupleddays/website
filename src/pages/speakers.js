import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SiteLayout from '../components/siteLayout';
import SEO from '../components/meta/seo';

const Speakers = ({ data }) => (
  <SiteLayout>
    <SEO title="Sessions" />
    <article className="text-neutral-900 prose lg:prose-xl prose-h1:font-parityDisplay prose-headings:font-parityDisplay prose-headings:text-blue-700 marker:text-neutral-400">
      <h1>Speakers</h1>
      <ul className="!m-0 !p-0 speaker-list">
        {Object.entries(data.allNodeSpeaker.edges).map((person) => (
          <li className="!m-0 list-none !mb-14 drop-shadow-lg rounded-md !p-4 bg-purple-700 text-white speaker">
            {person[1].node.relationships.field_photo && (
              <img
                className="w-[170px] h-[170px] -top-7 -left-7 relative rounded-full !m-0 block z-50"
                src={person[1].node.relationships.field_photo.url}
                alt={person[1].node.title}
              />
            )}
            <h2 className="!text-white !m-0 !leading-none">
              {person[1].node.title}
            </h2>
            {person[1].node.relationships.field_company && (
              <p className="font-paritySans">
                {person[1].node.relationships.field_company.title}
              </p>
            )}
          </li>
        ))}
      </ul>
    </article>
  </SiteLayout>
);

Speakers.propTypes = { data: PropTypes.object };

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
