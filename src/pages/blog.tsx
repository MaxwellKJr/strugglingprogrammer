import * as React from 'react';
import { useStaticQuery, graphql, PageProps } from 'gatsby';
import Blogs from '../components/BlogPage/Blogs';
import Layout from '../layouts/index';

const Blog = () => {
  const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				filter: { fileAbsolutePath: { regex: "/blog/" } }
				sort: { frontmatter: { date: DESC } }
			) {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							title
							description
							date(formatString: "dddd, D MMMM YYYY")
							featuredImage {
								childImageSharp {
									gatsbyImageData(
										aspectRatio: 1.5
										placeholder: BLURRED
										formats: [AUTO, WEBP, AVIF]
									)
								}
							}
							tags
						}
						timeToRead
					}
				}
			}
		}
  `);
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <section id='blog'>
        <div className='container'>
          <Blogs posts={posts} />
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

export const Head = () => {
  return (
    <>
      <title>{`MJ Codes | Blog`}</title>
      <meta name="title" content={`MJ Codes | Blog`} />
      <meta name="description" content={`Maxwell Kapezi Jr's official website to showcase his software development journey and share the few things he knows.`} />
      <meta name="og:title" content={`MJ Codes | Blog`} />
      <meta name="og:description" content={`Maxwell Kapezi Jr's official website to showcase his software development journey and share the few things he knows.`} />
      <meta name="og:url" content={`https://bymjcodes.com/blog/`} />
      <meta name="og:type" content="website" />
      <meta name="twitter:title" content={`MJ Codes | Blog`} />
      <meta name="twitter:description" content={`Maxwell Kapezi Jr's official website to showcase his software development journey and share the few things he knows.`} />
      <meta name="twitter:card" content="summary" />
    </>
  );
};

