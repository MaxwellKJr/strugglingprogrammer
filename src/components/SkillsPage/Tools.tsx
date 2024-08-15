import { BsTerminal } from "@react-icons/all-files/bs/BsTerminal";
import { SiAndroidstudio } from "@react-icons/all-files/si/SiAndroidstudio";
import { SiLinux } from "@react-icons/all-files/si/SiLinux";
import { SiVivaldi } from "@react-icons/all-files/si/SiVivaldi";
import { SiWebstorm } from "@react-icons/all-files/si/SiWebstorm";
import React from "react";

const toolsList = () => [
  {
    type: "Operating System",
    name: "Nobara OS ",
    link: "https://nobaraproject.org/",
    description: "Gamer Centred OS based on Fedora Workstation",
    whyUse:
      "Since 2019, I have fallen in love with the Linux ecosystem and its emphasis on FREE and OPEN SOURCE SOFTWARE (FOSS).",
    icon: <SiLinux />,
  },
  {
    type: "Terminal Emulator",
    name: "Alacritty",
    link: "https://github.com/alacritty/alacritty",
    description: "A fast, cross-platform, OpenGL terminal emulator",
    whyUse:
      "It's light-weight and blazingly fast, offers great customization options. Only drawback is that it does not have support for tabs but Tmux covers that.",
    icon: <BsTerminal />,
  },
  {
    type: "Web Development",
    name: "WebStorm ",
    link: "https://www.jetbrains.com/webstorm/",
    description: "The tried and TRUE JavaScript and TypeScript IDE",
    whyUse:
      "It does everything that I would require from VS Code but better and faster too (once everything is synced). I highly recommend Jetbrains products provided you use the right one for your language.",
    icon: <SiWebstorm />,
  },
  {
    type: "Android + Flutter Development",
    name: "Android Studio ",
    link: "https://developer.android.com/studio",
    description:
      "The official Integrated Development Environment for Android app development",
    whyUse:
      "I think this self explanatory. However, for months now, Android Studio has just been something I use because it provides the necessary tools (SDKs and the like) to develop android apps, I do most of my Flutter and RN development in LunarVim rather than Android Studio.",
    icon: <SiAndroidstudio />,
  },
  {
    type: "iOS Development",
    name: "Xcode",
    link: "https://developer.apple.com/xcode/",
    description:
      "The official and only IDE for developing iOS, iPadOS, and macOS",
    whyUse:
      "I don't have a choice. I dread this IDE! If there were alternatives, trust me, I would use those.",
  },
  {
    type: "Internet Browser",
    name: "Vivaldi ",
    link: "https://vivaldi.com/",
    description: "Powerful. Personal. Private.",
    whyUse:
      "Vivaldi Browser is chromium based and is for power users who spend most of their time on the web/browser. As someone who always has about 20+ tabs open, I fell in love with Vivaldi's great tab management tools that I could not find in other browsers. Sorry, Firefox.",
    icon: <SiVivaldi />,
  },
];

export default toolsList();
