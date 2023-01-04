import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/Navigation/NavBar';
import './Layout.css';

export default function Layout({ children }) {
	return (
		<>
			<NavBar />
			<main>
				<div className='container'>{children}</div>
			</main>
		</>
	);
}
