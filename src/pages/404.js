import * as React from 'react';
import Layout from '../layouts/index';

const NotFoundPage = () => {
	return (
		<Layout>
			<section id='wrong-page'></section>
		</Layout>
	);
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
