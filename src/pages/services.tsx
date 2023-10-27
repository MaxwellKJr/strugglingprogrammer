import React, { useState } from "react";
import Layout from "../layouts";
import { WebDevelopment } from "../components/ServicesPage/WebDevelopment";
import { MobileDevelopment } from "../components/ServicesPage/MobileDevelopment";
import { PageProps, graphql } from "gatsby";

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

const ServicesPage = () => {

  const [toggle, setToggle] = useState(1);

  const toggleTab = (index: React.SetStateAction<number>) => setToggle(index);
  return (
    <Layout>
      <section id="services">
        <div className="container">
          <h1>Services & Pricing</h1>
          <ul className="tabs">
            <li className={toggle === 1 ? "active-tab" : "tab"} onClick={() => toggleTab(1)}>Web Development</li>
            <li className={toggle === 2 ? "active-tab" : "tab"} onClick={() => toggleTab(2)}>Mobile App Development</li>
          </ul>
          {toggle === 1 ? <WebDevelopment /> : <MobileDevelopment />}
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;

export const Head = ({ data }: PageProps) => {
  const seo = data.allSite.nodes[0];
  const { title, description, siteUrl } = seo.siteMetadata;

  return (
    <>
      <title>{`What I offer | ${title} | Services`}</title>
      <meta name="title" content={`What I offer | ${title} | Services`} />
      <meta name="description" content={description} />
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
