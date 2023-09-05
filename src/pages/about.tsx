import * as React from "react";
import { graphql } from "gatsby";
import Bio from "../components/AboutPage/Bio";
import Layout from "../layouts/index";

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
      <section id="bio">
        <div className="container">
          <Bio />
        </div>
      </section>
    </Layout>
  );
};

export default About;

export const Head = ({ data }: any) => {
  const seo = data.allSite.nodes[0];
  const { title, about, description, siteUrl } = seo.siteMetadata;

  return (
    <>
      <title>{`About Maxwell Kapezi Jr | ${title}`}</title>
      <meta name="title" content={`About Maxwell Kapezi Jr | ${title}`} />
      <meta name="description" content={about} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={siteUrl} />
      <meta name="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary" />
    </>
  );
};
