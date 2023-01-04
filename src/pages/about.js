import * as React from 'react';
import Bio from '../components/AboutPage/Bio';
import Layout from '../layouts/index';

const About = () => {
	return (
		<Layout>
			<section id='bio'>
				<div className='container'>
					<Bio />
				</div>
			</section>
		</Layout>
	);
};

export default About;

export const Head = () => <title>Struggling Programmer | About</title>;
