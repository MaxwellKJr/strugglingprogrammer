import "../styles/global.css";

import { graphql, PageProps, StaticQueryDocument } from "gatsby";
import React from "react";
import Showcase from "../components/HomePage/Showcase";

import Layout from "../layouts/index";

export const query: StaticQueryDocument = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
        description
        about
      }
    }
  }
`;

export default function IndexPage() {
  return (
    <Layout>
      <Showcase />
    </Layout>
  );
}

export const Head = ({ data }: PageProps) => {
  const seo = data.site;

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
