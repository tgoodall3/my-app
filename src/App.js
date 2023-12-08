import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/routes/contact';
import Project from './components/routes/project';
import Home from './components/routes/home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    // This will run when the component mounts
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

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

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>

  );
}

export default App;
