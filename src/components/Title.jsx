import React from "react";
import { BlurFade } from "./ui/blur-fade";

const Title = ({ title, className }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <BlurFade delay={0.25} inView={true}>
          <h1
            className={`text-5xl font-bold text-center textShadow ${className}`}
          >
            {title}
          </h1>
        </BlurFade>

        <div className="w-32 h-1 bg-indigo-500 mb-6 heroText rounded-lg"></div>
      </div>
    </>
  );
};

export default Title;
