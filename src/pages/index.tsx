import "../styles/global.css";

import { PageProps, graphql } from "gatsby";

import Layout from "../layouts/index";
import React, { ReactElement } from "react";
import Showcase from "../components/HomePage/Showcase";

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

const IndexPage = () => (
  <Layout>
    <Showcase />
  </Layout>
);

export default IndexPage;

export const Head = ({ data }: PageProps) => {
  const seo = data.allSite.nodes[0];

  const { title, description, siteUrl } = seo.siteMetadata;

  return (
    <>
      <title>{`${title} | Programming and Tech Related Content 🚀`}</title>
      <meta
        name="title"
        content={`${title} | Programming and Tech Related Content 🚀`}
      />
      <meta name="description" content={description} />
      <meta
        property="og:title"
        content={`${title} | Programming and Tech Related Content 🚀`}
      />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://i.ibb.co/QnrcfDX/Screenshot-from-2024-01-04-10-22-56.png"
      />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary" />
    </>
  );
};
