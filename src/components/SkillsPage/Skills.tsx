import { GrSwift } from "@react-icons/all-files/gr/GrSwift";
import { SiAndroid } from "@react-icons/all-files/si/SiAndroid";
import { SiBootstrap } from "@react-icons/all-files/si/SiBootstrap";
import { SiGit } from "@react-icons/all-files/si/SiGit";
import { SiGraphql } from "@react-icons/all-files/si/SiGraphql";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiJira } from "@react-icons/all-files/si/SiJira";
import { SiLaravel } from "@react-icons/all-files/si/SiLaravel";
import { SiMysql } from "@react-icons/all-files/si/SiMysql";
import { SiNotion } from "@react-icons/all-files/si/SiNotion";
import { SiPhp } from "@react-icons/all-files/si/SiPhp";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiSass } from "@react-icons/all-files/si/SiSass";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiDart } from "@react-icons/all-files/si/SiDart";
import { SiFlutter } from "@react-icons/all-files/si/SiFlutter";
import { SiJava } from "@react-icons/all-files/si/SiJava";
import { SiKotlin } from "@react-icons/all-files/si/SiKotlin";
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5";
import { SiCss3 } from "@react-icons/all-files/si/SiCss3";
import { SiWordpress } from "@react-icons/all-files/si/SiWordpress";

import React from "react";

const skillsList = () => [
  {
    name: "TypeScript",
    skill: 1,
    icon: <SiTypescript />,
  },
  {
    name: "Swift",
    skill: 1,
    icon: <GrSwift />,
  },
  {
    name: "Kotlin",
    skill: 1,
    icon: <SiKotlin />,
  },
  {
    name: "Dart",
    skill: 1,
    icon: <SiDart />,
  },
  {
    name: "React",
    skill: 2,
    icon: <SiReact />,
  },
  {
    name: "PHP",
    skill: 1,
    icon: <SiPhp />,
  },
  {
    name: "Laravel",
    skill: 2,
    icon: <SiLaravel />,
  },
  {
    name: "Tailwind CSS",
    skill: 2,
    icon: <SiTailwindcss />,
  },
  {
    name: "Bootstrap",
    skill: 2,
    icon: <SiBootstrap />,
  },
  {
    name: "Java",
    skill: 1,
    icon: <SiJava />,
  },
  {
    name: "Android (Kotlin)",
    skill: 3,
    icon: <SiAndroid />,
  },
  {
    name: "iOS (Swift)",
    skill: 3,
    icon: <GrSwift />,
  },
  {
    name: "Flutter",
    skill: 3,
    icon: <SiFlutter />,
  },
  {
    name: "React Native",
    skill: 3,
    icon: <SiReact />,
  },
  {
    name: "HTML",
    skill: 1,
    icon: <SiHtml5 />,
  },
  {
    name: "CSS",
    skill: 1,
    icon: <SiCss3 />,
  },
  {
    name: "Sass",
    skill: 2,
    icon: <SiSass />,
  },
  {
    name: "SQL",
    skill: 4,
    icon: <SiMysql />,
  },
  {
    name: "GraphQL",
    skill: 4,
    icon: <SiGraphql />,
  },
  {
    name: "Git",
    skill: 5,
    icon: <SiGit />,
  },
  {
    name: "Jira",
    skill: 5,
    icon: <SiJira />,
  },
  {
    name: "Notion",
    skill: 5,
    icon: <SiNotion />,
  },
  {
    name: "WordPress",
    skill: 5,
    icon: <SiWordpress />,
  },
];

export default skillsList();
