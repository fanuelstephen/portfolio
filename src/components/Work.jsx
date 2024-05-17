import React from "react";
import nijaWorkImg from "../assets/workImg1.png";
import startAIimage from "../assets/workImg3.png";
import travelerImg from "../assets/workImg2.png";

function Work() {
  return (
    <div name="work" className="md:h-screen w-full text-gray-300  bg-black">
      <div className="max-w-[1000px] mx-auto  p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Work
          </p>
          <p className="py-6">Check out my work</p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 duration-300">
          {/* grid container */}
          <div
            style={{ backgroundImage: `url(${nijaWorkImg})` }}
            className="shodow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto p-4 content-div"
          >
            {/* hover container */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wide">
                React Js applications
              </span>
              <div className="pt-8 text-center">
                <a href="https://nija-works.pages.dev/">
                  <button className="text-center rounded-l px-4 py-3 m-2 text-gray-700 font-bold text-lg bg-white">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/fanuelstephen/Nija-works">
                  <button className="text-center rounded-l px-4 py-3 m-2 text-gray-700 font-bold text-lg bg-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${startAIimage})` }}
            className="shodow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto p-4 content-div"
          >
            {/* hover container */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wide">
                React Js applications
              </span>
              <div className="pt-8 text-center">
                <a href="https://startai-weblfow.pages.dev/">
                  <button className="text-center rounded-l px-4 py-3 m-2 text-gray-700 font-bold text-lg bg-white">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/fanuelstephen/StartAI-weblfow">
                  <button className="text-center rounded-l px-4 py-3 m-2 text-gray-700 font-bold text-lg bg-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${travelerImg})` }}
            className="shodow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  content-div "
          >
            {/* hover container */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wide">
                React Js applications
              </span>
              <div className="pt-8 text-center">
                <a href="https://chimerical-boba-7978b5.netlify.app/">
                  <button className="text-center rounded-l px-4 py-3 m-2 text-gray-700 font-bold text-lg bg-white">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/fanuelstephen/TRAVEL">
                  <button className="text-center rounded-l px-4 py-3 m-2 text-gray-700 font-bold text-lg bg-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
