import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Work from "./Work.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Testimonial from "./Testimonials.jsx";
import Contact from "./Contact.jsx";
function Home(props) {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="">
      <Navbar {...props} />
      <div className="flex flex-col items-center">
       {showPopup && <div className="sticky top-[45px] z-50 flex items-center gap-[10px] success px-[20px] py-[5px] bg-green-600 font-semibold rounded-xl">
          <p>Message sent</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" width={'15px'}><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
        </div>}
        <Hero />
        <Skills />
        <Work />
        <Projects />
        <Testimonial />
        <Contact setShowPopup={setShowPopup} />
      </div>
    </div>
  );
}

export default Home;
