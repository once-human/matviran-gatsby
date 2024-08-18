exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  // Example of creating a page programmatically
  createPage({
    path: '/example-page',
    component: require.resolve('./src/templates/example-template.js'),
    context: {},
  });
};
