
import React from "react";
import "./Services.css";

export const MobileDevelopment = () => {

  const MobileDevelopmentServicesList = [
    {
      name: "Simple Utility App",
      price: 200000.00,
      features: [
        "Maximum of 10 Screens",
        "No database",
      ]
    },
    {
      name: "Brand App",
      price: 400000.00,
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
    <div id="mobile-development-services">
      <div className='services-flex'>
        {MobileDevelopmentServicesList.map((service) => (
          <div className="service-card" key={service.name}>
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
    </div>
  );
};
