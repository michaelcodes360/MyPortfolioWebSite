import React from "react";
import Projects from "../components/Projects";
const ProjectsSection = () => {
  return (
    <>
      <section
        id="projects"
        className="section:nth-of-type(2) flex max-h-screen items-center justify-center bg-base-300 px-4 py-28 sm:px-6 lg:h-screen lg:py-0"
      >
        <Projects />
      </section>
    </>
  );
};

export default ProjectsSection;
