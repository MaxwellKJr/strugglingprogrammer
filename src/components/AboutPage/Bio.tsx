import { motion } from "framer-motion";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import SocialLinksMobile from "../SocialLinks/SocialLinksMobile";
import "./about.css";

export default function Bio() {
  return (
    <>
      <div>
        <motion.div
          className="bio-details"
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
          <div>
            <StaticImage
              src="mjk.jpg"
              alt="Maxwell Kapezi, Jr Portrait"
              placeholder="blurred"
              layout="fixed"
              width={260}
              height={260}
              title="Maxwell Kapezi, Jr"
            />
          </div>
          <div className="details">
            <h1>About Me</h1>
            <p>
              My name is Maxwell Kapezi Jr. (BEd), a Software Developer with
              more than 2 years of professional experience, from the Warm Heart
              of Africa, Malawi 🇲🇼, currently focusing on{" "}
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                React.js
              </a>{" "}
              and{" "}
              <a
                href="https://laravel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Laravel
              </a>{" "}
              frameworks for web development and{" "}
              <a
                href="http://kotlinlang.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kotlin
              </a>{" "}
              and{" "}
              <a
                href="http://flutter.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flutter
              </a>{" "}
              for mobile app development.{" "}
            </p>
            <p>
              I am passionate about software and all things tech, driven by the
              desire to solve problems through code.
            </p>
            <p>
              I strive and enjoy:{" "}
              <Link to="/blog/software-that-works" className="underlined-link">
                Building Things that Work
              </Link>
              ,{" "}
              <Link
                to="/blog/a-welcoming-user-experience"
                className="underlined-link"
              >
                A Welcoming User Experience
              </Link>
              , and{" "}
              <strong className="underlined-link">
                Appealing/Attractive Design
              </strong>
            </p>
            <p>
              I started learning how to code in 2017 because I wanted to make my
              own video game (yes I wanted to make video games) but that dream
              died quick. For the whole story read my post{" "}
              <Link to="/blog/hello-world">Hello World</Link>
              {"."}
            </p>
            <p>
              Apart from coding I also enjoy writing fiction, poetry &amp; video
              games. I mean why not?
            </p>
            <div className="professional-btns">
              <Link to="/skills" className="btn btn-primary">
                My Skills
              </Link>
            </div>
            <SocialLinksMobile />
          </div>
        </motion.div>
      </div>
    </>
  );
}
