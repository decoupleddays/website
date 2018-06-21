const path = require('path')

exports.onCreateNode = async ({ node, getNodes, boundActionCreators }) => {
  const { createParentChildLink } = boundActionCreators

  const type = node.internal.type

  if (['SectionsJson', 'SponsorsJson'].includes(type)) {
    // Attach thumbnail's ImageSharp node
    // Find absolute path of linked path
    const pathToFile = path
      .join(__dirname, node.image.url)
      .split(path.sep)
      .join('/')

    // Find ID of File node
    const fileNode = getNodes().find(n => n.absolutePath === pathToFile)

    if (fileNode != null) {
      // Find ImageSharp node corresponding to the File node
      const imageSharpNodeId = fileNode.children.find(n =>
        n.endsWith('>> ImageSharp')
      )
      console.log(imageSharpNodeId);
      const imageSharpNode = getNodes().find(n => n.id === imageSharpNodeId)

      // Add ImageSharp node as child
      createParentChildLink({ parent: node, child: imageSharpNode })
    }
  }
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
