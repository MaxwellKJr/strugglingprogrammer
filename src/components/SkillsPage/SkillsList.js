import React from 'react';
import './SkillsList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCss3,
	faFirefoxBrowser,
	faGitAlt,
	faHtml5,
	faJava,
	faJs,
	faLaravel,
	faLinux,
	faPhp,
	faReact,
	faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const skillsList = [
	{
		name: 'JavaScript',
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

const uses = [
	{
		type: 'Operating System',
		name: 'EndeavourOS',
		description: 'An Arch Based Linux Distribution',
		whyUse:
			'Since 2019, I have fallen in love with the Linux ecosystem and emphasis of FREE and OPEN SOURCE SOFTWARE (FOSS).',
		icon: faLinux,
	},

	{
		type: 'IDE',
		name: 'WebStorm',
		description: 'The SMARTEST JavaScript IDE from our beloved JetBrains.',
		whyUse:
			'After using VS Code for a long time, I settled for this because it basically gives me superpowers.',
		icon: faCode,
	},

	{
		type: 'Internet Browser',
		name: 'Firefox',
		description: 'The BEST browser out there.',
		whyUse:
			'It is free and open source, secure, and BLAZINGLY faster than any chromium based browser out there.',
		icon: faFirefoxBrowser,
	},
];

const SkillsList = () => {
	return (
		<div className='split'>
			<div className='skills'>
				<p>Languages/Technologies:</p>
				<ul className='skills-grid'>
					{skillsList.map(skill => (
						<li className='card-dark'>
							{skill.name} <FontAwesomeIcon icon={skill.icon} size='lg' />
						</li>
					))}
				</ul>
			</div>

			<div>
				<h1>What I Use:</h1>
				<ul className='uses-grid'>
					{uses.map(use => (
						<li className='use-card'>
							<li className='use-type'>
								<h5 className='type'>{use.type}: </h5>
								<h3>
									{use.name} <FontAwesomeIcon icon={use.icon} />
								</h3>
							</li>
							<ul className='use-description'>
								<li>{use.description}</li>
								<li>
									<h5>Why I Use This:</h5> {use.whyUse}
								</li>
							</ul>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default SkillsList;
