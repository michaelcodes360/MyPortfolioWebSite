import React from "react";
import CardEffect from "../components/CardEffect";
import Title from "@/components/Title";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { TextAnimate } from "@/components/ui/text-animate";
import { BlurFade } from "@/components/ui/blur-fade";

const ContactSection = () => {
  return (
    <>
      <section
        id="contacts"
        className="section:nth-of-type(5) flex items-center justify-center h-screen bg-base-400"
      >
        {/* <Title title="Contact me" className="text-center mt-24 textShadow" /> */}
        {/* <CardEffect
          occupation={"WEB DEVELOPER"}
          tel={"055 909 1210"}
          name={"AKOTO MICHAEL APPIANTI"}
          type={"CARD HOLDER"}
        /> */}
        <div className="flex flex-row items-center justify-center gap-8 ">
          {/* ........intro / status......... */}
          <div className="text-center mb-12 mt-32">
            <BlurFade delay={0.25} inView>
              <h2 className="text-4xl font-bold mb-4">Let’s Work Together</h2>
            </BlurFade>
            <BlurFade delay={0.2 * 3} inView>
              <p className="text-base-content/70 max-w-xl mx-auto">
                I’m currently open to frontend development and UI/UX design
                opportunities. Have a project in mind? Let’s build something
                amazing.
              </p>
            </BlurFade>
            <BlurFade delay={0.2 * 5} inView>
              <div className="mt-4">
                <span className="badge bg-emerald-900 gap-2 p-2 text-amber-50">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
                  Available for Work
                </span>
              </div>
            </BlurFade>
          </div>
          <div className="divider divider-horizontal"></div>
          {/* ......Contact here....... */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Your Details</legend>
            <form>
              <label className="label">Name</label>
              <input
                type="text"
                className="input border focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="Your full name"
              />

              <label className="label mt-2">Email</label>
              <input
                type="email"
                className="input border focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="user@example.com"
                required
              />
              <Button type="submit" className="cursor-pointer w-full mt-2">
                Send Message
              </Button>
            </form>
          </fieldset>
        </div>

        <div></div>
      </section>
    </>
  );
};

export default ContactSection;
