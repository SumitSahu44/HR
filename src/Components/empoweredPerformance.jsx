import React from "react";
import CommonHeading from "./CommonHeading";
import image2 from "../assets/image 2.png"; 

const EmpoweredPerformance = () => {
  return (
    <div className="mt-10 relative px-16 lg:px-32 xl:px-48">
      <CommonHeading title="Empowered Performance" />

      <div className="flex justify-center mt-12">
        <img
          src={image2}
          alt="Empowered Performance"
          className="w-full max-w-[70%] lg:max-w-3xl xl:max-w-5xl shadow-xl rounded-lg"
        />
      </div>
    </div>
  );
};

export default EmpoweredPerformance;
