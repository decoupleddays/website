import * as React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
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

const SponsorsSidebar = ({ className, homepage }) => (
  <div className={className}>
    <StaticQuery
      query={graphql`
        query MyQuerySponsorSidebar {
          allNodeSponsors(
            filter: {
              field_sponsor_level: { in: ["gold", "silver", "bronze", "media"] }
            }
            sort: { fields: title }
          ) {
            edges {
              node {
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
        }
      `}
      render={(data) => (
        <div>
          {data.allNodeSponsors.edges.length > 0 && (
            <section className="flex flex-col gap-8">
              {data.allNodeSponsors.edges.filter(
                (sponsor) => sponsor.node.field_sponsor_level === 'gold'
              ).length > 0 && (
                <section>
                  <h3 className={headerStyles}>Gold Sponsors</h3>
                  <div className={sponosorListStyles(homepage)}>
                    {data.allNodeSponsors.edges
                      .filter(
                        (sponsor) => sponsor.node.field_sponsor_level === 'gold'
                      )
                      .map((sponsor) => (
                        <div key={sponsor.node.id}>
                          <a
                            href={sponsor.node.field_sponsor_link.uri}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              className="h-12"
                              src={
                                sponsor.node.relationships.field_sponsor_logo
                                  .url
                              }
                              alt={sponsor.node.title}
                            />
                          </a>
                        </div>
                      ))}
                  </div>
                </section>
              )}

              {/* {data.allNodeSponsors.edges.filter(
                (sponsor) => sponsor.node.field_sponsor_level === 'silver'
              ).length > 0 && (
                <section>
                  <h3 className={headerStyles}>Silver Sponsors</h3>
                  <div className={sponosorListStyles(homepage)}>
                    {Object.entries(data.allNodeSponsors.edges)
                      .filter(
                        (sponsor) =>
                          sponsor.node.field_sponsor_level === 'silver'
                      )
                      .map((sponsor) => (
                        <div key={sponsor.node.id}>
                          <a
                            href={sponsor.node.field_sponsor_link.uri}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              className="h-6"
                              src={
                                sponsor.node.relationships.field_sponsor_logo
                                  .url
                              }
                              alt={sponsor.node.title}
                            />
                          </a>
                        </div>
                      ))}
                  </div>
                </section>
              )} */}

              {data.allNodeSponsors.edges.filter(
                (sponsor) => sponsor.node.field_sponsor_level === 'bronze'
              ).length > 0 && (
                <section>
                  <h3 className={headerStyles}>Bronze Sponsors</h3>
                  <div className={sponosorListStyles(homepage)}>
                    {Object.entries(data.allNodeSponsors.edges)
                      .filter(
                        (sponsor) =>
                          sponsor[1].node.field_sponsor_level === 'bronze'
                      )
                      .map((sponsor) => (
                        <div>
                          <a
                            href={sponsor[1].node.field_sponsor_link.uri}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              className="h-auto max-w-[170px]"
                              src={
                                sponsor[1].node.relationships.field_sponsor_logo
                                  .url
                              }
                              alt={sponsor[1].node.title}
                            />
                          </a>
                        </div>
                      ))}
                  </div>
                </section>
              )}

              {data.allNodeSponsors.edges.filter(
                (sponsor) => sponsor.node.field_sponsor_level === 'media'
              ).length > 0 && (
                <section>
                  <h3 className={headerStyles}>Media Sponsors</h3>
                  <div className={sponosorListStyles(homepage)}>
                    {data.allNodeSponsors.edges
                      .filter(
                        (sponsor) =>
                          sponsor.node.field_sponsor_level === 'media'
                      )
                      .map((sponsor) => (
                        <div key={sponsor.node.id}>
                          <a
                            href={sponsor.node.field_sponsor_link.uri}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              className="h-6"
                              src={
                                sponsor.node.relationships.field_sponsor_logo
                                  .url
                              }
                              alt={sponsor.node.title}
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
      )}
    />
  </div>
);

SponsorsSidebar.propTypes = {
  className: PropTypes.string,
  homepage: PropTypes.bool,
};

export default SponsorsSidebar;
