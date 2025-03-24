import React from "react";
import CommonHeading from "./CommonHeading";
import image95 from "../assets/image 95.png"; 

const TeamSolutions = () => {
  return (
    <div className="mt-10 relative px-16 lg:px-32 xl:px-48">
      <CommonHeading title="Team Solutions" />

      <p className="text-center text-gray-800 max-w-4xl mx-auto mt-6 text-xl lg:text-2xl leading-relaxed">
        Team solutions is a quick, time-bound, and proven approach for team building and decision-making 
        with collective learning and execution effectiveness aided by experts and experienced coaches. 
        The process benefits individuals, teams, and organizations by building team synergies.
      </p>

      <div className="flex justify-center mt-12">
        <img
          src={image95}
          alt="Team Solutions"
          className="w-full max-w-[70%] lg:max-w-3xl xl:max-w-5xl shadow-xl rounded-lg"
        />
      </div>
    </div>
  );
};

export default TeamSolutions;
