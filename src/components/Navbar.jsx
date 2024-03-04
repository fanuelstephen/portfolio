import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdPersonAddAlt } from "react-icons/md";

function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 bg-[#0a192f]">
      <div>
        <h1 className="text-gray-700">LOGO</h1>
      </div>
      {/* menud */}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skill</li>
        <li>Work</li>
        <li>Contacts</li>
      </ul>

      {/* humberger */}
      <div onClick={handleNav} className="md:hidden z-10 text-3xl">
        {nav ? <HiOutlineMenuAlt3 /> : <RxCross2 />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192f] "
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skill</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contacts</li>
      </ul>

      {/* social icon */}
      <div className=" hidden  lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center bg-blue-500 ml-[-100px] md:hover:ml-[-10px] duration-300">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center bg-[#333] ml-[-100px] md:hover:ml-[-10px] duration-300">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center bg-[#6fc2b0] ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Mail <MdOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center bg-[#565f69] ml-[-100px] md:hover:ml-[-10px] duration-300">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <MdPersonAddAlt size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
