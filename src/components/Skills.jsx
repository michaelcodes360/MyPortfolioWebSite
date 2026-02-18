import React from 'react'
import { FaBootstrap, FaCode, FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { SiJavascript, SiTailwindcss } from 'react-icons/si';
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from 'react-icons/ri';

const Skills = () => {
  return (
    <>
    <div>
    <h1 className='text-5xl font-bold text-center mr-12 flex'><FaCode className='mr-2' />My Skills</h1>
    </div>
    <div className='flex flex-col gap-4'>
    <span className='text-lg flex'><FaHtml5 size={30} className='mr-2' />HTML</span><progress className="progress progress-info w-96" value="90" max="100"></progress>
    <span className='text-lg flex'><FaCss3 size={30} className='mr-2' />CSS</span><progress className="progress progress-accent w-96" value="80" max="100"></progress>
    <span className='text-lg flex'><SiJavascript size={30} className='mr-2'/>JavaScript</span><progress className="progress progress-warning w-96" value="70" max="100"></progress>
    <span className='text-lg flex'><FaBootstrap size={30} className='mr-2' />Boostrap</span><progress className="progress progress-info w-96" value="90" max="100"></progress>
    <span className='text-lg flex'><SiTailwindcss size={30} className='mr-2' />Tailwind</span><progress className="progress progress-primary w-96" value="60" max="100"></progress>
    <span className='text-lg flex'><FaReact size={30} className='mr-2' />Reactjs</span><progress className="progress progress-error w-96" value="70" max="100"></progress>
    <span className='text-lg flex'><RiNextjsFill size={30} className='mr-2' />Nextjs</span><progress className="progress  w-96" value="50" max="100"></progress>
    </div>
    
    </>
  )
}

export default Skills