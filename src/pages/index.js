import * as React from 'react';
import '../styles/global.css';
import Layout from '../components/Layout';

const IndexPage = () => {
	return (
		<Layout>
			<h1>Hello</h1>
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <title>Struggling Programmer | Home</title>;
