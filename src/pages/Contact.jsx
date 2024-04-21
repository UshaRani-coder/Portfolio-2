import React from "react";
import phoneImg from "../assets/call.png";
import gmailImg from "../assets/new.png";
import linkedInImg from "../assets/linkedin.png";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div className="flex flex-col items-center mt-[30px]">
      <form action="" className="contact w-[80%] flex flex-col  ">
        <h2 className="contact-heading mb-[25px]">Get in touch</h2>
        <label htmlFor="name" className="text-sm mb-[5px] block">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          className="bg-transparent  outline-0 text-[rgb(188,63,255)] border-[2px] border-white rounded-md"
        />
        <label htmlFor="email" className="text-sm mt-[20px] mb-[5px] block">
          Your Email
        </label>
        <input
          type="text"
          id="email"
          className="bg-transparent  outline-0  text-[rgb(188,63,255)] border-[2px] border-white rounded-md"
        />
        <label htmlFor="message" className="text-sm mt-[20px] block mb-[5px]">
          Your Message
        </label>
        <input
          type="text"
          id="message"
          className="bg-transparent outline-0  text-[rgb(188,63,255)] border-[2px] border-white rounded-md"
        />
        <button className=" mt-[20px] bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 glow">
          Send Message
        </button>
      </form>
      <div className="socials flex gap-[20px] my-[10px] ">
       <Link to="tel:8465842779"><img src={phoneImg} alt="" width={"20px"} className="cursor-pointer"/></Link>
        <Link to="mailto:ur66026@gmail.com">
          <img src={gmailImg} alt="Gmail" width={"20px"} className="cursor-pointer"/>
        </Link>
        <Link to="https://www.linkedin.com/in/usha-rani-207939245/"><img src={linkedInImg} alt="" width={"20px"} className="cursor-pointer"/></Link>
        <Link to="https://twitter.com/rani_ur66026"><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={"20px"}
          fill="white"
          className="cursor-pointer"
        >
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg></Link>
      </div>
    </div>
  );
}

export default Contact;
