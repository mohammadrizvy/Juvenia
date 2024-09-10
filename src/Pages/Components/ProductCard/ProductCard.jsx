import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import LazyLoad from "react-lazy-load";
import { MyButton } from "../MyButton/MyButton";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const ProductCard = ({ item, handleProductDetails, handleAddToCart }) => {
  return (
    <div key={item.id} className="card-compact h-120 w-80">
      <Tilt options={defaultOptions}>
        <figure className="h-80 overflow-hidden">
          <LazyLoad threshold={0.95}>
            <img
              onClick={() => handleProductDetails(item)}
              className="transform hover:scale-105 transition duration-300"
              src={item.imageUrl}
              alt={item.productName}
              style={{
                clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
              }}
            />
          </LazyLoad>
        </figure>
      </Tilt>
      <div className="card-body">
        <h2 className="card-title text-sm -mt-2">{item.productName}</h2>
        <p className="text-small -mt-3 ">{item.category}</p>
        <div className="flex -mt-1 items-center justify-between">
          {/* Price Section */}
          <div className="flex items-center space-x-2">
            {item.discountedPrice &&
            parseFloat(item.discountedPrice) < parseFloat(item.price) ? (
              <>
                <p className="text-sm text-gray-500 line-through">
                  {item.price} BDT
                </p>
                <p className="text-sm text-red-600 font-semibold">
                  {item.discountedPrice} BDT
                </p>
              </>
            ) : (
              <p className="text-sm text-gray-600 font-semibold">
                {item.price} BDT
              </p>
            )}
          </div>
          {/* Rating Section */}
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, index) => (
              <StarIcon
                key={index}
                className={`size-4 ${
                  index < item.rating ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
            <p className="ml-1 text-sm">({item.rating})</p>
          </div>
        </div>

        <div className="card-actions justify-center mt-4">
          <MyButton
            size="sm"
            onClick={() => handleAddToCart(item)}
            color="primary"
            className="font-semibold w-[50%]"
          >
            Add to cart
          </MyButton>
          <MyButton
            color="default"
            variant="bordered"
            size="sm"
            className="font-semibold w-[40%]"
          >
            Buy Now
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
