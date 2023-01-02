import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './BlogCard.css';

const BlogCard = ({ post }) => {
	const { title, slug, date, featuredImage, description, tags } = post.frontmatter;
	return (
		<div className='blog-card'>
			<Link href={`/blog/${slug}`}>
				<GatsbyImage image={getImage(featuredImage)} alt={title} title={title} />
			</Link>
			<div className='blog-details'>
				<h3>
					<Link href={`/blog/${slug}`}>{title}</Link>
				</h3>
				<small>{date}</small>
				<hr />
				<p>{description}</p>
				<hr />
				<ul className='tags'>
					{tags.map(tag => (
						<li className='tag'>
							<small>{tag}</small>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default BlogCard;
