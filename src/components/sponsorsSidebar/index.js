import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import classNames from 'classnames';

const headerStyles = classNames(
  'text-center font-bold uppercase text-neutral-500 leading-none pb-2'
);

const sponosorListStyles = (homepage) =>
  classNames(
    'max-w-7xl mx-auto mb-2 py-4 px-4 sm:px-6 lg:px-8 flex flex-row flex-wrap justify-center items-center',
    { 'md:flex-row gap-8': homepage },
    { 'md:flex-col gap-4': !homepage }
  );

const SponsorsSidebar = ({ className, homepage }) => {

  const data = useStaticQuery(graphql`
    query SponsorSidebar {
      allNodeSponsors(
        filter: {
          field_sponsor_level: { in: ["gold", "silver", "bronze", "media"] },
          relationships: {
            field_tags: {elemMatch: {name: {eq: "2023"}}}
          }
        }
        sort: {title: ASC }
      ) {
        nodes {
            title
            field_sponsor_link {
              uri
            }
            relationships {
              field_sponsor_logo {
                url
              }
            }
            id
            field_sponsor_level
          }
        }
      }
    `);

  const gold = data.allNodeSponsors.nodes.filter(sponsor => sponsor.field_sponsor_level === 'gold');
  const silver = data.allNodeSponsors.nodes.filter(sponsor => sponsor.field_sponsor_level === 'silver');
  const bronze = data.allNodeSponsors.nodes.filter(sponsor => sponsor.field_sponsor_level === 'bronze');
  const media = data.allNodeSponsors.nodes.filter(sponsor => sponsor.field_sponsor_level === 'media');

  return(
  <div className={className}>
    <div>
      {data.allNodeSponsors.nodes.length > 0 && (
        <section className="flex flex-col gap-8">
          {gold.length > 0 && (
            <section className="gold-spopnsors">
              <h3 className={headerStyles}>Gold Sponsors</h3>
              <div className={sponosorListStyles(homepage)}>
                {gold.map((sponsor) => (
                  <div key={sponsor.id}>
                    <a
                      href={sponsor.field_sponsor_link.uri}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="h-12"
                        src={
                          sponsor.relationships.field_sponsor_logo
                            .url
                        }
                        alt={sponsor.title}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </section>
          )}

          {silver.length > 0 && (
            <section className="silver-sponsors">
              <h3 className={headerStyles}>Silver Sponsors</h3>
              <div className={sponosorListStyles(homepage)}>
                {silver.map((sponsor) => (
                    <div key={sponsor.id}>
                      <a
                        href={sponsor.field_sponsor_link.uri}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="h-10"
                          src={
                            sponsor.relationships.field_sponsor_logo
                              .url
                          }
                          alt={sponsor.title}
                        />
                      </a>
                    </div>
                  ))}
              </div>
            </section>
          )}

          {bronze.length > 0 && (
            <section>
              <h3 className={headerStyles}>Bronze Sponsors</h3>
              <div className={sponosorListStyles(homepage)}>
                { bronze.map((sponsor) => (
                    <div key={sponsor.id}>
                      <a
                        href={sponsor.field_sponsor_link.uri}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="h-8"
                          src={
                            sponsor.relationships.field_sponsor_logo
                              .url
                          }
                          alt={sponsor.title}
                        />
                      </a>
                    </div>
                  ))
                }
              </div>
            </section>
          )}

          {media.length > 0 && (
            <section>
              <h3 className={headerStyles}>Community Sponsors</h3>
              <div className={sponosorListStyles(homepage)}>
                {media.map((sponsor) => (
                    <div key={sponsor.id}>
                      <a
                        href={sponsor.field_sponsor_link.uri}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="h-6"
                          src={
                            sponsor.relationships.field_sponsor_logo.url
                          }
                          alt={sponsor.title}
                        />
                      </a>
                    </div>
                  ))}
              </div>
            </section>
          )}
        </section>
      )}
    </div>
  </div>
)};

SponsorsSidebar.propTypes = {
  className: PropTypes.string,
  homepage: PropTypes.bool,
};

export default SponsorsSidebar;
