import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import './about.css';

const Bio = () => (
	<>
		<div>
			<div className='bio-details'>
				<StaticImage
					src='mjk.jpg'
					alt='Maxwell Kapezi, Jr Portrait'
					placeholder='blurred'
					layout='fixed'
					width={260}
					height={260}
					title='Maxwell Kapezi, Jr'
				/>
				<div className='details'>
					<h1>About Me</h1>
					<p>
						My name is Maxwell Kapezi Jr. I am a Web Developer from the Warm Heart of Africa,
						Malawi, currently focusing on{' '}
						<a href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
							React.js
						</a>{' '}
						and{' '}
						<a href='https://laravel.com' target='_blank' rel='noopener noreferrer'>
							Laravel
						</a>{' '}
						frameworks. I am also a fourth year Bachelor of Education (BEd) in Computer Science
						student at the{' '}
						<a href='https://unima.ac.mw' target='_blank' rel='noopener noreferrer'>
							Univeristy of Malawi
						</a>
						{'.'}
					</p>
					<p>
						I started learning how to code in 2017 because I wanted to make my own video game (yes I
						wanted to make video games) but that dream died quick. For the whole story read my post{' '}
						<Link to='/hello-world'>Hello World</Link>
						{'.'}
					</p>
					<p>
						Apart from coding I also enjoy writing short stories, poetry &amp; video games. I mean
						why not?
					</p>
					<div className='professional-btns'>
						<Link to='/skills' className='btn btn-primary'>
							My Skills
						</Link>
						<a
							href='https://maxwellkapezi-resume.netlify.app'
							className='btn btn-secondary'
							target='_blank'
							rel='noopener noreferrer'
						>
							My Resume
						</a>
					</div>
				</div>
			</div>
		</div>
	</>
);

export default Bio;
