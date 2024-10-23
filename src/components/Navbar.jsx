import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import "../assets/style.css";
import logo from '../assets/logo.png'
const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname); // Initialize with current path

  const handleSetActive = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="topnav">
      <div>
      <Link to="/">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Link>
      </div>
      <div>
      <Link 
        to="/contact" 
        className={activeLink === '/contact' ? 'active' : ''}
        onClick={() => handleSetActive('/contact')}
      >
        <span>#</span>Contact
      </Link>
      <Link 
        to="/about" 
        className={activeLink === '/about' ? 'active' : ''}
        onClick={() => handleSetActive('/about')}
      >
        <span>#</span>About-me
      </Link>
      <Link 
        to="/skills" 
        className={activeLink === '/skills' ? 'active' : ''}
        onClick={() => handleSetActive('/skills')}
      >
        <span>#</span>Skills
      </Link>
      <Link 
        to="/projects" 
        className={activeLink === '/projects' ? 'active' : ''}
        onClick={() => handleSetActive('/projects')}
      >
        <span>#</span>Projects
      </Link>
      <Link 
        to="/" 
        className={activeLink === '/' ? 'active' : ''}
        onClick={() => handleSetActive('/')}
      >
        <span>#</span>Home
      </Link>
      </div>
    </div>
  );
}

export default Navbar;
