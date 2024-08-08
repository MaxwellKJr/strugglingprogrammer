import React from "react";
import "./SocialLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialLinksData from "./SocialLinksData";

const links = socialLinksData;

const SocialLinksContactMe = () => (
  <ul id="social-links-contactme">
    {links.map((link) => (
      <li key={link.url} className="social-link">
        <a
          key={link.name}
          href={link.url}
          title={link.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={link.icon} size="sm" />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinksContactMe;
