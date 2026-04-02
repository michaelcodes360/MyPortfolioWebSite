import React from "react";
import { FaBootstrap, FaCode, FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { SiDotnet, SiJavascript, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import Title from "./Title";
import { BlurFade } from "./ui/blur-fade";


const Skills = () => {
  return (
    <>
      <BlurFade delay={0.25} >
        <div className="flex gap-3">
          {/* <FaCode size={44} /> */}
          <Title title="My skill  set" className="mr-12" />
        </div>
      </BlurFade>
      <BlurFade delay={0.25 * 5} >
        <div className="flex flex-col gap-4">
          <span className="text-lg flex">
            <FaHtml5 size={30} className="mr-2" />
            HTML
          </span>
          <progress
            className="progress progress-info w-96"
            value="90"
            max="100"
          ></progress>
          <span className="text-lg flex">
            <FaCss3 size={30} className="mr-2" />
            CSS
          </span>
          <progress
            className="progress progress-accent w-96"
            value="80"
            max="100"
          ></progress>
          <span className="text-lg flex">
            <SiJavascript size={30} className="mr-2" />
            JavaScript
          </span>
          <progress
            className="progress progress-warning w-96"
            value="70"
            max="100"
          ></progress>
          <span className="text-lg flex">
            <FaBootstrap size={30} className="mr-2" />
            Boostrap
          </span>
          <progress
            className="progress progress-info w-96"
            value="90"
            max="100"
          ></progress>
          <span className="text-lg flex">
            <SiTailwindcss size={30} className="mr-2" />
            Tailwind
          </span>
          <progress
            className="progress progress-primary w-96"
            value="60"
            max="100"
          ></progress>
          <span className="text-lg flex">
            <FaReact size={30} className="mr-2" />
            Reactjs
          </span>
          <progress
            className="progress progress-error w-96"
            value="70"
            max="100"
          ></progress>
          <span className="text-lg flex">
            <RiNextjsFill size={30} className="mr-2" />
            Nextjs
          </span>
          <progress className="progress  w-96" value="50" max="100"></progress>
          <span className="text-lg flex">
            <SiDotnet size={30} className="mr-2" />
            C#
          </span>
          <progress className="progress progress-success  w-96" value="50" max="100"></progress>
        </div>
      </BlurFade>
    </>
  );
};

export default Skills;
