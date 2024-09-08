import React from "react";
import CollectionsHeader from "../../Components/CollectionsHeader/CollectionsHeader";
import useCollection from "../../../Hooks/useCollection";
import ProductCard from "../../Components/ProductCard/ProductCard";

const HotDeals = () => {
  const { data: products = [], isLoading } = useCollection();

  // Filter products with discounted price
  const discountedProducts = products.filter(
    (product) => parseFloat(product.discountedPrice) < parseFloat(product.price)
  );

  console.log("Discounted Products:", discountedProducts);

  return (
    <div className="my-10">
      <CollectionsHeader title={"Hot Deals"} button={"Explore more"} />
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10 my-20">
        {discountedProducts.map((item) => (
          <ProductCard
            key={item._id}
            item={item}
            handleProductDetails={() => {}}
            handleAddToCart={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default HotDeals;
