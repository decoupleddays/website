import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import moment from 'moment';
import SiteLayout from '../components/siteLayout';
import SEO from '../components/meta/seo';
import 'moment-timezone';

const SessionCard = ({
  title,
  url,
  track,
  day,
  field_time,
  lenght,
  speakers,
  room,
}) => {
  const time =
    field_time && moment(field_time).tz('America/New_York').format('h:mma');
  return (
    <div className="flex flex-col md:flex-row md:items-center md:gap-4 ">
      {day && (
        <div className="text-lg md:text-base font-bold !leading-none font-paritySans block order-2 md:order-1">
          {day} <br /> {time} <br /> {lenght && { lenght }}
        </div>
      )}

      <div className="order-1 mr-4 md:order-2">
        <h3 className="!m-0 !p-0 !leading-none !mb-3">
          <span className="text-sm font-paritySans block !leading-[.9] mb-3 md:mb-1 text-neutral-900">
            {track} {room && <span>• {room.name} Room</span>}
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
            speakers.map((person, k) => (
              <span className="block" key={`title_${k}`}>
                {person.title}
              </span>
            ))}
        </p>
      </div>

      <div className="order-3 hidden mt-3 ml-auto md:order-3 md:mt-0 min-w-max md:flex">
        {speakers &&
          speakers.map((person, k) => {
            if (person.relationships.field_photo) {
              return (
                <img
                  className="object-cover w-[60px] md:w-[100px] h-[60px] md:h-[100px] rounded-full !m-0 drop-shadow-lg block z-50 border-4 border-solid border-white"
                  src={person.relationships.field_photo.url}
                  alt={person.title}
                  key={`image_${k}`}
                />
              );
            }
            return null;
          })}
      </div>
    </div>
  );
};

const SessionsPage = ({ data }) => {
  const sessions = data.allNodeSession.edges;
  return (
    <SiteLayout>
      <SEO title="Sessions" />
      <article className="prose text-neutral-900 lg:prose-xl prose-h1:font-parityDisplay prose-headings:font-parityDisplay prose-headings:text-blue-700 marker:text-neutral-400">
        <h1>Sessions</h1>
        <ul className="!m-0 !p-0">
          {sessions.map((value) => {
            const session = value.node;
            console.log(session);
            return (
              <li className="!m-0 !p-0 list-none !mb-14" key={session.nid}>
                <SessionCard
                  title={session.title}
                  url={session.path.alias}
                  track={session.track}
                  day={session.day}
                  field_time={session.field_time}
                  datetime={session.datetime}
                  length={session.field_session_length}
                  speakers={session.r.speakers}
                  room={session.r.room}
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
  data: PropTypes.object,
};

SessionCard.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  track: PropTypes.string,
  day: PropTypes.string,
  datetime: PropTypes.string,
  field_time: PropTypes.string,
  lenght: PropTypes.string,
  speakers: PropTypes.array,
  room: PropTypes.array,
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
          field_time
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
