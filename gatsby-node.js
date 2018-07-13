const path = require('path')

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    if (page.path.match(/^\/404/)) {
      page.layout = '404'
      createPage(page)
    }
    resolve()
  })
}

exports.createPages = ({boundActionCreators, graphql}) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allNodePage {
            edges {
              node {
                nid
                path {
                  alias
                }
              }
            }
          }
          allNodeSession {
            edges {
              node {
                nid
                path {
                  alias
                }
              }
            }
          }
          allNodeSponsors(
            filter: {
              body: {
                processed: {
                  ne: null
                }
              }
            }
            sort:{fields:[field_sponsor_level] order:ASC}
          ){
            edges {
              node {
                nid
                path {
                  alias
                }
              }
            }
          }
        }

      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allNodePage.edges.forEach(({node}) => {
          createPage({
            path: node.path.alias,
            component: path.resolve(`./src/templates/page.js`),
            context: {
              slug: node.nid
            }
          })
        })

        result.data.allNodeSession.edges.forEach(({node}) => {
          createPage({
            path: node.path.alias,
            component: path.resolve(`./src/templates/session.js`),
            context: {
              slug: node.nid
            }
          })
        })

        result.data.allNodeSponsors.edges.forEach(({node}) => {
          createPage({
            path: node.path.alias,
            component: path.resolve(`./src/templates/sponsor.js`),
            context: {
              slug: node.nid
            }
          })
        })
      })
    )
  })
}
