import { Download } from "lucide-react";
import React from "react";
import { FaArrowDown, FaHandsHelping } from "react-icons/fa";
import { GiSkills, GiTeamIdea } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineConnectWithoutContact } from "react-icons/md";


const Navbar = () => {

  const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/Akoto_Michael_Appianti_CV.pdf";
  link.download = "/Akoto_Michael_Appianti_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <nav
      className="navbar bg-base-300 bg-opacity-90 sticky top-0 z-50 bg-card/80 backdrop-blur-xl"
      style={{ marginBottom: "-50px" }}
    >
        <div className="navbar-start w-auto flex-none">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href="#home"><GoHome color="cyan" size={13} />Home / About me</a></li>
        <li><a href="#skills"><GiSkills color="cyan" size={13} />My Skills</a></li>
        <li><a href="#projects"><GrProjects color="cyan" size={13} />Projects</a></li>
        <li><a href="#services"><FaHandsHelping color="cyan" size={13} />My Services</a></li>
        <li><a href="#experience"><GiTeamIdea color="cyan" size={13} />Experience</a></li>
        <li><a href="#testimonials"><IoIosPeople color="cyan" size={13} />Testimonials</a></li>
        <li><a href="#contacts"><MdOutlineConnectWithoutContact color="cyan" size={13} />Contact Me</a></li>
        <li><a href="#footer"><FaArrowDown color="cyan" size={13} />Footerpage</a></li>
      </ul>
    </div>
  </div>
      <div className="navbar-end flex-1 mr-0 sm:mr-4">
        <button className="btn btn-sm max-w-[calc(100vw-4.75rem)] rounded-full bg-blue-700 px-3 hover:bg-blue-500 btnEffect sm:btn-md sm:px-9" onClick={handleDownload}>
          <Download className="shrink-0 sm:mr-1" size={17} />
          <span className="truncate">Downlaod CV</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
