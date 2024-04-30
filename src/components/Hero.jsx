
import React from 'react'
import ushaRaniImg from '../assets/ushaRani.jpg'
import gif from "../assets/512.gif"
import '../App.css'
import phoneImg from "../assets/call.png";
import gmailImg from "../assets/new.png";
import linkedInImg from "../assets/linkedin.png";
import { Link } from "react-router-dom";

//import { BackgroundGradient } from './Background-Gradient.tsx';
function Hero() {
  return (
    <div className='p-[10px] flex flex-col-reverse lg:flex-row-reverse lg:justify-center lg:items-center xl:gap-[50px] pt-[50px] md:pt-[60px]  items-center text-[rgb(181,187,198)]' id='about'>
      <div className='animate-content  flex flex-col items-center pt-[20px] lg:pt-0'>
        <h1 className='  w-[230px] md:w-[330px]  py-[10px] px-[5px] rounded-2xl  flex gap-[5px] text-white'> Namaskar<img src={gif} width={'20px'}/>  , I'm <span className='text-[#FF00FF] name'>Usha Rani!</span></h1>
        <span className='role text-[#FF00FF] text-3xl md:text-4xl lg:text-5xl xl:text-6xl'> A Frontend Developer.</span>
        {/* <p className='ml-[25px] text-xl'>I build pixel-perfect,engaging and accessible digital experiences.</p> */}
        <p className='ml-[25px] text-xl sm:m-[0px] md:mt-[10px] md:tracking-wider text-white'>I build pixel-perfect,engaging and accessible digital experiences.</p>
        <div className="socials flex gap-[20px] my-[10px] mt-[20px]">
        <Link to="tel:8465842779"><img src={phoneImg} alt="" width={"20px"} className="cursor-pointer phone "/></Link>
         <Link to="mailto:ur66026@gmail.com">
           <img src={gmailImg} alt="Gmail" width={"20px"} className="cursor-pointer gmail "/>
         </Link>
         <Link to="https://www.linkedin.com/in/usha-rani-207939245/"><img src={linkedInImg} alt="" width={"20px"} className="cursor-pointer linkedin "/></Link>
         {/* <Link to="https://twitter.com/rani_ur66026"><svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 512 512"
           width={"20px"}
           fill="white"
           className="cursor-pointer"
         >
           <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
         </svg></Link> */}
      </div>
        </div>
        {/* <img src={ushaRaniImg} alt="person" className='animate-img-fall rounded-full w-[100px] lg:w-[200px]' id='my-img' /> */}
        {/* <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10">
  <img src={ushaRaniImg} alt="person" className='animate-img-fall rounded-full w-[100px] lg:w-[200px]' />
</BackgroundGradient> */}
 <div id="my-img"><img src={ushaRaniImg} alt="person" className='animate-img-fall rounded-full w-[100px] lg:w-[200px]' /></div>

    </div>

  )
}

export default Hero
