import React from 'react';
import BlogCard from './BlogCard';
import './Blogs.css';

const Blogs = ({ posts }) => (
	<>
		<h1>Read Something</h1>
		<div className='blogs-grid'>
			{posts.map(post => (
				<BlogCard post={post} />
			))}
		</div>
	</>
);

export default Blogs;
