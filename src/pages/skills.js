import React from 'react';
import Layout from '../layouts/index';
import SkillsList from '../components/SkillsPage/SkillsList';
import { motion } from 'framer-motion';

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
        <h1>My Skills</h1>
        <SkillsList />
      </motion.div>
    </section>
  </Layout>
);

export default Skills;

export const Head = () => <title>Skills | Struggling Programmer</title>;
