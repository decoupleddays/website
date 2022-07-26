import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import SiteLayout from '../components/siteLayout';
import SEO from '../components/meta/seo';

const SessionCard = ({
  title,
  url,
  track,
  day,
  datetime,
  lenght,
  speakers,
}) => (
  <div className="flex flex-col md:flex-row md:items-center md:gap-4 ">
    <div className="text-lg md:text-base font-bold !leading-none font-paritySans block order-2 md:order-1">
      {day} <br /> {datetime} <br /> {lenght && { lenght }}
    </div>

    <div className="order-1 md:order-2 mr-4">
      <h3 className="!m-0 !p-0 !leading-none !mb-3">
        <span className="text-sm font-paritySans block !leading-[.9] mb-3 md:mb-1 text-neutral-900">
          {track}
        </span>
        <Link to={url} className="!leading-tight font-paritySans font-bold ">
          {title}
        </Link>
      </h3>

      <p className="font-paritySans block font-bold text-base !mb-0 !md:mb-0">
        {speakers.length > 0 && speakers.length > 1
          ? 'Speakers: '
          : 'Speaker: '}
      </p>
      <p className="font-paritySans block font-bold !mt-0 !mb-2 !md:mb-0">
        {speakers &&
          speakers.map((person) => (
            <span className="block">{person.title}</span>
          ))}
      </p>
    </div>

    <div className="flex ml-auto order-3 md:order-3 mt-3 md:mt-0">
      {speakers &&
        speakers.map((person) => {
          if (person.relationships.field_photo) {
            return (
              <img
                className="w-[60px] md:w-[100px] rounded-full !m-0 drop-shadow-lg block z-50 border-4 border-solid border-white"
                src={person.relationships.field_photo.url}
                alt={person.title}
              />
            );
          }
          return null;
        })}
    </div>
  </div>
);

const SessionsPage = ({ data }) => {
  const sessions = data.allNodeSession.edges;
  return (
    <SiteLayout>
      <SEO title="Sessions" />
      <article className="text-neutral-900 prose lg:prose-xl prose-h1:font-parityDisplay prose-headings:font-parityDisplay prose-headings:text-blue-700 marker:text-neutral-400">
        <h1>Sessions</h1>
        <ul className="!m-0 !p-0">
          {sessions.map((value) => {
            const session = value.node;
            return (
              <li className="!m-0 !p-0 list-none !mb-14">
                <SessionCard
                  title={session.title}
                  url={session.path.alias}
                  track={session.track}
                  day={session.day}
                  datetime={session.datetime}
                  length={session.field_session_length}
                  speakers={session.r.speakers}
                />
              </li>
            );
          })}
        </ul>
      </article>
    </SiteLayout>
  );
};

SessionsPage.propTypes = {
  data: PropTypes.node,
};

SessionCard.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  track: PropTypes.string,
  day: PropTypes.string,
  datetime: PropTypes.string,
  lenght: PropTypes.string,
  speakers: PropTypes.array,
};

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
          datetime: field_time(formatString: "h:mm a")
          day: field_time(formatString: "MMM DD")
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
                field_photo {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
