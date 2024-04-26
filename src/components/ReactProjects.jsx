import React from "react";
import resumeBuilderImg from "../assets/Screenshot 2024-04-21 104035.png";
import chatVerseImg from "../assets/chat.png";
import tailwindIcon from "../assets/tailwindCSS.png";
import reactIcon from "../assets/atom.png";
import reduxIcon from "../assets/redux-icon.png";
import firebaseIcon from "../assets/firebase.png";
import reactRouter from "../assets/react-router.svg";
import { Link } from "react-router-dom";
function ReactProjects({ setReactClick }) {
  return (
    <div className="mt-[50px] text-[14px] md:text-[16px] flex flex-col items-center xl:flex-row xl:justify-around  relative text-[rgb(181,187,198)]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="#FF00FF"
        width={"20px"}
        className="absolute top-[-35px] left-[40px]  cursor-pointer"
        onClick={()=>setReactClick(false)}
      >
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
      </svg>
      <div className="react-project w-[80%]   md:w-[50%] xl:w-[30%]">
      <div className="  ">
        <h1 className="project-name text-[#FF00FF] text-xl text-center mb-[10px]">
          Resume Builder
        </h1>
        <img
          src={resumeBuilderImg}
          alt="resume-builder"
          className="w-[100%]  rounded-lg"
        />{" "}
        <p className="text-ellipsis text-ellipsis overflow-hidden mt-[20px]">
          Made as a team. I was responsible for the designing the{" "}
          <span className="text-white font-bold">
            layout,responsiveness,implementing Redux Toolkit , dynamic
            progressive skill-bar
          </span>
          ,Implemented{" "}
          <span className="text-white font-bold">Preview toggle functionality</span> and
          designed the <span className="text-white font-bold">preview page</span>
        </p>{" "}
        <p className="flex items-center justify-center mt-[20px] gap-[20px]">
          <Link to="https://react.dev/">
            <img
              src={reactIcon}
              alt="react"
              width={"30px"}
              className="cursor-pointer"
            />
          </Link>
          <Link to="https://redux.js.org/">
            <img
              src={reduxIcon}
              alt="redux"
              width={"30px"}
              className="cursor-pointer"
            />
          </Link>
          <Link to="https://tailwindcss.com/docs/installation">
            <img
              src={tailwindIcon}
              alt="tailwind"
              width={"30px"}
              className="cursor-pointer"
            />
          </Link>
          <Link to="https://reactrouter.com/en/main">
            <img
              src={reactRouter}
              alt="react"
              width={"30px"}
              className="cursor-pointer"
            />
          </Link>
        </p>
      </div>
      <div className="buttons flex mt-[20px]  w-[300px] lg:justify-center lg:mt-[20px] gap-[20px] mb-[25px]">
        <Link to="https://github.com/SiddheshAR/resume_builder">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 glow">
            Source Code
          </button>
        </Link>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 glow">
          Live Link
        </button>
        </div>
     </div>
      <div className="w-[80%] react-project md:w-[50%] xl:w-[30%] xl:pb-[100px]">
      <div >
        <h1 className="project-name text-[#FF00FF] text-xl text-center mb-[10px]">
          ChatVerse
        </h1>
        <img
          src={chatVerseImg}
          alt="chat-verse"
          className="w-[100%] rounded-lg"
        />
        <p className="text-ellipsis text-ellipsis overflow-hidden mt-[20px]">
          <span className="text-white font-bold text-[14px]">
            Real-time Messaging,User Authentication,User Profiles,Emoji
            Support,File Sharing,Private Chats,Message Deletion,Chat
            Deletion,Fully Responsive
          </span>
        </p>{" "}
        <p className="flex items-center justify-center mt-[20px] gap-[20px]">
          <Link to="https://react.dev/">
            <img
              src={reactIcon}
              alt="react"
              width={"30px"}
              className="cursor-pointer"
            />
          </Link>
          <Link to="https://firebase.google.com/">
            <img
              src={firebaseIcon}
              alt="tailwind"
              width={"50px"}
              className="cursor-pointer"
            />
          </Link>
          <Link to="https://reactrouter.com/en/main">
            <img
              src={reactRouter}
              alt="react"
              width={"30px"}
              className="cursor-pointer"
            />
          </Link>
        </p>
      </div>
      <div className="buttons flex mt-[20px] w-[300px] lg:justify-center lg:mt-[20px] gap-[20px] mb-[25px]">
        <Link to="https://github.com/UshaRani-coder/Chat-Application">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 glow">
            Source Code
          </button>
        </Link>
        <Link to="https://chat-application-lyyj-61jgca6mt-ur66026gmailcoms-projects.vercel.app/">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 glow">
            Live Link
          </button>
        </Link>
        </div>
        </div>
      
    </div>
  );
}

export default ReactProjects;
