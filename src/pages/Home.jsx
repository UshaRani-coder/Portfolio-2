import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Work from './Work.jsx';
import Skills from './Skills.jsx';
import Projetcs from './Projetcs.jsx';
import Testimonial from './Testimonials.jsx'
function Home(props) {
  return (
    <div className=''>
      <Navbar {...props} />
      <Hero />
      {/* {props.toggle && 
      <ul className=''>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
      </ul>
      } */}
      <Skills />
      <Work />
      <Projetcs />
      <Testimonial />
    </div>
  );
}

export default Home;
