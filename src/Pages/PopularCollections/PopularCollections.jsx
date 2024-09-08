import React, { useContext, useState } from "react";
import CollectionsHeader from "../Components/CollectionsHeader/CollectionsHeader";
import { StarIcon } from "@heroicons/react/24/solid";
import { MyButton } from "../Components/MyButton/MyButton";
import useCollection from "../../Hooks/useCollection";
import { AuthContext } from "../../Providers/AuthProviders";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AuthModal from "../authModal/AuthModal";
import LazyLoad from "react-lazy-load";
import ProductCard from "../Components/ProductCard/ProductCard";

const PopularCollections = () => {
  const { data: collection = [], refacth, isLoading } = useCollection();
  const { user } = useContext(AuthContext);
  const popularItems = collection.filter((item) => item.category === "Popular");
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  // console.log(popularItems);

  const handleAddToCart = (item) => {
    if (user && user.email) {
      const cartItem = {
        cartId: item._id,
        productName: item.productName,
        email: user.email,
        price: item.price,
        productImage: item.image,
        rating: item.rating,
      };

      fetch("http://localhost:7000/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Item added to cart");
          } else {
            Swal.fire({
              title: "Login required",
              text: "You need to login first to add item",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Login now",
            }).then((result) => {
              if (result.isConfirmed) {
                setModalOpen(true); // Show the modal
              }
            });
          }
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
          toast.error("Failed to add item to cart");
        });

      console.log(cartItem);
    } else {
      Swal.fire({
        title: "Login required",
        text: "You need to login first to add item",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          setModalOpen(true); // Show the modal
        }
      });
    }
  };

  const handleProductDetails = (item) => {
    navigate(`/product-details/${item._id}`);
  };

  return (
    <div>
      <CollectionsHeader
        title={
          <>
            Our Best <br /> Popular Collections item
          </>
        }
        button={"Create an account"}
      />
      <Toaster position="top-right" reverseOrder={false} />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10  mt-20 items-center justify-center ">
        {popularItems.slice(0, 8).map((item) => (
          <ProductCard
            key={item._id}
            item={item}
            handleAddToCart={handleAddToCart}
            handleProductDetails={handleProductDetails}
          ></ProductCard>
        ))}
        <AuthModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </div>
  );
};

export default PopularCollections;
