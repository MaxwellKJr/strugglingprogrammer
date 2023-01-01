import React from 'react';
import { Link } from 'gatsby';
import './BlogCard.css';

const BlogCard = ({ post }) => {
	const { title, slug, date, description } = post.node.frontmatter;
	return (
		<div className='blog-card'>
			<img src='' alt='' />
			<div className='blog-details'>
				<h3>
					<Link to={`/blog/${slug}`}>{title}</Link>
				</h3>
				<small>{date}</small>
				<hr />
				<p>{description}</p>
			</div>
		</div>
	);
};

export default BlogCard;
