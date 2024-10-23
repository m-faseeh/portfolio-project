import React from 'react';
import "../assets/style.css"; 
import logo1 from '../assets/logo2.png'

function Skills() {
  return (
    <div className="skills-section" id="skills">
      <div className="skills-content">
        <h2 className="h2">Skills</h2>
        <div className="skills-grid">
          <div>
            {/* You can replace this with an actual logo */}
            <div><img src={logo1} alt="logo" width="350px" /></div>
          </div>

          {/* Skill Block 1 */}
          <div className="skill-block">
            <h3 className="skill-block-title">Languages</h3>
            <ul className="skill-list">
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
            </ul>
          </div>

          {/* Skill Block 2 */}
          <div className="skill-block">
            <h3 className="skill-block-title">Other</h3>
            <ul className="skill-list">
              <li>C++</li>
              <li>Python</li>
              <li>Java</li>
            </ul>
          </div>

          {/* Skill Block 3 */}
          <div className="skill-block">
            <h3 className="skill-block-title">Databases</h3>
            <ul className="skill-list">
              <li>SQL</li>
              <li>SQLite</li>
            </ul>
          </div>

          {/* Skill Block 4 */}
          <div className="skill-block">
            <h3 className="skill-block-title">Framework</h3>
            <ul className="skill-list">
              <li>React</li>
              <li>Next</li>
              <li>Express</li>
              <li>Electron</li>

            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;
