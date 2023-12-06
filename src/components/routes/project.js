import React from 'react';
import Navbar from '../Navbar';
import Card from '../reUseable/card';
import ProjectHero from '../project-hero';
import Footer from '../footer';

function Project() {
  return (
  <div className="Project">
  <Navbar />    
  <ProjectHero />
  <Footer />
</div>
   ) ;
}

export default Project;