import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/Navigation/NavBar';
import './Layout.css';

export default function Layout({ isVisible, children }) {
	return (
		<>
			<NavBar />
			<main>
				<motion.div animate={{ opacity: isVisible ? 1 : 0 }} className='container'>
					{children}
				</motion.div>
			</main>
		</>
	);
}
