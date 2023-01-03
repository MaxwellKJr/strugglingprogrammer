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
				<small className='timeToRead'>{`Reading time: ${post.timeToRead} Min`}</small>
				<h3>
					<Link href={`${slug}`}>{title}</Link>
				</h3>
				<small>{date}</small>
				<p>{description}</p>
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
