import * as React from 'react';
import { graphql } from 'gatsby';
import '../styles/global.css';
import Layout from '../layouts/index';
import Showcase from '../components/HomePage/Showcase';

const IndexPage = () => {
	return (
		<Layout>
			<Showcase />
		</Layout>
	);
};

export default IndexPage;

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

export const Head = ({ data }) => {
	const seo = data.allSite.nodes[0];
	const { title, description } = seo.siteMetadata;

	return (
		<>
			<title>{title}</title>
			<metal name='description' content={description} />
		</>
	);
};
