import React from 'react';
import { Link } from 'gatsby';
import './Showcase.css';

const occupations = [
	{
		name: 'Software Developer💻',
		url: 'https://maxwellkapezi-resume.netlify.app',
	},
	{
		name: 'Writer📝',
		url: 'https://malawianwriter.vercel.app',
	},
	{
		name: 'Graphic Designer🖌️',
		url: 'https://instagram.com/_maxwellkjr',
	},
];

const Showcase = () => (
	<section id='showcase'>
		<div className='container'>
			<h1 id='slogan' style={{ textAlign: 'start' }}>
				The Struggling Programmer
			</h1>
			<ul className='occupations'>
				{occupations.map(occupation => (
					<li key={occupation.name}>
						<a
							href={occupation.url}
							target='_blank'
							rel='noopener noreferrer'
							className='occupation'
						>
							{occupation.name}
						</a>
					</li>
				))}
			</ul>
			<p>A platform to showcase my software development journey and share the few things I know.</p>

			<div className='ctas'>
				<Link to='/projects' className='btn btn-primary'>
					View Projects
				</Link>
				<Link to='/about' className='btn btn-secondary'>
					About Me
				</Link>
			</div>
		</div>
	</section>
);

export default Showcase;
