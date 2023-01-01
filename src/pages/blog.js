import * as React from 'react';
import Blogs from '../components/BlogPage/Blogs';
import Layout from '../components/Layout';
import { useStaticQuery, graphql } from 'gatsby';

const Blog = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							slug
							description
							date
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
