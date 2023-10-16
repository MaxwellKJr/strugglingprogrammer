
import React from "react";
import "./Services.css";
import { motion } from "framer-motion";

export const MobileDevelopment = () => {

  const MobileDevelopmentServicesList = [
    {
      name: "Simple Utility App",
      price: "250,000",
      isRecommended: false,
      features: [
        "Maximum of 10 Screens",
        "Database is available if needed",
      ]
    },
    {
      name: "Brand App",
      price: "500,000",
      isRecommended: true,
      features: [
        "Unlimited Pages",
        "Database",
        "Fast delivery of updates post deployment",
        "Admin priveleges",
        "2 year free domain",
        "Recommended for independent startups, writers, creatives, NGOs",
      ]
    },
  ];

  return (
    <motion.div id="mobile-development-services"
      initial='hidden'
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
      <div className='services-flex'>
        {MobileDevelopmentServicesList.map((service) => (
          <div className="service-card" key={service.name}>
            {service.isRecommended ? <small className="service-recommended-pill">Recommended</small> : ""}
            <h4 className="service-name">
              {service.name}
            </h4>
            <h3 className='service-price'>
              <span className="currency">MWK</span>{`${service.price}`}
            </h3>
            <ul className="features">
              {service.features.map(feature => (
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
