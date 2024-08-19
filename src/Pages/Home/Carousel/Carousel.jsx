import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
// import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import image1 from "../../../assets/Carousel/young-people-london-streets11.jpg";
import image2 from "../../../assets/Carousel/young-people-london-streets22.jpg";
import image3 from "../../../assets/Carousel/outdoor-hat-lifestyle-black-girl33.jpg";
import { MyButton } from "../../Components/MyButton/MyButton";

const Carousel = () => {
  return (
    <div className=" mx-auto max-w-8xl">
      <AwesomeSlider className="rounded-lg overflow-hidden">
        <div data-src={image2} className="relative">
          <div className=" text-center mt-36">
            <div className=" text-white p-4 text-center text-5xl font-bold">
              Discover your latest <br /> collection on our shop
            </div>
            <MyButton  color="primary" size="lg" className="mt-3 mb-3">
              Explore now
            </MyButton>
          </div>
        </div>
        <div data-src={image1} className="relative">
          <div className=" text-center mt-36">
            <div className=" text-white p-4 text-center text-5xl font-bold">
              Discover your latest <br /> collection on our shop
            </div>
            <MyButton  color="primary" size="lg" className="mt-3 mb-3">
              Explore now
            </MyButton>
          </div>
        </div>
        <div data-src={image3} className="relative">
          <div className=" text-center mt-36">
            <div className=" text-white p-4 text-center text-5xl font-bold">
              Discover your latest <br /> collection on our shop
            </div>
            <MyButton  color="primary" size="lg" className="mt-3 mb-3">
              Explore now
            </MyButton>
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Carousel;
