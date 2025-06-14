import React from "react";
import BCLogo from "../Images/BCLogo.png";
import heDidIt from "../Images/heDidIt.jpeg";
import MPG_1 from "../Images/MPG_1.jpg";
import MPG_2 from "../Images/MPG_2.jpg";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="flex flex-row items-center justify-center h-screen bg-black">
        <div className="w-[800px] h-[800px] p-5 mx-auto">
          <img
            className="object-cover border-16 border-white"
            src={BCLogo}
            alt="BC Logo"
          />
        </div>

        <div
          className="w-[800px] h-[800px] p-5 mx-auto"
          style={{ color: "#DOBD49" }}
        >
          <a
            href="https://www.youtube.com/watch?v=Np1iJRYXzUQ"
            title="Fox News"
            target="_blank"
          >
            <img
              src={heDidIt}
              alt="BC Field Goal"
              className="object-cover border-16 border-white"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-screen bg-black">
        <div className="w-3/4 p-5 mx-auto">
          <img
            className="object-cover border-8 border-white"
            src={MPG_1}
            alt="xxx1"
          />
        </div>
        <div className="w-1/3 p-5 mx-auto">
          <img
            className="object-cover border-8 border-white"
            src={MPG_2}
            alt="xxx2"
          />
        </div>
      </div>
    </div>
  );
}
