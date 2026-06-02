import React from "react";
import CardEffect from "../components/CardEffect";
import Skills from "../components/Skills";

const SkillSection = () => {
  return (
    <>
      <section id="skills" className="section:nth-of-type(2) flex min-h-screen items-center justify-center bg-base-200 px-4 py-20 sm:px-6 lg:h-screen lg:py-0">
        {/* <nav>
          <h1 className="text-5xl font-bold text-center mt-0">My Skills</h1>
        </nav> */}
       <Skills />
      </section>
    </>
  );
};

export default SkillSection;
