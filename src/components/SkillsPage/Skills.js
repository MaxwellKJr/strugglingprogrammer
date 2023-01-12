import {
	faAndroid,
	faCss3,
	faGitAlt,
	faHtml5,
	faJava,
	faJs,
	faLaravel,
	faPhp,
	faReact,
	faSass,
	faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const skillsList = () => [
	{
		name: 'JavaScript',
		icon: faJs,
	},
	{
		name: 'TypeScript',
		icon: faCode,
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
		name: 'Kotlin',
		icon: faAndroid,
	},
	{
		name: 'Flutter',
		icon: faMobileAlt,
	},
	{
		name: 'React Native',
		icon: faReact,
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
		name: 'Sass',
		icon: faSass,
	},
	{
		name: 'SQL',
		icon: faDatabase,
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

export default skillsList();
