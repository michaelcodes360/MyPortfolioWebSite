import { Link } from "react-router-dom";

const CardEffect = () => {
  return (
    <>
      <Link to="/myworld" className="hover-3d my-12 mx-2 cursor-pointer">
        {/* content */}
        <div className="card w-96 bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
          <div className="card-body">
            <div className="flex justify-between mb-10">
              <div className="font-bold">FRONEND DEVELOPER</div>
              <div className="text-5xl opacity-10">❁</div>
            </div>
            <div className="text-lg mb-4 opacity-40">0559001210</div>
            <div className="flex justify-between">
              <div>
                <div className="text-xs opacity-20">MY BUSINESS CARD</div>
                <div>AKOTO MICHAEL APPIANTI</div>
              </div>
              <div>
                <div className="text-xs opacity-20">EXPIRES</div>
                <div>NULL</div>
              </div>
            </div>
          </div>
        </div>

        {/* 8 empty divs needed for the 3D effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Link>
    </>
  );
};

export default CardEffect;
