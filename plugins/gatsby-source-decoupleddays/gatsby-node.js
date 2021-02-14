const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const PageTemplate = path.resolve('src/templates/Page/index.js')
  const SponsorTemplate = path.resolve('src/templates/Sponsor/index.js')
  const SessionTemplate = path.resolve('src/templates/Session/index.js')
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allNodePage {
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

        {/** result.data.allNodeSession.edges.forEach(({ node }) => {
          createPage({
            path: node.path.alias,
            component: SessionTemplate,
            context: {
              slug: node.nid,
            },
          })
        })*/}

        {/* result.data.allNodeSponsors.edges.forEach(({ node }) => {
          createPage({
            path: node.path.alias,
            component: SponsorTemplate,
            context: {
              slug: node.nid,
            },
          })
        }) */}
      })
    )
  })
}
