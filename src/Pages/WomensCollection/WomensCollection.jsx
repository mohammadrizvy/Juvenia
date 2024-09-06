import React, { useContext, useState } from "react";
import CollectionsHeader from "../Components/CollectionsHeader/CollectionsHeader";
import { StarIcon } from "@heroicons/react/24/solid";
import PaginationButton from "../Components/Pagination/PaginationButton/PaginationButton";
import { Helmet } from "react-helmet-async";
import { MyButton } from "../Components/MyButton/MyButton";
import Loader from "../Components/Loader/Loader";
import { Skeleton } from "@nextui-org/react";
import useCart from "../../Hooks/useCart";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import AuthModal from "../authModal/AuthModal";
import LazyLoad from "react-lazy-load";
import useCollection from "../../Hooks/useCollection";
import ProductCard from "../Components/ProductCard/ProductCard";

const WomensCollection = () => {
  const { data: collection = [], refacth, isLoading } = useCollection();
  const womensItem = collection.filter((item) => item.category === "Women");
  const [isModalOpen, setModalOpen] = useState(false);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { refetch } = useCart();

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
            refetch();
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

  if (isLoading) {
    return <Loader />;
  }

  const handleProductDetails = (item) => {
    navigate(`/product-details/${item._id}`);
  };

  return (
    <div>
      <Helmet>
        <title>Juvénia | Women's Collection</title>
      </Helmet>
      {/* Header */}
      <div className="my-12">
        <CollectionsHeader
          title={"Women's Best Sellers"}
          link={"/"}
          button={"Home"}
        />
      </div>
      <Toaster position="top-right"></Toaster>
      {/* All Womens collections */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mb-1 items-center justify-center">
        {womensItem.map((item) => (
          <ProductCard
          key={item._id}
          item={item}
          handleAddToCart={handleAddToCart}
          handleProductDetails={handleProductDetails}
          ></ProductCard>
        ))}
        <AuthModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
      <PaginationButton />
    </div>
  );
};

export default WomensCollection;
