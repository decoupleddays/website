const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const PageTemplate = path.resolve('src/templates/Page/index.js');
  const SponsorTemplate = path.resolve('src/templates/Sponsor/index.js');
  const SessionTemplate = path.resolve('src/templates/Session/index.js');
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allNodePage(
            filter: {
              relationships: {
                field_tags: { elemMatch: { name: { eq: "2019" } } }
              }
            }
          ) {
            edges {
              node {
                nid: drupal_internal__nid
                path {
                  alias
                }
              }
            }
          }
          allNodeSession(
            filter: {
              relationships: {
                field_tags: { elemMatch: { name: { eq: "2019" } } }
              }
            }
          ) {
            edges {
              node {
                nid: drupal_internal__nid
                path {
                  alias
                }
              }
            }
          }
          allNodeSponsors(
            filter: {
              body: {processed: {ne: null}}
              relationships: {
                field_tags: { elemMatch: { name: { eq: "2019"}}}
              }
            }
            sort: {
              fields: [field_sponsor_level], order: ASC
            }
          ) {
            edges {
              node {
                nid: drupal_internal__nid
                path {
                  alias
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allNodePage.edges.forEach(({ node }) => {
          createPage({
            path: node.path.alias,
            component: PageTemplate,
            context: {
              slug: node.nid,
            },
          })
        })

        result.data.allNodeSession.edges.forEach(({ node }) => {
          createPage({
            path: node.path.alias,
            component: SessionTemplate,
            context: {
              slug: node.nid,
            },
          })
        })

        result.data.allNodeSponsors.edges.forEach(({ node }) => {
          createPage({
            path: node.path.alias,
            component: SponsorTemplate,
            context: {
              slug: node.nid,
            },
          })
        })
      })
    )
  })
}
