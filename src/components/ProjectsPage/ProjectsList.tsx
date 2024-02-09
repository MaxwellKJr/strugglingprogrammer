import { ProjectProps, Projects } from "../../models/project";
import ProjectCard from "./ProjectCard";
import React from "react";

const ProjectsList = ({ projects }: Projects) => (
  <div className="projects-container">
    {projects.map((project: ProjectProps) => (
      <ProjectCard key={project.node.fields.slug} project={project} />
    ))}
  </div>
);

export default ProjectsList;
