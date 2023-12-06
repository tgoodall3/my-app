
import React from 'react';
import About from '../About';
import Hero from '../Hero';
import Navbar from '../Navbar';
import Footer from '../footer';

function Home() {
  return (
    <div className="Home">
  <Navbar />
<Hero />
<About />
<Footer />
</div>
  );
}

export default Home;