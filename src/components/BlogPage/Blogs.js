import React from 'react';
import BlogCard from './BlogCard';

const Blogs = ({ posts }) => (
	<>
		{posts.map(post => (
			<BlogCard post={post} />
		))}
	</>
);

export default Blogs;
