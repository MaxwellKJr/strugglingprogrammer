import React from 'react';
import BlogCard from './BlogCard';

const Blogs = ({ posts }) => (
	<>
		<h1>Read Something</h1>
		<ul>
			{posts.map(post => (
				<BlogCard post={post} />
			))}
		</ul>
	</>
);

export default Blogs;
