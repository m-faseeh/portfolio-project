import React from 'react';
import heroImage from '../assets/black_hero.png'; // Adjust the path as needed
import "../assets/style.css";

function Home() {
  return (
    <div>
      <div className="section" id="home">
        <div className="content">
          <h2 className="h2">Introduction</h2>
          <p>
            Hi, my name is<br />
            <span className='span-style'>MUHAMMAD FASEEH.</span><br />
            I am a <span className='span-style'>Software Engineer</span> and <span className='span-style'>Full Stack Web Developer</span>.<br /><br />
            I craft responsive websites where technologies meet creativity.
          </p>
          <a href="/about" className="contact-btn">Want to learn more about me</a>
        </div>
        <div className="img">
          <img src={heroImage} alt="Hero Image" height="400px" style={{ float: 'right' }} />
        </div>
      </div>
    </div>
  );
}

export default Home;
