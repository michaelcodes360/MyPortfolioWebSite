import React from "react";
import Title from "../components/Title";

const ServicesSection = () => {
  return (
    <>
      <section className="section:nth-of-type(2) flex items-center justify-center h-screen bg-base-200">
        {/* <h1 className="text-5xl font-bold text-center textShadow">Services</h1> */}
        <Title title="Services" />
      </section>
    </>
  );
};

export default ServicesSection;
