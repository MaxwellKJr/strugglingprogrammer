import "./Services.css";

import React from "react";
import { motion } from "framer-motion";

export const MobileDevelopment = () => {
  const MobileDevelopmentServicesList = [
    {
      name: "Simple Utility App",
      price: "349,999",
      isRecommended: false,
      features: [
        "Maximum of 10 Screens",
        "Database is available if needed",
        "Snappy and responsive",
      ],
    },
    {
      name: "Brand App",
      price: "649,999",
      isRecommended: true,
      features: [
        "Unlimited Screens",
        "Database is available if needed",
        "Fast delivery of updates post deployment",
        "Recommended for independent startups, writers, creatives, NGOs",
        "Cross-platform app that runs on both Android and iOS",
      ],
    },
  ];

  return (
    <motion.div
      id="mobile-development-services"
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
        {MobileDevelopmentServicesList.map((service) => (
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
              {`${service.price} `}{" "}
              <small className="per-something">per app</small>
            </h3>
            <ul className="features">
              {service.features.map((feature) => (
                <li key={feature} className="feature">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
