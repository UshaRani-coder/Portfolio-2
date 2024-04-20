import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';

function Home(props) {
  return (
    <div>
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
    </div>
  );
}

export default Home;
