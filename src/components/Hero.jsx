import React from 'react'
import ushaRaniImg from '../assets/ushaRani.jpg'
import gif from "../assets/512.gif"
import '../App.css'
function Hero() {
  return (
    <div className='p-[10px] flex flex-col-reverse lg:flex-row-reverse lg:justify-center lg:items-center xl:gap-[50px] pt-[50px] md:pt-[60px]  items-center text-[rgb(181,187,198)]' id='about'>
      <div className='animate-content  flex flex-col items-center pt-[20px] lg:pt-0'>
        <h1 className='  w-[230px] md:w-[330px]  py-[10px] px-[5px] rounded-2xl  flex gap-[5px] text-white'> Namaskar<img src={gif} width={'20px'}/>  , I'm <span className='text-[#FF00FF] name'>Usha Rani!</span></h1>
        <span className='role text-[#FF00FF] text-3xl md:text-4xl lg:text-5xl xl:text-6xl'> A Frontend Developer.</span>
        {/* <p className='ml-[25px] text-xl'>I build pixel-perfect,engaging and accessible digital experiences.</p> */}
        <p className='ml-[25px] text-xl sm:m-[0px] md:mt-[10px] md:tracking-wider text-white'>I build pixel-perfect,engaging and accessible digital experiences.</p>
        </div>
        <img src={ushaRaniImg} alt="person" className='animate-img-fall rounded-full w-[100px] lg:w-[200px]' />
    </div>
  )
}

export default Hero
