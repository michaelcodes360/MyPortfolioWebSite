import React from "react";
import TextRotate from "../components/TextRotate";
import Profile from "../assets/Images/myprofilepic.jpg";
import { CircleArrowDown } from "lucide-react";
import Navbar from "../components/Navbar";
import BlurFadeText from "@/components/BlurFadeText";
import { BlurFade } from "@/components/ui/blur-fade";
import { StripedPattern } from "@/components/magicui/striped-pattern";
// import { LightRays } from "@/components/ui/light-rays";
// import GradientText from "../components/GradientText";

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
              {/* <div className="divider divider-horizontal divider-primary"></div> */}
              {/* <h1 className="text-5xl font-bold textShadow">Hello there!👋</h1> */}
              <BlurFadeText
                greetings={"Nice to meet you"}
                name="Akoto Michael"
              />
              {/* <p className="text-5xl py-3 font-bold textShadow">I'm {name}</p> */}
              {/* <hr className="w-96 mt-3 opacity-10" /> */}
               <div className="divider h-0.5 w-80 opacity-60"></div>
              <BlurFade delay={0.2 * 5}>
                <p className="text-xl mt-3">
                  I build functional, visually appealing websites with excellent
                  user experience, from portfolios to e-commerce platforms, and
                  I am ready to help bring your ideas to life. Let's create
                  something amazing together!
                </p>
              </BlurFade>
            </div>
          </div>
          <span className="animate-bounce absolute bottom-10 sm:bottom-20">
            <CircleArrowDown
              style={{ cursor: "pointer" }}
              size={60}
              strokeWidth={0.75}
              onClick={scrollBehavior}
            />
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
