import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Blogs from '../components/BlogPage/Blogs';
import Layout from '../layouts/index';

const Blog = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				filter: { fileAbsolutePath: { regex: "/blog/" } }
				sort: { frontmatter: { date: DESC } }
			) {
				nodes {
					fields {
						slug
					}
					frontmatter {
						title
						description
						date(formatString: "dddd, D MMMM YYYY")
						featuredImage {
							childImageSharp {
								gatsbyImageData(aspectRatio: 1.5, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
							}
						}
						tags
					}
					timeToRead
				}
			}
		}
	`);

	const posts = data.allMarkdownRemark.nodes;

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

export const Head = () => <title>Blog | Struggling Programmer</title>;
