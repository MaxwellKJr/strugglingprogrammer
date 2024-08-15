import { motion } from "framer-motion";
import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import OccupationsList from "./OccupationsList";
import "./Showcase.css";

const occupations = [
  {
    name: "Software Developer💻",
    url: "https://linkedin.com/in/maxwellkjr",
  },
  {
    name: "Writer📝",
    url: "https://malawianwriter.vercel.app",
  },
  {
    name: "Graphic Designer🖌️",
    url: "https://instagram.com/maxwellkjnr",
  },
];

const occupationsList = OccupationsList;

const Showcase = (): React.ReactElement => {
  const [randomWord, setRandomWord] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * occupationsList.length);
    const selectedWord = occupationsList[randomIndex];
    setRandomWord(selectedWord);
  }, []);

  return (
    <section id="showcase">
      <span className="logo">MJ Codes_</span>
      <div className="container">
        <motion.h1
          id="slogan"
          data-text={`The ${randomWord} Developer`}
          style={{ textAlign: "start" }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 1,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0,
              },
            },
          }}
        >
          The <span className="randomOccupation">{randomWord}</span> Developer
        </motion.h1>
        <motion.hr
          initial={{ width: "0%" }} // Initial width set to 0%
          animate={{ width: "50%" }} // Animate to full width
          transition={{ duration: 1.5, delay: 0.6 }} // Animation duration and delay
          className="progressBar"
        />
        <motion.ul
          className="occupations"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              x: -100,
              opacity: 0,
            },
            visible: {
              scale: 1,
              x: 0,
              opacity: 1,
              transition: {
                delay: 0.5,
              },
            },
          }}
        >
          {occupations.map((occupation) => (
            <li key={occupation.name}>
              <a
                href={occupation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="occupation"
              >
                {occupation.name}
              </a>
            </li>
          ))}
        </motion.ul>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              x: -100,
              opacity: 0,
            },
            visible: {
              scale: 1,
              x: 0,
              opacity: 1,
              transition: {
                delay: 0.8,
              },
            },
          }}
        >
          A platform to showcase my software development journey and share the
          few things I know.
        </motion.p>

        <motion.div
          className="ctas"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              // scale: 0.8,
              y: 100,
              opacity: 0,
            },
            visible: {
              // scale: 1,
              y: 0,
              opacity: 1,
              transition: {
                delay: 1.2,
              },
            },
          }}
        >
          <Link to="/projects" className="btn btn-primary">
            View Projects
          </Link>
          <Link to="/about" className="btn btn-secondary">
            About Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
export default Showcase;
