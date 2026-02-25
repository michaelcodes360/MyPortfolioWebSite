import React from "react";
import Title from "./Title";
import { BlurFade } from "./ui/blur-fade";
import { GiTeamIdea } from "react-icons/gi";
import { FcBusinessman, FcConferenceCall } from "react-icons/fc";


const Projects = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <BlurFade delay={0.25} inView>
          <Title title="Projects" className="mr-12" />
        </BlurFade>
        <div className="flex md:flex-col">
          <BlurFade delay={0.25 * 4} inView>
            <h1 className="font-bold flex justify-center items-center gap-3 textShadow">PERSONAL/OUTSTANDING</h1>
          <div className="w-32 h-0.5 bg-indigo-400 mb-6 heroText rounded-lg"></div>
          <ul className="steps steps-vertical">
            <li data-content="" className="step step-primary">Pers Ticketing</li>
            <li data-content="" className="step step-primary">Gigs Hub</li>
            <li data-content="" className="step step-primary">My Portfolio</li>
          </ul>
          </BlurFade>
          
           <BlurFade delay={0.25 * 6} inView>
             <h1 className="font-bold mt-4  flex flex-row items-center gap-3 textShadow">TEAM</h1>
            <div className="w-7 h-0.5 bg-pink-400 mb-6 heroText rounded-lg"></div>
          <ul className="steps steps-vertical">
            <li data-content="" className="step step-secondary">Personax ESS</li>
            <li data-content="" className="step step-secondary">Invoicing App</li>
            <li data-content="" className="step step-secondary">Invoicing App</li>
          </ul>
           </BlurFade>
        </div>
      </div>
    </>
  );
};

export default Projects;
