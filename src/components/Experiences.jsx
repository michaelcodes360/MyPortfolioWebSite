import React from "react";
import { BlurFade } from "./ui/blur-fade";

const Experiences = () => {
  return (
    <>
<BlurFade delay={0.2 * 6} inView={true}>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-auto w-full px-2 sm:px-4">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-info"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
      
            <div className="timeline-start mb-10 text-sm sm:text-base">
              <time className="font-mono italic font-extrabold">2023</time>
              <div className="text-lg font-black text-cyan-400 ease-linear">
                Pesol Systems limited
              </div>
              <p>Intern: Frontend Html, CSS, JavaScript</p>
            </div>
            <hr />
      
          </li>

          <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-warning"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        
          <div className="timeline-end text-sm sm:text-base md:mb-10">
            <time className="font-mono italic font-extrabold">2024-2025</time>
            <div className="text-lg font-black">
              <p className="text-cyan-400">Persol Sytems Limited</p>
            </div>
            <p className="sm:mb-8">
              Service Personnel: Frontend- Reactjs, Nextjs, Boostrap, Tailwind
            </p>
          </div>
          <hr />
       
        </li>
        
          <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-fuchsia-600"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 text-sm sm:text-base md:text-end">
            <time className="font-mono italic font-extrabold">2025-2026</time>
            <div className="text-lg font-black">
              <p className="text-cyan-400">Persol Systems Limited</p>
            </div>
            <p>
              Developer Trainee: Frontend- Reactjs, Nextjs, Boostrap,
              Tailwind{" "}
            </p>
          </div>
          <hr />
        </li>
        
      </ul>
        </BlurFade>
    </>
  );
};

export default Experiences;
