import '../styles/projectHero.css';
import Card from '../components/reUseable/card';
import React from 'react';
import MVN from '../assets/images/MVN.png';
import empire from '../assets/images/empire.png';
import crud from '../assets/images/crud.png';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function ProjectHero() {  
  return (
    <div className='ProjectHero'>
        <h1 className='Head'>Dig into my work</h1>
        <div className="projects">
         <a href='https://movienite.vercel.app/'><Card on className="one" text="A React website using the TDMB Movie API." image={MVN} /></a>
         <a href='https://tgoodall3.github.io/career-planning---ecom-portfolio/'><Card className="two" text="A front-end design of a Ecommerce brand called Empire Fitness." image={empire}/></a>
         <a href='https://final-todo-nu.vercel.app/'><Card className="three"text="A   React/Firebase CRUD Todo List." image={crud}/></a>
      </div>
    </div>
  );
}

export default ProjectHero;
