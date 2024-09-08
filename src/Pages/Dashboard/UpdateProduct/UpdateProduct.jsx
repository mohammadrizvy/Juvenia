import React, { useEffect } from "react";
import BreadcrumbComponent from "../../Shared/BreadcrumbComponent";
import { ImageIcon, ShoppingCartIcon, TagIcon } from "lucide-react";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { MyButton } from "../../Components/MyButton/MyButton";
import { useLoaderData, useNavigate } from "react-router-dom";
import CollectionsHeader from "../../Components/CollectionsHeader/CollectionsHeader";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const UpdateProduct = () => {
  const product = useLoaderData();
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      productName: product.productName,
      category: product.category,
      description: product.description,
      price: product.price,
      rating: product.rating,
      imageUrl: product.imageUrl,
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await axiosSecure.put(
        `/allCollections/update-product/${product._id}`,
        data
      );
      if (response.status === 200) {
        toast.success("Product updated successfully");
        navigate("/dashboard/manage-products"); // Redirect after successful update
      }
    } catch (error) {
      // toast.error("Error updating product");
      console.error("Error updating product:", error);
    }
  };


  return (
    <div>
      <BreadcrumbComponent />
      <div className="mt-10">
        <CollectionsHeader
          title={"Update product info"}
          button={"Manage Product item"}
        />
        <div className="flex justify-center items-center mt-10 ">
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
                    required: "Product Name is required",
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
                    required: "Category is required",
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
                    required: "Price is required",
                  })}
                />
                {errors.price && (
                  <p className="text-red-500">{errors.price.message}</p>
                )}
              </div>

              {/* Rating */}
              <div className="w-full mx-auto">
                <Input
                  type="number"
                  label="Rating"
                  placeholder="e.g., 4.6"
                  labelPlacement="outside"
                  {...register("rating", {
                    required: "Rating is required",
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
                    required: "Image URL is required",
                  })}
                />
                {errors.imageUrl && (
                  <p className="text-red-500">{errors.imageUrl.message}</p>
                )}
              </div>
            </div>
            {/* File Upload */}
            <div className="w-2/4 mx-auto mt-4 pb-4">
              <label className="mb-1 text-sm text-center">Upload Image</label>
              <input
                type="file"
                {...register("file")}
                className="border bg-white rounded-lg p-2 w-full flex justify-center"
              />
            </div>

            <div className="mt-4 flex justify-center">
              <MyButton color="primary" size="md" type="submit">
                Submit
              </MyButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
