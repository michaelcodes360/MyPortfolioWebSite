import { Download } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-base-300 bg-opacity-90 sticky top-0 z-10"  style={{marginBottom:"-50px"}}>
      {/* <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>Testimonials</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </div> */}
      {/* <div className="spinner ml-2 mt-1">
            <div className="spinner1 bg-black"></div>
          </div>
          <h1 className='flex flex-row ml-10'>My portfolio</h1> */}
      <div className="align-middle flex justify-end w-full mr-4">
        <button className="btn btn-outline bgbtn-sm px-12 rounded-full bg-blue-700 hover:bg-blue-500 btnEffect"><Download className="mr-1" size={17} />Downlaod cv</button>
      </div>
    </nav>
  )
}

export default Navbar