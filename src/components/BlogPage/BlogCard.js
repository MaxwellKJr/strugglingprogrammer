import React from 'react';
import { Link } from 'gatsby';

const BlogCard = ({ post }) => {
	const { title, slug, date } = post.node.frontmatter;
	return (
		<div>
			<img src='' alt='' />
			<div className='blog-details'>
				<h3>
					<Link to={`/blog/${slug}`}>{title}</Link>
				</h3>
				<small>{date}</small>
			</div>
		</div>
	);
};

export default BlogCard;
