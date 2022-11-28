import React from 'react';
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
	<ul>
		{links.map(link => (
			<li>
				<a key={link.name} href={link.url}>
					<FontAwesomeIcon icon={link.icon} />
				</a>
			</li>
		))}
	</ul>
);

export default SocialLinks;
