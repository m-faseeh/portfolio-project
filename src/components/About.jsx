import React from 'react';
import aboutMeImage from '../assets/about-me.png';
import "../assets/style.css";

function About() {
  return (
    <div className="section" id="about">
      <div className="content">
        <h2 className="h2">About me</h2>
        <img 
          src={aboutMeImage} 
          style={{ float: 'right', width: '350px', height: 'auto' }} 
          alt="Header Image" 
        />
        <p style={{paddingLeft: '60px' }}>
          Hello there! My name is Muhammad Faseeh<br />
          and I am a passionate software engineer and<br />
          web developer with a focus on creating user-<br />
          friendly and efficient web experiences. I<br />
          specialize in web development, using my skills<br />
          in HTML, CSS, and JavaScript to create<br />
          visually appealing and responsive web<br />
          applications. I also have experience in<br />
          programming languages such as Python,<br />
          Java, and C++ which enables me to build<br />
          complex systems and applications.
        </p>
      </div>
    </div>
  );
}

export default About;
