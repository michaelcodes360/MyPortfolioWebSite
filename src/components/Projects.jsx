import React from "react";
import Title from "./Title";
import { BlurFade } from "./ui/blur-fade";
import { GiTeamIdea } from "react-icons/gi";
import { FcBusinessman, FcConferenceCall } from "react-icons/fc";


const Projects = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row md:gap-10">
        <BlurFade delay={0.25} inView>
          <Title title="Projects" className="lg:mr-12" />
        </BlurFade>
        <div className="flex w-full max-w-sm flex-col items-center gap-6 sm:max-w-xl sm:flex-row sm:items-start sm:justify-center md:w-auto md:flex-col">
          <BlurFade delay={0.25 * 4} inView>
            <h1 className="font-bold flex justify-center items-center gap-3 textShadow md:justify-start">PERSONAL/OUTSTANDING</h1>
          <div className="mx-auto w-32 h-0.5 bg-indigo-400 mb-6 heroText rounded-lg md:mx-0"></div>
          <ul className="steps steps-vertical">
            <li data-content="" className="step step-primary">Pers Ticketing</li>
            <li data-content="" className="step step-primary">Gigs Hub</li>
            <li data-content="" className="step step-primary">Civic Track App</li>
            <li data-content="" className="step step-primary">My Portfolio</li>
          </ul>
          </BlurFade>
          
           <BlurFade delay={0.25 * 6} inView>
             <h1 className="font-bold mt-3 flex flex-row items-center justify-center gap-3 textShadow sm:mt-0 md:mt-4 md:justify-start">TEAM</h1>
            <div className="mx-auto w-7 h-0.5 bg-pink-400 mb-6 heroText rounded-lg md:mx-0"></div>
          <ul className="steps steps-vertical">
            <li data-content="" className="step step-secondary">Personax ESS</li>
            <li data-content="" className="step step-secondary">Personax HR</li>
            <li data-content="" className="step step-secondary">Personax Central</li>
            <li data-content="" className="step step-secondary">Personax Payroll</li>
            <li data-content="" className="step step-secondary">PMS-Project Manager</li>
            <li data-content="" className="step step-secondary">ERMDS-IM</li>
          </ul>
           </BlurFade>
        </div>
      </div>
    </>
  );
};

export default Projects;
