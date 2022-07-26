import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import SEO from '../../components/meta/seo';
import SiteLayout from '../../components/siteLayout';
import Body from '../../components/fields/Body';

const SessionTemplate = ({ data }) => {
  const { title, body } = data.nodeSession;
  const speakers = data.nodeSession.relationships.field_speakers;

  return (
    <SiteLayout>
      <SEO title={title} />
      <article className="text-neutral-900 prose lg:prose-xl prose-h1:font-parityDisplay prose-headings:font-parityDisplay prose-headings:text-blue-700 marker:text-neutral-400">
        <h1>{title}</h1>
        <h2>
          {speakers.length > 0 && speakers.length > 1
            ? 'Speakers: '
            : 'Speaker: '}
          <br />
          {speakers &&
            speakers.map((person) => (
              <>
                <Link className="inline-block" to={person.path.alias}>
                  {person.title}
                </Link>
                <br />
              </>
            ))}
        </h2>
        {body.processed && <Body classes="container">{body.processed}</Body>}
      </article>
    </SiteLayout>
  );
};

SessionTemplate.propTypes = {
  data: PropTypes.node,
};

export default SessionTemplate;

export const query = graphql`
  query SessionTemplate($slug: Int!) {
    nodeSession(drupal_internal__nid: { eq: $slug }) {
      title
      body {
        processed
      }
      relationships {
        field_speakers {
          title
          path {
            alias
          }
          relationships {
            field_photo {
              url
            }
          }
        }
      }
    }
  }
`;
