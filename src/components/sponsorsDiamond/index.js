import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SponsorsDiamond = ({ className }) => {

  const data = useStaticQuery(graphql`
    query DiamondSponsorQuery {
      allNodeSponsors(
        filter: {
          field_sponsor_level: { eq: "diamond" },
          relationships: {field_tags: {elemMatch: {name: {eq: "2023"}}}}
        }
        sort: { title: ASC }
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
        }
      }
    }
  `);

  return (
  <div className={classNames(className, 'mt-2 md:mt-0')}>
    <div>
      {data.allNodeSponsors.nodes.length > 0 && (
        <div>
          <h3 className="pb-2 font-bold leading-none text-center uppercase text-neutral-500">
            Diamond Sponsors
          </h3>
          <div className="flex flex-row flex-wrap justify-center px-4 py-4 mx-auto border-t border-solid max-w-7xl sm:px-6 lg:px-8 border-neutral-200 gap-x-8 gap-y-2">
            { data.allNodeSponsors.nodes.map(s => {
              return(
              <div key={s.id}>
                {s.field_sponsor_link.uri &&
                  <a href={s.field_sponsor_link.uri}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="h-12"
                        src={
                          s.relationships.field_sponsor_logo.url
                        }
                        alt={s.title}
                      />
                  </a>
                }
              </div>
            )})}
          </div>
        </div>
      )}
    </div>
  </div>
)};

SponsorsDiamond.propTypes = {
  className: PropTypes.string,
};

export default SponsorsDiamond;
