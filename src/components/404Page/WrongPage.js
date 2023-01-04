import React from 'react';
import { Link } from 'gatsby';
import './WrongPage.css';

const WrongPage = () => {
	return (
		<div className='container'>
			<h1>Page not found. The sadness!😔</h1>
			<p>
				Sorry, we couldn’t find what you were looking for.
				<br />
				{process.env.NODE_ENV === 'development' ? (
					<>
						<br />
						Try going back <Link to='/'>Home</Link>.
						<br />
					</>
				) : null}
				<br />
			</p>
		</div>
	);
};

export default WrongPage;
