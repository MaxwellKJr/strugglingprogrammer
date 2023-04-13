import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, projectImage, projectDescription, projectURL, githubURL, tags } =
    project.node.frontmatter;

  return (
    <div className='project' key={title} title={title}>
      <div className='project-details'>
        <h3>
          <a href={projectURL} target='_blank' rel='noopener noreferrer'>
            {title}
            <FontAwesomeIcon icon={faExternalLinkAlt} className='ext-link-icon' />
          </a>
        </h3>

        <p className='project-desc'>{projectDescription}</p>

        <div className='ctas'>
          <a
            href={githubURL}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-secondary'
          >
            Github <FontAwesomeIcon icon={faGithub} className='ext-link-icon' />{' '}
          </a>
        </div>
        <ul className='tags'>
          {tags.map(tag => (
            <li key={tag} className='tag'>
              <small>{tag}</small>
            </li>
          ))}
        </ul>
      </div>

      <a href={projectURL} target='_blank' rel='noopener noreferrer' className='img-link'>
        <GatsbyImage image={getImage(projectImage)} alt={title} className='project-img' />
      </a>
    </div>
  );
};

export default ProjectCard;
