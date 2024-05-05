// import React from 'react';
// import logoDarkMode from '../assets/UR2.png';

// function Navbar(props) {
//   //const { handleClick } = props;

//   return (
//     <div className="flex w-[100%] justify-between bg-black/50  bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]  p-[10px] ">
//       {/* <img src={logoDarkMode} alt="logo" width={'70px'} className=" animate-logo" /> */}
//       <span className='logo animate-logo'>UR</span>
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={'20px'} fill='white' className="animate-hamburger cursor-pointer" onClick={props.handleClick}>
//         <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
//       </svg>

//       {/* {props.toggle &&
//       <ul className='absolute top-[60px]  right-[30px] z-50 bg-cyan-900 flex flex-col px-[60px] py-[40px] gap-y-[10px] rounded-2xl'>
//       <li>Home</li>
//       <li>Home</li>
//       <li>Home</li>
//       <li>Home</li>
//       <li>Home</li>
//       <li>Home</li>
//       <li>Home</li>
//       </ul>
//       } */}
//     </div>
//   );
// }

// export default Navbar;

import React from 'react'
import logoDarkMode from '../assets/UR2.png'
import { Link } from 'react-router-dom'
function Navbar(props) {
  return (
    <div className=' flex w-full justify-between items-center bg-white-800 backdrop-blur-md shadow-lg shadow-black/[0.03] p-[10px] fixed top-0 z-50'>
      <span className='logo '>UR</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 448 512'
        width={'20px'}
        fill='white'
        className=' cursor-pointer lg:hidden'
        onClick={props.handleClick}
      >
        <path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
      </svg>
      <ul className='hidden lg:block lg:flex lg:gap-[20px] lg:text-[12px] lg:font-bold lg:gap-[30px] lg:mr-[20px] '>
        <li className='section'>
          <Link to='/'>Home</Link>
        </li>
        <li className='section'>
          <Link to='/about'>About</Link>
        </li>
        <li className='section'>
          <Link to='/work'>Work</Link>
        </li>
        <li className='section'>
          <Link to='/skills'>Skills</Link>
        </li>
        <li className='section'>
          <Link to='/projects'>Projects</Link>
        </li>
        <li className='section'>
          <Link to='/testimonials'>Testimonials</Link>
        </li>
        <li className='section'>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
