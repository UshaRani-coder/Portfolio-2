import React, { useState } from "react";
import ReactProjects from "../components/ReactProjects.jsx";
import JsProjects from "../components/JsProjects.jsx";
import reactIcon from '../assets/atom.png';
import jsIcon from '../assets/js.png'
function Projects() {
  const [reactClick, setReactClick] = useState(false);
  const [jsClick, setJsClick] = useState(false);
  return (
    <div className="mt-[30px] flex flex-col items-center" id="projects">
      <h1 className="projects text-white font-semibold md:text-[25px]">Projects</h1>
      {reactClick === false && jsClick === false && (
        <div className="flex gap-[30px] mt-[25px] ">
          <div
            className="py-[30px] px-[25px] md:px-[70px] md:py-[70px] lg:p-[100px] bg-gradient-to-tr from-blue-500 to-pink-500 rounded-xl cursor-pointer react"
            onClick={() => setReactClick(true)}
          >
           <img src={reactIcon} alt="js" width={'60px'} />
          </div>
          <div
            className="py-[30px] px-[25px] md:px-[70px] md:py-[70px] lg:p-[100px] bg-gradient-to-tr from-blue-500 to-pink-500 rounded-xl cursor-pointer  js"
            onClick={() => setJsClick(true)}
          >
            <img src={jsIcon} alt="js" width={'60px'} />
          </div>
        </div>
      )}
      {reactClick === true && <ReactProjects setReactClick={setReactClick} />}
      {jsClick === true && <JsProjects  setJsClick={setJsClick}  />}
    </div>
  );
}

export default Projects;
