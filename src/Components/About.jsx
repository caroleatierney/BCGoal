import React from "react";
import BCLogo from "../Images/BCLogo.png";

export default function About() {
  return (
    <div>

      <div>
        <div>
          <img
            className="object-cover border-4 border-darkGrayBorder mx-0"
            src={BCLogo}
            alt="BC Logo"
          />
        </div>
        <div>
          <h1>
            About me
          </h1>
          <p>
          test
          </p>
        </div>
      </div>

    </div>
  );
}
