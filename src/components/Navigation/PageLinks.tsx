import { RiHome6Fill } from "@react-icons/all-files/ri/RiHome6Fill";
import { RiUser3Fill } from "@react-icons/all-files/ri/RiUser3Fill";
import { RiNewspaperLine } from "@react-icons/all-files/ri/RiNewspaperLine";
import { RiMacbookLine } from "@react-icons/all-files/ri/RiMacbookLine";
import { RiMoneyDollarBoxLine } from "@react-icons/all-files/ri/RiMoneyDollarBoxLine";
import React from "react";

const pageLinks = () => [
  {
    name: "Home",
    route: "/",
    title: "Home",
    icon: <RiHome6Fill className="route-icon" />,
  },
  {
    name: "About",
    route: "/about",
    title: "Know me",
    icon: <RiUser3Fill className="route-icon" />,
  },
  {
    name: "Services",
    route: "/services",
    title: "What I offer",
    icon: <RiMoneyDollarBoxLine className="route-icon" />,
  },
  {
    name: "Blog",
    route: "/blog",
    title: "Read something",
    icon: <RiNewspaperLine className="route-icon" />,
  },
  {
    name: "Projects",
    route: "/projects",
    title: "See my work",
    icon: <RiMacbookLine className="route-icon" />,
  },
];

export default pageLinks();
