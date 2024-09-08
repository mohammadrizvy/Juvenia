import React from "react";
import BreadcrumbComponent from "../../Shared/BreadcrumbComponent";
import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { ShoppingCartIcon, ImageIcon, TagIcon } from "lucide-react";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { MyButton } from "../../Components/MyButton/MyButton";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddItems = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [axiosSecure] = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
      const response = await axiosSecure.post("/allCollections", {
        ...data,
        price: parseFloat(data.price),
        rating: parseFloat(data.rating),
        image: data.imageUrl, // Renaming the imageUrl field to image to match your MongoDB schema
        stock: parseInt(data.stock),
        discount: data.discount,
        discountedPrice: parseFloat(data.discountedPrice),
        brand: data.brand,
        isAvailable: data.isAvailable === "true", // Converting string to boolean
        availableColors: data.availableColors.split(","), // Converting comma-separated string to an array
        availableSizes: data.availableSizes.split(","), // Converting comma-separated string to an array
        recommendedProducts: data.recommendedProducts.split(","), // Converting comma-separated string to an array
      });
      console.log("Product added successfully:", response.data);
      toast.success("Product added successfully");
      reset();
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Error adding product");
    }
  };

  return (
    <div>
      <BreadcrumbComponent />
      <div className="flex justify-center items-center mt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full bg-base-300 p-20 rounded-2xl shadow-md max-w-3xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Product Name */}
            <div className="w-full mx-auto">
              <Input
                type="text"
                label="Product Name"
                placeholder="e.g., Cool Leather Jacket"
                labelPlacement="outside"
                startContent={
                  <TagIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                {...register("productName", {
                  // required: "Product Name is required",
                })}
              />
              {errors.productName && (
                <p className="text-red-500">{errors.productName.message}</p>
              )}
            </div>

            {/* Category */}
            <div className="w-full mx-auto">
              <Input
                type="text"
                label="Select category"
                placeholder="e.g., Men, Women"
                labelPlacement="outside"
                startContent={
                  <ShoppingCartIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                {...register("category", {
                  // // required: "Category is required",
                })}
              />
              {errors.category && (
                <p className="text-red-500">{errors.category.message}</p>
              )}
            </div>

            {/* Description */}
            <div className="w-full mx-auto">
              <Input
                type="text"
                label="Description"
                placeholder="e.g., Trendy leather jacket with hood"
                labelPlacement="outside"
                {...register("description")}
              />
            </div>

            {/* Price */}
            <div className="w-full mx-auto">
              <Input
                type="number"
                label="Price"
                placeholder="e.g., 2000"
                labelPlacement="outside"
                startContent={
                  <HiOutlineCurrencyBangladeshi className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                {...register("price", {
                  // // required: "Price is required",
                })}
              />
              {errors.price && (
                <p className="text-red-500">{errors.price.message}</p>
              )}
            </div>

            {/* Discount */}
            <div className="w-full mx-auto">
              <Input
              defaultValue="0%"
                type="text"
                label="Discount"
                placeholder="e.g., 10%"
                labelPlacement="outside"
                {...register("discount")}
              />
            </div>

            {/* Discounted Price */}
            <div className="w-full mx-auto">
              <Input
              defaultValue=""
                type="number"
                label="Discounted Price"
                placeholder="e.g., 1800"
                labelPlacement="outside"
                {...register("discountedPrice")}
              />
            </div>

            {/* Rating */}
            <div className="w-full mx-auto">
              <Input
                type="number"
                label="Rating"
                placeholder="e.g., 4.6"
                labelPlacement="outside"
                {...register("rating", {
                  // // required: "Rating is required",
                })}
              />
              {errors.rating && (
                <p className="text-red-500">{errors.rating.message}</p>
              )}
            </div>

            {/* Image URL */}
            <div className="w-full mx-auto">
              <Input
                type="url"
                label="Image URL"
                placeholder="e.g., https://example.com/image.jpg"
                labelPlacement="outside"
                startContent={
                  <ImageIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                {...register("imageUrl", {
                  // // required: "Image URL is required",
                })}
              />
              {errors.imageUrl && (
                <p className="text-red-500">{errors.imageUrl.message}</p>
              )}
            </div>

            {/* Brand */}
            <div className="w-full mx-auto">
              <Input
                defaultValue="Juvenia"
                type="text"
                label="Brand"
                placeholder="e.g., Gucci"
                labelPlacement="outside"
                {...register("brand")}
              />
            </div>

            {/* Is Available */}
            <div className="w-full mx-auto">
              <Input
                defaultValue="true"
                type="text"
                label="Is Available"
                placeholder="true or false"
                labelPlacement="outside"
                {...register("isAvailable")}
              />
            </div>

            {/* Stock */}
            <div className="w-full mx-auto">
              <Input
                type="number"
                label="Stock"
                placeholder="e.g., 50"
                labelPlacement="outside"
                {...register("stock")}
              />
            </div>

            {/* Available Colors */}
            <div className="w-full mx-auto">
              <Input
              defaultValue="Black,Brown"
                type="text"
                label="Available Colors"
                placeholder="e.g., Red, Blue, Green"
                labelPlacement="outside"
                {...register("availableColors", {
                  // // required: "Available Colors are required",
                })}
              />
              {errors.availableColors && (
                <p className="text-red-500">{errors.availableColors.message}</p>
              )}
            </div>

            {/* Available Sizes */}
            <div className="w-full mx-auto">
              <Input
                defaultValue="M,L,XL,XXL"
                type="text"
                label="Available Sizes"
                placeholder="e.g.,M,L,XL,XXL"
                labelPlacement="outside"
                {...register("availableSizes", {
                  // // required: "Available Sizes are required",
                })}
              />
              {errors.availableSizes && (
                <p className="text-red-500">{errors.availableSizes.message}</p>
              )}
            </div>

            {/* Recommended Products */}
            <div className="w-full mx-auto">
              <Input
                type="text"
                label="Recommended Products"
                placeholder="e.g., product_id1, product_id2, product_id3"
                labelPlacement="outside"
                {...register("recommendedProducts", {
                  // // required: "Recommended Products are required",
                })}
              />
              {errors.recommendedProducts && (
                <p className="text-red-500">
                  {errors.recommendedProducts.message}
                </p>
              )}
            </div>
          </div>

          {/* File Upload */}
          <div className="w-2/4 mx-auto mt-4 pb-4">
            <label className="mb-1 text-sm text-center">Upload Image</label>
            <input
              type="file"
              // {...register("file")}
              className="border bg-white rounded-lg p-2 w-full flex justify-center"
            />
          </div>

          <div className="mt-4 flex justify-center">
            <MyButton color="primary" size="md" type="submit">
              Submit
            </MyButton>
          </div>
          <p className="mt-4">
            NOTE : <br /> 1. Before adding products you must know there are 3
            categories they are "Popular", "Men", "Women". <br />
            2. Add price like this: 1700, 200, 8000{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
