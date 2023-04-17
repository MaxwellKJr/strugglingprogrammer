import React from "react";
import "./SkillsList.css";
import skillsList from "./Skills";
import toolsList from "./Tools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillsList = () => {
  const skills = skillsList;
  const uses = toolsList;

  return (
    <div className="split">
      <div className="skills">
        <p>Languages/Technologies:</p>
        <ul className="skills-grid">
          {skills.map((skill) => (
            <li key={skill.name} className="card-dark">
              {skill.name} <FontAwesomeIcon icon={skill.icon} size="lg" />
            </li>
          ))}
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
                  <a href={use.link} target="_blank" rel="nooponer noreferrer" className="use-link">
                    <h3>
                      {use.name} <FontAwesomeIcon icon={use.icon} />
                    </h3>
                  </a>
                </li>
              </ul>
              <ul className="use-description">
                <li>
                  <em>{use.description}</em>
                </li>
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
