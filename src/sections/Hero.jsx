import React from "react";
import TextRotate from "../components/TextRotate";
import Profile from "../assets/Images/myprofilepic.jpg";


const Hero = ({ about, name="Akoto Michael" }) => {
  return (
    <>
      <section className="flex items-center justify-center h-screen">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div>
              <img
              src={Profile}
              className="max-w-sm shadow-2xl imageShape w-96 h-96"
            />
            </div>
            
            <div>
              <h1 className="text-5xl font-bold">
                I'm {name}
              </h1>
              <p className="py-6 text-5xl">
                a{""}
                <TextRotate />
              </p>
              <p className="text-xl">
                {about}
                </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
