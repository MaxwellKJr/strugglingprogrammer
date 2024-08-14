import React from "react";
import "./Services.css";
import { motion } from "framer-motion";

export const WebDevelopment = () => {
  const WebDevelopmentServicesList = [
    {
      name: "Static Plan",
      price: "174,999",
      isRecommended: false,
      features: [
        "Single Landing Page",
        "with an option of 2 more separate pages",
        "Suitable for advertising",
        "Fast delivery of updates post deployment",
        "No database",
        "No admin priveleges",
        "1 year free domain",
        "No discounts",
      ],
    },
    {
      name: "Startup Plan",
      price: "379,999",
      isRecommended: true,
      features: [
        "Unlimited Pages",
        "Fast delivery of updates post deployment",
        "Simple database for content management is available",
        "Some admin priveleges",
        "2 year free domain",
        "Recommended for most people such as independent startups, writers, creatives, NGOs",
        "No discounts",
      ],
    },
    {
      name: "Media & eCommerce",
      price: "799,999",
      isRecommended: false,
      features: [
        "Unlimited pages",
        "Database",
        "Fast delivery of updates post deployment",
        "Admin priveleges are available",
        "5 year free domain",
        "Discounts are considered",
      ],
    },
    {
      name: "Corporate Plan",
      price: "1,499,999",
      isRecommended: false,
      features: [
        "System development and integration",
        "Fast delivery of updates post deployment",
        "Consultations post deployment",
        "Admin priveleges are available",
        "10+ years free domain registration",
      ],
    },
  ];

  return (
    <motion.div
      id="web-development-services"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 1,
          y: 50,
          opacity: 0,
        },
        visible: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
    >
      <div className="services-flex">
        {WebDevelopmentServicesList.map((service) => (
          <div className="service-card" key={service.name}>
            <h4 className="service-name">
              {service.name}
              {service.isRecommended ? (
                <small className="service-recommended-pill">Recommended</small>
              ) : (
                ""
              )}
            </h4>
            <h3 className="service-price">
              <span className="currency">MWK</span>
              {`${service.price} `}
              <small className="per-something">per site</small>
            </h3>
            <ul className="features">
              {service.features.map((feature) => (
                <li key={feature} className="feature">
                  {feature}
                </li>
              ))}
            </ul>
            {/* <SocialLinksContactMe /> */}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
