import Testimonials from "@/components/Testimonials";
import Title from "@/components/Title";
import React from "react";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section:nth-of-type(2) flex min-h-screen items-center flex-8 justify-center bg-base-300 px-4 py-20 sm:px-6 lg:h-screen lg:py-0">
      <div className="w-full">
           {/* <Title title="Testimonials" className="text-center mt-14" /> */}
      <Testimonials />
      </div>
   
    </section>
  );
};

export default TestimonialsSection;
