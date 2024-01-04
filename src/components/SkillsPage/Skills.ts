import {
  faAndroid,
  faBootstrap,
  faCss3,
  faFortAwesome,
  faGitAlt,
  faHtml5,
  faJava,
  faJira,
  faJs,
  faLaravel,
  faPhp,
  faReact,
  faSass,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowsH,
  faCircleNodes,
  faCode,
  faDatabase,
  faMobileAlt,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";

const skillsList = () => [
  {
    name: "JavaScript",
    skill: 1,
    icon: faJs,
  },
  {
    name: "TypeScript",
    skill: 1,
    icon: faCode,
  },
  {
    name: "React.js",
    skill: 2,
    icon: faReact,
  },
  {
    name: "PHP",
    skill: 1,
    icon: faPhp,
  },
  {
    name: "Laravel",
    skill: 2,
    icon: faLaravel,
  },
  {
    name: "Tailwind CSS",
    skill: 2,
    icon: faFortAwesome,
  },
  {
    name: "Bootstrap",
    skill: 2,
    icon: faBootstrap,
  },
  {
    name: "Java",
    skill: 1,
    icon: faJava,
  },
  {
    name: "Kotlin",
    skill: 1,
    icon: faAndroid,
  },
  {
    name: "Dart",
    skill: 1,
    icon: faCode,
  },
  {
    name: "Native (Compose)",
    skill: 3,
    icon: faAndroid,
  },
  {
    name: "Flutter",
    skill: 3,
    icon: faMobileAlt,
  },
  {
    name: "React Native",
    skill: 3,
    icon: faReact,
  },
  {
    name: "HTML",
    skill: 1,
    icon: faHtml5,
  },
  {
    name: "CSS",
    skill: 1,
    icon: faCss3,
  },
  {
    name: "Sass",
    skill: 2,
    icon: faSass,
  },
  {
    name: "SQL",
    skill: 4,
    icon: faDatabase,
  },
  {
    name: "GraphQL",
    skill: 4,
    icon: faCircleNodes,
  },
  {
    name: "Git",
    skill: 5,
    icon: faGitAlt,
  },
  {
    name: "Jira",
    skill: 5,
    icon: faJira,
  },
  {
    name: "Notion",
    skill: 5,
    icon: faNoteSticky,
  },
  {
    name: "WordPress",
    skill: 5,
    icon: faWordpress,
  },
];

export default skillsList();
