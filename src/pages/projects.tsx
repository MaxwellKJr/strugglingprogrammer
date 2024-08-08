import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";

import Layout from "../layouts/index";
import ProjectsList from "../components/ProjectsPage/ProjectsList";
import { motion } from "framer-motion";

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
      <section id="projects">
        <motion.div
          className="container"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 1,
              y: 50,
              opacity: 0,
            },
            visible: {
              scale: 1,
              y: 0,
              opacity: 1,
            },
          }}
        >
          <h1>My Work</h1>
          <ProjectsList projects={projects} />
        </motion.div>
      </section>
    </Layout>
  );
};

export default Projects;

export const Head = () => {
  return (
    <>
      <title>{"MJ Codes | Projects"}</title>
      <meta name="title" content={"MJ Codes | Projects"} />
      <meta
        name="description"
        content={
          "See Maxwell Kapezi Jr's work and works-in-progress he has been working on over the years."
        }
      />
      <meta name="og:title" content={"MJ Codes | Projects"} />
      <meta
        name="og:description"
        content={
          "See Maxwell Kapezi Jr's work and works-in-progress he has been working on over the years."
        }
      />
      <meta name="og:url" content={"https://bymjcodes.com/blog/"} />
      <meta name="og:type" content="website" />
      <meta name="twitter:title" content={"MJ Codes | Projects"} />
      <meta
        name="twitter:description"
        content={
          "See Maxwell Kapezi Jr's work and works-in-progress he has been working on over the years."
        }
      />
      <meta name="twitter:card" content="summary" />
    </>
  );
};
