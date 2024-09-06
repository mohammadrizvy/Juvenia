import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import image1 from "../../../assets/Banner/banner1.jpeg";
import image2 from "../../../assets/Banner/banner2-ezgif.com-webp-to-jpg-converter.jpg";
import { MyButton } from "../../Components/MyButton/MyButton";

const Banner = () => {
  return (
    <div className="mt-10 px-4 md:px-8 lg:px-16">
      <h1 className="text-center font-semibold text-3xl md:text-4xl lg:text-5xl">
        Upgrade Your Wardrobe With Our <br className="hidden md:block" /> Fresh
        Take On Street Fashion
      </h1>
      {/* Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  justify-center gap-8 mt-12 mb-20">
        {/* Card 1 */}
        <div
          className="relative h-60 md:h-72 w-full bg-cover bg-center text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url(${image1})`,
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-50 rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold">
              Chic Streetwear
            </h2>
            <p className="mt-auto text-sm md:text-base">
              Discover the perfect blend of comfort and trendsetting fashion
              with our collection.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div
          className="relative h-60 md:h-72 w-full bg-cover bg-center text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url(${image2})`,
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 p-4  bg-opacity-50 rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold">
              Urban Elegance
            </h2>
            <p className="mt-auto text-sm md:text-base">
              Dive into the latest trends with our curated selection of street
              fashion essentials.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col justify-center lg:items-start md:items-center">
          <p className="mb-3 text-sm md:text-base">
            Stay on top of the streetwear trends with our new collection.
            Featuring a range of must-have pieces,
            from stylish sneakers to
            statement jackets.
          </p>
          <MyButton color="default" size="md" className="mt-4 mb-3">
            Explore now <ArrowLongRightIcon className="w-6 h-6 text-black" />
          </MyButton>
          <MyButton color="primary" size="md" className="mt-4 text-white">
            Create an account
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
