import React from 'react';
import { Link } from 'gatsby';
import './Showcase.css';
import { motion } from 'framer-motion'

const occupations = [
  {
    name: 'Software Developer💻',
    url: 'https://maxwellkapezi-resume.netlify.app',
  },
  {
    name: 'Writer📝',
    url: 'https://malawianwriter.vercel.app',
  },
  {
    name: 'Graphic Designer🖌️',
    url: 'https://instagram.com/_maxwellkjr',
  },
];

const Showcase = () => (
  <section id='showcase'>
    <div className='container'>
      <h1 id='slogan' style={{ textAlign: 'start' }}>
        The Struggling Programmer
      </h1>
      <motion.ul className='occupations'
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            x: -100,
            opacity: 0,
          },
          visible: {
            scale: 1,
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          },
        }}
      >
        {occupations.map(occupation => (
          <li key={occupation.name}>
            <a
              href={occupation.url}
              target='_blank'
              rel='noopener noreferrer'
              className='occupation'
            >
              {occupation.name}
            </a>
          </li>
        ))}
      </motion.ul>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            x: -100,
            opacity: 0,
          },
          visible: {
            scale: 1,
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.8,
            },
          },
        }}
      >A platform to showcase my software development journey and share the few things I know.</motion.p>

      <motion.div className='ctas'
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            x: -100,
            opacity: 0,
          },
          visible: {
            scale: 1,
            x: 0,
            opacity: 1,
            transition: {
              delay: 1.2,
            },
          },
        }}
      >
        <Link to='/projects' className='btn btn-primary'>
          View Projects
        </Link>
        <Link to='/about' className='btn btn-secondary'>
          About Me
        </Link>
      </motion.div>
    </div>
  </section>
);

export default Showcase;
