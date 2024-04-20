import React, { useState } from 'react';
import Home from './pages/Home.jsx';

function App() {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(prev=>!prev);
  }

  return (
    <div className='bg-[#000000] text-white'>
      <Home toggle={toggle} setToggle={setToggle} handleClick={handleClick} />
      {toggle && 
      <ul className={`animate-hamburgerMenu ${toggle ? '' : 'hide'} w-[100%] h-[100vh} absolute top-[0px] bottom-0  z-50 bg-[#1a1a1a] flex flex-col px-[60px] py-[40px] pt-[100px] gap-y-[10px] items-center cursor-pointer`}>
      <li className='section'>Home</li>
      <li className='section'>About</li>
      <li className='section'>Work</li>
      <li className='section'>Skills</li>
      <li className='section'>Projects</li>
      <li className='section'>Testimonials</li>
      <li className='section'>Contact</li>
      <svg xmlns="http://www.w3.org/2000/svg"  width={'20px'} fill='white' viewBox="0 0 384 512" className='absolute right-[15px] top-[18px] cursor-pointer' onClick={()=>setToggle(false)}><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
      </ul>
      }
    </div>
  );
}

export default App;
