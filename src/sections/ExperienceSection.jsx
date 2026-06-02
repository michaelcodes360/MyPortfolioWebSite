import Experiences from "@/components/Experiences";
import Title from "@/components/Title";
import React from "react";

const ExperienceSection = () => {
  return (
    <>
      <section
        id="experience"
        className="section:nth-of-type(2) flex min-h-screen items-center justify-center bg-base-200 px-4 py-20 sm:px-6 lg:h-screen lg:py-0"
      >
        <div className="w-full max-w-4xl">
          <Title title="Experiences" className="text-center" />
          <Experiences />
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;
