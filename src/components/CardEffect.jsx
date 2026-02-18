import { Github, Instagram, Mail, Twitter } from "lucide-react";

const CardEffect = () => {
  return (
    <>
      <a href="#" className="hover-3d my-12 mx-2 cursor-pointer">
        {/* content */}
        <div className="card w-28 bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
          <div className="card-body">
            <div className="flex justify-between mb-10">
              <div className="font-bold">WEB DEVELOPER</div>
              <div className="text-5xl opacity-10">❁</div>
            </div>
            <div className="text-lg mb-4 opacity-40">055 909 1210</div>
            <div className="flex justify-between">
              <div>
                <div className="text-xs opacity-20">CARD HOLDER</div>
                <div>AKOTO MICHAEL APPIANTI</div>
              </div>
              <div className="flex space-x-2">
                <Github className="w-5 h-5 opacity-20 hover:opacity-100 cursor-pointer" />
                <Twitter className="w-5 h-5 opacity-20 hover:opacity-100 cursor-pointer" />
                <Instagram className="w-5 h-5 opacity-20 hover:opacity-100 cursor-pointer" />
                <Mail className="w-5 h-5 opacity-20 hover:opacity-100 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </a>
    </>
  );
};

export default CardEffect;
