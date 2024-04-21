import React from "react";
import countdownImg from "../assets/Screenshot 2024-04-20 223132.png";
import musicPlayerImg from "../assets/Screenshot 2024-04-20 222513.png";
import stopWatchImg from "../assets/Screenshot 2024-04-20 222147.png";
import calculatorImg from "../assets/Screenshot 2024-04-20 222046.png";
import formValidationImg from "../assets/Screenshot 2024-04-20 221948.png";
import wordCounterImg from "../assets/Screenshot 2024-04-20 221752.png";
import memoryGameImg from "../assets/Screenshot 2024-04-20 221632.png";
import typingGame from "../assets/Screenshot 2024-04-20 212740.png";
import toDoListImg from "../assets/Screenshot 2024-04-20 213139.png";
import expenseTrackerImg from "../assets/expense.png";
import colorGuessingImg from "../assets/colorGuessing-2.png";
import htmlIcon from "../assets/html-5.png";
import cssIcon from "../assets/css-3.png";
import jsIcon from "../assets/js.png";
import { Link } from "react-router-dom";
function JsProjects({ setJsClick }) {
  return (
    <div className=" mt-[30px] flex flex-col items-center relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="#ae3eff"
        width={"20px"}
        className="absolute top-[-20px] left-[40px]  cursor-pointer"
        onClick={()=>setJsClick(false)}
      >
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
      </svg>
      <h1 className="project-name   text-center mb-[10px]">All made with</h1>
      <div className="flex gap-[20px] mb-[15px]">
        <Link to="https://developer.mozilla.org/en-US/docs/Web/HTML">
          <img
            src={htmlIcon}
            alt="html"
            width={"30px"}
            className="cursor-pointer"
          />
        </Link>
        <Link to="https://developer.mozilla.org/en-US/docs/Web/CSS">
          <img
            src={cssIcon}
            alt="css"
            width={"30px"}
            className="cursor-pointer"
          />
        </Link>
        <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          <img
            src={jsIcon}
            alt="js"
            width={"30px"}
            className="cursor-pointer"
          />
        </Link>
      </div>
      <div className="w-[80%]  js-project  ">
        <h1 className="project-name text-[rgb(188,63,255)] text-xl text-center mb-[10px]">
          Expense Tracker
        </h1>
        <img
          src={expenseTrackerImg}
          alt="expense-tracker"
          className="w-[100%]  rounded-lg "
        />
        <p className="text-ellipsis text-ellipsis overflow-hidden mt-[20px]">
          Dynamic webpage with Tailwind CSS utilizes{" "}
          <span className="font-bold">local storage</span> for finance tracking.
          <span className="font-bold">
            {" "}
            Event handling, DOM manipulation, and error handling{" "}
          </span>{" "}
          ensure interactive user experience
        </p>
      </div>
      <div className="buttons flex gap-[20px] mb-[25px]">
        <Link to="https://github.com/UshaRani-coder/JS_Expense-tracker_UR">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 glow">
            Source Code
          </button>
        </Link>
        <Link to="https://js-expense-tracker-ur.vercel.app/">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 glow">
            Live Link
          </button>
        </Link>
      </div>
      <div className="w-[80%]  js-project  ">
        <h1 className="project-name text-[rgb(188,63,255)] text-xl text-center mb-[10px]">
          Music Player
        </h1>
        <img
          src={musicPlayerImg}
          alt="music-player"
          className="w-[100%]  rounded-lg "
        />
        <p className="text-ellipsis text-ellipsis overflow-hidden mt-[20px]">
          Dynamic music player with{" "}
          <span className="font-bold">
            play, pause, next, and previous controls. Displays song details,
            slider for seeking, and volume adjustment
          </span>
        </p>
      </div>
      <div className="buttons flex gap-[20px] mb-[25px]">
        <Link to="https://github.com/UshaRani-coder/JS_Music-Player_UR">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 glow">
            Source Code
          </button>
        </Link>
        <Link to="https://js-music-player-ur.vercel.app/">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 glow">
            Live Link
          </button>
        </Link>
      </div>
      <div className="w-[80%]  js-project  ">
        <h1 className="project-name text-[rgb(188,63,255)] text-xl text-center mb-[10px]">
          Typing Speed Game
        </h1>
        <img
          src={typingGame}
          alt="typing-game"
          className="w-[100%]  rounded-lg "
        />
        <p className="text-ellipsis text-ellipsis overflow-hidden mt-[20px]">
          The project involves a typing speed test application with{" "}
          <span className="font-bold">
            dynamic paragraph rendering. It tracks words per minute (WPM),
            characters per minute (CPM), and accuracy
          </span>
        </p>
      </div>
      <div className="buttons flex gap-[20px] mb-[25px]">
        <Link to="https://github.com/UshaRani-coder/JS_Typing-Game_UR">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 glow">
            Source Code
          </button>
        </Link>
        <Link to="https://js-typing-game-ur.vercel.app/">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 glow">
            Live Link
          </button>
        </Link>
      </div>
      <div className="w-[80%]  js-project  ">
        <h1 className="project-name text-[rgb(188,63,255)] text-xl text-center mb-[10px]">
          Form Validation
        </h1>
        <img
          src={formValidationImg}
          alt="form-validation"
          className="w-[100%]  rounded-lg "
        />
        <p className="text-ellipsis text-ellipsis overflow-hidden mt-[20px]">
          It{" "}
          <span className="font-bold">
            checks for blank inputs, valid email format, password complexity,
            and password match confirmation
          </span>
          . Upon <span className="font-bold">successful validation</span>, it
          displays a <span className="font-bold">confirmation message</span>.The{" "}
          <span className="font-bold">regex</span> pattern is applied to
          validate the password's format and provide appropriate feedback to the
          user.
        </p>
      </div>
      <div className="buttons flex gap-[20px] mb-[25px]">
        <Link to="https://github.com/UshaRani-coder/JS_Form-Validation_UR">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 glow">
            Source Code
          </button>
        </Link>
        <Link to="https://js-form-validation-ur.vercel.app/">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 glow">
            Live Link
          </button>
        </Link>
      </div>
      <div className="w-[80%]  js-project  ">
        <h1 className="project-name text-[rgb(188,63,255)] text-xl text-center mb-[10px]">
          Calculator
        </h1>
        <img
          src={calculatorImg}
          alt="calculator"
          className="w-[100%]  rounded-lg "
        />
        <p className="text-ellipsis text-ellipsis overflow-hidden mt-[20px]">
          A calculator with{" "}
          <span className="font-bold">input, delete, reset, and result</span>{" "}
          functionality using JavaScript{" "}
          <span className="font-bold">event handling & error handling</span>.
        </p>
      </div>
      <div className="buttons flex gap-[20px] mb-[25px]">
        <Link to="https://github.com/UshaRani-coder/JS_Calculator_UR">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 glow">
            Source Code
          </button>
        </Link>
        <Link to="https://js-calculator-ur.vercel.app/">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 glow">
            Live Link
          </button>
        </Link>
      </div>
      <div className="w-[80%]  js-project  ">
        <h1 className="project-name text-[rgb(188,63,255)] text-xl text-center mb-[10px]">
          Memory Game
        </h1>
        <img
          src={memoryGameImg}
          alt="Memory Game"
          className="w-[100%]  rounded-lg "
        />
        <p className="text-ellipsis text-ellipsis overflow-hidden mt-[20px]">
          A memory game with{" "}
          <span className="font-bold">
            flipping cards, matching images, and congratulatory alerts
          </span>{" "}
          using JavaScript <span className="font-bold">event handling.</span>
        </p>
      </div>
      <div className="buttons flex gap-[20px] mb-[25px]">
        <Link to="https://github.com/UshaRani-coder/JS_Memory-card-game_UR">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 glow">
            Source Code
          </button>
        </Link>
        <Link to="https://js-memory-card-game-ur.vercel.app/">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 glow">
            Live Link
          </button>
        </Link>
      </div>
      <div className="w-[80%]  js-project  ">
        <h1 className="project-name text-[rgb(188,63,255)] text-xl text-center mb-[10px]">
          Stop Watch
        </h1>
        <img
          src={stopWatchImg}
          alt="stop-watch"
          className="w-[100%]  rounded-lg "
        />
        <p className="text-ellipsis text-ellipsis overflow-hidden mt-[20px]">
          A stopwatch with hours, minutes, seconds, and milliseconds displayed
          in 00 format. Functions manage{" "}
          <span className="font-bold">start, stop, and reset operations,</span>{" "}
          updating the display accordingly.
        </p>
      </div>
      <div className="buttons flex gap-[20px] mb-[25px]">
        <Link to="https://github.com/UshaRani-coder/JS_Stopwatch_UR">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 glow">
            Source Code
          </button>
        </Link>
        <Link to="https://js-stopwatch-ur.vercel.app/">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 glow">
            Live Link
          </button>
        </Link>
      </div>
      <div className="w-[80%]  js-project  ">
        <h1 className="project-name text-[rgb(188,63,255)] text-xl text-center mb-[10px]">
          To-Do List
        </h1>
        <img src={toDoListImg} alt="to-do" className="w-[100%]  rounded-lg " />
        <p className="text-ellipsis text-ellipsis overflow-hidden mt-[20px]">
          This project lets users to{" "}
          <span className="font-bold">add, edit, and delete tasks</span>. Tasks
          are stored in <span className="font-bold">local storage,</span>{" "}
          ensuring{" "}
          <span className="font-bold">persistence across page loads.</span>
        </p>
      </div>
      <div className="buttons flex gap-[20px] mb-[25px]">
        <Link to="https://github.com/UshaRani-coder/JS_To-do-App_UR">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 glow">
            Source Code
          </button>
        </Link>
        <Link to="https://js-to-do-app-ur.vercel.app/">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 glow">
            Live Link
          </button>
        </Link>
      </div>
      <div className="w-[80%]  js-project  ">
        <h1 className="project-name text-[rgb(188,63,255)] text-xl text-center mb-[10px]">
          Color Guessing Game
        </h1>
        <img
          src={colorGuessingImg}
          alt="color-guessingr"
          className="w-[100%]  rounded-lg "
        />
        <p className="text-ellipsis text-ellipsis overflow-hidden mt-[20px]">
          This project{" "}
          <span className="font-bold">
            generates random RGB color and displays it along with colored
            circles.
          </span>{" "}
          Users attempt to{" "}
          <span className="font-bold">
            match the displayed color by clicking on the circles
          </span>
          . If correct, a{" "}
          <span className="font-bold">success message appears;</span> otherwise,
          they're prompted to <span className="font-bold">try again.</span> A
          button allows generating a new{" "}
          <span className="font-bold">random color</span>
        </p>
      </div>
      <div className="buttons flex gap-[20px] mb-[25px]">
        <Link to="https://github.com/UshaRani-coder/JS_Color-Guessing-game-UR">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 glow">
            Source Code
          </button>
        </Link>
        <Link to="https://js-color-guessing-game-ur.vercel.app/">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 glow">
            Live Link
          </button>
        </Link>
      </div>
      <div className="w-[80%]  js-project  ">
        <h1 className="project-name text-[rgb(188,63,255)] text-xl text-center mb-[10px]">
          Birthday Countdown
        </h1>
        <img
          src={countdownImg}
          alt="countdown"
          className="w-[100%]  rounded-lg "
        />
        <p className="text-ellipsis text-ellipsis overflow-hidden mt-[20px]">
          This project{" "}
          <span className="font-bold">
            prompts the user to enter their birthdate in the 'year-month-day'
            format.
          </span>{" "}
          It then calculates the countdown to the{" "}
          <span className="font-bold">
            next birthday in days, hours, minutes, and seconds, updating the
            corresponding fields.
          </span>{" "}
          Users can{" "}
          <span className="font-bold">
            start and reset the countdown timer.
          </span>{" "}
          If the birthdate entered is{" "}
          <span className="font-bold">invalid,</span> it prompts the user to
          enter it <span className="font-bold">correctly.</span>
        </p>
      </div>
      <div className="buttons flex gap-[20px] mb-[25px]">
        <Link to="https://github.com/UshaRani-coder/JS_Countdown_UR">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 glow">
            Source Code
          </button>
        </Link>
        <Link to="https://js-countdown-ur-rouge.vercel.app/">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 glow">
            Live Link
          </button>
        </Link>
      </div>
      <div className="w-[80%]  js-project  ">
        <h1 className="project-name text-[rgb(188,63,255)] text-xl text-center mb-[10px]">
          Word Counter
        </h1>
        <img
          src={wordCounterImg}
          alt="word-count"
          className="w-[100%]  rounded-lg "
        />
        <p className="text-ellipsis text-ellipsis overflow-hidden mt-[20px]">
          The script counts the{" "}
          <span className="font-bold">
            number of words and characters entered in a textarea.
          </span>
          Finally, it <span className="font-bold">updates</span> the
          corresponding span elements with the word and character counts.
        </p>
      </div>
      <div className="buttons flex gap-[20px] mb-[25px]">
        <Link to="https://github.com/UshaRani-coder/JS_Word-Count_UR">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 glow">
            Source Code
          </button>
        </Link>
        <Link to="https://js-word-count-ur.vercel.app/">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 glow">
            Live Link
          </button>
        </Link>
      </div>
    </div>
  );
}

export default JsProjects;
