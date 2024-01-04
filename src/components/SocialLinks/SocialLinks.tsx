import "./SocialLinks.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import socialLinkData from "./SocialLinksData";

const links = socialLinkData;

const SocialLinks = () => (
  <ul id="social-links">
    {links.map((link) => (
      <li key={link.url} className="social-link">
        <a
          key={link.name}
          href={link.url}
          title={link.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={link.icon} size="lg" />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
