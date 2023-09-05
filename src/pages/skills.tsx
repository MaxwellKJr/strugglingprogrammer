import React from 'react';
import Layout from '../layouts/index';
import SkillsList from '../components/SkillsPage/SkillsList';
import { motion } from 'framer-motion';
import { Link, PageProps } from 'gatsby';
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

export const Head = () => {
  return (
    <>
      <title>{`MJ Codes | Skills and Tools`}</title>
      <meta name="title" content={`MJ Codes | Skills`} />
      <meta name="description" content={`Maxwell Kapezi Jr's official website to showcase his software development journey and share the few things he knows.`} />
      <meta name="og:title" content={`MJ Codes | Skills`} />
      <meta name="og:description" content={`Maxwell Kapezi Jr's official website to showcase his software development journey and share the few things he knows.`} />
      <meta name="og:url" content={`https://bymjcodes.com/blog/`} />
      <meta name="og:type" content="website" />
      <meta name="twitter:title" content={`MJ Codes | Skills`} />
      <meta name="twitter:description" content={`Maxwell Kapezi Jr's official website to showcase his software development journey and share the few things he knows.`} />
      <meta name="twitter:card" content="summary" />
    </>
  );
};


