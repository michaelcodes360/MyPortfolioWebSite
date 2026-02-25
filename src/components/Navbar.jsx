import { Download } from "lucide-react";
import React from "react";

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
      className="navbar bg-base-300 bg-opacity-90 sticky top-0 z-10"
      style={{ marginBottom: "-50px" }}
    >
        <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">My Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#services">My Services</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Testimonials</a></li>
        <li><a href="#contacts">Contact Me</a></li>
        <li><a href="#footer">Footerpage</a></li>
      </ul>
    </div>
  </div>
      <div className="align-middle flex justify-end w-full mr-4">
        <button className="btn bgbtn-sm px-9 py-6 rounded-full bg-blue-700 hover:bg-blue-500 btnEffect" onClick={handleDownload}>
          <Download className="mr-1" size={17} />
          Downlaod CV
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
