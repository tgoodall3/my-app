import React from 'react';
import logo from '../assets/images/logo.png'; // Assuming logo.png is in src/assets
import '../styles/navbar.css';
import ReactDOM from 'react-dom';
import { Link } from "react-scroll";import { useState } from 'react';
import { useEffect } from 'react';




function Navbar() {

  const navigateHome = () => {
    window.location.href = '/';
  };

  const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className="Nav-Container" >
       <div className="Logo" data-aos="fade-down">
            <img onClick={navigateHome} src={logo} alt="Logo" /> 
            <div className='NavName'>
            <span className='line'>|</span> 
            <span className='myName'><span className='left'>Tyler</span> <span className='right'>Goodall</span></span>
            </div>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
        </div>

       {isOpen && (
        <div className="Hlinks ${isOpen ? 'open' : 'closed'}">
          <Link activeClass="active" to="home-section" spy={true} smooth={true} offset={-70} duration={500}>
        Home
      </Link>
      <Link activeClass="active" to="about-section" spy={true} smooth={true} offset={-70} duration={500}>
        About
      </Link>
      <Link activeClass="active" to="project-section" spy={true} smooth={true} offset={-70} duration={500}>
        Projects
      </Link>
      <Link activeClass="active" to="contact-section" spy={true} smooth={true} offset={-70} duration={500}>
        Contact
      </Link>
            </div>
       )}

        <div className='links'>
        <Link activeClass="active" to="home-section" spy={true} smooth={true} offset={-70} duration={500}>
        Home
      </Link>
      <Link activeClass="active" to="about-section" spy={true} smooth={true} offset={-70} duration={500}>
        About
      </Link>
      <Link activeClass="active" to="project-section" spy={true} smooth={true} offset={-70} duration={500}>
        Projects
      </Link>
      <Link activeClass="active" to="contact-section" spy={true} smooth={true} offset={-70} duration={500}>
        Contact
      </Link>
        </div>
    </div>
  );
}

export default Navbar;
