import React from 'react';
import Layout from '../layouts/index';
import SkillsList from '../components/SkillsPage/SkillsList';

const Skills = () => (
	<Layout>
		<section id='skills'>
			<div className='container'>
				<h1>My Skills</h1>
				<SkillsList />
			</div>
		</section>
	</Layout>
);

export default Skills;

export const Head = () => <title>Skills | Struggling Programmer</title>;
