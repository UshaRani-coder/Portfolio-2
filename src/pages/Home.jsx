import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Work from './Work.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Testimonial from './Testimonials.jsx';
import Contact from './Contact.jsx';
function Home(props) {
  return (
    <div className=''>
      <Navbar {...props} />
      <Hero />
      <Skills />
      <Work />
      <Projects />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default Home;
