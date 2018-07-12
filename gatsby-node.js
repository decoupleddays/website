const path = require('path')

exports.onCreateNode = async ({ node, getNodes, boundActionCreators }) => {
  const { createParentChildLink } = boundActionCreators

  const type = node.internal.type
  // @todo: Add page build or remove this all together.
}

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
