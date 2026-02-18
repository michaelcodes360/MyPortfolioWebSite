import React from "react";
import CardEffect from "../components/CardEffect";
import { GrInstagram, GrTwitter } from "react-icons/gr";
import { BsSnapchat, BsTelegram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { CircleArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <>

      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-14">
        <aside>
          <div className="spinner">
            <div className="spinner1 bg-black"></div>
          </div>
          <p>
            AMJ Solutions.
            <br />
            Providing reliable technology.
          </p>
        </aside>
        <nav >
          <h6 className="footer-title text-center">Socials</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <GrTwitter size={22} />
            </a>
            <a>
              <GrInstagram size={22} />
            </a>
            <a>
              <BsTelegram size={22} />
            </a>
            <a>
              <FaGithub size={22} />
            </a>
            <a>
              <BsSnapchat size={22} />
            </a>
          </div>
        </nav>
        <div>
          <span className="footer-title">Copyright</span>
          <a className="link link-hover">AMJ Solutions © 2024</a>
          Practicing the art of web development, one line of code at a time.
        </div>
        <div className="animate-bounce">
          <CircleArrowUp
          style={{ cursor: "pointer" }}
                size={60}
                strokeWidth={0.75}
                onClick={() => {
                  document
                    .querySelector("section:nth-of-type(1)")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
