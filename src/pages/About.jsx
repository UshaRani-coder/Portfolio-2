
import React, { useState, useEffect } from 'react'
import ushaRaniImg from '../assets/ushaRani.jpg'
import gif from '../assets/512.gif'
import '../App.css'
import { Link } from 'react-router-dom'

function About() {
  const [loading, setLoading] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    setLoading(false)
  }, [])

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  if (loading) {
    return null // Render nothing while loading to prevent flickering
  }

  return (
    <section
      className='p-[10px] lg:px-[40px] flex flex-col-reverse lg:flex-row-reverse lg:justify-center lg:items-center xl:gap-[50px] pt-[60px] items-center text-[rgb(181,187,198)]'
      id='about'
    >
      <div className='animate-content flex flex-col items-center pt-[20px] lg:pt-0'>
        <h1 className='w-[230px] md:w-[330px] py-[10px] px-[5px] rounded-2xl flex gap-[5px] text-white'>
          Namaskar
          <img src={gif} width={'20px'} alt='Waving gif' /> , I'm{' '}
          <span className='name'>Usha Rani!</span>
        </h1>
        <span className='role text-2xl md:text-4xl lg:text-5xl xl:text-6xl'>
          A Frontend Developer,
        </span>
        <p className='px-[10px] md:px-[50px] lg:px-[40px] xl:w-[900px] sm:m-[0px] md:mt-[10px] md:tracking-wider text-white'>
          driven by a deep passion for crafting immersive digital experiences. I
          specialize in creating seamless user interfaces that marry elegance
          with functionality. Let's collaborate to turn your ideas into
          beautifully interactive realities!
        </p>
        <div className='flex flex-col items-center md:flex-row md:gap-[70px]'>
          <div className='mt-[10px]'>
            <a
              href='https://drive.google.com/file/d/1U4olDE49DqDLP0PappfOCZE-viXDnkn_/view'
              download='Usha Resume.pdf'
            >
              <div className='text-[14px] border border-[#389db6] rounded-full p-[10px] w-[130px] md:w-[150px] flex items-center justify-between'>
                <span className='text-[#389db6] font-bold'>Download CV</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  className='cursor-pointer resume w-[16px]'
                  fill='#389db6'
                >
                  <path d='M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z' />
                </svg>
              </div>
            </a>
          </div>
          <div className='socials flex gap-[20px] my-[10px] mt-[20px]'>
            <Link to='tel:8465842779'>
              <div className='border border-[#389db6] rounded-full p-[10px]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  className='cursor-pointer phone w-[20px]'
                  fill='#389db6'
                >
                  <path d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z' />
                </svg>
              </div>
            </Link>
            <Link to='mailto:ur66026@gmail.com'>
              <div className='border border-[#389db6] rounded-full p-[10px]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  className='cursor-pointer gmail w-[20px]'
                  fill='#389db6'
                >
                  <path d='M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z' />
                </svg>
              </div>
            </Link>
            <Link to='https://www.linkedin.com/in/usha-rani-207939245/'>
              <div className='border border-[#389db6] rounded-full p-[10px]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                  className='cursor-pointer linkedin w-[18px]'
                  fill='#389db6'
                >
                  <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.3 38.5-38.5 38.5zM384 416h-66.5v-112c0-26.7-6-44.9-36.5-44.9c-31.6 0-42.4 22.8-42.4 44.9V416H172V202.2h64v29.2h.9c8.9-16.5 30.5-33.9 62.8-33.9c67.2 0 79.4 44.3 79.4 101.9V416z' />
                </svg>
              </div>
            </Link>
            <Link to='https://github.com/Usha6602'>
              <div className='border border-[#389db6] rounded-full p-[10px]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  className='cursor-pointer github w-[20px]'
                  fill='#389db6'
                >
                  <path d='M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.205 11.387c.6.111.82-.261.82-.577c0-.285-.011-1.04-.016-2.04c-3.338.724-4.042-1.61-4.042-1.61c-.546-1.387-1.333-1.756-1.333-1.756c-1.089-.745.082-.729.082-.729c1.205.085 1.839 1.238 1.839 1.238c1.07 1.835 2.809 1.305 3.494.998c.108-.774.419-1.305.762-1.605c-2.665-.305-5.467-1.335-5.467-5.93c0-1.31.468-2.381 1.235-3.221c-.123-.303-.535-1.526.117-3.176c0 0 1.008-.322 3.301 1.23c.957-.266 1.984-.398 3.005-.403c1.02.005 2.047.137 3.005.403c2.29-1.552 3.297-1.23 3.297-1.23c.653 1.65.241 2.873.118 3.176c.77.84 1.235 1.911 1.235 3.221c0 4.609-2.807 5.623-5.479 5.921c.43.371.823 1.102.823 2.222c0 1.605-.015 2.896-.015 3.286c0 .319.216.694.825.576C20.565 21.795 24 17.297 24 12c0-6.63-5.37-12-12-12z' />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='animate-img'>
        <img
          className='bg-[rgb(240,70,240)] rounded-full p-[10px] border-none'
          src={ushaRaniImg}
          alt='Usha Rani'
          onLoad={handleImageLoad}
          style={{ display: 'none' }}
        />
        {imageLoaded && (
          <Link to='https://usha-portfolio-website.vercel.app/'>
          <div
            id='my-img'
            className='w-[150px] md:w-[180px] border-[6px] border-[#389db6] rounded-full animate-img'
          >
            <img className='rounded-full cursor-pointer' src={ushaRaniImg} alt='Usha Rani' />
          </div>
          </Link>
        )}
      </div>
    </section>
  )
}

export default About
