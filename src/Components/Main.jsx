import React from "react";
import BCLogo from "../Images/BCLogo.png";
import heDidIt from "../Images/heDidIt.jpeg";
import MPG_1 from "../Images/MPG_1.jpg";
import MPG_2 from "../Images/MPG_2.jpg";

export default function About() {
  return (
    <div>
      <div className="flex flex-row md:flex-col items-center justify-center bg-black h-full p-10">
        <div className="flex flex-row items-center justify-center">
          <div className="w-1/2 h-1/2 p-5 mx-auto">
            <img
              className="object-cover border-16 border-white"
              src={BCLogo}
              alt="BC Logo"
            />
          </div>

          <div className="w-1/2 h-1/2 p-10 mx-auto" style={{ color: "#DOBD49" }}>
            <a
              className="p-0"
              href="https://www.youtube.com/watch?v=Np1iJRYXzUQ"
              title="Fox News"
              target="_blank"
            >
              <img
                src={heDidIt}
                alt="BC Field Goal"
                className="border-16 mx-auto border-white"
              />
            </a>
            <h1 className="text-white text-center text-md md:text-3xl">
              Watch Fox News Coverage
            </h1>
          </div>
        </div>

        <div className="flex flex-row items-center justify-evenly bg-black pt-30">
          <div className="w-2/3 mx-auto">
            <img
              className="border-8 border-white object-cover mx-auto w-7/8"
              src={MPG_1}
              alt="News Article"
            />
          </div>
          <div className="w-1/3 mx-auto">
            <img
              className="border-8 border-white object-cover mx-auto w-3/4"
              src={MPG_2}
              alt="News Article Continued"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
