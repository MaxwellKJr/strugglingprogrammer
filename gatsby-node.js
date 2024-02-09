const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Blog Post Pages/Template
  const blogPost = path.resolve("./src/templates/blog-post.tsx");
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        sort: { frontmatter: { date: DESC } }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  // Blog Post Pages/Template
  const howItWasMadePostTemplate = path.resolve(
    "./src/templates/how-it-was-made-post.tsx",
  );
  const howItWasMadeResult = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { frontmatter: { date: DESC } }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const howItWasMadePosts = howItWasMadeResult.data.allMarkdownRemark.edges;

  howItWasMadePosts.forEach((post, index) => {
    const previous =
      index === howItWasMadePosts.length - 1
        ? null
        : howItWasMadePosts[index + 1].node;
    const next = index === 0 ? null : howItWasMadePosts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: howItWasMadePostTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value,
    });
  }
};
