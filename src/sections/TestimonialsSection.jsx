import Testimonials from "@/components/Testimonials";
import Title from "@/components/Title";
import React from "react";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section:nth-of-type(2) flex items-center flex-8 justify-center h-screen bg-base-300">
      <div>
           {/* <Title title="Testimonials" className="text-center mt-14" /> */}
      <Testimonials />
      </div>
   
    </section>
  );
};

export default TestimonialsSection;
