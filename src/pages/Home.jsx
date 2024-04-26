// import React, { useState } from "react";
// import Navbar from "../components/Navbar.jsx";
// import Hero from "../components/Hero.jsx";
// import Work from "./Work.jsx";
// import Skills from "./Skills.jsx";
// import Projects from "./Projects.jsx";
// import Testimonial from "./Testimonials.jsx";
// import Contact from "./Contact.jsx";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// function Home(props) {
//   const [showPopup, setShowPopup] = useState(false);
//   return (
//     // <Router>
//     <div className="">
//       <Navbar {...props} />
//       <div className="flex flex-col items-center">
//        {showPopup && <div className="sticky top-[45px] z-50 flex items-center gap-[10px] success px-[20px] py-[5px] bg-green-600 font-semibold rounded-xl">
//           <p>Message sent</p>
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" width={'15px'}><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
//         </div>}
//         {/* <Routes>
//             <Route path="/" element={<Hero />} />
//             <Route path="/about" element={<Hero />} />
//             <Route path="/skills" element={<Skills />} />
//             <Route path="/work" element={<Work />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/testimonial" element={<Testimonial />} />
//             <Route path="/contact" element={<Contact setShowPopup={setShowPopup} />} />
//           </Routes> */}
//           <Hero />
//           <Skills />
//           <Work />
//           <Projects />
//           <Testimonial />
//           <Contact />
//       </div>
//     </div>
//     // </Router>
//   );
// }

// export default Home;

// Home.jsx
// import React, { useState } from "react";
// import Navbar from "../components/Navbar.jsx";
// import Hero from "../components/Hero.jsx";
// import Work from "./Work.jsx";
// import Skills from "./Skills.jsx";
// import Projects from "./Projects.jsx";
// import Testimonial from "./Testimonials.jsx";
// import Contact from "./Contact.jsx";

// function Home(props) {
//   const [showPopup, setShowPopup] = useState(false);

//   return (
//     <div className="">
//       <Navbar {...props} />
//       <div className="flex flex-col items-center">
//         {showPopup && (
//           <div className="sticky top-[45px] z-50 flex items-center gap-[10px] success px-[20px] py-[5px] bg-green-600 font-semibold rounded-xl">
//             <p>Message sent</p>
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" width={'15px'}><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
//           </div>
//         )}
//         <Hero />
//         <Skills />
//         <Work />
//         <Projects />
//         <Testimonial />
//         <Contact setShowPopup={setShowPopup} />
//       </div>
//     </div>
//   );
// }

// export default Home;

// Home.jsx
import React from "react";
import Navbar from "../components/Navbar.jsx";
import Work from "./Work.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Testimonial from "./Testimonials.jsx"; 
import Contact from "./Contact.jsx"; 
import Hero from "../components/Hero.jsx";
function Home(props) {
  return (
    <div className="relative md:text-[20px] md:tracking-wider text-[rgb(181,187,198)]">
      {/* <Navbar style={{position:'fixed',top:'0px',zIndex: "999"}} {...props}/> */}
      <Navbar {...props}/>
      <Hero />
      <Work />
      <Skills />
      <Projects />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default Home;


