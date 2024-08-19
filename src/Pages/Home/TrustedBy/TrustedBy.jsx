import React from 'react';
import logo1 from "../../../assets/Trusted by/15635757_5643919.jpg"
import logo2 from "../../../assets/Trusted by/20346306_v1057-logo-28.jpg"
import logo3 from "../../../assets/Trusted by/21846830_6537937.jpg"
import logo4 from "../../../assets/Trusted by/771829_6-01.jpg"
import logo5 from "../../../assets/Trusted by/771833_10-01.jpg";

const TrustedBy = () => {
    return (
      <div className="flex justify-center items-center space-x-16 ">
        <img src={logo1} alt="Gucci" className="w-[13%]" />
        <img src={logo2} alt="Company 2" className="w-[13%]" />
        <img src={logo3} alt="Company 3" className="w-[13%]" />
        <img src={logo4} alt="Company 4" className="w-[13%]" />
        <img src={logo5} alt="Company 5" className="w-[13%]" />
      </div>
    );
};

export default TrustedBy;