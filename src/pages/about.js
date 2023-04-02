import * as React from 'react';
import { graphql } from 'gatsby';
import Bio from '../components/AboutPage/Bio';
import Layout from '../layouts/index';

export const query = graphql`
	query {
		allSite {
			nodes {
				siteMetadata {
					siteUrl
					title
					about
				}
			}
		}
	}
`;

const About = () => {
	return (
		<Layout>
			<section id='bio'>
				<div className='container'>
					<Bio />
				</div>
			</section>
		</Layout>
	);
};

export default About;

export const Head = ({ data }) => {
	const seo = data.allSite.nodes[0];
	const { title, about } = seo.siteMetadata;

	return (
		<>
			<title>{title}</title>
			<meta name='description' content={about} />
		</>
	);
};
