import '../styles/projectHero.css';
import Card from '../components/reUseable/card';
import React from 'react';

function ProjectHero() {
  return (
    <div className='ProjectHero'>
        <h1 className='Head'>Dig into my work</h1>
        <div className="projects">
        <Card className="one" text="Description for Project 1"/>
  <Card className="two" text="Description for Project 2"/>
  <Card className="three"text="Description for Project 3"/>
  </div>
    </div>
  );
}

export default ProjectHero;
