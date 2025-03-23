import React from "react";

const logos = [
  { src: "/path-to-xlri-logo.png", alt: "XLRI Jamshedpur" },
  { src: "/path-to-conference-board-logo.png", alt: "The Conference Board" },
  { src: "/path-to-iit-roorkee-logo.png", alt: "IIT Roorkee" },
  { src: "/path-to-mdi-logo.png", alt: "MDI Gurgaon" },
  { src: "/path-to-imd-logo.png", alt: "IMD" },
  { src: "/path-to-isb-logo.png", alt: "ISB" },
  { src: "/path-to-stanford-logo.png", alt: "Stanford" },
  { src: "/path-to-ashridge-logo.png", alt: "Ashridge" },
  { src: "/path-to-iim-calcutta-logo.png", alt: "IIM Calcutta" },
  { src: "/path-to-other-logo.png", alt: "Other Institute" },
];

const LogoGrid = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <img src={logo.src} alt={logo.alt} className="h-24 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;
