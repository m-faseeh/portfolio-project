import React from 'react';
import "../assets/style.css";
import linenodes from '../assets/linenodes.png';
import feedrum from '../assets/feedrum.png';
import chertnodes from '../assets/chertnodes.png';

function Projects() {
  return (
      <div>

      <div className="section" id="project">
        <div className="content">
          <h2 className="h2">Projects</h2>

          <div className="grid-container" style={{ padding: '40px' }}>
            <div className="project">
              <img src={linenodes} alt="Duplicate Finder" />
              <ul>
                <li>C++</li>
                <li>Graphics.h</li>
              </ul>
              <h3>Duplicate Finder</h3>
              <p>An application to find duplicate files in a user-specified folder.</p>
            </div>

            <div className="project">
              <img src={feedrum} alt="Car Game" />
              <ul>
                <li>C++</li>
                <li>Windows.h</li>
              </ul>
              <h3>Car Game</h3>
              <p>A Car game</p>
            </div>

            <div className="project">
              <img src={chertnodes} alt="FMS Project" />
              <ul>
                <li>React.js</li>
                <li>Firebase</li>
              </ul>
              <h3>Feedback Management System</h3>
              <p>A web application for students to give feedback of teacher and course</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
