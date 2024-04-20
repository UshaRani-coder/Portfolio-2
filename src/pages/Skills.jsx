import React from 'react'
import htmlIcon from '../assets/html-5.png'
import cssIcon from '../assets/css-3.png'
import jsIcon from '../assets/js.png'
import tailwindIcon from '../assets/tailwindCSS.png'
import reactIcon from '../assets/atom.png'
import reduxIcon from '../assets/redux-icon.png'
import gitIcon from '../assets/social.png'
import firebaseIcon from '../assets/firebase.png'
import responsiveDesignIcon from '../assets/responsive.png'
import { Link } from 'react-router-dom'

function Skills() {
  return (
    <div className='skills mt-[30px] flex justify-center '>
        <ul className=' w-[80%] flex gap-[40px] justify-center flex-wrap '>
            <Link to="https://developer.mozilla.org/en-US/docs/Web/HTML"><li className='skill cursor-pointer'><img src={htmlIcon} alt="html" width={'30px'} /></li></Link>
            <Link to="https://developer.mozilla.org/en-US/docs/Web/CSS"><li className='skill cursor-pointer'><img src={cssIcon} alt="css" width={'30px'} /></li></Link>
            <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><li className='skill cursor-pointer'><img src={jsIcon} alt="js" width={'30px'} /></li></Link>
            <Link to="https://tailwindcss.com/docs/installation"><li className='skill cursor-pointer py-[25px]'><img src={tailwindIcon} alt="tailwind" width={'30px'} /></li></Link>
            <Link to="https://react.dev/"><li className='skill cursor-pointer'><img src={reactIcon} alt="react" width={'30px'} /></li></Link>
            <Link to="https://redux.js.org/"><li className='skill cursor-pointer'><img src={reduxIcon} alt="redux" width={'30px'} /></li></Link>
            <Link to="https://firebase.google.com/"><li className='skill cursor-pointer'><img src={firebaseIcon} alt="firebase" width={'35px'} /></li></Link>
            <Link to="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"><li className='skill cursor-pointer'><img src={responsiveDesignIcon} alt="responsive-web-design" width={'35px'} /></li></Link>
            <Link to="https://git-scm.com/doc"><li className='skill cursor-pointer'><img src={gitIcon} alt="git" width={'30px'} /></li></Link>
        </ul>
      
    </div>
  )
}

export default Skills
