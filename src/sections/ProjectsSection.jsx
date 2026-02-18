import React from "react";
import Projects from "../components/Projects";

const ProjectsSection = () => {
  return (
    <>
      <section className="section:nth-of-type(2) flex items-center justify-center h-screen bg-base-300">
       <Projects />
      </section>
    </>
  );
};

export default ProjectsSection;
