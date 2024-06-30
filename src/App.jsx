import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Work from './pages/Work.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const scrollToComponent = () => {
      const hash = window.location.hash
      console.log(hash)
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            let navbarHeight = 0
            const navbar = document.querySelector('.navbar')

            if (navbar) {
              navbarHeight = navbar.offsetHeight
            }
            const offset = element.offsetTop - navbarHeight
            window.scrollTo({ top: offset, behavior: 'smooth' })
          }
        }, 100)
      } else {
        window.scrollTo(0, 0)
      }
    }

    scrollToComponent()
  }, [toggle])

  function handleClick() {
    setToggle((prev) => !prev)
  }

  return (
    <div className='bg-[#171923] text-white overflow-x-hidden'>
      <Navbar toggle={toggle} setToggle={setToggle} handleClick={handleClick} />

      {/* <>
        {toggle ? (
          <ul
            className={`animate-hamburgerMenu  w-[100%] h-screen absolute top-[0px] bottom-0  z-50 bg-[#1a1a1a] flex flex-col px-[60px] py-[40px] pt-[100px] gap-y-[10px] items-center cursor-pointer`}
          >
            <li className='section'>
              <Link
                to='#'
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className='section'>
              <Link
                to='#about'
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                onClick={handleClick}
              >
                About
              </Link>
            </li>
            <li className='section'>
              <Link
                to='#work'
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                onClick={handleClick}
              >
                Work
              </Link>
            </li>
            <li className='section'>
              <Link
                to='#skills'
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                onClick={handleClick}
              >
                Skills
              </Link>
            </li>
            <li className='section'>
              <Link
                to='#projects'
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                onClick={handleClick}
              >
                Projects
              </Link>
            </li>
            <li className='section'>
              <Link
                to='#testimonials'
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                onClick={handleClick}
              >
                Testimonials
              </Link>
            </li>
            <li className='section'>
              <Link
                to='#contact'
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                onClick={handleClick}
              >
                Contact
              </Link>
            </li>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={'20px'}
              fill='white'
              viewBox='0 0 384 512'
              className='absolute right-[15px] top-[18px] cursor-pointer'
              onClick={() => setToggle(false)}
            >
              <path d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z' />
            </svg>
          </ul>
        ) : ( */}
          <Routes>
            <Route
              path='/'
              element={
                <Home
                   toggle={toggle}
                   setToggle={setToggle}
                   handleClick={handleClick}
                />
              }
            />
            <Route path='/about' element={<About />} />
            <Route path='/work' element={<Work />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
         {/* )}  */}
      
    </div>
  )
}

export default App
