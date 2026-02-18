import React from "react";
import CardEffect from "../components/CardEffect";

const ContactSection = () => {
  return (
    <>
      <div className="section:nth-of-type(5) flex items-center justify-center h-screen bg-base-300">
        <h1 className="text-5xl font-bold text-center textShadow mr-12">
          Contact Me
        </h1>
        <CardEffect
          occupation={"WEB DEVELOPER"}
          tel={"055 909 1210"}
          name={"AKOTO MICHAEL APPIANTI"}
          type={"CARD HOLDER"}
        />
      </div>
    </>
  );
};

export default ContactSection;
