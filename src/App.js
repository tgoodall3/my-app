import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/routes/contact';
import Project from './components/routes/project';
import Home from './components/routes/home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';




function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true, // specifies whether animation should happen only once - while scrolling down
    });
    // This function runs when the component is unmounted
    return () => {
      AOS.refresh();
    };
  }, []);

  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // };

  useEffect(() => {
    
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });
  }, []);
  
  return (
    <div className="App">
      <div className="Home" >
        <Navbar />
        <Element name="home-section" id="home-section" className='element'>
          <Hero />
        </Element>
        <Element name="project-section" id="project-section"  className='element'>
          <Project />
        </Element>
        <Element name="about-section" id="about-section"  className='element'>
          <About />
        </Element>
        <Element name="contact-section" id="contact-section"  className='element'>
          <Contact />
        </Element>
      </div>
    </div>
  );
}

export default App;
