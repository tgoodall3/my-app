import React from 'react';
import '../styles/hero.css';
import avatar from '../assets/images/avatar.png';
import ReactPlayer from 'react-player';
import HeroMov from '../assets/images/hero.mp4';

function Hero() {
  return (
    <div className='hero'>
      <div className='react-wrapper'>
</div>
      <img className="avatar" src={avatar} alt="Avatar" />
    <h1 className='head'>Hello, I'm <span className='name'>Tyler</span>
    <br></br> 
    <span className='sub'>Web Designer/Developer</span>

    </h1>
    </div>
  );
}

export default Hero;
