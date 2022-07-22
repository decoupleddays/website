const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allNodePage(
          filter: {
            relationships: {
              field_tags: { elemMatch: { name: { eq: "2022" } } }
            }
          }
        ) {
          nodes {
            path {
              alias
            }
            nid: drupal_internal__nid
          }
        }
        allNodeSession(
          filter: {
            relationships: {
              field_tags: { elemMatch: { name: { eq: "2022" } } }
            }
          }
        ) {
          nodes {
            path {
              alias
            }
            nid: drupal_internal__nid
          }
        }
        allNodeSponsors(
          filter: {
            relationships: {
              field_tags: { elemMatch: { name: { eq: "2022" } } }
            }
          }
        ) {
          nodes {
            path {
              alias
            }
            nid: drupal_internal__nid
          }
        }
      }
    `
  );
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const PageTemplate = path.resolve('src/templates/Page/index.js');
  result.data.allNodePage.nodes.forEach((node) => {
    console.log();
    createPage({
      path: node.path.alias,
      component: PageTemplate,
      context: {
        slug: node.nid,
      },
    });
  });
};
