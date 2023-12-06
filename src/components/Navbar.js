import React from 'react';
import logo from '../assets/images/logo.png'; // Assuming logo.png is in src/assets
import '../styles/navbar.css';

function Navbar() {
  return (
    <div className="Nav-Container">
        <div className="Logo">
            <img src={logo} alt="Logo" />
            <div className='NavName'>
            <span className='line'>|</span> 
            <span className='myName'><span className='left'>Tyler</span> <span className='right'>Goodall</span></span>
            </div>
        </div>
        <div className='links'>
            <a>Home</a>
            <a>Projects</a>
            <a>Contact</a>
        </div>
    </div>
  );
}

export default Navbar;
