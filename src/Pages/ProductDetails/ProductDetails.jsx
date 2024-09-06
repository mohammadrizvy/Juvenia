import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useProductDetails from "../../Hooks/useProductDetails";
import Loader from "../Components/Loader/Loader";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import { StarIcon } from "@heroicons/react/24/solid";
import { Input } from "@nextui-org/react";
import { MyButton } from "../Components/MyButton/MyButton";
import { Building2, ClipboardCheck, Truck } from "lucide-react";
import ProductAccordion from "./ProductAccordion/ProductAccordion";

const ProductDetails = () => {
  const product = useLoaderData();
 

  // if (isLoading) {
  //   return <Loader></Loader>;
  // }
  // if (error) {
  //   return <ErrorPage></ErrorPage>;
  // }

  console.log("Product data:", product);

  return (
    <div className="flex p-4">
      {/* Image */}
      <div className="w-1/2 flex justify-center items-center">
        <img
          className="w-[500px]"
          src={product.image}
          alt={product.productName}
        />
      </div>
      {/* Details */}
      <div className="w-1/2 p-4">
        {/* Reviews and ratins */}
        <div className="flex items-center mb-3 gap-2">
          <p className="text-sm flex items-center gap-1 font-bold">
            <StarIcon className="size-4 text-black" />
            {product.rating}
          </p>
          <p className="text-sm">{product?.reviews?.length || "69"} Reviews</p>
        </div>

        {/* Product details */}
        <h1 className="text-3xl font-bold">{product.productName}</h1>
        <h1 className="text-base  mt-2">{product.description}</h1>
        <p className="text-lg mt-2 font-bold">TK {product.price}</p>
        <div className="flex items-center mt-2">
          <p className="text-sm font-semibold mr-2 ">Category:</p>{" "}
          <span className="text-sm font-semibold text-gray-500">
            {product.category}
          </span>
        </div>
        <div className="flex mt-4 items-center">
          <div className=" w-[400px] mr-6">
            <Input
            defaultValue="1"
              variant="bordered"
              key="email-input"
              type="number"
              label="QTY"
              labelPlacement="outside"
              radius="none"
              description="Your Quantity"
            />
          </div>
          <MyButton color="primary" size="md" className=" text-white">
            Add to cart
          </MyButton>
        </div>
        {/* Product brand details and warrenty */}
        <div className="text-neutral-500 text-sm max-w-[540px] p-5 rounded-md mt-5 border ">
          {/* # */}
          <div className="flex items-center border-b pb-2 justify-between">
            <p className="flex items-center gap-2">
              <span>
                <Building2 size={15} />
              </span>
              <span>Brand</span>
            </p>
            <p>Gucci</p>
          </div>
          {/* # */}
          <div className="flex items-center border-b py-2 justify-between">
            <p className="flex items-center gap-2">
              <span>
                <ClipboardCheck size={15} />
              </span>
              <span>Guarantee</span>
            </p>
            <p>1 Year</p>
          </div>
          {/* # */}
          <div className="flex items-center py-2 justify-between">
            <p className="flex items-center gap-2">
              <span>
                <Truck size={15} />
              </span>
              <span>Delivary</span>
            </p>
            <p>3-7 Days</p>
          </div>
        </div>
        {/* Accordion */}
        {/* <div className="max-w-[540px]">
          <ProductAccordion></ProductAccordion>
        </div> */}
      </div>
    </div>
  );
};
export default ProductDetails;
