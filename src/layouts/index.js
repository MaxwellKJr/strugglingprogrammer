import React from 'react';
import NavBar from '../components/Navigation/NavBar';
import './Layout.css';
import { motion } from 'framer-motion'

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>
        <div className='container'>
          {children}
        </div>
      </main>
    </>
  );
}
