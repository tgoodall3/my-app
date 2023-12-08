import '../styles/projectHero.css';
import Card from '../components/reUseable/card';
import React from 'react';
import MVN from '../assets/images/MVN.png';
import empire from '../assets/images/empire.png';
import crud from '../assets/images/crud.png';

function ProjectHero() {
  return (
    <div className='ProjectHero'>
        <h1 className='Head'>Dig into my work</h1>
        <div className="projects">
        <Card className="one" text="A React website using the TDMB API to create a great, user-friendly experience." image={MVN} />
  <Card className="two" text="A front-end design of a Ecommerce brand called Empire Fitness." image={empire}/>
  <Card className="three"text="A React/Firebase CRUD Todo List." image={crud}/>
  </div>
    </div>
  );
}

export default ProjectHero;
