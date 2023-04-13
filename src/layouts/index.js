import React from 'react';
import NavBar from '../components/Navigation/NavBar';
import './Layout.css';
import { motion } from 'framer-motion'

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>
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
          {children}
        </motion.div>
      </main>
    </>
  );
}
