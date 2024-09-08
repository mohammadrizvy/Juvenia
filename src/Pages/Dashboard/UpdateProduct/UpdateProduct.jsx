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
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      productName: "",
      category: "",
      description: "",
      price: "",
      rating: "",
      imageUrl: "",
      discount: "0%", // Default discount is 0%
      discountedPrice: "",
    },
  });

  // Watch for changes in price and discount
  const price = watch("price");
  const discount = watch("discount");

  // Update form values when product data is available
  useEffect(() => {
    if (product) {
      reset({
        productName: product.productName,
        category: product.category,
        description: product.description,
        price: product.price,
        rating: product.rating,
        imageUrl: product.imageUrl,
        discount: product.discount || "0%",
        discountedPrice: product.discountedPrice || "",
        brand: product.brand || "Juvenia",
        isAvailable: product.isAvailable?.toString() || "true",
        stock: product.stock || "",
        availableColors: product.availableColors || "Black,Brown",
        availableSizes: product.availableSizes || "M,L,XL,XXL",
        recommendedProducts: product.recommendedProducts || "",
      });
    }
  }, [product, reset]);

  // Automatically calculate discounted price whenever price or discount changes
  useEffect(() => {
    const discountPercentage = parseFloat(discount) || 0;
    const originalPrice = parseFloat(price) || 0;
    if (
      discountPercentage > 0 &&
      discountPercentage <= 100 &&
      originalPrice > 0
    ) {
      const discountedPrice =
        originalPrice - (originalPrice * discountPercentage) / 100;
      setValue("discountedPrice", discountedPrice); // Set the discounted price
    } else {
      setValue("discountedPrice", ""); // Clear the discounted price if conditions are not met
    }
  }, [discount, price, setValue]);

  const onSubmit = async (data) => {
    try {
      const response = await axiosSecure.put(
        `/allCollections/update-product/${product._id}`,
        data
      );
      if (response.status === 200) {
        toast.success("Product updated successfully");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Error updating product");
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

              {/* Discount */}
              <div className="w-full mx-auto">
                <Input
                  type="text"
                  label="Discount"
                  placeholder="e.g., 10%"
                  labelPlacement="outside"
                  {...register("discount", {
                    validate: (value) => {
                      const discountValue = parseFloat(
                        value.replace("%", "").trim()
                      );
                      return !isNaN(discountValue) &&
                        discountValue >= 0 &&
                        discountValue <= 100
                        ? true
                        : "Discount must be a valid percentage between 0% and 100%";
                    },
                  })}
                />
                {errors.discount && (
                  <p className="text-red-500">{errors.discount.message}</p>
                )}
              </div>

              {/* Discounted Price */}
              <div className="w-full mx-auto">
                <Input
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
                  {...register("stock", { required: "Stock is required" })}
                />
                {errors.stock && (
                  <p className="text-red-500">{errors.stock.message}</p>
                )}
              </div>

              {/* Available Colors */}
              <div className="w-full mx-auto">
                <Input
                  defaultValue="Black,Brown"
                  type="text"
                  label="Available Colors"
                  placeholder="e.g., Red, Blue, Black"
                  labelPlacement="outside"
                  {...register("availableColors")}
                />
              </div>

              {/* Available Sizes */}
              <div className="w-full mx-auto">
                <Input
                  defaultValue="M,L,XL,XXL"
                  type="text"
                  label="Available Sizes"
                  placeholder="e.g., M, L, XL"
                  labelPlacement="outside"
                  {...register("availableSizes")}
                />
              </div>

              {/* Recommended Products */}
              <div className="w-full mx-auto">
                <Input
                  type="text"
                  label="Recommended Products"
                  placeholder="e.g., Product1, Product2"
                  labelPlacement="outside"
                  {...register("recommendedProducts")}
                />
              </div>
            </div>

            <div className="w-full mx-auto mt-6 flex justify-center gap-3">
              <MyButton color="primary" size="md" type="submit">Update</MyButton>
              <MyButton className="border-none" size="md" color="secondary" variant="bordered" type="reset">
                Reset
              </MyButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
