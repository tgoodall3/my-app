
import React from 'react';
import About from '../About';
import Hero from '../Hero';
import Navbar from '../Navbar';
import Footer from '../footer';
import Project from '../routes/project'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Contact from './contact';
import { Link, animateScroll as scroll, Element } from "react-scroll";

function Home() {

  return (
    <div className="Home" >
  {/* <Navbar />
<Element name="home-section">
<Hero />
<About />
</Element>
<Element name="project-section">
  <Project />
</Element>
<Element name="contact-section">
  <Contact />
</Element> */}

</div>
  );
}

export default Home;