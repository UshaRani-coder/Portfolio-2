// import React, { useState } from "react";
// import Home from "./pages/Home.jsx";
// // import { useNavigate,useHistory } from 'react-router-dom';
// // const history = useHistory();
  
// function App() {
//   const [toggle, setToggle] = useState(false);
  
//   function handleClick() {
//     setToggle((prev) => !prev);
//     console.log("yey");
//   }
//   // function goToHome(){
//   // //   const navigate = useNavigate();
//   // // navigate('/'); 
//   // history.push('/');
//   // }
//   return (
//     <div className="bg-[#000000] text-white ">
//       {toggle ? (
//         <ul
//           className={`animate-hamburgerMenu ${
//             toggle ? "" : "hide"
//           } w-[100%] h-screen absolute top-[0px] bottom-0  z-50 bg-[#1a1a1a] flex flex-col px-[60px] py-[40px] pt-[100px] gap-y-[10px] items-center cursor-pointer`}
//         >
//           <li className="section" onClick={()=>goToHome()}>Home</li>
//           <li className="section">About</li>
//           <li className="section">Work</li>
//           <li className="section">Skills</li>
//           <li className="section">Projects</li>
//           <li className="section">Testimonials</li>
//           <li className="section">Contact</li>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={"20px"}
//             fill="white"
//             viewBox="0 0 384 512"
//             className="absolute right-[15px] top-[18px] cursor-pointer"
//             onClick={() => setToggle(false)}
//           >
//             <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
//           </svg>
//         </ul>
//       ) : (
//         <Home toggle={toggle} setToggle={setToggle} handleClick={handleClick} />
//       )}
//     </div>
//   );
// }

// export default App;


// App.js
// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
// import Home from "./pages/Home.jsx";
// import Hero from "./components/Hero.jsx";
// import Work from "./pages/Work.jsx";
// import Skills from "./pages/Skills.jsx";
// import Contact from "./pages/Contact.jsx";
// import Testimonial from "./pages/Testimonials.jsx";
// import Projects from "./pages/Projects.jsx";

// function App() {
//   const [toggle, setToggle] = useState(false);
  
//   function handleClick() {
//     setToggle((prev) => !prev);
//     console.log("yey");
//   }

//   return (
//     <Router>
//       <div className="bg-[#000000] text-white">
//         {toggle ? (
//           <ul
//             className={`animate-hamburgerMenu ${
//               toggle ? "" : "hide"
//             } w-[100%] h-screen absolute top-[0px] bottom-0  z-50 bg-[#1a1a1a] flex flex-col px-[60px] py-[40px] pt-[100px] gap-y-[10px] items-center cursor-pointer`}
//           >
//             <li className="section"><Link to="/" onClick={handleClick}>Home</Link></li>
//             <li className="section"><Link to="/about" onClick={handleClick}>About</Link></li>
//             <li className="section"><Link to="/work" onClick={handleClick}>Work</Link></li>
//             <li className="section"><Link to="/skills" onClick={handleClick}>Skills</Link></li>
//             <li className="section"><Link to="/projects" onClick={handleClick}>Projects</Link></li>
//             <li className="section"><Link to="/testimonial" onClick={handleClick}>Testimonials</Link></li>
//             <li className="section"><Link to="/contact" onClick={handleClick}>Contact</Link></li>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width={"20px"}
//               fill="white"
//               viewBox="0 0 384 512"
//               className="absolute right-[15px] top-[18px] cursor-pointer"
//               onClick={() => setToggle(false)}
//             >
//               <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
//             </svg>
//           </ul>
//         ) : (
//           <Routes>
//             <Route path="/" element={<Home toggle={toggle} setToggle={setToggle} handleClick={handleClick} />} />
//             <Route path="/about"   element={<Outlet />} />
//             <Route path="/work"   element={<Outlet />}/>
//             <Route path="/skills"   element={<Outlet />} />
//             <Route path="/projects"    element={<Outlet />}/>
//             <Route path="/testimonial"   element={<Outlet />} />
//             <Route path="/contact"   element={<Outlet />} />
//           </Routes>
//         )}
//       </div>
//     </Router>
//   );
// }

// export default App;

// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Hero from './components/Hero.jsx'
import Work from "./pages/Work.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Contact from "./pages/Contact.jsx";
import Layout from "./components/Layout.jsx";
function App() {
  const [toggle, setToggle] = useState(false);
  
  function handleClick() {
    setToggle((prev) => !prev);
    console.log("yey");
  }

  return (
    <Router>
      <div className="bg-[#000000] text-white overflow-x-hidden">
        {toggle ? (
          <ul
            className={`animate-hamburgerMenu ${
              toggle ? "" : "hide"
            } w-[100%] h-screen absolute top-[0px] bottom-0  z-50 bg-[#1a1a1a] flex flex-col px-[60px] py-[40px] pt-[100px] gap-y-[10px] items-center cursor-pointer`}
          >
            <li className="section"><Link to="/" onClick={handleClick}>Home</Link></li>
            <li className="section"><Link to="/about" onClick={handleClick}>About</Link></li>
            <li className="section"><Link to="/work" onClick={handleClick}>Work</Link></li>
            <li className="section"><Link to="/skills" onClick={handleClick}>Skills</Link></li>
            <li className="section"><Link to="/projects" onClick={handleClick}>Projects</Link></li>
            <li className="section"><Link to="/testimonials" onClick={handleClick}>Testimonials</Link></li>
            <li className="section"><Link to="/contact" onClick={handleClick}>Contact</Link></li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={"20px"}
              fill="white"
              viewBox="0 0 384 512"
              className="absolute right-[15px] top-[18px] cursor-pointer"
              onClick={() => setToggle(false)}
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </ul>
        ) : (
          
          
          <Routes>
            <Route  element={<Layout toggle={toggle} setToggle={setToggle} handleClick={handleClick}/> } >
             <Route path="/" element={<Home  toggle={toggle} setToggle={setToggle} handleClick={handleClick}/>} /> 
            <Route path="/about" element={<Hero  />} />
            <Route path="/work" element={<Work  />} />
            <Route path="/skills" element={<Skills  />} />
            <Route path="/projects" element={<Projects  />} />
            <Route path="/testimonials" element={<Testimonials  />} />
            <Route path="/contact" element={<Contact  />} />
            </Route>
          </Routes>
          
        )}
      </div>
    </Router>
  );
}

export default App;
