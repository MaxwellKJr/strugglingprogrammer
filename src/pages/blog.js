import * as React from 'react';
import Layout from '../components/Layout';

const Blog = () => {
	return (
		<Layout>
			<section>
				<div className='container'>
					<h1>Read Something</h1>
				</div>
			</section>
		</Layout>
	);
};

export default Blog;

export const Head = () => <title>Struggling Programmer | Blog</title>;
