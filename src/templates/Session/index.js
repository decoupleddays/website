import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import SEO from '../../components/meta/seo';
import SiteLayout from '../../components/siteLayout';
import Body from '../../components/fields/Body';
import moment from 'moment'
import 'moment-timezone'

const SessionTemplate = ({ data }) => {
  const { title, body, field_time, field_session_length } = data.nodeSession;
  const speakers = data.nodeSession.relationships.field_speakers;
  const time = field_time && moment(field_time)
    .tz('America/Denver')
    .format('MMM Do h:mma z');

  return (
    <SiteLayout>
      <SEO title={title} />
      <article className="prose text-neutral-900 lg:prose-xl prose-h1:font-parityDisplay prose-headings:font-parityDisplay prose-headings:text-orange-muted marker:text-neutral-400">
        <h1>{title}</h1>
        <h2>
          {speakers.length > 0 && speakers.length > 1
            ? 'Speakers: '
            : 'Speaker: '}
          <br />
          {speakers &&
            speakers.map((person, key) => (
              <>
                <Link key={key} className="inline-block text-orange" to={person.path.alias}>
                  {person.title}
                </Link>
                <br />
              </>
            ))}
        </h2>
        <div className="text-lg md:text-base font-bold !leading-none font-paritySans block order-2 md:order-1">{time} ({field_session_length} min)</div>
        {body.processed && <Body classes="container">{body.processed}</Body>}
      </article>
    </SiteLayout>
  );
};

SessionTemplate.propTypes = {
  data: PropTypes.object,
};

export default SessionTemplate;

export const query = graphql`
  query SessionTemplate($slug: Int!) {
    nodeSession(drupal_internal__nid: { eq: $slug }) {
      title
      body {
        processed
      }
      field_session_length
      field_time
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
