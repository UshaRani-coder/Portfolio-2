import React, { useState } from 'react'
import { GlowingStarsBackgroundCard } from '../ui/glowing-stars.tsx'
import Navbar from '../components/Navbar.jsx'
import Work from './Work.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Testimonial from './Testimonials.jsx'
import Contact from './Contact.jsx'
import Hero from '../components/Hero.jsx'
import { ToastContainer, toast } from 'react-toastify'
import AnimatedBackground from '../ui/AnimateBackground.jsx'

import 'react-toastify/dist/ReactToastify.css'
function Home(props) {
  const [showPopup, setShowPopup] = useState(false)
  
  return (
    <section className='home relative z-50 md:text-[20px] md:tracking-wider text-[rgb(181,187,198)]' id='home'>
      {/* <GlowingStarsBackgroundCard  /> */}
      <AnimatedBackground />
      <Navbar {...props} />
      <ToastContainer className='mt-[40px] w-auto max-w-[250px] text-center ' />
      <Hero />
      <Work />
      <Skills />
      <Projects />
      <Testimonial />
      <Contact setShowPopup={setShowPopup} />
    </section>
  )
}

export default Home
