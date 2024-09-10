import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CollectionsHeader from "../../Components/CollectionsHeader/CollectionsHeader";
import useCollection from "../../../Hooks/useCollection";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProviders";
import toast from "react-hot-toast";

const HotDeals = () => {
  const { data: products = [], isLoading } = useCollection();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Filter products with a discounted price
  const discountedProducts = products.filter(
    (product) => parseFloat(product.discountedPrice) < parseFloat(product.price)
  );

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
            showLoginAlert();
          }
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
          toast.error("Failed to add item to cart");
        });
    } else {
      showLoginAlert();
    }
  };

  const showLoginAlert = () => {
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
        // Assume you have a modal state function
        setModalOpen(true); // Show the login modal
      }
    });
  };

  const handleProductDetails = (item) => {
    navigate(`/product-details/${item._id}`);
  };

  return (
    <div className="my-10">
      
      <CollectionsHeader title={"Hot Deals"} button={"Explore more"} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-20">
          {discountedProducts.map((item) => (
            <ProductCard
              key={item._id}
              item={item}
              handleProductDetails={handleProductDetails}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HotDeals;
