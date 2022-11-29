import { faCode, faHome, faPen, faUser } from '@fortawesome/free-solid-svg-icons';

const pageLinks = () => [
	{
		name: 'Home',
		route: '/',
		title: 'Home',
		icon: faHome,
	},
	{
		name: 'Blog',
		route: '/blog',
		title: 'Read something',
		icon: faPen,
	},
	{
		name: 'Projects',
		route: '/projects',
		title: 'See my work',
		icon: faCode,
	},
	{
		name: 'About',
		route: '/about',
		title: 'Know me',
		icon: faUser,
	},
];

export default pageLinks();
