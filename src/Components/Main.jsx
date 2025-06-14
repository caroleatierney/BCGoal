import React from "react";
import BCLogo from "../Images/BCLogo.png";
import heDidIt from "../Images/heDidIt.jpeg";

export default function About() {
  return (
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
  );
}
