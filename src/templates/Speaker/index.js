import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../../components/meta/seo';
import SiteLayout from '../../components/siteLayout';
import Body from '../../components/fields/Body';

const SpeakerTemplate = ({ data }) => {
  const { title, body } = data.nodeSpeaker;

  const imageURL = data.nodeSpeaker.relationships.field_photo
    ? data.nodeSpeaker.relationships.field_photo.url
    : '';
  return (
    <SiteLayout>
      <SEO title={title} />
      <article className="text-neutral-900 prose lg:prose-xl prose-h1:font-parityDisplay prose-headings:font-parityDisplay prose-headings:text-blue-700 marker:text-neutral-400">
        {imageURL && (
          <img
            className="w-[300px] rounded-full float-right ml-4"
            src={imageURL}
            alt={title}
          />
        )}
        <h1>{title}</h1>
        {body.processed && <Body classes="container">{body.processed}</Body>}
      </article>
    </SiteLayout>
  );
};

SpeakerTemplate.propTypes = {
  data: PropTypes.node,
};

export default SpeakerTemplate;

export const query = graphql`
  query SpeakerTemplate($slug: Int!) {
    nodeSpeaker(drupal_internal__nid: { eq: $slug }) {
      title
      body {
        processed
      }
      relationships {
        field_photo {
          url
        }
      }
    }
  }
`;
