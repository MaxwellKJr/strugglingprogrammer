import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../layouts/index';
import './blog-post.css';
import { motion } from 'framer-motion';

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

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const image = getImage(post.frontmatter.featuredImage);
  const { siteTitle } = data.site.siteMetadata;
  // const { previous, next } = pageContext;

  return (
    <Layout title={siteTitle}>
      <div id='blog-post'
        className='post-wrapper'
      >
        <motion.article
          initial='hidden'
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
            <div className='article-details'>
              <small>{`Published On: ${post.frontmatter.date}`}</small>
              <small>{`> ${post.timeToRead} minute read`}</small>
            </div>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
        </motion.article>
      </div>

      {/* <h2 className='other-posts-heading'>Other Recent Posts</h2>

			<nav className='blog-nav'>
				<ul>
					<li>
						{previous && (
							<Link to={previous.fields.slug} rel='prev'>
								← {previous.frontmatter.title}
							</Link>
						)}
					</li>
					<li>
						{next && (
							<Link to={next.fields.slug} rel='next'>
								{next.frontmatter.title} →
							</Link>
						)}
					</li>
				</ul>
			</nav> */}
    </Layout>
  );
};

export default BlogPostTemplate;

export const Head = ({ data }) => {
  const post = data.markdownRemark;
  const { title, description, date, slug } = post.frontmatter;
  const image = getImage(post.frontmatter.featuredImage);
  const { siteTitle } = data.site.siteMetadata;

  return (
    <>
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      <meta name='og:title' content={title} />
      <meta name='og:description' content={description} />
      <meta name='og:image' content={image} />
      {/* <meta name='og:url' content={`https://strugglingprogrammer.netlify.app/blog/${slug}`} /> */}
      <meta name='og:type' content='website' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:card' content='summary' />
    </>
  );
};
