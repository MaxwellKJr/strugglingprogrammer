import React, { useState } from "react";
import Layout from "../layouts";
import { WebDevelopment } from "../components/ServicesPage/WebDevelopment";
import { MobileDevelopment } from "../components/ServicesPage/MobileDevelopment";
import { PageProps, graphql } from "gatsby";
import { FAQS } from "../components/ServicesPage/FAQS";

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

export default function ServicesPage() {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index: React.SetStateAction<number>) => setToggle(index);
  return (
    <Layout>
      <section id="services">
        <div className="container">
          <h1>Services & Pricing</h1>
          <small className="info">
            <em>
              Please note that prices may change due to the scope of work,{" "}
            </em>
          </small>
          <small className="info">
            <em>
              Fees for domain name(s), Web, Google Play Store and App Store
              hosting, etc are handled by the client.
            </em>
          </small>
          <ul className="tabs">
            <li
              className={toggle === 1 ? "active-tab" : "tab"}
              onClick={() => toggleTab(1)}
            >
              Web Development
            </li>
            <li
              className={toggle === 2 ? "active-tab" : "tab"}
              onClick={() => toggleTab(2)}
            >
              Mobile App Development
            </li>
            <li
              className={toggle === 3 ? "active-tab" : "tab"}
              onClick={() => toggleTab(3)}
            >
              FAQs
            </li>
          </ul>
          {ServiceChoice(toggle)}
        </div>
      </section>
    </Layout>
  );
}

function ServiceChoice(toggle: number) {
  switch (toggle) {
    case 1:
      return <WebDevelopment />;
    case 2:
      return <MobileDevelopment />;
    case 3:
      return <FAQS />;
    default:
      return null;
  }
}

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
