import React from 'react';
import Layout from '../layouts/index';
import SkillsList from '../components/SkillsPage/SkillsList';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Skills = () => (
  <Layout>
    <section id='skills'>
      <motion.div
        className='container'
        initial='hidden'
        animate="visible"
        variants={{
          hidden: {
            scale: 1,
            y: 50,
            opacity: 0,
          },
          visible: {
            scale: 1,
            y: 0,
            opacity: 1,
          },
        }}
      >
        <Link to='/about' className='back-link'>
          <h1>
            <FontAwesomeIcon icon={faArrowLeft} className='back-arrow' />
            My Skills</h1>
        </Link>
        <SkillsList />
      </motion.div>
    </section>
  </Layout>
);

export default Skills;

export const Head = () => <title>Skills | Struggling Programmer</title>;
