import React from "react";
import CardEffect from "../components/CardEffect";
import Skills from "../components/Skills";

const SkillSection = () => {
  return (
    <>
      <section className="section:nth-of-type(2) flex items-center justify-center h-screen bg-base-200">
        {/* <nav>
          <h1 className="text-5xl font-bold text-center mt-0">My Skills</h1>
        </nav> */}
       <Skills />
      </section>
    </>
  );
};

export default SkillSection;
