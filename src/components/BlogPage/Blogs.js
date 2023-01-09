import React from 'react';
import BlogCard from './BlogCard';
import './Blogs.css';

const Blogs = ({ posts }) => (
	<div id='blogs'>
		<h1>Read Something</h1>
		<div className='blogs-grid'>
			{posts.map(post => (
				<BlogCard key={post.node.fields.slug} post={post} />
			))}
		</div>
	</div>
);

export default Blogs;
