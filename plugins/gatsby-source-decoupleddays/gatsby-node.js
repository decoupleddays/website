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
    createPage({
      path: node.path.alias,
      component: PageTemplate,
      context: {
        slug: node.nid,
      },
    });
  });

  const SessionTemplate = path.resolve('src/templates/Session/index.js');
  result.data.allNodeSession.nodes.forEach((node) => {
    createPage({
      path: node.path.alias,
      component: SessionTemplate,
      context: {
        slug: node.nid,
      },
    });
  });

  const SponsorTemplate = path.resolve('src/templates/Sponsor/index.js');
  result.data.allNodeSponsors.nodes.forEach((node) => {
    createPage({
      path: node.path.alias,
      component: SponsorTemplate,
      context: {
        slug: node.nid,
      },
    });
  });
};
