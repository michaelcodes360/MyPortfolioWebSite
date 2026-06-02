import React from "react";
import TextRotate from "../components/TextRotate";
import Profile from "../assets/Images/myprofilepic.jpg";
import { CircleArrowDown } from "lucide-react";
import Navbar from "../components/Navbar";
import BlurFadeText from "@/components/BlurFadeText";
import { BlurFade } from "@/components/ui/blur-fade";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import AboutMeSidebar from "@/components/CustomSidebar";
import CustomSidebar from "@/components/CustomSidebar";
// import { LightRays } from "@/components/ui/light-rays";
// import GradientText from "../components/GradientText";
import data from "../mydata";

const HeroSection = () => {
  const scrollBehavior = () => {
    document
      .querySelector("section:nth-of-type(2)")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <section
        id="home"
        style={{ backgroundAttachment: "fixed" }}
        className="section:nth-of-type(1) relative flex min-h-screen items-center justify-center overflow-hidden mt-0"
      >
        <div className="hero bg-base-300 min-h-screen px-4 py-24 sm:px-6 md:px-10 lg:px-0 lg:py-0">
          <div className="hero-content w-full max-w-6xl flex-col gap-8 p-0 lg:flex-row lg:p-4">
            <img
              src={Profile}
              className="h-56 w-56 object-cover shadow-2xl rounded-element sm:h-72 sm:w-72 md:h-96 md:w-80 lg:h-96 lg:w-full lg:max-w-sm lg:mr-16"
            />
            <div className="mt-4 w-full max-w-[calc(100vw-2rem)] text-center lg:mt-36 lg:max-w-2xl lg:text-left">
              <BlurFadeText greetings={data.greetings} name={data.name} />
              <div className="divider mx-auto h-0.5 w-48 opacity-60 sm:w-64 md:w-80 lg:mx-0"></div>
              <span>
                <BlurFade delay={0.2 * 5}>
                  <p className="mt-3 mb-5 break-words text-base leading-relaxed sm:text-lg md:text-xl">
                    {data.shortBio}
                  </p>
                </BlurFade>
              </span>
              <div>
                {/* -----this to show my about me side bar----- */}
                <CustomSidebar
                  buttonName={"About Me"}
                  Dtitle={"A bit of me"}
                  Ddescription={"Get to know me Better"}
                >
                  {/* <p className="style-lyra:mb-2 style-lyra:leading-relaxed mb-4 leading-normal whitespace-pre-line">
                    {data.about}
                  </p> */}
                  {data.about.map((mybio) => (
                    <p key={mybio} className="mb-4">
                      {mybio}
                    </p>
                  ))}
                </CustomSidebar>
              </div>
              <div className="animate-bounce mt-8 flex items-center justify-center lg:mt-10">
          <BlurFade delay={0.2 * 12}>
              <CircleArrowDown
                style={{ cursor: "pointer" }}
                size={56}
                strokeWidth={0.75}
                onClick={scrollBehavior}
              />
          </BlurFade>
            </div>
            </div>
          </div>
            {/* <span className="animate-bounce absolute bottom-10 sm:bottom-20">
          <BlurFade delay={0.2 * 12}>
              <CircleArrowDown
                style={{ cursor: "pointer" }}
                size={50}
                strokeWidth={0.75}
                onClick={scrollBehavior}
              />
          </BlurFade>
            </span> */}
        </div>
        {/* <HomeCard /> */}
        {/* <LightRays length="100vh"  /> */}

        {/* <StripedPattern className="mask-[radial-gradient(100px_circle_at_left,white,transparent)]" /> */}
        <StripedPattern className="mask-[radial-gradient(200px_circle_at_right,white,transparent)]" />
        {/* <StripedPattern className="mask-[radial-gradient(350px_circle_at_center,white,transparent)]" /> */}
      </section>
    </>
  );
};

export default HeroSection;
