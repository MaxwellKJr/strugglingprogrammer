import React from "react";
import "./Services.css";

export const WebDevelopment = () => {

  const WebDevelopmentServicesList = [
    {
      name: "Static Website",
      price: "100,000",
      isRecommended: false,
      features: [
        "Maximum of 4 pages",
        "Suitable for advertising",
        "Fast delivery of updates post deployment",
        "No database",
        "No admin priveleges",
        "1 year free domain",
      ]
    },
    {
      name: "Simple Blogging Website",
      price: "200,000",
      isRecommended: true,
      features: [
        "Unlimited Pages",
        "Fast delivery of updates post deployment",
        "Simple database for content management is available",
        "Some admin priveleges",
        "2 year free domain",
        "Recommended for most people such as independent startups, writers, creatives, NGOs",
      ]
    },
    {
      name: "Newsletter/Media",
      price: "500,000",
      isRecommended: false,
      features: [
        "Unlimited pages",
        "Database",
        "Fast delivery of updates post deployment",
        "Admin priveleges are available",
        "5 year free domain",
      ]
    },
  ];

  return (
    <div id="web-development-services">
      <div className='services-flex'>
        {WebDevelopmentServicesList.map((service) => (
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
    </div>
  );
};
