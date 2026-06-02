import React from "react";
import { BlurFade } from "./ui/blur-fade";
import { ReactTyped } from "react-typed";

const BlurFadeText = ({ name, greetings }) => {
  return (
    <>
      <BlurFade delay={0.25} inView>
        <h2 className="break-words text-3xl font-bold tracking-normal sm:text-5xl xl:text-6xl/none">
          Hello there 👋
        </h2>
      </BlurFade>
      <BlurFade delay={0.2 * 2} inView className="mt-2">
        <span className="text-lg tracking-normal text-pretty sm:text-3xl xl:text-4xl/none">
          {greetings}
        </span>
        <p className="break-words text-3xl py-3 font-bold textShadow sm:text-5xl">
          I'm {name}
        </p>
        <p className="break-words text-3xl leading-tight sm:text-5xl">
          a{""}
          {/* <TextRotate /> */}
          <ReactTyped
            className="ml-2 inline-block text-blue-700 sm:text-5xl"
            strings={[
              "Web Developer",
              "Data Analyst",
              "UI/UX Designer",
              "Freelancer",
              "Tech Enthusiast",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </p>
      </BlurFade>
    </>
  );
};

export default BlurFadeText;
