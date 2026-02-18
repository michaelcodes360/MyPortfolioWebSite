import React from "react";
import TextRotate from "../components/TextRotate";
import Profile from "../assets/Images/myprofilepic.jpg";
import { CircleArrowDown } from "lucide-react";
import Navbar from "../components/Navbar";
// import HomeCard from "../components/HomeCard";
// import GradientText from "../components/GradientText";

const styles = {
  background: "linear-gradient(45deg, #2196F3 0%, #1E88E5 100%)",
  backgroundSize: "200% 200%",
  animation: "background 6s ease infinite",
  height: "100%",
  width:" 100%"
};


const HeroSection = ({ about, name = "Akoto Michael" }) => {
  return (
    <>
        <Navbar/>
      <section style={{backgroundAttachment:"fixed"}} className="section:nth-of-type(1) flex items-center justify-center h-screen mt-0">
        <div  className="hero bg-base-300 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div>
                <img
                src={Profile}
                className="max-w-sm shadow-2xl imageShape w-96 h-96"
              />
            </div>

            <div>
              <h1 className="text-5xl font-bold textShadow"> I'm {name}</h1>
              <p className="py-6 text-5xl">
                a{""}
                <TextRotate />
              </p>
              <p className="text-xl">{about}</p>
            </div>
          </div>
          <span className="animate-bounce absolute bottom-10 sm:bottom-20">
           <CircleArrowDown
                style={{ cursor: "pointer" }}
                size={60}
                strokeWidth={0.75}
                onClick={() => {
                  document
                    .querySelector("section:nth-of-type(2)")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              />
          </span>
        </div>
        {/* <HomeCard /> */}
      </section>
    </>
  );
};

export default HeroSection;
