import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsList = ({ projects }) => (
  <div className='projects-container'>
    {projects.map(project => (
      <ProjectCard key={project.node.fields.slug} project={project} />
    ))}
  </div>
);

export default ProjectsList;
