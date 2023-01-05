import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../layouts/index';
import './blog-post.css';

const BlogPostTemplate = ({ data, pageContext }) => {
	const post = data.markdownRemark;
	const image = getImage(post.frontmatter.featuredImage);
	const { siteTitle } = data.site.siteMetadata;
	const { previous, next } = pageContext;

	return (
		<Layout title={siteTitle}>
			<div id='blog-post' className='post-wrapper'>
				<article>
					<GatsbyImage image={image} alt={post.frontmatter.title} />
					<header>
						<h3>{post.frontmatter.title}</h3>
						<p>{post.frontmatter.date}</p>
					</header>
					<section dangerouslySetInnerHTML={{ __html: post.html }} />
					<hr />
				</article>
			</div>

			{/* <h2 className='other-posts-heading'>Other Recent Posts</h2> */}

			{/* <nav className='blog-nav'>
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
		}
	}
`;
