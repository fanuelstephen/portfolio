import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { MdPersonAddAlt } from "react-icons/md";
import { Link } from "react-scroll";
// import fanuelLogo from "../assets/fanu_logo.png";
import fanuelLogo from "../assets/fanu_logo2.png";

function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 bg-black ">
      <div>
        <h1 className="text-gray-700">
          <img src={fanuelLogo} alt="" className="w-[200px]" />
        </h1>
      </div>
      {/* menud   bg-[#0a192f]*/}

      <ul className="hidden md:flex">
        <li>
          <Link activeClass="active" to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="contact" smooth={true} duration={500}>
            Contacts
          </Link>
        </li>
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
        <li className="py-6 text-4xl">
          <Link
            onClick={handleNav}
            activeClass="active"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleNav}
            activeClass="active"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleNav}
            activeClass="active"
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleNav}
            activeClass="active"
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleNav}
            activeClass="active"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contacts
          </Link>
        </li>
      </ul>

      {/* social icon */}
      <div className=" hidden  lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center bg-blue-500 ml-[-100px] md:hover:ml-[-10px] duration-300">
            <a
              href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center bg-[#333] ml-[-100px] md:hover:ml-[-10px] duration-300">
            <a
              href="https://github.com/fanuelstephen"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center bg-[#111111] ml-[-100px] hover:ml-[-10px] duration-300 border-r-0">
            <a
              href="https://x.com/home"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Twitter <RiTwitterXFill size={30} />
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
