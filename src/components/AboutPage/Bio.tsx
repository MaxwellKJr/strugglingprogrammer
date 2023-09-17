import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import SocialLinksMobile from '../SocialLinks/SocialLinksMobile';
import './about.css';
import { motion } from 'framer-motion'

const Bio = () => (
  <>
    <div>
      <motion.div className='bio-details'
        initial='hidden'
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
            src='mjk.jpg'
            alt='Maxwell Kapezi, Jr Portrait'
            placeholder='blurred'
            layout='fixed'
            width={260}
            height={260}
            title='Maxwell Kapezi, Jr'
          />
          {/* <SocialLinks /> */}
        </div>
        <div className='details'>
          <h1>About Me</h1>
          {/* <a href='https://www.twitter.com/maxwellKJr' target='_blank' rel='noreferrer'> */}
          {/*   <img */}
          {/*     src='https://img.shields.io/twitter/follow/maxwellKJr?logo=twitter&style=for-the-badge&color=ff0077&labelColor=181818' */}
          {/*     alt='Twitter Badge' */}
          {/*     className='twitter-badge' */}
          {/*   /> */}
          {/* </a> */}
          <p>
            My name is Maxwell Kapezi Jr., a Software Developer from the Warm Heart of Africa,
            Malawi 🇲🇼, currently focusing on{' '}
            <a href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
              React.js
            </a>{' '}
            and{' '}
            <a href='https://laravel.com' target='_blank' rel='noopener noreferrer'>
              Laravel
            </a>{' '}
            frameworks for web development and{' '}
            <a href='http://kotlinlang.org' target='_blank' rel='noopener noreferrer'>
              Kotlin
            </a>{' '}
            and{' '}
            <a href='http://flutter.dev' target='_blank' rel='noopener noreferrer'>
              Flutter
            </a>{' '}
            for mobile app development. {/* I am also a fourth year Bachelor of Education (BEd) in */}
            {/* Computer Science student at the{' '} */}
            {/* <a href='https://unima.ac.mw' target='_blank' rel='noopener noreferrer'> */}
            {/*   Univeristy of Malawi */}
            {/* </a> */}
            {/* {'.'} */}
          </p>
          <p>
            I strive and enjoy: <strong>1. building things that work</strong>,{' '}
            <strong>2. a welcoming user experience</strong>, and{' '}
            <strong>3. appealing/attractive design</strong> whether I am working solo or with a
            team.
          </p>
          <p>
            I started learning how to code in 2017 because I wanted to make my own video game (yes I
            wanted to make video games) but that dream died quick. For the whole story read my post{' '}
            <Link to='/blog/hello-world'>Hello World</Link>
            {'.'}
          </p>
          <p>
            Apart from coding I also enjoy writing fiction, poetry &amp; video games. I mean why
            not?
          </p>
          <div className='professional-btns'>
            <Link to='/skills' className='btn btn-primary'>
              My Skills
            </Link>
            {/* <a */}
            {/*   href='https://maxwellkapezi-resume.netlify.app' */}
            {/*   className='btn btn-secondary' */}
            {/*   target='_blank' */}
            {/*   rel='noopener noreferrer' */}
            {/* > */}
            {/*   My Resume */}
            {/* </a> */}
          </div>
          <SocialLinksMobile />
        </div>
      </motion.div>
    </div>
  </>
);

export default Bio;
