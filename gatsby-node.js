const _ = require("lodash");

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = (promise) =>
  promise.then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    return result;
  });

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = require.resolve("./src/templates/post.jsx");
  const categoryTemplate = require.resolve("./src/templates/category.jsx");

  const result = await wrapper(
    graphql(`
      {
        allPrismicPost {
          edges {
            node {
              id
              uid
            }
          }
        }
      }
    `)
  );

  const categorySet = new Set();
  const postsList = result.data.allPrismicPost.edges;

  // Double check that the post has a category assigned
  postsList.forEach((edge) => {
    // The uid you assigned in Prismic is the slug!
    createPage({
      path: `/${edge.node.uid}`,
      component: postTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
      },
    });
  });
};
