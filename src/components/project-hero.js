import '../styles/projectHero.css';
import Card from '../components/reUseable/card';
import React from 'react';

function ProjectHero() {
  return (
    <div className='ProjectHero'>
        <h1 className='Head'>Dig into my work</h1>
        <div className="projects" data-aos="fade-right">
        <Card className="one" text="A React website using the TDMB API to create a great, user-friendly experience."/>
  <Card className="two" text="This is a front-end design of a Ecommerce brand called Empire Fitness. It is hosted with github Pages."/>
  <Card className="three"text="This is a React/Firebase creation, a CRUD Todo List. It has some great functionalities and just showcases some of the techniques I have used."/>
  </div>
    </div>
  );
}

export default ProjectHero;
