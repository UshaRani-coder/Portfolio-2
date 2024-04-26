import React from "react";
import {Link} from 'react-router-dom'
import nandanImg from "../assets/nandan.jpg";
function Testimonials() {
  return (
    <div className="mt-[30px] flex flex-col items-center" id="testimonials">
      <h1 className="testimonials">Testimonial</h1>
      <div className="testimonial w-[80%] mt-[25px]">
        <p className="mb-[25px]">
          <span className="font-bold">Usha</span> is an <span className="font-bold">exceptional professional</span> with unparalleled <span className="font-bold">R&D skills,</span> a
          supportive nature, and remarkable <span className="font-bold">leadership qualities.</span> Her <span className="font-bold">innovative
          approach</span> and <span className="font-bold">dedication to excellence</span> have consistently propelled our <span className="font-bold">team to new heights</span>. Usha's <span className="font-bold">guidance</span> and <span className="font-bold">mentorship</span> have been
          invaluable, fostering a <span className="font-bold">collaborative environment</span> where everyone feels <span className="font-bold">empowered to succeed.</span>
        </p>
        <div className="flex flex-col  items-center gap-[10px]">
          <Link to={'https://www.linkedin.com/in/gnnandan/'}><img src={nandanImg} alt="" className="  w-[40px] rounded-xl" /></Link>
          <div className="flex flex-col  items-center">
            <h2 className="Mentor text-lg text-[#FF00FF]">Nandan G N</h2>
            <span className="text-sm w-[230px]">Co-Founder at <Link to={'https://curiousecosystem.org/'} className="text-[#3098eb] underline">Curious Ecosystem <br /> </Link>Co-Founder at <Link to={'https://inspirationapp.org/'} className="text-[#3098eb] underline">Inspiration App</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
