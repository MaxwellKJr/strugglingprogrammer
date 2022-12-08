import React from 'react';
import './SkillsList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCss3,
	faGitAlt,
	faHtml5,
	faJava,
	faJs,
	faLaravel,
	faPhp,
	faPython,
	faReact,
	faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const skillsList = [
	{
		name: 'Javascript',
		icon: faJs,
	},
	{
		name: 'React.js',
		icon: faReact,
	},
	{
		name: 'PHP',
		icon: faPhp,
	},
	{
		name: 'Laravel',
		icon: faLaravel,
	},
	{
		name: 'Java',
		icon: faJava,
	},
	{
		name: 'HTML5',
		icon: faHtml5,
	},
	{
		name: 'CSS3',
		icon: faCss3,
	},
	{
		name: 'WordPress',
		icon: faWordpress,
	},
	{
		name: 'Git',
		icon: faGitAlt,
	},
];

const SkillsList = () => {
	return (
		<div>
			<p>Languages/Technologies I am comfortable with:</p>
			<ul className='skills-grid'>
				{skillsList.map(skill => (
					<li className='card-dark'>
						{skill.name} <FontAwesomeIcon icon={skill.icon} size='lg' />
					</li>
				))}
			</ul>
		</div>
	);
};

export default SkillsList;
