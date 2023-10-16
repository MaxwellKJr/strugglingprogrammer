import React from "react";
import "./SocialLinks.css";
import socialLinksContactMeData from "./SocialLinksContactMeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const links = socialLinksContactMeData;

const SocialLinksContactMe = () => (
  <ul id="social-links-contactme">
    {links.map(link => (
      <li key={link.url} className='social-link'>
        <a
          key={link.name}
          href={link.url}
          title={link.name}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={link.icon} size='sm' />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinksContactMe;
