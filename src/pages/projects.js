import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../layouts/index';
import ProjectsList from '../components/ProjectsPage/ProjectsList';

const Projects = () => {
  const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				filter: { fileAbsolutePath: { regex: "/projects/" } }
				sort: { frontmatter: { date: DESC } }
			) {
        edges {
					node {
						fields {
							slug
						}
						frontmatter {
							title
              projectDescription
              projectURL
              githubURL
							date(formatString: "dddd, D MMMM YYYY")
							projectImage {
								childImageSharp {
									gatsbyImageData(
										aspectRatio: 1.5
										placeholder: BLURRED
										formats: [AUTO, WEBP, AVIF]
									)
								}
							}
							tags
						}
					}
				}
			}
		}
	`);

  const projects = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <section id='projects'>
        <div className='container'>
          <h1>My Work</h1>
          <ProjectsList projects={projects} />
        </div>
      </section>
    </Layout>
  );
};

export default Projects;

export const Head = () => <title>Projects | Struggling Programmer</title>;
