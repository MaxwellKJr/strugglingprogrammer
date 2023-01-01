import * as React from 'react';
import Blogs from '../components/BlogPage/Blogs';
import Layout from '../components/Layout';
import { useStaticQuery, graphql } from 'gatsby';

const Blog = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				filter: { fileAbsolutePath: { regex: "/blog/" } }
				sort: { frontmatter: { date: DESC } }
			) {
				edges {
					node {
						frontmatter {
							title
							description
							date(formatString: "MMMM DD, YYYY")
							featuredImage {
								childImageSharp {
									gatsbyImageData(
										aspectRatio: 1.5
										placeholder: BLURRED
										formats: [AUTO, WEBP, AVIF]
									)
								}
							}
						}
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

export const Head = () => <title>Struggling Programmer | Blog</title>;
