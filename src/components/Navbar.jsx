
import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar(props) {
  const [itemToggle,setItemToggle] = useState(false)
  const [activeSection,setActiveSection] = useState(null)
  useEffect(() => {
    const scrollToComponent = () => {
      const hash = window.location.hash;
      console.log(hash);
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            let navbarHeight = 0;
            const navbar = document.querySelector('.navbar');
            
            if (navbar) {
              navbarHeight = navbar.offsetHeight;
            }
            const offset = element.offsetTop - navbarHeight;
            window.scrollTo({ top: offset, behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    };
  
    scrollToComponent();
  
    
  }, [itemToggle]); 
  useEffect(() => {
   
      const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          console.log(`Section: ${section.id}, Top: ${rect.top}, Bottom: ${rect.bottom} , height: ${window.innerHeight}`);
          if (Math.round(rect.top) >= 0 && Math.round(rect.bottom) <= window.innerHeight) {
            setActiveSection(section.id);
          }
        });
      };
      
    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='navbar flex w-full justify-between items-center bg-white-800 backdrop-blur-md shadow-lg shadow-black/[0.03] p-[10px] fixed top-0 z-50'>
      <span className='logo'>UR</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 448 512'
        width={'20px'}
        fill='white'
        className='cursor-pointer lg:hidden'
        onClick={props.handleClick}
      >
        <path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
      </svg>
      <ul className='hidden lg:block lg:flex lg:gap-[20px] lg:text-[12px] lg:font-bold lg:gap-[30px] lg:mr-[20px]'>
        <li className={`section ${activeSection === 'home' ? 'active' : ''}`}>
          <Link to='#' scroll={el => el.scrollIntoView({ behavior: 'smooth' })} onClick={() =>setItemToggle(p=>!p)} >Home</Link>
        </li>
        <li className={`section ${activeSection === 'about' ? 'active' : ''}`}>
          <Link to='#about' scroll={el => el.scrollIntoView({ behavior: 'smooth' }) } onClick={() =>setItemToggle(p=>!p)} >About</Link>
        </li>
        <li className={`section ${activeSection === 'work' ? 'active' : ''}`}>
          <Link to='#work' scroll={el => el.scrollIntoView({ behavior: 'smooth' })} onClick={() =>setItemToggle(p=>!p)}>Work</Link>
        </li>
        <li className={`section ${activeSection === 'skills' ? 'active' : ''}`}>
          <Link to='#skills' scroll={el => el.scrollIntoView({ behavior: 'smooth' })}  onClick={() =>setItemToggle(p=>!p)} >Skills</Link>
        </li>
        <li className={`section ${activeSection === 'projects' ? 'active' : ''}`}>
          <Link to='#projects' scroll={el => el.scrollIntoView({ behavior: 'smooth' })} onClick={() =>setItemToggle(p=>!p)}> Projects</Link>
        </li>
        <li className={`section ${activeSection === 'testimonials' ? 'active' : ''}`}>
          <Link to='#testimonials' scroll={el => el.scrollIntoView({ behavior: 'smooth' })}  onClick={() =>setItemToggle(p=>!p)}>Testimonials</Link>
        </li>
        <li className={`section ${activeSection === 'contact' ? 'active' : ''}`}>
          <Link to='#contact' scroll={el => el.scrollIntoView({ behavior: 'smooth' })}  onClick={() =>setItemToggle(p=>!p)}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
