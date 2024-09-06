import React from "react";
import logo1 from "../../../assets/Trusted by/15635757_5643919.jpg";
import logo2 from "../../../assets/Trusted by/20346306_v1057-logo-28.jpg";
import logo3 from "../../../assets/Trusted by/21846830_6537937.jpg";
import logo4 from "../../../assets/Trusted by/771829_6-01.jpg";
import logo5 from "../../../assets/Trusted by/771833_10-01.jpg";

const TrustedBy = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 py-6 sm:py-8 md:py-10">
      <img src={logo1} alt="Gucci" className="w-20 sm:w-24 md:w-28 lg:w-32" />
      <img
        src={logo2}
        alt="Company 2"
        className="w-20 sm:w-24 md:w-28 lg:w-32"
      />
      <img
        src={logo3}
        alt="Company 3"
        className="w-20 sm:w-24 md:w-28 lg:w-32"
      />
      <img
        src={logo4}
        alt="Company 4"
      className="w-20 sm:w-24 md:w-28 lg:w-32"
      />
      <img
        src={logo5}
        alt="Company 5"
        className="w-20 sm:w-24 md:w-28 lg:w-32"
      />
    </div>
  );
};

export default TrustedBy;
