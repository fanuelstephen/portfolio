import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-black">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Fanuel Stephen
        </h1>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm the Front End Developer
        </h1>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I design and build engaging websites and web applications using HTML,
          CSS, and JavaScript to ensure seamless user experiences across
          different devices and browsers.
        </p>
        <div>
          <Link to="work" activeClass="active" smooth={true} duration={500}>
            <button className="flex items-center group text-white border-2 px-6 py-3 hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRightLong className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
