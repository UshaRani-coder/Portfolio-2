import React from 'react'
import reduxIcon from '../assets/redux-icon.png'
function Testimonials() {
  return (
    <div className='mt-[30px] flex flex-col items-center '>
        <h1 className="testimonials">Testimonial</h1>
      <div className="testimonial w-[80%] mt-[25px]">
        <p className='mb-[25px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, earum.</p>
       <div className='flex flex-start items-center gap-[10px]'>
       <img src={reduxIcon} alt="" width={'40px'} className=''/>
       <div>
        <h2 className='Mentor  text-lg'>Nandan G N</h2>
        <span className='font-bold text-[15px]'>CEO of </span>
       </div>
       </div>
      </div>
    </div>
  )
}

export default Testimonials
