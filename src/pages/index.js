import * as React from 'react';
import '../styles/global.css';
import Layout from '../components/Layout';
import Showcase from '../components/SocialLinks/HomePage/Showcase';

const IndexPage = () => {
	return (
		<Layout>
			<Showcase />
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <title>Struggling Programmer | Home</title>;
