import React from 'react'
import ushaRaniImg from '../assets/ushaRani.jpg'
import gif from "../assets/512.gif"
import '../App.css'
function Hero() {
  return (
    <div className='p-[10px] flex flex-col-reverse  items-center'>
      <div className='animate-content  flex flex-col items-center pt-[20px]'>
        <h1 className='  w-[230px] py-[10px] px-[5px] rounded-2xl  flex gap-[5px]'> Namaskar<img src={gif} width={'20px'}/>  , I'm <span className='text-[#D80065] name'>Usha Rani!</span></h1>
        <span className='role text-[#D80065] text-3xl'> A Frontend Developer.</span>
        <p className='ml-[25px] text-xl'>I build pixel-perfect,engaging and accessible digital experiences.</p>
        </div>
        <img src={ushaRaniImg} alt="person" className='animate-img-fall rounded-full w-[100px]' />
      
    </div>
  )
}

export default Hero
