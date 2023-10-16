import React, { useState } from "react";
import Layout from "../layouts";
import { WebDevelopment } from "../components/Services/WebDevelopment";
import { MobileDevelopment } from "../components/Services/MobileDevelopment";

const ServicesPage = () => {

  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => setToggle(index);
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
