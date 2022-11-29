import React from 'react';
import './SocialLinks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faGithub,
	faFacebook,
	faInstagram,
	faLinkedin,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const socialLinkData = [
	{
		name: 'Twitter',
		url: 'https://twitter.com/maxwellKJr',
		icon: faTwitter,
	},
	{
		name: 'GitHub',
		url: 'https://github.com/MaxwellKJr',
		icon: faGithub,
	},
	{
		name: 'Facebook',
		url: 'https://web.facebook.com/maxwellkapezijr',
		icon: faFacebook,
	},
	{
		name: 'Instagram',
		url: 'https://instagram.com/_maxwellKJr',
		icon: faInstagram,
	},
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/maxwellKJr',
		icon: faLinkedin,
	},
	{
		name: 'WhatsApp',
		url: 'https://wa.me/265992800255',
		icon: faWhatsapp,
	},
];

const links = socialLinkData;

const SocialLinks = () => (
	<ul id='social-links'>
		{links.map(link => (
			<li className='social-link'>
				<a key={link.name} href={link.url} title={link.name}>
					<FontAwesomeIcon icon={link.icon} size='lg' />
				</a>
			</li>
		))}
	</ul>
);

export default SocialLinks;
