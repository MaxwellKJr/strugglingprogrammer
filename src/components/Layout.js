import React from 'react';
import NavBar from './Navigation/NavBar';
import './Layout.css';

export default function Layout({ children }) {
	return (
		<main>
			<NavBar />
			<div className='container'>{children}</div>
		</main>
	);
}
