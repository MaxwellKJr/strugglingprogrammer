import * as React from 'react';
import Layout from '../components/Layout';

const About = () => {
	return (
		<Layout>
			<section>
				<div className='container'>
					<h1>About Me</h1>
				</div>
			</section>
		</Layout>
	);
};

export default About;

export const Head = () => <title>Struggling Programmer | About</title>;
