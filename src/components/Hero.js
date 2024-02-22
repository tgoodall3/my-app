import React from 'react';
import '../styles/hero.css';
import avatar from '../assets/images/avatar.png';
import ReactPlayer from 'react-player';
import HeroMov from '../assets/images/hero.mp4';
import { useEffect } from 'react';

function Hero() {

  return (
    <div className='hero' >
      <div className='react-wrapper'>
</div>
      <img className="avatar" src={avatar} alt="Avatar" data-aos="fade-right"/>
    <h1 className='head' data-aos="fade-left">Hello, I'm <span className='name'>Tyler</span>
    <br></br> 
    <span className='sub'>Web Developer</span>

    </h1>
    </div>
  );
}

export default Hero;
