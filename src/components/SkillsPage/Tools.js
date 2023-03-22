import { faFirefoxBrowser, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const toolsList = () => [
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
		type: 'IDE',
		name: 'PhpStorm',
		description: 'Ultimate PHP IDE',
		whyUse:
			'You might be wondering why I use both WebStorm and PhpStorm. Well, I believe in using the right too for the right job and so, I use this sorely for PHP and Laravel development and nothing more.',
		icon: faCode,
	},

	{
		type: 'Code Editor',
		name: 'LunarVim',
		description: 'A neovim distribution.',
		whyUse:
			'It does everything that VS Code does but is much faster and responsive. Of course learning VIM/Neovim takes time. Not recommended for beginners to programming.',
		icon: faCode,
	},

	{
		type: 'Code Editor',
		name: 'VS Code',
		description: 'Great cliche text editor',
		whyUse:
			'I fell in love with VS Code because of its customizability and that I can turn it into any IDE-like environment I want through extensions. One of my favorites that has a VERY SPECIAL place in my heart.',
		icon: faLaptopCode,
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

export default toolsList();
