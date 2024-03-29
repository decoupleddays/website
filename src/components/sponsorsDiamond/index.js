import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SponsorsDiamond = ({ className }) => (
  <div className={classNames(className, 'mt-2 md:mt-0')}>
    <StaticQuery
      query={graphql`
        query MyQuery {
          allNodeSponsors(
            filter: { field_sponsor_level: { eq: "diamond" } }
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
              }
            }
          }
        }
      `}
      render={(data) => (
        <div>
          {data.allNodeSponsors.edges.length > 0 && (
            <div>
              <h3 className="pb-2 font-bold leading-none text-center uppercase text-neutral-500">
                Diamond Sponsors
              </h3>
              <div className="flex flex-row flex-wrap justify-center px-4 py-4 mx-auto border-t border-solid max-w-7xl sm:px-6 lg:px-8 border-neutral-200 gap-x-8 gap-y-2">
                { data.allNodeSponsors.edges.map(s => (
                  <div key={s.node.id}>
                    <a
                      href={
                        s.node.field_sponsor_link.uri
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="h-12"
                        src={
                          s.node.relationships
                            .field_sponsor_logo.url
                        }
                        alt={s.node.title}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    />
  </div>
);

SponsorsDiamond.propTypes = {
  className: PropTypes.string,
};

export default SponsorsDiamond;
