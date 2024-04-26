// import React from "react";
// import { Link } from 'react-router-dom';
// import graphImg from '../assets/myprogress.png'
// function Work() {
//   return (
//     <div className=" px-[10px] mt-[30px]">
//       <h2 className="mb-[15px]">What have I done so far ?</h2>
//       <p className="">
//         I've crafted 10+ mini projects in <span className="text-[rgb(188,63,255)]">HTML, CSS</span>, and <span className="text-[rgb(188,63,255)]">JavaScript</span>, refining my
//         frontend skills. Additionally, I've led development on two <span className="text-[rgb(188,63,255)]">React</span> projects—a chat app and a resume builder. Resume builder is done as part of my contributions to
//         the <Link to='https://inspirationapp.org/' className="text-[#319bef] underline">Inspiration App</Link>, where I've been <span className="text-[rgb(188,63,255)]">actively involved</span> since <span className="text-[rgb(188,63,255)]">January</span>. My
//         <span className="text-[rgb(188,63,255)]"> portfolio</span> showcases the culmination of these experiences, demonstrating
//         my expertise in frontend development.
//       </p>
//      <img src={graphImg} alt="" />
//       <p>"In our team, I proudly served as both the most active contributor and the lead. The contribution graph above showcases my dedication and commitment to our projects, illustrating the consistent effort I've invested over time. As the lead, I not only contributed actively but also guided and supported team members, ensuring cohesion, efficiency, and the successful realization of our collective goals. My role encompasses not only technical contributions but also leadership, mentorship, and fostering a collaborative and productive team environment</p>
//     </div>
//   );
// }

// export default Work;

import React from "react";
import { Link } from "react-router-dom";
import graphImg from "../assets/myprogress.png";

function Work() {
  return (
    <div
      className="px-[10px] mt-[30px] flex flex-col items-center text-[rgb(181,187,198)] md:px-[50px] lg:px-[70px]"
      id="work"
    >
      <div>
      <h2 className="mb-[15px] work-exp text-white font-semibold md:text-[25px]">
        Work Experience
      </h2>
      <p className="leading-[25px] md:leading-[35px]">
        I've crafted 10+ mini projects in{" "}
        <span className="text-white font-semibold">HTML, CSS</span>, and{" "}
        <span className="text-white font-semibold">JavaScript</span>, refining
        my frontend skills. Additionally, I've led development on two{" "}
        <span className="text-white font-semibold">React</span> projects—a{" "}
        <span className="text-white font-semibold">chat app</span> and a{" "}
        <span className="text-white font-semibold">resume builder</span>.
      </p>
     </div>

     <div className="lg:flex lg:flex-row lg:items-center lg:gap-[20px]">
      <div>
      <h2 className="mt-[30px] mb-[15px] contributions text-white font-semibold md:text-[25px]">
        Contributions
      </h2>
      <p className="leading-[25px] md:leading-[35px]">
        I've been actively involved in{" "}
        <span className="text-white font-semibold">contributing</span> to the{" "}
        <Link
          to="https://inspirationapp.org/"
          className="text-[#319bef] underline"
        >
          Inspiration App
        </Link>{" "}
        since <span className="text-white font-semibold">January</span>. My
        contributions include{" "}
        <span className="text-white font-semibold">leading</span> the
        development of the{" "}
        <span className="text-white font-semibold">resume builder</span>{" "}
        feature, which has become an integral part of the platform. The{" "}
        <span className="text-white font-semibold">contribution graph</span>{" "}
        below showcases my{" "}
        <span className="text-white font-semibold">dedication</span> and{" "}
        <span className="text-white font-semibold">commitment</span> to our
        projects.
      </p>
      </div>
      <img
        src={graphImg}
        alt="Contribution Graph"
        className="mt-[20px] mb-[20px] lg:mt-0 lg:mb-0 lg:w-[450px] xl:pt-[70px]"
      />
      </div>
      <p className="leading-[25px] md:leading-[35px]">
        As the <span className="text-white font-semibold">lead</span> , my role
        encompassed not only{" "}
        <span className="text-white font-semibold">
          technical contributions
        </span>{" "}
        but also{" "}
        <span className="text-white font-semibold">
          leadership, mentorship, <span className="text-white">and</span>{" "}
          fostering a collaborative <span className="text-white">and</span>{" "}
          productive team environment
        </span>
        .
      </p>
    </div>
  );
}

export default Work;
