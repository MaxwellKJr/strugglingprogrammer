import {graphql, PageProps} from "gatsby";
import * as React from "react";
import Showcase from "../components/HomePage/Showcase";
import Layout from "../layouts/index";
import "../styles/global.css";

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
			<Showcase/>
		</Layout>
	);
};

export default IndexPage;

export const Head = ({data}: PageProps) => {
	const seo = data.allSite.nodes[0];
	const {title, description, siteUrl} = seo.siteMetadata;

	return (
		<>
			<title>{`${title} | Home`}</title>
			<meta name="title" content={`${title} | Home`}/>
			<meta name="description" content={description}/>
			<meta name="og:title" content={title}/>
			<meta name="og:description" content={description}/>
			<meta name="og:url" content={siteUrl}/>
			<meta name="og:type" content="website"/>
			<meta name="twitter:title" content={title}/>
			<meta name="twitter:description" content={description}/>
			<meta name="twitter:card" content="summary"/>
		</>
	);
};
