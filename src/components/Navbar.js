import React from 'react';
import logo from '../assets/images/logo.png'; // Assuming logo.png is in src/assets
import '../styles/navbar.css';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';




function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className="Nav-Container" >
        <div className="Logo" data-aos="fade-in">
            <img src={logo} alt="Logo" />
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
        <Link to="/">Home</Link>
        <Link to="/project">Projects</Link>
        <Link to="/contact">Contact</Link>        </div>
       )}

        <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/project">Projects</Link>
        <Link to="/contact">Contact</Link>
        </div>
    </div>
  );
}

export default Navbar;
