import React from "react";
import BreadcrumbComponent from "../../Shared/BreadcrumbComponent";
import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { ShoppingCart, ImageIcon, TagIcon } from "lucide-react";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { MyButton } from "../../Components/MyButton/MyButton";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [axiosSecure] = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
      const response = await axiosSecure.post("/allCollections", {
        ...data,
        image: data.imageUrl // Renaming the imageUrl field to image to match your MongoDB schema
      });
      console.log("Product added successfully:", response.data);
      toast.success("Product added successfully")
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Error adding product")
    }
  };

  return (
    <div>
      <BreadcrumbComponent />
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Product Name */}
            <div className="w-[100%] mx-auto">
              <Input
                type="text"
                label="Product Name"
                placeholder="e.g., Cool Leather Jacket"
                labelPlacement="outside"
                startContent={
                  <TagIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                {...register("productName", {
                  required: "Product Name is required",
                })}
              />
              {errors.productName && (
                <p className="text-red-500">{errors.productName.message}</p>
              )}
            </div>

            {/* Category */}
            <div className="w-[100%] mx-auto">
              <Input
                type="text"
                label="Category"
                placeholder="e.g., Men, Women"
                labelPlacement="outside"
                startContent={
                  <ShoppingCart className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                {...register("category")}
              />
            </div>

            {/* Description */}
            <div className="w-[100%] mx-auto">
              <Input
                type="text"
                label="Description"
                placeholder="e.g., Trendy leather jacket with hood"
                labelPlacement="outside"
                {...register("description")}
              />
            </div>

            {/* Price */}
            <div className="w-[100%] mx-auto">
              <Input
                type="number"
                label="Price"
                placeholder="e.g., 199.99"
                labelPlacement="outside"
                startContent={
                  <HiOutlineCurrencyBangladeshi className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                {...register("price")}
              />
            </div>

            {/* Rating */}
            <div className="w-[100%] mx-auto">
              <Input
                type="number"
                label="Rating"
                placeholder="e.g., 4.6"
                labelPlacement="outside"
                {...register("rating")}
              />
            </div>

            {/* Image URL */}
            <div className="w-[100%] mx-auto">
              <Input
                type="url"
                label="Image URL"
                placeholder="e.g., https://example.com/image.jpg"
                labelPlacement="outside"
                startContent={
                  <ImageIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                {...register("imageUrl")}
              />
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <MyButton
              color="primary"
              size="md"
              type="submit"
            >
              Submit
            </MyButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;



//  {/* File Upload */}
//  <div className="w-[100%] mx-auto">
//  <label className="mb-1 text-sm font-medium">Upload Image</label>
//  <input
//    type="file"
//    {...register("file")}
//    className="border border-gray-300 rounded-lg p-2 w-full"
//  />
// </div>

// TODO : Impliment File Upload / Image Upload 