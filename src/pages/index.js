import * as React from 'react';
import { graphql } from 'gatsby';
import '../styles/global.css';
import Layout from '../layouts/index';
import Showcase from '../components/HomePage/Showcase';

export const query = graphql`
	query {
		allSite {
			nodes {
				siteMetadata {
					siteUrl
					title
					description
				}
			}
		}
	}
`;

const IndexPage = () => {
	return (
		<Layout>
			<Showcase />
		</Layout>
	);
};

export default IndexPage;

export const Head = ({ data }) => {
	const seo = data.allSite.nodes[0];
	const { title, description, siteUrl } = seo.siteMetadata;

	return (
		<>
			<title>{title}</title>
			<meta name='title' content={title} />
			<meta name='description' content={description} />
			<meta name='og:title' content={title} />
			<meta name='og:description' content={description} />
			<meta name='og:url' content={siteUrl} />
			<meta name='og:type' content='website' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:card' content='summary' />
		</>
	);
};
