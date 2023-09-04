import { faAndroid, faFirefoxBrowser, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faCode, faLaptop, faLaptopCode, faTerminal } from '@fortawesome/free-solid-svg-icons';

const toolsList = () => [
  // {
  //   type: "Laptop",
  //   name: "HP 250 G6 Notebook PC",
  //   link: "https://www.amazon.com/hp-250-g6/s?k=hp+250+g6",
  //   description: "A basic i3 6th-Gen latop with 8GB DDR4 RAM and a 256GB SSD, nothing fancy here",
  //   whyUse:
  //     "It was what I could afford then (around 2019/2020) but it still gets the job done. No excuses.",
  //   icon: faLaptop,
  // },
  {
    type: 'Operating System',
    name: 'Nobara OS',
    link: 'https://nobaraproject.org/',
    description: `Gamer Centred OS based on Fedora Workstation`,
    whyUse:
      'Since 2019, I have fallen in love with the Linux ecosystem and its emphasis on FREE and OPEN SOURCE SOFTWARE (FOSS).',
    icon: faLinux,
  },
  {
    type: 'Terminal Emulator',
    name: 'Alacritty',
    link: 'https://github.com/alacritty/alacritty',
    description: 'A fast, cross-platform, OpenGL terminal emulator',
    whyUse:
      "It's light-weight and blazingly fast, offers great customization options. Only drawback is that it does not have support for tabs but Tmux covers that.",
    icon: faTerminal,
  },
  {
    type: 'Code Editor',
    name: 'LunarVim',
    link: 'https://www.lunarvim.org/',
    description: 'A neovim distribution with an IDE layer and sane defaults.',
    whyUse:
      'It does everything that I would require from VS Code but is lighter and FASTER. Of course learning VIM/Neovim takes time.',
    icon: faCode,
  },
  {
    type: 'IDE',
    name: 'Android Studio',
    link: 'https://developer.android.com/studio',
    description: 'The official Integrated Development Environment for Android app development',
    whyUse: 'I think this self explanatory.',
    icon: faAndroid,
  },
  {
    type: 'Internet Browser',
    name: 'Firefox',
    link: 'https://www.mozilla.org/en-US/firefox/new/',
    description: 'The BEST browser out there.',
    whyUse:
      'It is free and open source, secure, and BLAZINGLY faster than any chromium based browser out there.',
    icon: faFirefoxBrowser,
  },
];

export default toolsList();
