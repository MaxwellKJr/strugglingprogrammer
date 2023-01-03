import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './BlogCard.css';

const BlogCard = ({ post }) => {
	const { title, date, featuredImage, description, tags } = post.frontmatter;
	const { slug } = post.fields;

	return (
		<div className='blog-card'>
			<Link href={`${slug}`}>
				<GatsbyImage image={getImage(featuredImage)} alt={title} title={title} />
			</Link>
			<div className='blog-details'>
				<h3>
					<Link href={`${slug}`}>{title}</Link>
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
