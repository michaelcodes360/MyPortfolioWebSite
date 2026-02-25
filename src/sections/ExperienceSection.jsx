import Experiences from "@/components/Experiences";
import Title from "@/components/Title";
import React from "react";

const ExperienceSection = () => {
  return (
    <>
      <section
        id="experience"
        className="section:nth-of-type(2) flex items-center justify-center h-screen bg-base-200"
      >
        <div>
          <Title title="Experiences" className="text-center" />
          <Experiences />
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;
