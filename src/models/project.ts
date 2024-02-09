import { IGatsbyImageData } from "gatsby-plugin-image";

export type ProjectProps = {
  project: {
    node: {
      frontmatter: {
        title: string;
        projectDescription: string;
        projectURL: string;
        githubURL: string;
        date: string;
        projectImage: IGatsbyImageData | null;
        tags: string[];
      };
      fields: {
        slug: string;
      };
    };
  };
};

export type Projects = {
  projects: ProjectProps[];
};
