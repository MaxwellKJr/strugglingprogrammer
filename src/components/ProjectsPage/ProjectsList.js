import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsList = ({ projects }) => (
	<div className='projects-container'>
		{projects.map(project => (
			<ProjectCard project={project} />
		))}
	</div>
);

export default ProjectsList;
