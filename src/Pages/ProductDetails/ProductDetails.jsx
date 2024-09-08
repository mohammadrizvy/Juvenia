import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useProductDetails from "../../Hooks/useProductDetails";
import Loader from "../Components/Loader/Loader";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import { StarIcon } from "@heroicons/react/24/solid";
import { Input } from "@nextui-org/react";
import { MyButton } from "../Components/MyButton/MyButton";
import { Building2, ClipboardCheck, Truck } from "lucide-react";
import ProductAccordion from "./ProductAccordion/ProductAccordion";
import { AuthContext } from "../../Providers/AuthProviders";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";
import ReactImageZoom from "react-image-zoom";
import ReactDOM from "react-dom";
import YouMayLike from "./YouMayLike/YouMayLike";

const ProductDetails = () => {
  const item = useLoaderData();
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  if (loading) {
    return <Loader></Loader>;
  }

  const handleAddToCart = (itemId) => {
    if (user && user.email) {
      const cartItem = {
        cartId: item._id,
        productName: item.productName,
        email: user.email,
        price: item.price,
        productImage: item.image,
        rating: item.rating,
      };
      axiosSecure
        .post("/carts", cartItem)
        .then((res) => {
          console.log("Added to the cart : ", res.data);
          toast.success("Added to the cart");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to add the item in cart");
        });
    }
    console.log(itemId);
  };

  console.log("item data:", item);

  return (
    <div className="">
      <div className="flex p-4">
        <Toaster />
        {/* Image */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            className="w-[500px]"
            src={item?.image}
            alt={item?.productName}
          />
        </div>
        {/* Details */}
        <div className="w-1/2 p-4">
          {/* Reviews and Ratings */}
          <div className="flex items-center mb-3 gap-2">
            <p className="text-sm flex items-center gap-1 font-bold">
              <StarIcon className="size-4 text-black" />
              {item?.rating}
            </p>
            <p className="text-sm">{item?.reviews?.length || "69"} Reviews</p>
          </div>

          {/* Item details */}
          <h1 className="text-3xl font-bold">{item?.productName}</h1>
          <h1 className="text-base mt-2">{item?.description}</h1>
          <p className="text-lg mt-2 font-bold">{item?.price} BDT</p>
          {/* Category */}
          <div className="flex items-center mt-2">
            <p className="text-sm font-semibold mr-2 underline">Category :</p>
            <span className="text-sm  text-gray-500">{item?.category}</span>
          </div>
          {/* Choosing the color */}
          <div className="mt-2 ">
            <p className="mb-2 font-semibold">Choose your color</p>
            <div className="mt-1 flex gap-2">
              {item?.availableColors.map((color, index) => (
                <label
                  key={index}
                  className="flex items-center text-gray-500 gap-2"
                >
                  <input
                    type="radio"
                    name="color"
                    value={color}
                    className="radio"
                    defaultChecked={index === 0} // Check the first color by default
                  />
                  <span>{color}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Choosing the SIZE */}

          <div className="mt-2">
            <p className="mb-2 font-semibold ">Size</p>
            <div className="mt-1 flex gap-3">
              {item?.availableSizes.map((size, index) => (
                <label className="flex items-center gap-3" key={index}>
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio"
                    defaultChecked={index === 0}
                  />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex mt-4 items-center">
            <div className="w-[150px] mr-6">
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
            <div className="flex w-[60%] gap-4">
              <MyButton
                size="md"
                onClick={() => handleAddToCart(item)}
                color="primary"
                className=" font-semibold w-[50%]"
              >
                Buy Now
              </MyButton>
              <MyButton
                onClick={() => handleAddToCart(item)}
                color="default"
                variant="bordered"
                size="md"
                className=" font-semibold w-[40%] "
              >
                Add to cart
              </MyButton>
            </div>
          </div>
          {/* Product brand details and warranty */}
          <div className="text-neutral-500 text-sm max-w-[540px] p-5 rounded-md mt-5 border">
            {/* # */}
            <div className="flex items-center border-b pb-2 justify-between">
              <p className="flex items-center gap-2">
                <span>
                  <Building2 size={15} />
                </span>
                <span>Brand</span>
              </p>
              <p>{item?.brand}</p>
            </div>
            {/* # */}

            {/* # */}
            <div className="flex items-center py-2 justify-between">
              <p className="flex items-center gap-2">
                <span>
                  <Truck size={15} />
                </span>
                <span>Delivery</span>
              </p>
              <p>3-7 Days</p>
            </div>
          </div>
          {/* Accordion */}
          <div className="max-w-[540px]">
            <ProductAccordion key={item._id} item={item}></ProductAccordion>
          </div>
        </div>
      </div>
      <YouMayLike key={item._id} item={item} />
    </div>
  );
};

export default ProductDetails;
