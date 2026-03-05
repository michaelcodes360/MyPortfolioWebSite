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
        className="section:nth-of-type(1) flex items-center justify-center h-screen mt-0"
      >
        <div className="hero bg-base-300 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={Profile}
              className="max-w-sm shadow-2xl rounded-element w-full h-96 object-cover mr-16"
            />
            <div>
              <BlurFadeText greetings={data.greetings} name={data.name} />
              <div className="divider h-0.5 w-80 opacity-60"></div>
              <span>
                <BlurFade delay={0.2 * 5}>
                  <p className="text-xl mt-3 mb-5">{data.shortBio}</p>
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
            </div>
          </div>
            <span className="animate-bounce absolute bottom-10 sm:bottom-20">
          <BlurFade delay={0.2 * 12}>
              <CircleArrowDown
                style={{ cursor: "pointer" }}
                size={60}
                strokeWidth={0.75}
                onClick={scrollBehavior}
              />
          </BlurFade>
            </span>
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
