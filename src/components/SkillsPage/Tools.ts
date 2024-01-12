import { faAndroid, faLinux } from "@fortawesome/free-brands-svg-icons";
import { faCode, faGlobe, faTerminal } from "@fortawesome/free-solid-svg-icons";

const toolsList = () => [
  {
    type: "Operating System",
    name: "Nobara OS ",
    link: "https://nobaraproject.org/",
    description: "Gamer Centred OS based on Fedora Workstation",
    whyUse:
      "Since 2019, I have fallen in love with the Linux ecosystem and its emphasis on FREE and OPEN SOURCE SOFTWARE (FOSS).",
    icon: faLinux,
  },
  {
    type: "Terminal Emulator",
    name: "Alacritty",
    link: "https://github.com/alacritty/alacritty",
    description: "A fast, cross-platform, OpenGL terminal emulator",
    whyUse:
      "It's light-weight and blazingly fast, offers great customization options. Only drawback is that it does not have support for tabs but Tmux covers that.",
    icon: faTerminal,
  },
  {
    type: "Code Editor",
    name: "LazyVim ",
    link: "https://www.lazyvim.org/",
    description:
      "LazyVim is a Neovim setup powered by 💤 'lazy.nvim' that makes it easy to customize and extend my config.",
    whyUse:
      "It does everything that I would require from VS Code but is lighter and FASTER. Of course learning VIM/Neovim takes time.",
    icon: faCode,
  },
  {
    type: "IDE",
    name: "Android Studio ",
    link: "https://developer.android.com/studio",
    description:
      "The official Integrated Development Environment for Android app development",
    whyUse:
      "I think this self explanatory. However, for months now, Android Studio has just been something I use because it provides the necessary tools (SDKs and the like) to develop android apps, I do most of my Flutter and RN development in LunarVim rather than Android Studio.",
    icon: faAndroid,
  },
  {
    type: "Internet Browser",
    name: "Vivaldi ",
    link: "https://vivaldi.com/",
    description: "Powerful. Personal. Private.",
    whyUse:
      "Vivaldi Browser is chromium based and is for power users who spend most of their time on the web/browser. As someone who always has about 20+ tabs open, I fell in love with Vivaldi's great tab management tools that I could not find in other browsers. Sorry, Firefox.",
    icon: faGlobe,
  },
];

export default toolsList();
