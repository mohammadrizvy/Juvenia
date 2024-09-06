import React from "react";
import logo1 from "../../../assets/Trusted by/15635757_5643919.jpg";
import logo2 from "../../../assets/Trusted by/20346306_v1057-logo-28.jpg";
import logo3 from "../../../assets/Trusted by/21846830_6537937.jpg";
import logo4 from "../../../assets/Trusted by/771829_6-01.jpg";
import logo5 from "../../../assets/Trusted by/771833_10-01.jpg";

const marqueeItems = [
  { src: logo1, alt: "Logo 1" },
  { src: logo2, alt: "Logo 2" },
  { src: logo3, alt: "Logo 3" },
  { src: logo4, alt: "Logo 4" },
  { src: logo5, alt: "Logo 5" },
];

export default function TrustedBy() {
  return (
    <>
      <style>
        {`
          @keyframes marquee {
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
      <div
        className="overflow-hidden w-full mb-4"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          className="flex gap-4 pr-4 w-[200%]"
          style={{
            animation: "marquee 15s linear infinite",
          }}
        >
          {[0, 1].map((index) => (
            <div key={index} className="flex flex-1 gap-4">
              {marqueeItems.map((item, index) => (
                <div key={index} className="flex-1">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-20 sm:w-24 md:w-28 lg:w-32"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
