
import React from 'react';
import About from '../About';
import Hero from '../Hero';
import Navbar from '../Navbar';
import Footer from '../footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // values from 0 to 3000, with step 50ms
    });
  }, []);
  return (
    <div className="Home" >
  <Navbar />
<Hero />
<About />
<Footer />
</div>
  );
}

export default Home;