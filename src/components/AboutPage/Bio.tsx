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
              My name is Maxwell Kapezi Jr, a Software Developer with over 2
              years of professional experience, I specialize in mobile app
              development using{" "}
              <a
                href="https://www.swift.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Swift
              </a>
              {", "}
              <a
                href="http://kotlinlang.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kotlin
              </a>{" "}
              , and{" "}
              <a
                href="http://flutter.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flutter
              </a>
              {". "}
              {/*along with web development{" "}*/}
              {/*<a*/}
              {/*  href="https://reactjs.org"*/}
              {/*  target="_blank"*/}
              {/*  rel="noopener noreferrer"*/}
              {/*>*/}
              {/*  React.js*/}
              {/*</a>{" "}*/}
              {/*and{" "}*/}
              {/*<a*/}
              {/*  href="https://laravel.com"*/}
              {/*  target="_blank"*/}
              {/*  rel="noopener noreferrer"*/}
              {/*>*/}
              {/*  Laravel*/}
              {/*</a>{" "}*/}
            </p>
            <p>
              My journey in software development began in 2017, driven by a
              passion for creating my own video games—though that dream died
              quickly lol. If you want to know the whole story, read this post:{" "}
              <Link to="/blog/hello-world">Hello World</Link>.
            </p>
            <p>
              Whether it’s developing robust mobile applications or creating
              dynamic web experiences, I am motivated by the impact that
              well-crafted technology can have. My approach is guided by three
              core principles:
            </p>
            <p>
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
              Apart from coding I also enjoy writing fiction, short stories to
              be specific &amp; playing <em>&ldquo;difficult&rdquo;</em> video
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
