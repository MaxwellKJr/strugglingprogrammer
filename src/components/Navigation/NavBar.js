import React from 'react';
import { Link } from 'gatsby';
import './NavBar.css';
import pageLinks from './PageLinks';
import SocialLinks from '../SocialLinks/SocialLinks';

const NavBar = () => {
	const links = pageLinks;

	return (
		<nav id='main-nav'>
			<div className='container'>
				<Link to='/' className='logo'>
					MJ Codes
				</Link>
				<ul className='nav-links'>
					{links.map(link => (
						<li className='nav-link' activeClassName='active' key={link.name}>
							<Link to={link.route}>{link.name}</Link>
						</li>
					))}
				</ul>
				<SocialLinks />
			</div>
		</nav>
	);
};

export default NavBar;
