import ProjectCard from "./ProjectCard";
import React from "react";

const ProjectsList = ({ projects }) => (
  <div className="projects-container">
    {projects.map((project) => (
      <ProjectCard key={project.node.fields.slug} project={project} />
    ))}
  </div>
);

export default ProjectsList;
