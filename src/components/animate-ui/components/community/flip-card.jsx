/* eslint-disable @next/next/no-img-element */
// import { Button } from '@/components/ui/button';
import { easeOut, motion } from "motion/react";
import * as React from "react";
import { Twitter } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { Button } from "../buttons/button";

export function FlipCard({ data }) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [show, setshow] = React.useState(false);
  const [isWebDevForm, setWebDevFormForm] = React.useState(false);
  const [isMobileForm, setMobileForm] = React.useState(false);
  const [isUiUx, setUiUxForm] = React.useState(false);

  const handleShowForm = (formType) => {
    setshow(true);
    switch (formType) {
      case isWebDevForm :
        setWebDevFormForm(true);
        setMobileForm(false);
        setUiUxForm(false);
        break;
      case isMobileForm :
        setWebDevFormForm(false);
        setMobileForm(true);
        setUiUxForm(false);
        break;
      case isUiUx :
        setWebDevFormForm(false);
        setMobileForm(false);
        setUiUxForm(true);
        break;
      default:
        break;
    }
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
    <div
      className="mt-2 relative w-40 h-60 md:w-60 md:h-80 perspective-1000 cursor-pointer mx-auto"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* FRONT: Profile */}
      <motion.div
        className="absolute inset-0 backface-hidden rounded-md border-2 border-foreground/20 px-4 py-6 flex flex-col items-center justify-center bg-linear-to-br from-muted via-background to-muted text-center"
        animate={isFlipped ? "back" : "front"}
        variants={cardVariants}
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src={data.image}
          alt={data.name}
          className="size-32 md:size-24 rounded-full object-cover mb-4 border-0"
        />
        <h2 className="text-lg font-bold text-foreground">{data.name}</h2>
        <p className="text-sm text-muted-foreground">@{data.username}</p>
      </motion.div>
      {/* BACK: Bio + Stats + Socials */}
      <motion.div
        className="absolute inset-0 backface-hidden rounded-md border-2 border-foreground/20 px-4 py-6 flex flex-col justify-between items-center gap-y-4 bg-linear-to-tr from-muted via-background to-muted "
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
            <p className="text-xs text-muted-foreground">Following\</p>
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
              <BsTwitterX size={20} />
            </a>
          )}
        </div>

        {/* {show && (
          <>
            {!isWebDevForm && (
              <Button onClick={() => handleShowForm("webdev")}>Web Dev</Button>
            )}
            {!isMobileForm && (
              <Button onClick={() => handleShowForm("mobile")}>Mobile</Button>
            )}
            {!isUiUx && (
              <Button onClick={() => handleShowForm("uiux")}>UI/UX</Button>
            )}
          </>
        )} */}
        <Button onClick={handleShowForm}>Book Me</Button>
      </motion.div>
    </div>
  );
}
