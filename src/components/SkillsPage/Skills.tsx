import { FaSass } from "@react-icons/all-files/fa/FaSass";
import { GrSwift } from "@react-icons/all-files/gr/GrSwift";
import { SiAndroid } from "@react-icons/all-files/si/SiAndroid";
import { SiBootstrap } from "@react-icons/all-files/si/SiBootstrap";
import { SiGit } from "@react-icons/all-files/si/SiGit";
import { SiGraphql } from "@react-icons/all-files/si/SiGraphql";
import { SiJira } from "@react-icons/all-files/si/SiJira";
import { SiLaravel } from "@react-icons/all-files/si/SiLaravel";
import { SiMysql } from "@react-icons/all-files/si/SiMysql";
import { SiNotion } from "@react-icons/all-files/si/SiNotion";
import { SiPhp } from "@react-icons/all-files/si/SiPhp";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiDart } from "@react-icons/all-files/si/SiDart";
import { SiFlutter } from "@react-icons/all-files/si/SiFlutter";
import { SiJava } from "@react-icons/all-files/si/SiJava";
import { SiKotlin } from "@react-icons/all-files/si/SiKotlin";
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5";
import { SiCss3 } from "@react-icons/all-files/si/SiCss3";
import { SiWordpress } from "@react-icons/all-files/si/SiWordpress";
import { SiFirebase } from "@react-icons/all-files/si/SiFirebase";
import { HiLightningBolt } from "@react-icons/all-files/hi/HiLightningBolt";
import { SiStrapi } from "@react-icons/all-files/si/SiStrapi";
import { SiRealm } from "@react-icons/all-files/si/SiRealm";

import React from "react";

const skillsList = () => [
  // Programming Languages
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
    name: "PHP",
    skill: 1,
    icon: <SiPhp />,
  },
  // {
  //   name: "Java",
  //   skill: 1,
  //   icon: <SiJava />,
  // },
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

  // Web Libraries and Frameworks
  {
    name: "React",
    skill: 2,
    icon: <SiReact />,
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
    name: "Sass",
    skill: 2,
    icon: <FaSass />,
  },
  // Mobile Development
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
  // Querying
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
  // Data Management and Storage
  {
    name: "Firebase",
    skill: 5,
    icon: <SiFirebase />,
  },
  {
    name: "Supabase",
    skill: 5,
    icon: <HiLightningBolt />,
  },
  {
    name: "Strapi",
    skill: 5,
    icon: <SiStrapi />,
  },
  {
    name: "Realm",
    skill: 5,
    icon: <SiRealm />,
  },
  // Other Technologies
  {
    name: "Git",
    skill: 6,
    icon: <SiGit />,
  },
  {
    name: "Jira",
    skill: 6,
    icon: <SiJira />,
  },
  {
    name: "Notion",
    skill: 6,
    icon: <SiNotion />,
  },
  {
    name: "WordPress",
    skill: 6,
    icon: <SiWordpress />,
  },
];

export default skillsList();
