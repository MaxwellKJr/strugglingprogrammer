import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../layouts/index";
import "./blog-post.css";
import { motion } from "framer-motion";

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }

    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "dddd, DD MMMM, YYYY")
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      timeToRead
    }
  }
`;

const BlogPostTemplate = ({ data, pageContext }: any) => {
  const post = data.markdownRemark;
  const image = getImage(post.frontmatter.featuredImage);
  const { siteTitle } = data.site.siteMetadata;
  const { previous, next } = pageContext;

  return (
    <Layout title={siteTitle}>
      <div id="blog-post" className="post-wrapper">
        <motion.article
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 1,
              y: 50,
              opacity: 0,
            },
            visible: {
              scale: 1,
              y: 0,
              opacity: 1,
            },
          }}
        >
          <GatsbyImage image={image} alt={post.frontmatter.title} />
          <header>
            <h3>{post.frontmatter.title}</h3>
            <div className="article-details">
              <small>{`Published On: ${post.frontmatter.date}`}</small>
              <small>{`> ${post.timeToRead} minute read`}</small>
            </div>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </motion.article>
      </div>

      <h3 className="other-posts-heading">Other Recent Posts</h3>

      <nav className="blog-nav">
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const Head = ({ data }: any) => {
  const post = data.markdownRemark;
  const { title, description, date } = post.frontmatter;
  const slug = post.fields.slug;
  const image = getImage(post.frontmatter.featuredImage);

  return (
    <>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image?.images.fallback?.src} />
      <meta property='og:url' content={`https://bymjcodes.com${slug}`} />
      <meta property="og:type" content="website" />
      <meta property="og:article:published_time" content={date} />
      {/* <meta property="og:article:modified_time" content="2023-01-01T18:00:00Z" /> <!-- For articles --> */}
      <meta property="og:article:author" content="Maxwell Kapezi Jr." />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary" />
    </>
  );
};
