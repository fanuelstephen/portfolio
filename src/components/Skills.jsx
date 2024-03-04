import React from "react";
import CSS from "../assets/css.png";
import HTML from "../assets/html.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Github from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are the technologies i've work with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-5" src={HTML} alt="HTML icons  " />
            <p className="py-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-5" src={CSS} alt="HTML icons  " />
            <p className="py-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-5"
              src={Javascript}
              alt="HTML icons  "
            />
            <p className="py-4">JavaScript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-5"
              src={ReactImg}
              alt="HTML icons  "
            />
            <p className="py-4">React</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-5"
              src={Tailwind}
              alt="HTML icons  "
            />
            <p className="py-4">Tailwind</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-5"
              src={Github}
              alt="HTML icons  "
            />
            <p className="py-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
