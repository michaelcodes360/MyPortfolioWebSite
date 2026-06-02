import React from "react";
import Title from "../components/Title";
import Services from "@/components/Services";
import { BlurFade } from "@/components/ui/blur-fade";

const ServicesSection = () => {
  return (
    <>
      <section id="services" className="section:nth-of-type(2) min-h-screen px-4 py-20 sm:px-6 lg:h-screen lg:px-0 lg:py-0">
        {/* <h1 className="text-5xl font-bold text-center textShadow">Services</h1> */}
        <div className="flex-row items-center justify-center">
          <BlurFade delay={0.25} inView={true}>
            <Title
              title="My Services"
              className="text-center textShadow lg:mt-24"
            />
          </BlurFade>
        <div className="flex flex-col items-center justify-center mt-10 sm:mt-14 lg:mt-20">
          <Services />
        </div>
        </div>

      </section>
    </>
  );
};

export default ServicesSection;
