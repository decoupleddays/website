import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SponsorsDiamond = ({ className }) => (
  <div className={classNames(className, 'mt-2 md:mt-0')}>
    <h3 className="text-center font-bold uppercase text-neutral-500 leading-none pb-2">
      Diamond Sponsors
    </h3>
    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 border-t border-solid border-neutral-200 flex flex-row flex-wrap gap-x-8 gap-y-2 justify-center">
      <div className="">
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
            <a
              href={data.allNodeSponsors.edges[0].node.field_sponsor_link.uri}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="h-12"
                src={
                  data.allNodeSponsors.edges[0].node.relationships
                    .field_sponsor_logo.url
                }
                alt={data.allNodeSponsors.edges[0].node.title}
              />
            </a>
          )}
        />
      </div>
    </div>
  </div>
);

SponsorsDiamond.propTypes = {
  className: PropTypes.string,
};

export default SponsorsDiamond;
