import * as React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const SponsorsSidebar = ({ className }) => (
  <div className={className}>
    <StaticQuery
      query={graphql`
        query MyQuerySponsorSidebar {
          allNodeSponsors(
            filter: {
              field_sponsor_level: { in: ["gold", "silver", "bronze"] }
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
              {Object.entries(data.allNodeSponsors.edges).filter(
                (sponsor) => sponsor[1].node.field_sponsor_level === 'gold'
              ).length > 0 && (
                <section>
                  <h3 className="text-center font-bold uppercase text-neutral-500 leading-none pb-2">
                    Gold Sponsors
                  </h3>
                  <div className="max-w-7xl mx-auto mb-2 py-4 px-4 sm:px-6 lg:px-8 flex flex-row md:flex-col flex-wrap gap-4 justify-center items-center">
                    {Object.entries(data.allNodeSponsors.edges)
                      .filter(
                        (sponsor) =>
                          sponsor[1].node.field_sponsor_level === 'gold'
                      )
                      .map((sponsor) => (
                        <div>
                          <a
                            href={sponsor[1].node.field_sponsor_link.uri}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              className="h-12"
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

              {Object.entries(data.allNodeSponsors.edges).filter(
                (sponsor) => sponsor[1].node.field_sponsor_level === 'gold'
              ).length > 0 && (
                <section>
                  <h3 className="text-center font-bold uppercase text-neutral-500 leading-none pb-2">
                    Silver Sponsors
                  </h3>
                  <div className="max-w-7xl mx-auto mb-2 py-4 px-4 sm:px-6 lg:px-8 flex flex-row md:flex-col flex-wrap gap-4 justify-center items-center">
                    {Object.entries(data.allNodeSponsors.edges)
                      .filter(
                        (sponsor) =>
                          sponsor[1].node.field_sponsor_level === 'silver'
                      )
                      .map((sponsor) => (
                        <div>
                          <a
                            href={sponsor[1].node.field_sponsor_link.uri}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              className="h-12"
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

              {Object.entries(data.allNodeSponsors.edges).filter(
                (sponsor) => sponsor[1].node.field_sponsor_level === 'gold'
              ).length > 0 && (
                <section>
                  <h3 className="text-center font-bold uppercase text-neutral-500 leading-none pb-2">
                    Bronze Sponsors
                  </h3>
                  <div className="max-w-7xl mx-auto mb-2 py-4 px-4 sm:px-6 lg:px-8 flex flex-row md:flex-col flex-wrap gap-4 justify-center items-center">
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
                              className="h-12"
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
            </section>
          )}
        </div>
      )}
    />
  </div>
);

SponsorsSidebar.propTypes = {
  className: PropTypes.string,
};

export default SponsorsSidebar;
