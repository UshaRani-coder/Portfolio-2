import React from "react";
import {Link} from 'react-router-dom'
import nandanImg from "../assets/nandan.jpg";
function Testimonials() {
  return (
    <div className="mt-[30px] flex flex-col items-center " id="testimonials">
      <h1 className="testimonials md:text-[25px] text-white font-bold">Testimonial</h1>
      <div className="testimonial w-[80%] mt-[25px] flex flex-col lg:flex-row-reverse lg:items-start">
        <p className="mb-[25px]">
          <span className="text-white font-bold">Usha</span> is an <span className="text-white font-bold">exceptional professional</span> with unparalleled <span className="text-white font-bold">R&D skills,</span> a
          supportive nature, and remarkable <span className="text-white font-bold">leadership qualities.</span> Her <span className="text-white font-bold">innovative
          approach</span> and <span className="text-white font-bold">dedication to excellence</span> have consistently propelled our <span className="text-white font-bold">team to new heights</span>. Usha's <span className="text-white font-bold">guidance</span> and <span className="text-white font-bold">mentorship</span> have been
          invaluable, fostering a <span className="text-white font-bold">collaborative environment</span> where everyone feels <span className="text-white font-bold">empowered to succeed.</span>
        </p>
        <div className="flex flex-col  items-center gap-[10px] sm:flex-row sm:items-center lg:flex-col">
          <Link to={'https://www.linkedin.com/in/gnnandan/'}><div style={{backgroundImage: `url(${nandanImg})`,backgroundPosition:'center',backgroundSize:'100%',backgroundRepeat:'no-repeat'}} className="w-[50px] lg:w-[100px] lg:h-[100px] h-[50px] rounded-full"></div></Link>
          <div className="flex flex-col  items-center sm:mt-[30px] sm:mt-[0px] lg:mt-0">
            <h2 className="Mentor text-lg text-[#FF00FF] sm:mr-[130px] lg:mr-0 lg:text-xl">Nandan G N</h2>
            <span className="text-[10px] text-center w-[230px] sm:text-start text-white lg:text-center">Co-Founder at <Link to={'https://curiousecosystem.org/'} className="text-[#319bef] underline">Curious Ecosystem <br /> </Link>Co-Founder at <Link to={'https://inspirationapp.org/'} className="text-[#319bef] underline">Inspiration App</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
