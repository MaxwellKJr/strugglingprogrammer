import "./ProjectCard.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { GatsbyImage, GatsbyImageProps, getImage } from "gatsby-plugin-image";
import React from "react";
import { ProjectProps } from "../../models/project";

const ProjectCard = ({ project }: ProjectProps) => {
  const {
    title,
    projectImage,
    projectDescription,
    projectURL,
    githubURL,
    tags,
  } = project.node.frontmatter;

  const image = projectImage && getImage(projectImage);

  if (!image) {
    return null;
  }

  const imageProps: GatsbyImageProps = {
    image,
    alt: title,
    title: title,
  };

  return (
    <div className="project" key={title} title={title}>
      <div className="project-details">
        <h3>
          <a href={projectURL} target="_blank" rel="noopener noreferrer">
            {title}
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className="ext-link-icon"
            />
          </a>
        </h3>

        <p className="project-desc">{projectDescription}</p>

        <div className="ctas">
          <a
            href={githubURL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            GitHub <FontAwesomeIcon icon={faGithub} className="ext-link-icon" />{" "}
          </a>
        </div>
        <ul className="tags">
          {tags.map((tag) => (
            <li key={tag} className="tag">
              <small>{tag}</small>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={projectURL}
        target="_blank"
        rel="noopener noreferrer"
        className="img-link"
      >
        <GatsbyImage {...imageProps} className="project-img" />
      </a>
    </div>
  );
};

export default ProjectCard;
