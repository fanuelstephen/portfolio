import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-black text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full  grid sm: grid-cols-2 gap-8 px-5">
          <div className="sm:text-right text-4xl font-bold">
            <p>I'm am Fanuel , nice to meet you. Please look around</p>
          </div>
          <div>
            <p>
              I design and build engaging websites and web applications using
              HTML, CSS, and JavaScript to ensure seamless user experiences
              across different devices and browsers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
