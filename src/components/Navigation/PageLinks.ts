import {
  faHome, faLaptopCode, faMoneyBill, faPen, faUser,
} from '@fortawesome/free-solid-svg-icons';

const pageLinks = () => [
  {
    name: 'Home',
    route: '/',
    title: 'Home',
    icon: faHome,
  },
  {
    name: 'About',
    route: '/about',
    title: 'Know me',
    icon: faUser,
  },
  {
    name: 'Services',
    route: '/services',
    title: 'What I offer',
    icon: faMoneyBill,
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
    icon: faLaptopCode,
  },
];

export default pageLinks();
