import React from "react";
import "./SkillsList.css";
import skillsList from "./Skills";
import toolsList from "./Tools";

const SkillsList = () => {
  const skills = skillsList;
  const uses = toolsList;

  return (
    <div className="split">
      {/*Programming Languages*/}
      <div className="skills">
        <h4 className="category-headline">Programming Languages:</h4>
        <ul className="skills-grid">
          {skills.map((skill) => {
            if (skill.skill === 1)
              return (
                <li key={skill.name} className="card-dark">
                  {skill.name} {skill.icon}
                </li>
              );
          })}
        </ul>
      </div>
      {/*Web Libraries & Frameworks*/}
      <div className="skills">
        <h4 className="category-headline">Web Libraries &amp; Frameworks:</h4>
        <ul className="skills-grid">
          {skills.map((skill) => {
            if (skill.skill === 2)
              return (
                <li key={skill.name} className="card-dark">
                  {skill.name} {skill.icon}
                </li>
              );
          })}
        </ul>
      </div>
      {/*Mobile Development*/}
      <div className="skills">
        <h4 className="category-headline">Mobile Development:</h4>
        <ul className="skills-grid">
          {skills.map((skill) => {
            if (skill.skill === 3)
              return (
                <li key={skill.name} className="card-dark">
                  {skill.name} {skill.icon}
                </li>
              );
          })}
        </ul>
      </div>
      {/*Querying*/}
      <div className="skills">
        <h4 className="category-headline">Querying:</h4>
        <ul className="skills-grid">
          {skills.map((skill) => {
            if (skill.skill === 4)
              return (
                <li key={skill.name} className="card-dark">
                  {skill.name} {skill.icon}
                </li>
              );
          })}
        </ul>
      </div>
      {/*Data Management & Storage*/}
      <div className="skills">
        <h4 className="category-headline">Data Management &amp; Storage:</h4>
        <ul className="skills-grid">
          {skills.map((skill) => {
            if (skill.skill === 5)
              return (
                <li key={skill.name} className="card-dark">
                  {skill.name} {skill.icon}
                </li>
              );
          })}
        </ul>
      </div>
      {/*Other Technologies*/}
      <div className="skills">
        <h4 className="category-headline">Other Technologies:</h4>
        <ul className="skills-grid">
          {skills.map((skill) => {
            if (skill.skill === 6)
              return (
                <li key={skill.name} className="card-dark">
                  {skill.name} {skill.icon}
                </li>
              );
          })}
        </ul>
      </div>

      {/* Skills */}
      <div>
        <h1>What I Use:</h1>
        <ul className="uses-grid">
          {uses.map((use) => (
            <li key={use.name} className="use-card">
              <ul className="use-type">
                <li>
                  <h5 className="type">{use.type}: </h5>
                </li>
                <li>
                  <a
                    href={use.link}
                    target="_blank"
                    rel="nooponer noreferrer"
                    className="use-link"
                  >
                    <h3>
                      {use.name} {use.icon}
                    </h3>
                  </a>
                </li>
              </ul>
              <ul className="use-description">
                <li>{use.description}</li>
                <li>
                  <h5>Why I Use This:</h5> {use.whyUse}
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsList;
