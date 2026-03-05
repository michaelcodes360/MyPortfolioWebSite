import React from "react";
import Title from "../components/Title";
import Services from "@/components/Services";
import { BlurFade } from "@/components/ui/blur-fade";

const ServicesSection = () => {
  return (
    <>
      <section id="services" className="section:nth-of-type(2) h-screen">
        {/* <h1 className="text-5xl font-bold text-center textShadow">Services</h1> */}
        <div className="flex-row items-center justify-center">
          <BlurFade delay={0.25} inView={true}>
            <Title
              title="My Services"
              className="text-center mt-24 textShadow"
            />
          </BlurFade>
        <div className=" flex flex-col items-center justify-center mt-20">
          <Services />
        </div>
        </div>

      </section>
    </>
  );
};

export default ServicesSection;
