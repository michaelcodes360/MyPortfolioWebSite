/* eslint-disable @next/next/no-img-element */
// import { Button } from '@/components/ui/button';
import { easeOut, motion } from "motion/react";
import * as React from "react";
// import { Twitter } from "lucide-react";
import { FaGithub, FaInstagram, FaSnapchatGhost } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
// import { BsTwitterX } from "react-icons/bs";
import { Button } from "../buttons/button";
import ResponsiveModal from "@/components/ResponsiveModal";
// import BookMeModal from "@/components/BookMeModal";

export function FlipCard({ data }) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [show, setshow] = React.useState(false);
  // const [isWebDevForm, setWebDevFormForm] = React.useState(false);
  // const [isMobileForm, setMobileForm] = React.useState(false);
  // const [isUiUx, setUiUxForm] = React.useState(false);
const handleShowForm = () => {
  setshow((prev) => !prev);
    console.log(show);
    // switch (formType) {
    //   case isWebDevForm :
    //     setWebDevFormForm(true);
    //     setMobileForm(false);
    //     setUiUxForm(false);
    //     break;
    //   case isMobileForm :
    //     setWebDevFormForm(false);
    //     setMobileForm(true);
    //     setUiUxForm(false);
    //     break;
    //   case isUiUx :
    //     setWebDevFormForm(false);
    //     setMobileForm(false);
    //     setUiUxForm(true);
    //     break;
    //   default:
    //     break;
    // }
  };

  const isTouchDevice =
    typeof window !== "undefined" && "ontouchstart" in window;

  const handleClick = () => {
    if (isTouchDevice) setIsFlipped(!isFlipped);
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) setIsFlipped(false);
  };

  const cardVariants = {
    front: { rotateY: 0, transition: { duration: 0.5, ease: easeOut } },
    back: { rotateY: 180, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <>
      <div
        className="mt-2 relative h-72 w-64 max-w-[calc(100vw-2rem)] sm:h-80 sm:w-60 perspective-1000 cursor-pointer mx-auto"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* FRONT: Profile */}
        <motion.div
          className="absolute inset-0 backface-hidden rounded-md border-2 border-foreground/20 px-4 py-6 flex flex-col items-center justify-center bg-zinc-950"
          animate={isFlipped ? "back" : "front"}
          variants={cardVariants}
          style={{ transformStyle: "preserve-3d" }}
        >
          <img
            src={data.image}
            alt={data.name}
            className="size-28 sm:size-24 rounded-full object-cover mb-4 border-0"
          />
          <h2 className="text-lg font-bold text-foreground">{data.name}</h2>
          <p className="text-sm text-muted-foreground">@{data.username}</p>
        </motion.div>
        {/* BACK: Bio + Stats + Socials */}
        <motion.div
          className="absolute inset-0 backface-hidden rounded-md border-2 border-foreground/20 px-4 py-6 flex flex-col justify-between items-center gap-y-4 bg-zinc-900"
          initial={{ rotateY: 180 }}
          animate={isFlipped ? "front" : "back"}
          variants={cardVariants}
          style={{ transformStyle: "preserve-3d", rotateY: 180 }}
        >
          <p className="text-xs md:text-sm text-muted-foreground text-center">
            {data.bio}
          </p>
          <div className="px-6 flex items-center justify-between w-full">
            <div>
              <p className="text-base font-bold">{data.stats.following}</p>
              <p className="text-xs text-muted-foreground">Following</p>
            </div>
            <div>
              <p className="text-base font-bold">{data.stats.followers}</p>
              <p className="text-xs text-muted-foreground">Followers</p>
            </div>
            {data.stats.posts && (
              <div>
                <p className="text-base font-bold">{data.stats.posts}</p>
                <p className="text-xs text-muted-foreground">Posts</p>
              </div>
            )}
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-4">
            {data.socialLinks?.linkedin && (
              <a
                href={data.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
              >
                <FaLinkedinIn size={20} />
              </a>
            )}
            {data.socialLinks?.github && (
              <a
                href={data.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
              >
                <FaGithub size={20} />
              </a>
            )}
            {data.socialLinks?.twitter && (
              <a
                href={data.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
              >
                {/* <BsTwitterX /> */}
                {/* <FaSnapchatGhost size={20} /> */}
                <FaInstagram size={20} />
              </a>
            )}
          </div>

          {/* <Button onClick={handleShowForm}>Book Me</Button> */}
          {/* {show && <ResponsiveModal whenClick={handleShowForm}  />} */}
          <ResponsiveModal bookFor={"Book Here"} whenClicked={handleShowForm} />
        </motion.div>
      </div>
    </>
  );
}
