import React from 'react';
import { Link } from 'gatsby';
import './NavBar.css';
import pageLinks from './PageLinks';
import SocialLinks from '../SocialLinks/SocialLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
	const links = pageLinks;
	const date = new Date();

	return (
		<nav id='main-nav'>
			<div className='container'>
				<Link to='/' className='logo'>
					MJ <br /> Codes
				</Link>
				<ul className='nav-links'>
					{links.map(link => (
						<li key={link.name} className='nav-link'>
							<Link to={link.route} activeClassName='active' title={link.title}>
								<FontAwesomeIcon icon={link.icon} size='lg' className='route-icon' />
								<span className='route-text'>{link.name}</span>
							</Link>
						</li>
					))}
				</ul>
				<SocialLinks />
				<div id='header-footer'>
					<small>{date.getFullYear()} &copy; MJ Codes</small>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
