import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Work from './Work.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Testimonial from './Testimonials.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'
import { ToastContainer } from 'react-toastify'
import AnimatedBackground from '../ui/AnimateBackground.jsx'

import 'react-toastify/dist/ReactToastify.css'
function Home(props) {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <section
      className='home relative z-50 md:text-[20px] md:tracking-wider text-[rgb(181,187,198)]'
      id='home'
    >
      <AnimatedBackground />
      <Navbar {...props} />
      <ToastContainer className='mt-[40px] w-auto max-w-[250px] text-center ' />
      <About />
      <Work />
      <Skills />
      <Projects />
      <Testimonial />
      <Contact setShowPopup={setShowPopup} />
    </section>
  )
}

export default Home
